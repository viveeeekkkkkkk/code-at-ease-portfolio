
const vivekLinks = {
    // Personal Info
    name: "Vivek Sharma",
    role: "Full Stack Developer",
    email: "codes.viveksharma@gmail.com",
    phone: "+917006356523",
    location: "Asansol, West Bengal, India",
    
    // Social Media
    social: {
        github: "https://github.com/codes-viveksharma",
        linkedin: "https://www.linkedin.com/in/viveksharma262005/",
        twitter: "https://x.com/",
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/"
    },
    
    // Projects
    projects: {
        ecommerce: {
            name: "E-commerce Platform",
            github: "https://github.com/codes-viveksharma/ecommerce-platform",
            liveDemo: "https://ecommerce-demo.viveksharma.com"
        },
        taskManager: {
            name: "Task Manager App",
            github: "https://github.com/codes-viveksharma/task-manager",
            liveDemo: "https://taskmanager.viveksharma.com"
        },
        weatherApp: {
            name: "Weather Dashboard",
            github: "https://github.com/codes-viveksharma/weather-dashboard",
            liveDemo: "https://weather.viveksharma.com"
        }
    },
    
   
    cv: "#" 
};


window.vivekLinks = vivekLinks;


document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    
    document.querySelectorAll('[data-social="github"]').forEach(link => {
        link.href = vivekLinks.social.github;
    });
    document.querySelectorAll('[data-social="linkedin"]').forEach(link => {
        link.href = vivekLinks.social.linkedin;
    });
 
});