// Tab switching functionality
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked tab button
    event.target.classList.add('active');
}

// Filter tools functionality
function filterTools(category) {
    const tools = document.querySelectorAll('.tool-card');
    const filterTabs = document.querySelectorAll('.filter-tab');

    // Remove active class from all filter tabs
    filterTabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to clicked tab
    event.target.classList.add('active');

    // Show/hide tools based on category
    tools.forEach(tool => {
        if (category === 'all' || tool.dataset.category === category) {
            tool.style.display = 'flex';
            tool.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            tool.style.display = 'none';
        }
    });
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchTools');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const tools = document.querySelectorAll('.tool-card');

            tools.forEach(tool => {
                const toolName = tool.querySelector('h4').textContent.toLowerCase();
                const toolDesc = tool.querySelector('p').textContent.toLowerCase();
                
                if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
                    tool.style.display = 'flex';
                    tool.style.animation = 'fadeInUp 0.3s ease forwards';
                } else {
                    tool.style.display = 'none';
                }
            });
        });
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});

// Interactive animations for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.course-card, .tool-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Course button interactions
document.addEventListener('DOMContentLoaded', function() {
    const courseButtons = document.querySelectorAll('.course-button');
    
    courseButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
            
            // Here you would typically handle the course enrollment
            console.log('Course button clicked:', this.closest('.course-card').querySelector('h3').textContent);
        });
    });
});

// Tool card click interactions
document.addEventListener('DOMContentLoaded', function() {
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        card.addEventListener('click', function() {
            const toolName = this.querySelector('h4').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 150);
            
            // Here you would typically open the tool or redirect to it
            console.log('Tool clicked:', toolName);
            
            // You could add a modal or redirect logic here
            // For example: window.open('https://example.com/' + toolName.toLowerCase().replace(' ', ''));
        });
        
        // Add cursor pointer
        card.style.cursor = 'pointer';
    });
});

// Loading animation for dynamic content
function showLoading(element) {
    element.classList.add('loading');
    element.innerHTML = '<div style="text-align: center; padding: 2rem;">Loading...</div>';
}

function hideLoading(element, content) {
    element.classList.remove('loading');
    element.innerHTML = content;
}

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const animatedElements = document.querySelectorAll('.course-card, .tool-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// Performance optimization - Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchTools');
    
    if (searchInput) {
        const debouncedSearch = debounce(function(searchTerm) {
            const tools = document.querySelectorAll('.tool-card');
            
            tools.forEach(tool => {
                const toolName = tool.querySelector('h4').textContent.toLowerCase();
                const toolDesc = tool.querySelector('p').textContent.toLowerCase();
                
                if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
                    tool.style.display = 'flex';
                } else {
                    tool.style.display = 'none';
                }
            });
        }, 300);
        
        searchInput.addEventListener('input', function(e) {
            debouncedSearch(e.target.value.toLowerCase());
        });
    }
});
    const filterTabs = document.querySelectorAll('.filter-tab');

    // Remove active class from all filter tabs
    filterTabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to clicked tab
    event.target.classList.add('active');

    // Show/hide tools based on category
    tools.forEach(tool => {
        if (category === 'all' || tool.dataset.category === category) {
            tool.style.display = 'flex';
            tool.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            tool.style.display = 'none';
        }
    });
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchTools');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const tools = document.querySelectorAll('.tool-card');

            tools.forEach(tool => {
                const toolName = tool.querySelector('h4').textContent.toLowerCase();
                const toolDesc = tool.querySelector('p').textContent.toLowerCase();
                
                if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
                    tool.style.display = 'flex';
                    tool.style.animation = 'fadeInUp 0.3s ease forwards';
                } else {
                    tool.style.display = 'none';
                }
            });
        });
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});

// Interactive animations for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.course-card, .tool-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Course button interactions
document.addEventListener('DOMContentLoaded', function() {
    const courseButtons = document.querySelectorAll('.course-button');
    
    courseButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
            
            // Here you would typically handle the course enrollment
            console.log('Course button clicked:', this.closest('.course-card').querySelector('h3').textContent);
        });
    });
});

// Tool card click interactions
document.addEventListener('DOMContentLoaded', function() {
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        card.addEventListener('click', function() {
            const toolName = this.querySelector('h4').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
            }, 150);
            
            // Here you would typically open the tool or redirect to it
            console.log('Tool clicked:', toolName);
            
            // You could add a modal or redirect logic here
            // For example: window.open('https://example.com/' + toolName.toLowerCase().replace(' ', ''));
        });
        
        // Add cursor pointer
        card.style.cursor = 'pointer';
    });
});

// Loading animation for dynamic content
function showLoading(element) {
    element.classList.add('loading');
    element.innerHTML = '<div style="text-align: center; padding: 2rem;">Loading...</div>';
}

function hideLoading(element, content) {
    element.classList.remove('loading');
    element.innerHTML = content;
}

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const animatedElements = document.querySelectorAll('.course-card, .tool-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// Performance optimization - Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchTools');
    
    if (searchInput) {
        const debouncedSearch = debounce(function(searchTerm) {
            const tools = document.querySelectorAll('.tool-card');
            
            tools.forEach(tool => {
                const toolName = tool.querySelector('h4').textContent.toLowerCase();
                const toolDesc = tool.querySelector('p').textContent.toLowerCase();
                
                if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
                    tool.style.display = 'flex';
                } else {
                    tool.style.display = 'none';
                }
            });
        }, 300);
        
        searchInput.addEventListener('input', function(e) {
            debouncedSearch(e.target.value.toLowerCase());
        });
    }
});