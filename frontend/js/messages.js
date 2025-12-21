const BACKEND_URL = 'https://mission-code-at-4-backend.onrender.com'; 

document.addEventListener('DOMContentLoaded', function() {
    const messagesList = document.getElementById('messagesList');
    const messageCount = document.getElementById('messageCount');
    const noMessages = document.getElementById('noMessages');
    const searchInput = document.getElementById('searchInput');
    const refreshBtn = document.getElementById('refreshBtn');
    const deleteAllBtn = document.getElementById('deleteAllBtn');
    
    let messages = [];
    
    // Load messages on page load
    loadMessages();
    
    // Refresh button click
    if (refreshBtn) {
        refreshBtn.addEventListener('click', loadMessages);
    }
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            filterMessages(e.target.value.toLowerCase());
        });
    }
    
    // Load messages from backend
    async function loadMessages() {
        try {
            showLoading();
            
            const response = await fetch(
                "https://mission-code-at-4-backend.onrender.com/admin/messages"

            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            messages = Array.isArray(data) ? data : [];
            
            if (messages.length === 0) {
                showNoMessages();
            } else {
                displayMessages(messages);
                updateMessageCount(messages.length);
                deleteAllBtn.style.display = 'block';
            }
        } catch (error) {
            console.error('Error loading messages:', error);
            showError('Failed to load messages. Please try again.');
        }
    }
    
    // Display messages in the list
    function displayMessages(messagesArray) {
        messagesList.innerHTML = '';
        
        messagesArray.forEach((message, index) => {
            const messageDate = new Date(message.createdAt || Date.now());
            const formattedDate = messageDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const firstLetter = message.name ? message.name.charAt(0).toUpperCase() : 'U';
            
            const messageElement = document.createElement('div');
            messageElement.className = 'message-item';
            messageElement.innerHTML = `
                <div class="message-header">
                    <div class="message-sender">
                        <div class="sender-avatar">${firstLetter}</div>
                        <div class="sender-info">
                            <h4>${message.name || 'Anonymous'}</h4>
                            <p>${message.email || 'No email provided'}</p>
                        </div>
                    </div>
                    <div class="message-time">${formattedDate}</div>
                </div>
                <div class="message-content">
                    ${message.message || 'No message content'}
                </div>
                <div class="message-actions">
                    <button class="reply-btn" onclick="replyToMessage('${message.email}', '${message.name}')">
                        <i class="fas fa-reply"></i> Reply
                    </button>
                    <button class="delete-btn" onclick="deleteMessage('${message._id}', this)">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            `;
            
            messagesList.appendChild(messageElement);
        });
    }
    
    // Filter messages based on search input
    function filterMessages(searchTerm) {
        if (!searchTerm) {
            displayMessages(messages);
            return;
        }
        
        const filteredMessages = messages.filter(message => {
            return (
                (message.name && message.name.toLowerCase().includes(searchTerm)) ||
                (message.email && message.email.toLowerCase().includes(searchTerm)) ||
                (message.message && message.message.toLowerCase().includes(searchTerm))
            );
        });
        
        if (filteredMessages.length === 0) {
            messagesList.innerHTML = '<div class="no-results">No messages found matching your search.</div>';
            messageCount.textContent = '0';
        } else {
            displayMessages(filteredMessages);
            updateMessageCount(filteredMessages.length);
        }
    }
    
    // Update message count display
    function updateMessageCount(count) {
        if (messageCount) {
            messageCount.textContent = count;
        }
    }
    
    // Show loading spinner
    function showLoading() {
        messagesList.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <p>Loading messages...</p>
            </div>
        `;
        noMessages.style.display = 'none';
    }
    
    // Show no messages state
    function showNoMessages() {
        messagesList.innerHTML = '';
        noMessages.style.display = 'block';
        messageCount.textContent = '0';
        deleteAllBtn.style.display = 'none';
    }
    
    // Show error message
    function showError(message) {
        messagesList.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>${message}</p>
            </div>
        `;
    }
    
    // Delete a message
    async function deleteMessage(messageId, button) {
        if (!confirm('Are you sure you want to delete this message?')) {
            return;
        }
        
        try {
            // Disable the delete button
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Deleting...';
            
           
            messages = messages.filter(msg => msg._id !== messageId);
            
            // Remove the message element from DOM
            button.closest('.message-item').remove();
            
            updateMessageCount(messages.length);
            
            if (messages.length === 0) {
                showNoMessages();
            }
            
            // Show success message (temporary)
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Deleted';
            button.style.background = '#2ecc71';
            button.style.color = 'white';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
                button.style.color = '';
            }, 2000);
            
        } catch (error) {
            console.error('Error deleting message:', error);
            alert('Failed to delete message. Please try again.');
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-trash"></i> Delete';
        }
    }
    
    // Reply to message (opens email client)
    window.replyToMessage = function(email, name) {
        if (email) {
            window.location.href = `mailto:${email}?subject=Re: Your Message from Portfolio&body=Dear ${name},\n\nThank you for your message.`;
        } else {
            alert('No email address provided by this user.');
        }
    };
    
    // Delete all messages
    if (deleteAllBtn) {
        deleteAllBtn.addEventListener('click', function() {
            if (messages.length === 0) return;
            
            if (!confirm(`Are you sure you want to delete all ${messages.length} messages? This action cannot be undone.`)) {
                return;
            }
            
           
            messages = [];
            showNoMessages();
            
            // Show success message
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> All Messages Deleted';
            this.style.background = '#2ecc71';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
            }, 3000);
        });
    }
});