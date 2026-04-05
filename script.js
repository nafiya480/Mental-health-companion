/* =====================================
   MINDCARE - Mental Health Companion App
   ===================================== */

// ========================================
// AFFIRMATIONS
// ========================================

const affirmations = [
    "You are stronger than you believe.",
    "This moment is temporary, you will get through this.",
    "Be kind to yourself, as you would be to a dear friend.",
    "Your mental health matters. You deserve care and compassion.",
    "Progress, not perfection, is what matters.",
    "You are not alone in this journey.",
    "Your feelings are valid and important.",
    "Taking a break is a sign of strength, not weakness.",
    "You have overcome 100% of your worst days so far.",
    "Today, you are doing the best you can, and that's enough.",
    "Your struggles do not define you.",
    "It's okay to not be okay sometimes.",
    "Every small step forward is a victory.",
    "Healing is not linear, and that's perfectly fine.",
    "You deserve love and support, from others and from yourself."
];

// ========================================
// EMOTION DATA WITH MESSAGES
// ========================================

const emotionData = {
    stressed: {
        emoji: "😣",
        title: "😣 You're Feeling Stressed",
        explanation: "Feeling overwhelmed by pressure or demands",
        message: "Stress is a natural response to life's challenges. Remember, you have the strength to handle this. Take a moment to breathe, step back if you can, and focus on one thing at a time. You've overcome challenges before, and you can do it again.",
        tips: "• Break tasks into smaller, manageable chunks\n• Take regular breaks\n• Practice deep breathing\n• Reach out to someone you trust"
    },
    anxious: {
        emoji: "😟",
        title: "😟 You're Feeling Anxious",
        explanation: "Worried or nervous about things",
        message: "Anxiety can feel overwhelming, but remember that these feelings are temporary and manageable. Your thoughts are just thoughts—they're not facts. Let's explore activities that can help calm your mind and ground you in the present moment.",
        tips: "• Focus on your breath\n• Ground yourself with the 5-4-3-2-1 technique\n• Challenge anxious thoughts\n• Practice mindfulness"
    },
    sad: {
        emoji: "😢",
        title: "😢 You're Feeling Sad",
        explanation: "Feeling down or melancholic",
        message: "Sadness is a natural emotion that reminds us we care deeply about things. It's okay to feel this way. Rather than fighting these feelings, allow yourself to experience them. Let's find gentle activities to support you through this.",
        tips: "• Express your feelings through art or journaling\n• Spend time in nature\n• Connect with loved ones\n• Engage in self-care activities"
    },
    tired: {
        emoji: "😴",
        title: "😴 You're Feeling Tired",
        explanation: "Exhausted or lacking energy",
        message: "Fatigue is your body and mind telling you they need rest. That's not weakness—it's wisdom. Listen to what you need right now. Whether it's sleep, a slower pace, or gentle activities, your rest is important and deserved.",
        tips: "• Prioritize sleep\n• Take short breaks throughout the day\n• Engage in light, enjoyable activities\n• Be gentle with yourself"
    },
    overwhelmed: {
        emoji: "😫",
        title: "😫 You're Feeling Overwhelmed",
        explanation: "Too much to handle right now",
        message: "When everything feels like too much, it's time to pause and take things one step at a time. You don't have to do everything right now. Break things down, ask for help if you need it, and remember—you're doing better than you think.",
        tips: "• Identify what's most urgent\n• Learn to say 'no'\n• Ask for support\n• Practice mindfulness or breathing exercises"
    },
    lonely: {
        emoji: "🥺",
        title: "🥺 You're Feeling Lonely",
        explanation: "Missing connection with others",
        message: "Loneliness is a human experience, and you're not alone in feeling this way. Connection is near, even when it doesn't feel like it. Reach out, be creative, and remember—you deserve to feel seen and connected.",
        tips: "• Reach out to someone\n• Engage in community activities\n• Connect online with others\n• Practice self-compassion"
    }
};

// ========================================
// EXTERNAL RESOURCE LINKS
// ========================================

const externalLinks = {
    reading: "https://www.medium.com/tag/mental-health",
    music: "https://www.youtube.com/results?search_query=relaxing+calming+music",
    games: "https://poki.com/"
};

// ========================================
// DOM ELEMENTS
// ========================================

// Screens
const emotionScreen = document.getElementById('emotionScreen');
const recommendationScreen = document.getElementById('recommendationScreen');
const whiteboardScreen = document.getElementById('whiteboardScreen');
const breathingScreen = document.getElementById('breathingScreen');

// Emotion selection
const emotionBtns = document.querySelectorAll('.emotion-btn');
const affirmationEl = document.getElementById('affirmation');

// Recommendations
const backBtn = document.getElementById('backBtn');
const emotionTitle = document.getElementById('emotionTitle');
const emotionMessage = document.getElementById('emotionMessage');
const readingCard = document.getElementById('readingCard');
const musicCard = document.getElementById('musicCard');
const gameCard = document.getElementById('gameCard');
const whiteboardCard = document.getElementById('whiteboardCard');
const quickBreathingBtn = document.getElementById('quickBreathingBtn');

// Whiteboard
const canvas = document.getElementById('whiteboardCanvas');
const ctx = canvas.getContext('2d');
const whiteboardBackBtn = document.getElementById('whiteboardBackBtn');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const brushSizeValue = document.getElementById('brushSizeValue');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Breathing exercise
const breathingBackBtn = document.getElementById('breathingBackBtn');
const startBreathingBtn = document.getElementById('startBreathingBtn');
const stopBreathingBtn = document.getElementById('stopBreathingBtn');
const breathingInstruction = document.getElementById('breathingInstruction');
const breathingCircle = document.getElementById('breathingCircle');

// ========================================
// STATE VARIABLES
// ========================================

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let isEraserMode = false;
let isBreathingExerciseActive = false;
let currentEmotion = null;

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    displayDailyAffirmation();
    resizeCanvas();
    loadLastEmotion();
});

window.addEventListener('resize', resizeCanvas);

// ========================================
// AFFIRMATION FUNCTIONALITY
// ========================================

/**
 * Display a random daily affirmation
 */
function displayDailyAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    affirmationEl.textContent = affirmations[randomIndex];
}

// ========================================
// CANVAS FUNCTIONALITY
// ========================================

/**
 * Resize canvas to match container size
 */
function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

/**
 * Start drawing on canvas
 */
function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    lastX = (clientX - rect.left) * scaleX;
    lastY = (clientY - rect.top) * scaleY;
}

/**
 * Draw on canvas
 */
function draw(e) {
    if (!isDrawing) return;
    
    e.preventDefault();
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;
    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    if (isEraserMode) {
        ctx.clearRect(x - brushSize.value / 2, y - brushSize.value / 2, brushSize.value, brushSize.value);
    } else {
        ctx.strokeStyle = colorPicker.value;
        ctx.lineWidth = brushSize.value;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
    lastX = x;
    lastY = y;
}

/**
 * Stop drawing
 */
function stopDrawing() {
    isDrawing = false;
}

// ========================================
// CANVAS EVENT LISTENERS
// ========================================

// Mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Touch events for mobile
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDrawing);

// ========================================
// WHITEBOARD CONTROL BUTTONS
// ========================================

/**
 * Update brush size display
 */
brushSize.addEventListener('input', (e) => {
    brushSizeValue.textContent = e.target.value;
});

/**
 * Toggle eraser mode
 */
eraserBtn.addEventListener('click', () => {
    isEraserMode = !isEraserMode;
    eraserBtn.classList.toggle('active');
    if (isEraserMode) {
        canvas.style.cursor = 'cell';
        eraserBtn.textContent = '🧹 Eraser (ON)';
    } else {
        canvas.style.cursor = 'crosshair';
        eraserBtn.textContent = '🧹 Eraser';
    }
});

/**
 * Clear entire canvas
 */
clearBtn.addEventListener('click', () => {
    if (confirm('Clear all drawings? This cannot be undone.')) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

/**
 * Download drawing as PNG
 */
downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    const timestamp = new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    link.download = `mindcare-${currentEmotion}-${timestamp}.png`;
    link.click();
});

// ========================================
// EMOTION SELECTION
// ========================================

/**
 * Handle emotion selection
 */
emotionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentEmotion = btn.dataset.emotion;
        saveLastEmotion(currentEmotion);
        showRecommendations(currentEmotion);
    });
});

/**
 * Show personalized recommendations for selected emotion
 */
function showRecommendations(emotion) {
    const data = emotionData[emotion];
    emotionTitle.textContent = data.title;
    emotionMessage.textContent = data.message;
    
    emotionScreen.classList.remove('active');
    recommendationScreen.classList.add('active');
}

/**
 * Go back to emotion selection
 */
backBtn.addEventListener('click', () => {
    recommendationScreen.classList.remove('active');
    emotionScreen.classList.add('active');
    stopBreathingExercise();
});

// ========================================
// NAVIGATION - ACTIVITY CARDS
// ========================================

/**
 * Open external resource in new tab
 */
readingCard.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(externalLinks.reading, '_blank');
});

musicCard.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(externalLinks.music, '_blank');
});

gameCard.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(externalLinks.games, '_blank');
});

/**
 * Open whiteboard
 */
whiteboardCard.addEventListener('click', () => {
    recommendationScreen.classList.remove('active');
    whiteboardScreen.classList.add('active');
    resizeCanvas();
    isEraserMode = false;
    eraserBtn.classList.remove('active');
    eraserBtn.textContent = '🧹 Eraser';
    canvas.style.cursor = 'crosshair';
});

/**
 * Close whiteboard
 */
whiteboardBackBtn.addEventListener('click', () => {
    whiteboardScreen.classList.remove('active');
    recommendationScreen.classList.add('active');
});

// ========================================
// BREATHING EXERCISE
// ========================================

/**
 * Open breathing exercise from quick button
 */
quickBreathingBtn.addEventListener('click', () => {
    recommendationScreen.classList.remove('active');
    breathingScreen.classList.add('active');
});

/**
 * Close breathing exercise
 */
breathingBackBtn.addEventListener('click', () => {
    breathingScreen.classList.remove('active');
    recommendationScreen.classList.add('active');
    stopBreathingExercise();
});

/**
 * Start guided breathing exercise
 * Pattern: 4s inhale, 4s hold, 4s exhale (repeated)
 */
startBreathingBtn.addEventListener('click', () => {
    isBreathingExerciseActive = true;
    startBreathingBtn.disabled = true;
    stopBreathingBtn.disabled = false;
    runBreathingExercise();
});

/**
 * Stop breathing exercise
 */
stopBreathingBtn.addEventListener('click', stopBreathingExercise);

/**
 * Run breathing exercise cycle
 */
function runBreathingExercise() {
    if (!isBreathingExerciseActive) return;
    
    // Inhale
    breathingInstruction.textContent = 'Inhale... (breathe in slowly)';
    breathingCircle.className = 'breathing-circle inhale';
    
    setTimeout(() => {
        if (!isBreathingExerciseActive) return;
        
        // Hold
        breathingInstruction.textContent = 'Hold... (hold your breath)';
        breathingCircle.className = 'breathing-circle hold';
        
        setTimeout(() => {
            if (!isBreathingExerciseActive) return;
            
            // Exhale
            breathingInstruction.textContent = 'Exhale... (breathe out slowly)';
            breathingCircle.className = 'breathing-circle exhale';
            
            setTimeout(() => {
                if (isBreathingExerciseActive) {
                    runBreathingExercise();
                }
            }, 4000);
        }, 4000);
    }, 4000);
}

/**
 * Stop breathing exercise
 */
function stopBreathingExercise() {
    isBreathingExerciseActive = false;
    startBreathingBtn.disabled = false;
    stopBreathingBtn.disabled = true;
    breathingInstruction.textContent = 'Get ready...';
    breathingCircle.className = 'breathing-circle';
}

// ========================================
// LOCAL STORAGE - PERSISTENT STATE
// ========================================

/**
 * Save last selected emotion to localStorage
 */
function saveLastEmotion(emotion) {
    localStorage.setItem('lastEmotion', emotion);
}

/**
 * Load last selected emotion from localStorage
 */
function loadLastEmotion() {
    const lastEmotion = localStorage.getItem('lastEmotion');
    // You can use this to auto-select the emotion or show it on revisit
    // For now, users start fresh each time
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', (e) => {
    // Press 'R' to go back from recommendations
    if (e.key.toLowerCase() === 'r' && recommendationScreen.classList.contains('active')) {
        backBtn.click();
    }
    // Press 'B' to go back from whiteboard
    if (e.key.toLowerCase() === 'b' && whiteboardScreen.classList.contains('active')) {
        whiteboardBackBtn.click();
    }
    // Press 'Escape' to go back from any non-emotion screen
    if (e.key === 'Escape') {
        if (recommendationScreen.classList.contains('active')) {
            backBtn.click();
        } else if (whiteboardScreen.classList.contains('active')) {
            whiteboardBackBtn.click();
        } else if (breathingScreen.classList.contains('active')) {
            breathingBackBtn.click();
        }
    }
});
