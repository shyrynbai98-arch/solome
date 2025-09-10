// Quiz Data
const quizData = [
    {
        question: "What's your main goal for starting an online business?",
        subtitle: "Choose the option that best describes your primary motivation",
        options: [
            {
                icon: "💰",
                title: "Financial Freedom",
                description: "I want to replace my current income and achieve financial independence"
            },
            {
                icon: "🌟",
                title: "Follow My Passion",
                description: "I want to turn my skills and interests into a profitable business"
            },
            {
                icon: "🏠",
                title: "Work-Life Balance",
                description: "I want flexibility to work from anywhere and control my schedule"
            },
            {
                icon: "🚀",
                title: "Scale & Impact",
                description: "I want to build something big that makes a meaningful impact"
            }
        ]
    },
    {
        question: "How much do you want to earn from your online business per year?",
        subtitle: "Be realistic about your income goals",
        options: [
            {
                icon: "💵",
                title: "$30K - $50K",
                description: "A nice side income to supplement my current earnings"
            },
            {
                icon: "💸",
                title: "$50K - $70K",
                description: "Enough to cover most of my living expenses"
            },
            {
                icon: "💰",
                title: "$70K - $100K",
                description: "A full-time income that provides financial security"
            },
            {
                icon: "🤑",
                title: "$100K+",
                description: "I want to build a highly profitable business"
            }
        ]
    },
    {
        question: "What type of online business interests you most?",
        subtitle: "Select the business model that excites you",
        options: [
            {
                icon: "📱",
                title: "Mobile Apps",
                description: "Creating and monetizing mobile applications"
            },
            {
                icon: "☁️",
                title: "SaaS (Software as a Service)",
                description: "Building subscription-based software solutions"
            },
            {
                icon: "📚",
                title: "Digital Products/Courses",
                description: "Creating and selling educational content or digital products"
            },
            {
                icon: "🛒",
                title: "E-commerce",
                description: "Selling physical or digital products online"
            }
        ]
    },
    {
        question: "What's your current experience level with technology?",
        subtitle: "This helps us customize your learning path",
        options: [
            {
                icon: "🆕",
                title: "Complete Beginner",
                description: "I'm new to tech and need to learn from scratch"
            },
            {
                icon: "📈",
                title: "Some Experience",
                description: "I have basic knowledge but need to learn more"
            },
            {
                icon: "💪",
                title: "Intermediate",
                description: "I'm comfortable with technology and can learn quickly"
            },
            {
                icon: "🔥",
                title: "Advanced",
                description: "I have strong technical skills and experience"
            }
        ]
    },
    {
        question: "How much time can you dedicate to building your business per week?",
        subtitle: "Be honest about your available time commitment",
        options: [
            {
                icon: "⏰",
                title: "5-10 hours",
                description: "I can work on this part-time alongside other commitments"
            },
            {
                icon: "⌚",
                title: "10-20 hours",
                description: "I can dedicate significant time each week"
            },
            {
                icon: "🕐",
                title: "20-30 hours",
                description: "This will be my primary focus"
            },
            {
                icon: "⏰",
                title: "30+ hours",
                description: "I'm ready to go all-in on this business"
            }
        ]
    },
    {
        question: "What's your biggest challenge right now?",
        subtitle: "Understanding your main obstacle helps us provide better guidance",
        options: [
            {
                icon: "🤔",
                title: "Don't Know Where to Start",
                description: "I have ideas but don't know the first steps to take"
            },
            {
                icon: "💡",
                title: "Need a Profitable Business Idea",
                description: "I want to start but don't know what business to build"
            },
            {
                icon: "🛠️",
                title: "Lack Technical Skills",
                description: "I know what to build but don't have the technical knowledge"
            },
            {
                icon: "📈",
                title: "Don't Know How to Market",
                description: "I can build products but struggle with getting customers"
            }
        ]
    },
    {
        question: "What's your preferred learning style?",
        subtitle: "This helps us deliver content in the way you learn best",
        options: [
            {
                icon: "📺",
                title: "Video Tutorials",
                description: "I learn best by watching step-by-step videos"
            },
            {
                icon: "📖",
                title: "Written Guides",
                description: "I prefer detailed written instructions and documentation"
            },
            {
                icon: "🎯",
                title: "Hands-on Practice",
                description: "I learn by doing and building real projects"
            },
            {
                icon: "👥",
                title: "Interactive Coaching",
                description: "I learn best with direct feedback and mentorship"
            }
        ]
    },
    {
        question: "When do you want to launch your business?",
        subtitle: "Your timeline affects the intensity of your learning plan",
        options: [
            {
                icon: "🚀",
                title: "ASAP (1-3 months)",
                description: "I want to launch quickly and start earning as soon as possible"
            },
            {
                icon: "📅",
                title: "This Year (3-6 months)",
                description: "I want to take time to build properly but launch this year"
            },
            {
                icon: "🎯",
                title: "Next Year (6-12 months)",
                description: "I'm planning for the long term and want to build sustainably"
            },
            {
                icon: "🌱",
                title: "No Rush (12+ months)",
                description: "I want to learn thoroughly and build when I'm fully prepared"
            }
        ]
    },
    {
        question: "What's your current financial situation?",
        subtitle: "This helps us understand your investment capacity and urgency",
        options: [
            {
                icon: "😰",
                title: "Tight Budget",
                description: "I need to be very careful with spending and need results quickly"
            },
            {
                icon: "💳",
                title: "Limited Budget",
                description: "I can invest small amounts but need to see ROI soon"
            },
            {
                icon: "💰",
                title: "Comfortable",
                description: "I can invest in my business growth without immediate pressure"
            },
            {
                icon: "🏦",
                title: "Well-Funded",
                description: "I have capital to invest and can focus on long-term growth"
            }
        ]
    },
    {
        question: "What motivates you most?",
        subtitle: "Understanding your motivation helps us keep you engaged",
        options: [
            {
                icon: "🏆",
                title: "Achievement & Success",
                description: "I'm driven by reaching goals and seeing measurable results"
            },
            {
                icon: "🌍",
                title: "Impact & Purpose",
                description: "I want to make a difference and help others through my business"
            },
            {
                icon: "🏠",
                title: "Freedom & Independence",
                description: "I want control over my time, location, and decisions"
            },
            {
                icon: "👨‍👩‍👧‍👦",
                title: "Family & Security",
                description: "I want to provide better life opportunities for my family"
            }
        ]
    }
];

// Quiz State
let currentQuestionIndex = 0;
let answers = {};
let totalQuestions = quizData.length;

// DOM Elements
const questionContainer = document.getElementById('questionContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const progressFill = document.getElementById('progressFill');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const resultsModal = document.getElementById('resultsModal');

// Initialize Quiz
document.addEventListener('DOMContentLoaded', function() {
    totalQuestionsSpan.textContent = totalQuestions;
    displayQuestion();
    updateProgress();
});

// Display Current Question
function displayQuestion() {
    const question = quizData[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <p>${question.subtitle}</p>
        <div class="answer-options">
            ${question.options.map((option, index) => `
                <div class="answer-option" onclick="selectAnswer(${index})" data-option="${index}">
                    <div class="option-icon">${option.icon}</div>
                    <div class="option-content">
                        <h4>${option.title}</h4>
                        <p>${option.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Restore previous selection if exists
    if (answers[currentQuestionIndex] !== undefined) {
        selectAnswer(answers[currentQuestionIndex], false);
    }
    
    updateNavigation();
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
}

// Select Answer
function selectAnswer(optionIndex, updateNav = true) {
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    document.querySelector(`[data-option="${optionIndex}"]`).classList.add('selected');
    
    // Store answer
    answers[currentQuestionIndex] = optionIndex;
    
    if (updateNav) {
        updateNavigation();
    }
}

// Update Navigation Buttons
function updateNavigation() {
    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Next button
    const hasAnswer = answers[currentQuestionIndex] !== undefined;
    nextBtn.disabled = !hasAnswer;
    
    // Show/hide submit button on last question
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = hasAnswer ? 'block' : 'none';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Update Progress Bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressFill.style.width = progress + '%';
}

// Navigation Event Listeners
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < totalQuestions - 1 && answers[currentQuestionIndex] !== undefined) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
    }
});

submitBtn.addEventListener('click', () => {
    if (answers[currentQuestionIndex] !== undefined) {
        showResults();
    }
});

// Calculate Results and Show Modal
function showResults() {
    const results = calculateResults();
    
    // Update modal content with results
    document.getElementById('businessType').textContent = results.businessType;
    document.getElementById('incomeGoal').textContent = results.incomeGoal;
    document.getElementById('timeline').textContent = results.timeline;
    
    // Show modal
    resultsModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Calculate Personalized Results
function calculateResults() {
    const businessTypes = {
        0: 'Digital Course Creation',
        1: 'SaaS Development', 
        2: 'Mobile App Development',
        3: 'E-commerce Business'
    };
    
    const incomeGoals = {
        0: '$30K-$50K/year',
        1: '$50K-$70K/year',
        2: '$70K-$100K/year',
        3: '$100K+/year'
    };
    
    const timelines = {
        0: '3-6 months',
        1: '6-8 months',
        2: '8-12 months',
        3: '12+ months'
    };
    
    // Get user's selections
    const goalAnswer = answers[0] || 0;
    const incomeAnswer = answers[1] || 2;
    const businessAnswer = answers[2] || 1;
    const timelineAnswer = answers[7] || 1;
    
    return {
        businessType: businessTypes[businessAnswer],
        incomeGoal: incomeGoals[incomeAnswer],
        timeline: timelines[timelineAnswer]
    };
}

// Plan Selection Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to plan buttons after DOM is loaded
    setTimeout(() => {
        const planButtons = document.querySelectorAll('.plan-btn');
        planButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                handlePlanSelection(index);
            });
        });
    }, 100);
});

// Handle Plan Selection
function handlePlanSelection(planIndex) {
    const plans = ['monthly', '3-month', 'annual'];
    const selectedPlan = plans[planIndex];
    
    // Store selection in localStorage for potential future use
    try {
        localStorage.setItem('selectedPlan', selectedPlan);
        localStorage.setItem('quizAnswers', JSON.stringify(answers));
    } catch (e) {
        // Handle browsers that don't support localStorage
        console.log('localStorage not available');
    }
    
    // Here you would typically integrate with a payment processor
    // For demo purposes, we'll show an alert
    alert(`Thank you for selecting the ${selectedPlan} plan! You would now be redirected to payment processing.`);
    
    // In a real implementation, you might redirect to:
    // window.location.href = `checkout.html?plan=${selectedPlan}`;
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (resultsModal.style.display === 'flex') return;
    
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        prevBtn.click();
    } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
        nextBtn.click();
    } else if (e.key === 'Enter' && answers[currentQuestionIndex] !== undefined) {
        if (currentQuestionIndex === totalQuestions - 1) {
            submitBtn.click();
        } else {
            nextBtn.click();
        }
    }
    
    // Number keys for quick selection
    const num = parseInt(e.key);
    if (num >= 1 && num <= 4) {
        const options = document.querySelectorAll('.answer-option');
        if (options[num - 1]) {
            selectAnswer(num - 1);
        }
    }
});

// Close modal when clicking outside
resultsModal.addEventListener('click', function(e) {
    if (e.target === resultsModal) {
        resultsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animation for progress bar
function animateProgressBar() {
    progressFill.style.transition = 'width 0.5s ease-in-out';
}

// Call animation on load
document.addEventListener('DOMContentLoaded', animateProgressBar);