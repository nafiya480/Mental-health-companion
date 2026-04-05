/* =====================================
   MINDCARE - MULTILINGUAL VERSION
   ===================================== */

// ========================================
// TRANSLATIONS
// ========================================

const translations = {
    en: {
        tagline: "Your Personal Mental Health Companion",
        greeting_title: "How are you feeling today?",
        greeting_subtitle: "Select an emotion to get personalized support and activities",
        emotion_stressed: "Stressed", emotion_stressed_desc: "Feeling overwhelmed by pressure",
        emotion_anxious: "Anxious", emotion_anxious_desc: "Worried or nervous about things",
        emotion_sad: "Sad", emotion_sad_desc: "Feeling down or melancholic",
        emotion_tired: "Tired", emotion_tired_desc: "Exhausted or lacking energy",
        emotion_overwhelmed: "Overwhelmed", emotion_overwhelmed_desc: "Too much to handle right now",
        emotion_lonely: "Lonely", emotion_lonely_desc: "Missing connection with others",
        btn_back: "← Back", btn_start: "Start Exercise", btn_stop: "Stop Exercise",
        btn_breathing: "🫁 Try a Breathing Exercise", btn_eraser: "🧹 Eraser",
        btn_clear: "🗑️ Clear", btn_download: "⬇️ Download",
        recommended_activities: "Recommended Activities", activity_reading: "Reading",
        activity_reading_desc: "Explore inspiring articles and stories", activity_music: "Music",
        activity_music_desc: "Listen to curated relaxing playlists", activity_games: "Games",
        activity_games_desc: "Play calming browser games", activity_drawing: "Drawing",
        activity_drawing_desc: "Express yourself through art", label_external: "External link",
        label_canvas: "Canvas tool", label_color: "Color:", label_size: "Size:",
        breathing_title: "Guided Breathing Exercise",
        breathing_info: "Breathing exercise: 4 seconds inhale, 4 seconds hold, 4 seconds exhale",
        breathing_inhale: "Inhale... (breathe in slowly)", breathing_hold: "Hold... (hold your breath)",
        breathing_exhale: "Exhale... (breathe out slowly)", breathing_ready: "Get ready...",
        whiteboard_title: "Express Yourself 🎨",
        footer_text: "💚 Remember: Taking care of yourself is not selfish. You deserve kindness and support."
    },
    hi: {
        tagline: "आपका व्यक्तिगत मानसिक स्वास्थ्य साथी",
        greeting_title: "आप आज कैसा महसूस कर रहे हैं?",
        greeting_subtitle: "व्यक्तिगत समर्थन और कार्यकलापों के लिए एक भावना चुनें",
        emotion_stressed: "तनावग्रस्त", emotion_stressed_desc: "दबाव से अभिभूत महसूस करना",
        emotion_anxious: "चिंतित", emotion_anxious_desc: "चीजों के बारे में चिंतित या घबराहट",
        emotion_sad: "उदास", emotion_sad_desc: "उदास या विषादपूर्ण महसूस करना",
        emotion_tired: "थका हुआ", emotion_tired_desc: "समाप्त या ऊर्जा की कमी",
        emotion_overwhelmed: "अभिभूत", emotion_overwhelmed_desc: "अभी नियंत्रण करने के लिए बहुत कुछ",
        emotion_lonely: "अकेला", emotion_lonely_desc: "अन्य लोगों के साथ संबंध की कमी",
        btn_back: "← पीछे", btn_start: "व्यायाम शुरू करें", btn_stop: "व्यायाम बंद करें",
        btn_breathing: "🫁 एक श्वास व्यायाम आजमाएं", btn_eraser: "🧹 मिटाना",
        btn_clear: "🗑️ स्पष्ट", btn_download: "⬇️ डाउनलोड",
        recommended_activities: "अनुशंसित गतिविधियां", activity_reading: "पढ़ना",
        activity_reading_desc: "प्रेरक लेख और कहानियों का अन्वेषण करें", activity_music: "संगीत",
        activity_music_desc: "क्यूरेट किए गए आराम संगीत सूचियां सुनें", activity_games: "गेम्स",
        activity_games_desc: "शांत ब्राउज़र गेम खेलें", activity_drawing: "ड्राइंग",
        activity_drawing_desc: "कला के माध्यम से अपने आप को व्यक्त करें", label_external: "बाहरी लिंक",
        label_canvas: "कैनवास उपकरण", label_color: "रंग:", label_size: "आकार:",
        breathing_title: "निर्देशित श्वास व्यायाम",
        breathing_info: "श्वास व्यायाम: 4 सेकंड श्वास लें, 4 सेकंड रोकें, 4 सेकंड श्वास छोड़ें",
        breathing_inhale: "श्वास लें... (धीरे-धीरे श्वास लें)", breathing_hold: "रोकें... (अपनी सांस रोकें)",
        breathing_exhale: "छोड़ें... (धीरे-धीरे श्वास छोड़ें)", breathing_ready: "तैयार रहें...",
        whiteboard_title: "अपने आप को व्यक्त करें 🎨",
        footer_text: "💚 याद रखें: अपनी देखभाल करना स्वार्थी नहीं है। आप दया और समर्थन के योग्य हैं।"
    },
    ta: {
        tagline: "உங்கள் ব్যক్তिगत மানসिक स্वাস्थ్य साथী",
        greeting_title: "நீங்கள் இன்று எப்படி உணர்கிறீர்கள்?",
        greeting_subtitle: "व्यक्तিगत सहायता மற्றum कार्यकलापों के लिए एक भावना चुनें",
        emotion_stressed: "மனஅழுத்தம்", emotion_stressed_desc: "दबाव से अभिभूत महसूस करना",
        emotion_anxious: "ছద्ম்", emotion_anxious_desc: "चीजों के बारे में चिंतित या घबराहट",
        emotion_sad: "كسalam", emotion_sad_desc: "उदास या विषादपूर्ण महसूस करना",
        emotion_tired: "சோர்வாக", emotion_tired_desc: "समाप्त या ऊर्जा की कमी",
        emotion_overwhelmed: "அதிக சுமை", emotion_overwhelmed_desc: "अभी नियंत्रण करने के लिए बहुत कुछ",
        emotion_lonely: "혼자", emotion_lonely_desc: "अन्य लोगों के साथ संबंध की कमी",
        btn_back: "← பின்", btn_start: "நடிக்க தொடங்கவும்", btn_stop: "நடிப்பை நிறுத்தவும்",
        btn_breathing: "🫁 ஒரு श्वास பயிற்சியை முயற்சி செய்யவும்", btn_eraser: "🧹 அழிப்பான்",
        btn_clear: "🗑️ தெளிவு", btn_download: "⬇️ பதிவிறக்கம்",
        recommended_activities: "பരிந்துरைக्क பட्ட कार्यकलापों", activity_reading: "वाचन",
        activity_reading_desc: "प्रेरक लेख और कहानियों का अन्वेषण करें", activity_music: "कं",
        activity_music_desc: "क्यूरेट किए गए आराम संगीत सूचियां सुनें", activity_games: "खेल",
        activity_games_desc: "शांत ब्राउज़र गेम खेलें", activity_drawing: "कासक",
        activity_drawing_desc: "कला के माध्यम से अपने आप को व्यक्त करें", label_external: "बाहरी लिंक",
        label_canvas: "कैनवास उपकरण", label_color: "रंग:", label_size: "आकार:",
        breathing_title: "निर्देशित श्वास व्यायाम",
        breathing_info: "श्वास व्यायाम: 4 सेकंड श्वास लें, 4 सेकंड रोकें, 4 सेकंड श्वास छोड़ें",
        breathing_inhale: "श्वास लें... (धीरे-धीरे श्वास लें)", breathing_hold: "रोकें... (अपनी सांस रोकें)",
        breathing_exhale: "छोड़ें... (धीरे-धीरे श्वास छोड़ें)", breathing_ready: "तैयार रहें...",
        whiteboard_title: "अपने आप को व्यक्त करें 🎨",
        footer_text: "💚 याद रखें: अपनी देखभाल करना स्वार्थी नहीं है। आप दया और समर्थन के योग्य हैं।"
    },
    te: {
        tagline: "మీ ব్యक్తిगత మానసిక ఆరోగ్య సహచరి",
        greeting_title: "మీరు ఈ రోజు ఎలా భావిస్తున్నారు?",
        greeting_subtitle: "వ్యक్తిగతకృత సపోర్ట్ మరియు కార్యకలాపాల కోసం భావోద్వేగం ఎంచుకోండి",
        emotion_stressed: "ఒత్తిడిలో", emotion_stressed_desc: "давко చేత అభిభూతం",
        emotion_anxious: "ఆందోళన", emotion_anxious_desc: "విషయాల గురించి చింతించటం",
        emotion_sad: "విషాదం", emotion_sad_desc: "నిరాశ లేదా మేలనిసిసమ।",
        emotion_tired: "తిరిగి", emotion_tired_desc: "అయిష్టమైన లేదా శక్తి లేమి",
        emotion_overwhelmed: "అధికక్రమ", emotion_overwhelmed_desc: "ఈ సమయంలో నిర్వహించడానికి చాలా",
        emotion_lonely: "విధవ", emotion_lonely_desc: "ఇతరులతో సంబంధం కోసం కోసం",
        btn_back: "← బ్యాక్", btn_start: "వ్యాయామం ప్రారంభించండి", btn_stop: "వ్యాయామం ఆపండి",
        btn_breathing: "🫁 శ్వాస వ్యాయామాన్ని ప్రయత్నించండి", btn_eraser: "🧹 ఎరేజర్",
        btn_clear: "🗑️ స్పష్టం", btn_download: "⬇️ డౌన్‌లోడ్",
        recommended_activities: "సిఫారసు చేసిన కార్యకలాపాలు", activity_reading: "చదువు",
        activity_reading_desc: "ప్రేరణాత్మక కథనాలు మరియు కథలను అన్వేషించండి", activity_music: "సంగీతం",
        activity_music_desc: "క్యూరేట్ చేసిన విశ్రాంతి సంగీత ప్లేలిస్టులను వినండి", activity_games: "ఆటలు",
        activity_games_desc: "ప్రశాంత బ్రౌజర్ గేమ్‌లు ఆడండి", activity_drawing: "డ్రాయింగ్",
        activity_drawing_desc: "కళ ద్వారా మీ తానను వ్యక్తపరచండి", label_external: "బాహ్య లింక్",
        label_canvas: "కాన్వాస్ సాధనం", label_color: "రంగు:", label_size: "పరిమాణం:",
        breathing_title: "గైడెడ్ శ్వాస వ్యాయామం",
        breathing_info: "శ్వాస వ్యాయామం: 4 సెకన్ల ఉల్లాస, 4 సెకన్ల హోల్డ్, 4 సెకన్ల శ్వాస",
        breathing_inhale: "ఉల్లాస... (నెమ్మదిగా శ్వాస తీసుకోండి)", breathing_hold: "హోల్డ్... (మీ శ్వాసను పట్టుకోండి)",
        breathing_exhale: "శ్వాస... (నెమ్మదిగా శ్వాస వెలువెల్లించండి)", breathing_ready: "సిద్ధం...",
        whiteboard_title: "మీ తానను వ్యక్తపరచండి 🎨",
        footer_text: "💚 గుర్తుంచుకోండి: మీ తానను సంరక్షించడం స్వార్థం కాదు। మీరు దయ మరియు సపోర్ట్‌కు విలువైనవారు."
    },
    ml: {
        tagline: "നിങ്ങളുடെ ব్যক్తिগत मानसिक स्वास्थ्य সহায়ક",
        greeting_title: "നിങ്ങൾ ഇന്ന് എങ്ങനേയാണ് അനുഭവിക്കുന്നത്?",
        greeting_subtitle: "വ്യക്തിഗതകൃത സാപോര്‍ട്ടിനും കാര്യകലാപങ്ങൾക്കുമായി ഒരു വികാരം തിരഞ്ഞെടുക്കുക",
        emotion_stressed: "സമ്മർദ്ദം", emotion_stressed_desc: "दबाव से अभिभूत अनुभव",
        emotion_anxious: "ആശങ്കാകുലത", emotion_anxious_desc: "चीजों के बारे में चिंतited या घबराहट",
        emotion_sad: "സങ്കടം", emotion_sad_desc: "उदास या विषادपूर्ण अनुभव",
        emotion_tired: "ക്ഷീണിത", emotion_tired_desc: "समाप्त या ऊर्जा की कमी",
        emotion_overwhelmed: "അതിരുകടന്ന", emotion_overwhelmed_desc: "अभी नियंत्रण करने के लिए बहुत कुछ",
        emotion_lonely: "അകേലെ", emotion_lonely_desc: "अन्य लोगों के साथ संबंध की कमी",
        btn_back: "← പിന്നിലെയ്ക്ക്", btn_start: "വ്യായാമം ആരംഭിക്കുക", btn_stop: "വ്യായാമം നിരോധിക്കുക",
        btn_breathing: "🫁 ഒരു श्वास വ്യായാമം പരീക്ഷിക്കുക", btn_eraser: "🧹 ഇരേസര്‍",
        btn_clear: "🗑️ പ്ലിയർ", btn_download: "⬇️ ഡൗൻലോഡ്",
        recommended_activities: "ശുപാരിശ ചെയ്യപ്പെട്ട കാര്യകലാപങ്ങൾ", activity_reading: "വായന",
        activity_reading_desc: "प्रेरणादायक लेख और कहानियों का अन्वेषण करें", activity_music: "സംഗീതം",
        activity_music_desc: "क्यूरेट किए गए आराम संगीत सूचियां सुनें", activity_games: "കളികൾ",
        activity_games_desc: "शांत ব्रदउजर गेम खेलें", activity_drawing: "ചിത്രകാരി",
        activity_drawing_desc: "कला के माध्यम से अपने आप को व्यक्त करें", label_external: "बाहरी लिंक",
        label_canvas: "कैनवास उपकरण", label_color: "रंग:", label_size: "आकार:",
        breathing_title: "निर्देशित श्वास व्यायाम",
        breathing_info: "श्वास व्यायाम: 4 सेकंड श्वास लें, 4 सेकंड रोकें, 4 सेकंड श्वास छोड़ें",
        breathing_inhale: "श्वास लें... (धीरे-धीरे श्वास लें)", breathing_hold: "रोकें... (अपनी सांस रोकें)",
        breathing_exhale: "छोड़ें... (धीरे-धीरे श्वास छोड़ें)", breathing_ready: "तैयार रहें...",
        whiteboard_title: "अपने आप को व्यक्त करें 🎨",
        footer_text: "💚 याद रखें: अपनी देखभाल करना स्वार्थी नहीं है। आप दया और समर्थन के योग्य हैं।"
    },
    kn: {
        tagline: "ನಿಮ್ಮ ವ್ಯಕ್ತಿಗತ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಹಾಯಕ",
        greeting_title: "ನೀವು ಇಂದು ಹೇಗೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಿ?",
        greeting_subtitle: "ವ್ಯಕ್ತಿಗತಕೃತ ಸಹಾಯ ಮತ್ತು ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಭಾವೋದ್ವೇಗವನ್ನು ಆರಿಸಿಕೊಳ್ಳಿ",
        emotion_stressed: "ಒತ್ತಡದಲ್ಲಿ", emotion_stressed_desc: "दबाव से अभिभूत अनुभव",
        emotion_anxious: "ಆತಂಕಿತ", emotion_anxious_desc: "चीजों के बारे में चिंता या घबराहट",
        emotion_sad: "ದುಃಖಿಸಿ", emotion_sad_desc: "उदास या विषादपूर्ण अनुभव",
        emotion_tired: "ಆಲಸ್ಯ", emotion_tired_desc: "समाप्त या ऊर्जा की कमी",
        emotion_overwhelmed: "ಅಧಿಕೃತ", emotion_overwhelmed_desc: "अभी नियंत्रण करने के लिए बहुत कुछ",
        emotion_lonely: "ಪ್ರತ್ಯೇಕ", emotion_lonely_desc: "अन्य लोगों के साथ संबंध की कमी",
        btn_back: "← ಹಿಂದೆ", btn_start: "ವ್ಯಾಯಾಮ ಪ್ರಾರಂಭಿಸಿ", btn_stop: "ವ್ಯಾಯಾಮ ನಿಲ್ಲಿಸಿ",
        btn_breathing: "🫁 ಉಸಿರಾಟ ವ್ಯಾಯಾಮವನ್ನು ಪ್ರಯತ್ನಿಸಿ", btn_eraser: "🧹 ಎರೇಸರ್",
        btn_clear: "🗑️ ಸ್ಪಷ್ಟ", btn_download: "⬇️ ಡೌನ್‌ಲೋಡ್",
        recommended_activities: "ಶಿಫಾರಸುಮಾಡಿದ ಚಟುವಟಿಕೆಗಳು", activity_reading: "ಓದುವುದು",
        activity_reading_desc: "प्रेरणादायक लेख और कहानियों का अन्वेषण करें", activity_music: "ಸಂಗೀತ",
        activity_music_desc: "क्यूरेट किए गए आराम संगीत सूचियां सुनें", activity_games: "ಆಟಗಳು",
        activity_games_desc: "शांत ब्रदउजर गेम खेलें", activity_drawing: "ರೇಖಾಚಿತ್ರ",
        activity_drawing_desc: "कला के माध्यम से अपने आप को व्यक्त करें", label_external: "बाहरी लिंक",
        label_canvas: "कैनवास उपकरण", label_color: "रंग:", label_size: "आकार:",
        breathing_title: "निर्देशित श्वास व्यायाम",
        breathing_info: "श्वास व्यायाम: 4 सेकंड श्वास लें, 4 सेकंड रोकें, 4 सेकंड श्वास छोड़ें",
        breathing_inhale: "श्वास लें... (धीरे-धीरे श्वास लें)", breathing_hold: "रोकें... (अपनी सांस रोकें)",
        breathing_exhale: "छोड़ें... (धीरे-धीरे श्वास छोड़ें)", breathing_ready: "तैयार रहें...",
        whiteboard_title: "अपने आप को व्यक्त करें 🎨",
        footer_text: "💚 याद रखें: अपनी देखभाल करना स्वार्थी नहीं है। आप दया और समर्थन के योग्य हैं।"
    }
};

// ========================================
// LANGUAGE-SPECIFIC LINKS
// ========================================

const languageLinks = {
    en: { reading: "https://www.medium.com/tag/mental-health", music: "https://www.youtube.com/results?search_query=relaxing+calming+music", games: "https://sporcle.com/games/category/puzzle" },
    hi: { reading: "https://www.medium.com/search?q=mental+health+hindi", music: "https://www.youtube.com/results?search_query=relaxing+music+hindi", games: "https://sporcle.com/games/category/puzzle" },
    ta: { reading: "https://www.medium.com/search?q=mental+health+tamil", music: "https://www.youtube.com/results?search_query=relaxing+music+tamil", games: "https://sporcle.com/games/category/puzzle" },
    te: { reading: "https://www.medium.com/search?q=mental+health+telugu", music: "https://www.youtube.com/results?search_query=relaxing+music+telugu", games: "https://sporcle.com/games/category/puzzle" },
    ml: { reading: "https://www.medium.com/search?q=mental+health+malayalam", music: "https://www.youtube.com/results?search_query=relaxing+music+malayalam", games: "https://sporcle.com/games/category/puzzle" },
    kn: { reading: "https://www.medium.com/search?q=mental+health+kannada", music: "https://www.youtube.com/results?search_query=relaxing+music+kannada", games: "https://sporcle.com/games/category/puzzle" }
};

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
// EMOTION DATA
// ========================================

const emotionData = {
    stressed: { emoji: "😣", title_en: "You're Feeling Stressed", message_en: "Stress is a natural response to life's challenges. Remember, you have the strength to handle this. Take a moment to breathe, step back if you can, and focus on one thing at a time." },
    anxious: { emoji: "😟", title_en: "You're Feeling Anxious", message_en: "Anxiety can feel overwhelming, but remember that these feelings are temporary and manageable. Your thoughts are just thoughts—they're not facts." },
    sad: { emoji: "😢", title_en: "You're Feeling Sad", message_en: "Sadness is a natural emotion that reminds us we care deeply about things. It's okay to feel this way. Rather than fighting these feelings, allow yourself to experience them." },
    tired: { emoji: "😴", title_en: "You're Feeling Tired", message_en: "Fatigue is your body and mind telling you they need rest. That's not weakness—it's wisdom. Listen to what you need right now." },
    overwhelmed: { emoji: "😫", title_en: "You're Feeling Overwhelmed", message_en: "When everything feels like too much, it's time to pause and take things one step at a time. You don't have to do everything right now." },
    lonely: { emoji: "🥺", title_en: "You're Feeling Lonely", message_en: "Loneliness is a human experience, and you're not alone in feeling this way. Connection is near, even when it doesn't feel like it." }
};

// ========================================
// STATE & DOM
// ========================================

let currentLanguage = 'en';
let currentEmotion = null;
let isDrawing = false, lastX = 0, lastY = 0, isEraserMode = false, isBreathingExerciseActive = false;

// Language selector
const languageSelect = document.getElementById('languageSelect');

// Screens
const emotionScreen = document.getElementById('emotionScreen');
const recommendationScreen = document.getElementById('recommendationScreen');
const whiteboardScreen = document.getElementById('whiteboardScreen');
const breathingScreen = document.getElementById('breathingScreen');

// Elements
const emotionBtns = document.querySelectorAll('.emotion-btn');
const affirmationEl = document.getElementById('affirmation');
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

// Breathing
const breathingBackBtn = document.getElementById('breathingBackBtn');
const startBreathingBtn = document.getElementById('startBreathingBtn');
const stopBreathingBtn = document.getElementById('stopBreathingBtn');
const breathingInstruction = document.getElementById('breathingInstruction');
const breathingCircle = document.getElementById('breathingCircle');

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadLanguagePreference();
    updateUIText();
    displayDailyAffirmation();
    resizeCanvas();
    setupEventListeners();
});

window.addEventListener('resize', resizeCanvas);

// ========================================
// LANGUAGE MANAGEMENT
// ========================================

function loadLanguagePreference() {
    const saved = localStorage.getItem('mindcare_language');
    if (saved) {
        currentLanguage = saved;
        languageSelect.value = saved;
    }
}

function saveLanguagePreference(lang) {
    currentLanguage = lang;
    localStorage.setItem('mindcare_language', lang);
}

languageSelect.addEventListener('change', (e) => {
    saveLanguagePreference(e.target.value);
    updateUIText();
});

// ========================================
// TRANSLATION SYSTEM
// ========================================

function t(key) {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
}

function updateUIText() {
    // Header  
    document.querySelector('.tagline').textContent = t('tagline');
    
    // Greeting
    document.getElementById('greetingTitle').textContent = t('greeting_title');
    document.getElementById('greetingSubtitle').textContent = t('greeting_subtitle');
    
    // Emotion buttons
    const emotionMap = { stressed: '', anxious: '', sad: '', tired: '', overwhelmed: '', lonely: '' };
    emotionBtns.forEach(btn => {
        const emotion = btn.dataset.emotion;
        btn.querySelector('[data-i18n="emotion_' + emotion + '"]').textContent = t('emotion_' + emotion);
        btn.querySelector('[data-i18n="emotion_' + emotion + '_desc"]').textContent = t('emotion_' + emotion + '_desc');
    });
    
    // Buttons
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    
    // Footer
    document.getElementById('footerText').textContent = t('footer_text');
}

// ========================================
// AFFIRMATION
// ========================================

function displayDailyAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    affirmationEl.textContent = affirmations[randomIndex];
}

// ========================================
// EMOTION SELECTION
// ========================================

emotionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentEmotion = btn.dataset.emotion;
        const data = emotionData[currentEmotion];
        emotionTitle.textContent = data.emoji + " " + data.title_en;
        emotionMessage.textContent = data.message_en;
        showScreen('recommendation');
    });
});

// ========================================
// CANVAS FUNCTIONS
// ========================================

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

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

function stopDrawing() {
    isDrawing = false;
}

// ========================================
// BREATHING EXERCISE
// ========================================

function runBreathingExercise() {
    if (!isBreathingExerciseActive) return;
    breathingInstruction.textContent = t('breathing_inhale');
    breathingCircle.className = 'breathing-circle inhale';
    setTimeout(() => {
        if (!isBreathingExerciseActive) return;
        breathingInstruction.textContent = t('breathing_hold');
        breathingCircle.className = 'breathing-circle hold';
        setTimeout(() => {
            if (!isBreathingExerciseActive) return;
            breathingInstruction.textContent = t('breathing_exhale');
            breathingCircle.className = 'breathing-circle exhale';
            setTimeout(() => {
                if (isBreathingExerciseActive) runBreathingExercise();
            }, 4000);
        }, 4000);
    }, 4000);
}

function stopBreathingExercise() {
    isBreathingExerciseActive = false;
    startBreathingBtn.disabled = false;
    stopBreathingBtn.disabled = true;
    breathingInstruction.textContent = t('breathing_ready');
    breathingCircle.className = 'breathing-circle';
}

// ========================================
// NAVIGATION
// ========================================

function showScreen(screen) {
    emotionScreen.classList.remove('active');
    recommendationScreen.classList.remove('active');
    whiteboardScreen.classList.remove('active');
    breathingScreen.classList.remove('active');
    
    if (screen === 'emotion') emotionScreen.classList.add('active');
    else if (screen === 'recommendation') recommendationScreen.classList.add('active');
    else if (screen === 'whiteboard') whiteboardScreen.classList.add('active');
    else if (screen === 'breathing') breathingScreen.classList.add('active');
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Navigation
    backBtn.addEventListener('click', () => showScreen('emotion'));
    whiteboardBackBtn.addEventListener('click', () => showScreen('recommendation'));
    breathingBackBtn.addEventListener('click', () => showScreen('recommendation'));
    
    // Activities
    readingCard.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(languageLinks[currentLanguage].reading, '_blank');
    });
    musicCard.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(languageLinks[currentLanguage].music, '_blank');
    });
    gameCard.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(languageLinks[currentLanguage].games, '_blank');
    });
    whiteboardCard.addEventListener('click', () => {
        showScreen('whiteboard');
        resizeCanvas();
    });
    quickBreathingBtn.addEventListener('click', () => showScreen('breathing'));
    
    // Whiteboard
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    
    brushSize.addEventListener('input', (e) => {
        brushSizeValue.textContent = e.target.value;
    });
    
    eraserBtn.addEventListener('click', () => {
        isEraserMode = !isEraserMode;
        eraserBtn.classList.toggle('active');
        eraserBtn.textContent = isEraserMode ? '🧹 ' + t('btn_eraser') + ' (ON)' : '🧹 ' + t('btn_eraser');
        canvas.style.cursor = isEraserMode ? 'cell' : 'crosshair';
    });
    
    clearBtn.addEventListener('click', () => {
        if (confirm('Clear all drawings?')) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
    
    downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        const timestamp = new Date().toLocaleString();
        link.download = `mindcare-${currentEmotion}-${timestamp}.png`;
        link.click();
    });
    
    // Breathing
    startBreathingBtn.addEventListener('click', () => {
        isBreathingExerciseActive = true;
        startBreathingBtn.disabled = true;
        stopBreathingBtn.disabled = false;
        runBreathingExercise();
    });
    
    stopBreathingBtn.addEventListener('click', stopBreathingExercise);
    
    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (recommendationScreen.classList.contains('active')) showScreen('emotion');
            else if (whiteboardScreen.classList.contains('active')) showScreen('recommendation');
            else if (breathingScreen.classList.contains('active')) showScreen('recommendation');
        }
    });
}
