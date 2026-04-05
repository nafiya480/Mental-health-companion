// ========================================
// MINDCARE - MENTAL HEALTH COMPANION APP
// ========================================

// ========================================
// TRANSLATIONS — fully corrected
// ========================================
const translations = {
  en: {
    tagline: "Your Personal Mental Health Companion",
    greeting_title: "How are you feeling today?",
    greeting_subtitle: "Select an emotion to get personalized support and activities",
    emotion_stressed: "Stressed",       emotion_stressed_desc: "Feeling overwhelmed by pressure",
    emotion_anxious: "Anxious",         emotion_anxious_desc: "Worried or nervous about things",
    emotion_sad: "Sad",                 emotion_sad_desc: "Feeling down or melancholic",
    emotion_tired: "Tired",             emotion_tired_desc: "Exhausted or lacking energy",
    emotion_overwhelmed: "Overwhelmed", emotion_overwhelmed_desc: "Too much to handle right now",
    emotion_lonely: "Lonely",           emotion_lonely_desc: "Missing connection with others",
    btn_back: "← Back", btn_start: "Start Exercise", btn_stop: "Stop Exercise",
    btn_breathing: "🫁 Try a Breathing Exercise",
    btn_eraser: "🧹 Eraser", btn_clear: "🗑️ Clear", btn_download: "⬇️ Download",
    recommended_activities: "Recommended Activities",
    activity_reading: "Reading",        activity_reading_desc: "Explore inspiring articles and stories",
    activity_music: "Music",            activity_music_desc: "Listen to curated relaxing playlists",
    activity_games: "Games",            activity_games_desc: "Play calming browser games",
    activity_drawing: "Drawing",        activity_drawing_desc: "Express yourself through art",
    label_color: "Color:", label_size: "Size:",
    breathing_title: "Guided Breathing Exercise",
    breathing_info: "Breathe in for 4 seconds, hold for 4 seconds, breathe out for 4 seconds",
    breathing_inhale: "Inhale… breathe in slowly",
    breathing_hold: "Hold… hold your breath",
    breathing_exhale: "Exhale… breathe out slowly",
    breathing_ready: "Get ready…",
    whiteboard_title: "Express Yourself 🎨",
    footer_text: "💚 Remember: Taking care of yourself is not selfish. You deserve kindness and support.",
    emotion_title_stressed: "You're Feeling Stressed",
    emotion_msg_stressed: "Stress is a natural response to life's challenges. Remember, you have the strength to handle this. Take a moment to breathe and focus on one thing at a time.",
    emotion_title_anxious: "You're Feeling Anxious",
    emotion_msg_anxious: "Anxiety can feel overwhelming, but these feelings are temporary and manageable. Your thoughts are just thoughts — they're not facts.",
    emotion_title_sad: "You're Feeling Sad",
    emotion_msg_sad: "Sadness is a natural emotion. It's okay to feel this way. Allow yourself to experience these feelings without judgment.",
    emotion_title_tired: "You're Feeling Tired",
    emotion_msg_tired: "Fatigue is your body and mind asking for rest. That's not weakness — it's wisdom. Listen to what you need right now.",
    emotion_title_overwhelmed: "You're Feeling Overwhelmed",
    emotion_msg_overwhelmed: "When everything feels like too much, pause and take things one step at a time. You don't have to do everything at once.",
    emotion_title_lonely: "You're Feeling Lonely",
    emotion_msg_lonely: "Loneliness is a deeply human experience, and you're not alone in feeling this way. Connection is nearer than it might seem.",
    affirmation_1: "You are stronger than you believe.",
    affirmation_2: "This moment is temporary. You will get through this.",
    affirmation_3: "Be kind to yourself, as you would be to a dear friend.",
    affirmation_4: "Your mental health matters. You deserve care and compassion.",
    affirmation_5: "Progress, not perfection, is what matters.",
    affirmation_6: "You are not alone in this journey.",
    affirmation_7: "Your feelings are valid and important.",
    affirmation_8: "Taking a break is a sign of strength, not weakness.",
    affirmation_9: "You have overcome 100% of your worst days so far.",
    affirmation_10: "Today, you are doing the best you can — and that's enough.",
    affirmation_11: "Your struggles do not define you.",
    affirmation_12: "It's okay to not be okay sometimes.",
    affirmation_13: "Every small step forward is a victory.",
    affirmation_14: "Healing is not linear, and that's perfectly fine.",
    affirmation_15: "You deserve love and support, from others and from yourself."
  },
  hi: {
    tagline: "आपका व्यक्तिगत मानसिक स्वास्थ्य साथी",
    greeting_title: "आप आज कैसा महसूस कर रहे हैं?",
    greeting_subtitle: "व्यक्तिगत समर्थन और गतिविधियों के लिए एक भावना चुनें",
    emotion_stressed: "तनावग्रस्त",       emotion_stressed_desc: "दबाव से अभिभूत महसूस करना",
    emotion_anxious: "चिंतित",            emotion_anxious_desc: "चीज़ों के बारे में चिंतित या घबराहट",
    emotion_sad: "उदास",                  emotion_sad_desc: "उदास या विषादपूर्ण महसूस करना",
    emotion_tired: "थका हुआ",             emotion_tired_desc: "थका हुआ या ऊर्जा की कमी",
    emotion_overwhelmed: "अभिभूत",        emotion_overwhelmed_desc: "अभी बहुत कुछ संभालना है",
    emotion_lonely: "अकेला",              emotion_lonely_desc: "दूसरों से जुड़ाव की कमी",
    btn_back: "← पीछे", btn_start: "व्यायाम शुरू करें", btn_stop: "व्यायाम बंद करें",
    btn_breathing: "🫁 श्वास व्यायाम आज़माएं",
    btn_eraser: "🧹 मिटाना", btn_clear: "🗑️ साफ़ करें", btn_download: "⬇️ डाउनलोड",
    recommended_activities: "अनुशंसित गतिविधियां",
    activity_reading: "पढ़ना",            activity_reading_desc: "प्रेरक लेख और कहानियां पढ़ें",
    activity_music: "संगीत",              activity_music_desc: "शांत संगीत सुनें",
    activity_games: "खेल",               activity_games_desc: "शांत ब्राउज़र गेम खेलें",
    activity_drawing: "चित्रकारी",        activity_drawing_desc: "कला के माध्यम से खुद को व्यक्त करें",
    label_color: "रंग:", label_size: "आकार:",
    breathing_title: "निर्देशित श्वास व्यायाम",
    breathing_info: "4 सेकंड श्वास लें, 4 सेकंड रोकें, 4 सेकंड छोड़ें",
    breathing_inhale: "श्वास लें… धीरे-धीरे",
    breathing_hold: "रोकें… सांस रोकें",
    breathing_exhale: "छोड़ें… धीरे-धीरे",
    breathing_ready: "तैयार रहें…",
    whiteboard_title: "अपने आप को व्यक्त करें 🎨",
    footer_text: "💚 याद रखें: अपनी देखभाल करना स्वार्थी नहीं है। आप दया और समर्थन के योग्य हैं।",
    emotion_title_stressed: "आप तनाव में हैं",
    emotion_msg_stressed: "तनाव जीवन की चुनौतियों का स्वाभाविक जवाब है। एक-एक चीज़ पर ध्यान दें।",
    emotion_title_anxious: "आप चिंतित हैं",
    emotion_msg_anxious: "चिंता अस्थायी है और इसे संभाला जा सकता है। आपके विचार सच्चाई नहीं हैं।",
    emotion_title_sad: "आप उदास हैं",
    emotion_msg_sad: "उदासी स्वाभाविक है। बिना निर्णय के इन भावनाओं को महसूस करें।",
    emotion_title_tired: "आप थके हुए हैं",
    emotion_msg_tired: "थकान आपके शरीर और मन का आराम मांगना है। सुनें।",
    emotion_title_overwhelmed: "आप अभिभूत हैं",
    emotion_msg_overwhelmed: "एक कदम एक समय पर लें। सब कुछ एक साथ नहीं करना है।",
    emotion_title_lonely: "आप अकेला महसूस कर रहे हैं",
    emotion_msg_lonely: "अकेलापन एक मानवीय अनुभव है। जुड़ाव उतना दूर नहीं जितना लगता है।",
    affirmation_1: "आप जितना सोचते हैं उससे अधिक मजबूत हैं।",
    affirmation_2: "यह पल अस्थायी है। आप इससे बाहर आ जाएंगे।",
    affirmation_3: "अपने साथ वैसे ही दयालु बनें जैसे आप किसी प्रिय मित्र के साथ होते हैं।",
    affirmation_4: "आपका मानसिक स्वास्थ्य महत्वपूर्ण है। आप देखभाल के योग्य हैं।",
    affirmation_5: "प्रगति महत्वपूर्ण है, पूर्णता नहीं।",
    affirmation_6: "आप इस यात्रा में अकेले नहीं हैं।",
    affirmation_7: "आपकी भावनाएं वैध और महत्वपूर्ण हैं।",
    affirmation_8: "आराम लेना शक्ति का संकेत है, कमजोरी का नहीं।",
    affirmation_9: "आप अपनी सभी बुरी दिनों से बाहर आ गए हैं।",
    affirmation_10: "आप अपना सर्वश्रेष्ठ प्रयास कर रहे हैं - और वह काफी है।",
    affirmation_11: "आपकी कठिनाइयां आपको परिभाषित नहीं करती।",
    affirmation_12: "कभी-कभी ठीक नहीं होना ठीक है।",
    affirmation_13: "हर छोटा कदम एक जीत है।",
    affirmation_14: "चिकित्सा रैखिक नहीं है, और यह ठीक है।",
    affirmation_15: "आप प्रेम और समर्थन के योग्य हैं।"
  },
  ta: {
    tagline: "உங்கள் தனிப்பட்ட மனநல துணைவர்",
    greeting_title: "நீங்கள் இன்று எப்படி உணர்கிறீர்கள்?",
    greeting_subtitle: "தனிப்பயனாக்கப்பட்ட ஆதரவிற்காக ஒரு உணர்வை தேர்ந்தெடுக்கவும்",
    emotion_stressed: "மன அழுத்தம்",     emotion_stressed_desc: "அழுத்தத்தால் மூழ்கியதாக உணர்கிறேன்",
    emotion_anxious: "கவலை",             emotion_anxious_desc: "விஷயங்களைப் பற்றி கவலைப்படுகிறேன்",
    emotion_sad: "சோகம்",                emotion_sad_desc: "தாழ்வாகவோ மனமட்டமாகவோ உணர்கிறேன்",
    emotion_tired: "சோர்வு",             emotion_tired_desc: "களைப்பாகவோ சக்தியின்மையாகவோ உணர்கிறேன்",
    emotion_overwhelmed: "மிகை சுமை",    emotion_overwhelmed_desc: "இப்போது எல்லாம் அதிகமாக உள்ளது",
    emotion_lonely: "தனிமை",             emotion_lonely_desc: "மற்றவர்களுடன் தொடர்பு இல்லை என்று உணர்கிறேன்",
    btn_back: "← பின்னால்", btn_start: "பயிற்சியை தொடங்கவும்", btn_stop: "பயிற்சியை நிறுத்தவும்",
    btn_breathing: "🫁 சுவாச பயிற்சி முயற்சிக்கவும்",
    btn_eraser: "🧹 அழிப்பான்", btn_clear: "🗑️ அழிக்க", btn_download: "⬇️ பதிவிறக்கம்",
    recommended_activities: "பரிந்துரைக்கப்பட்ட செயல்பாடுகள்",
    activity_reading: "வாசிப்பு",         activity_reading_desc: "தூண்டுகிற கட்டுரைகள் படியுங்கள்",
    activity_music: "இசை",               activity_music_desc: "அமைதியான இசை கேளுங்கள்",
    activity_games: "விளையாட்டு",        activity_games_desc: "அமைதியான விளையாட்டுகள் விளையாடுங்கள்",
    activity_drawing: "வரைதல்",          activity_drawing_desc: "கலை மூலம் உங்களை வெளிப்படுத்துங்கள்",
    label_color: "நிறம்:", label_size: "அளவு:",
    breathing_title: "வழிகாட்டப்பட்ட சுவாச பயிற்சி",
    breathing_info: "4 வினாடி உள்ளிழுக்கவும், 4 வினாடி நிறுத்தவும், 4 வினாடி வெளிவிடவும்",
    breathing_inhale: "உள்ளிழுக்கவும்… மெதுவாக",
    breathing_hold: "நிறுத்தவும்… சுவாசத்தை வைத்திருங்கள்",
    breathing_exhale: "வெளிவிடவும்… மெதுவாக",
    breathing_ready: "தயாராகுங்கள்…",
    whiteboard_title: "உங்களை வெளிப்படுத்துங்கள் 🎨",
    footer_text: "💚 நினைவில் வைக்கவும்: உங்களைப் பற்றி அக்கறை கொள்வது சுயநலம் அல்ல.",
    emotion_title_stressed: "நீங்கள் மன அழுத்தத்தில் இருக்கிறீர்கள்",
    emotion_msg_stressed: "அழுத்தம் இயல்பான ஒன்று. ஒவ்வொரு விஷயமாக கவனியுங்கள்.",
    emotion_title_anxious: "நீங்கள் கவலைப்படுகிறீர்கள்",
    emotion_msg_anxious: "கவலை தற்காலிகமானது. உங்கள் எண்ணங்கள் உண்மை அல்ல.",
    emotion_title_sad: "நீங்கள் சோகமாக உணர்கிறீர்கள்",
    emotion_msg_sad: "சோகம் இயல்பான உணர்வு. தன்னை திட்டிக்கொள்ளாமல் உணருங்கள்.",
    emotion_title_tired: "நீங்கள் சோர்வாக இருக்கிறீர்கள்",
    emotion_msg_tired: "உங்கள் உடலும் மனமும் ஓய்வு கேட்கிறது. கேளுங்கள்.",
    emotion_title_overwhelmed: "நீங்கள் மிகை சுமையில் இருக்கிறீர்கள்",
    emotion_msg_overwhelmed: "ஒவ்வொரு அடியாக எடுங்கள். எல்லாவற்றையும் ஒரே நேரத்தில் செய்ய வேண்டியதில்லை.",
    emotion_title_lonely: "நீங்கள் தனிமையாக உணர்கிறீர்கள்",
    emotion_msg_lonely: "தனிமை ஒரு மனித அனுபவம். தொடர்பு நினைப்பதை விட அருகில் உள்ளது।",
    affirmation_1: "நீங்கள் நிம்மதி வைத்து நம்பிக்கை கொள்ள வேண்டிய வலிமை வாய்ந்தவர்கள்.",
    affirmation_2: "இந்த தருணம் தற்காலிகம். நீங்கள் இதை கடக்கலாம்.",
    affirmation_3: "உங்கள் உணர்வு நணபனுக்கு வாழ்த்திரும் போல் உங்களுக்கும் கருணை காட்டுங்கள்.",
    affirmation_4: "உங்கள் மன ஆரோக்கியம் முக்கியவாகமானது. நீங்கள் கவனிப்பு பெற தகுதிவாய்ந்தவர்கள்.",
    affirmation_5: "முன்னேற்றம் முக்கியவாகமானது, சிறப்பு அல்ல.",
    affirmation_6: "நீங்கள் இந்த பயணத்தில் தனிமையில் இல்லை.",
    affirmation_7: "உங்கள் உணர்வுகள் சரியாக மற்றும் முக்கியவாகமானவை.",
    affirmation_8: "ஒய்வு எடுப்பது வலிமையின் அடையாளம், பலவீனத்தின் அல்ல.",
    affirmation_9: "நீங்கள் கட்ட நாட்களி 100% வென்றுவிட்டீர்கள்.",
    affirmation_10: "இன்று நீங்கள் உங்கள் சிறந்த முயற்சிகளை செய்யுங்கள் - அது போதுமானது.",
    affirmation_11: "உங்கள் போராட்டங்கள் உங்களை வரையறுக்கவில்லை.",
    affirmation_12: "சில சமயங்களில் சரியான உணர்வில் இல்லாமல் இருப்பது சரி.",
    affirmation_13: "ஓவ்வொரு சிறிய பதிப்பும் ஒர வெற்றி.",
    affirmation_14: "குணப்படுத்துதல் நேரியல் அல்ல, மற்றும் அது சரியாக உள்ளது.",
    affirmation_15: "நீங்கள் கவனிப்பு மற்றும் ஆதரவு பெற தகுதிவாய்ந்தவர்கள்."
  },
  te: {
    tagline: "మీ వ్యక్తిగత మానసిక ఆరోగ్య సహచరి",
    greeting_title: "మీరు ఈ రోజు ఎలా భావిస్తున్నారు?",
    greeting_subtitle: "వ్యక్తిగత మద్దతు కోసం ఒక భావోద్వేగం ఎంచుకోండి",
    emotion_stressed: "ఒత్తిడిలో",      emotion_stressed_desc: "ఒత్తిడి వల్ల అభిభూతంగా అనిపిస్తోంది",
    emotion_anxious: "ఆందోళన",          emotion_anxious_desc: "విషయాల గురించి ఆందోళనగా ఉంది",
    emotion_sad: "విచారం",              emotion_sad_desc: "నిరాశగా లేదా మనస్సు బాధగా ఉంది",
    emotion_tired: "అలసట",              emotion_tired_desc: "అలసటగా లేదా శక్తి లేనట్లు అనిపిస్తోంది",
    emotion_overwhelmed: "అధికభారం",    emotion_overwhelmed_desc: "ఇప్పుడు చాలా ఎక్కువగా అనిపిస్తోంది",
    emotion_lonely: "ఒంటరిగా",          emotion_lonely_desc: "ఇతరులతో అనుబంధం లేనట్లు అనిపిస్తోంది",
    btn_back: "← వెనక్కి", btn_start: "వ్యాయామం ప్రారంభించండి", btn_stop: "వ్యాయామం ఆపండి",
    btn_breathing: "🫁 శ్వాస వ్యాయామాన్ని ప్రయత్నించండి",
    btn_eraser: "🧹 చెరిపేది", btn_clear: "🗑️ తుడవండి", btn_download: "⬇️ డౌన్‌లోడ్",
    recommended_activities: "సిఫార్సు చేసిన కార్యకలాపాలు",
    activity_reading: "చదువు",           activity_reading_desc: "స్ఫూర్తిదాయక కథనాలు చదవండి",
    activity_music: "సంగీతం",            activity_music_desc: "విశ్రాంతి సంగీతం వినండి",
    activity_games: "ఆటలు",             activity_games_desc: "ప్రశాంతమైన ఆటలు ఆడండి",
    activity_drawing: "చిత్రలేఖనం",     activity_drawing_desc: "కళ ద్వారా మిమ్మల్ని వ్యక్తపరచండి",
    label_color: "రంగు:", label_size: "పరిమాణం:",
    breathing_title: "నిర్దేశిత శ్వాస వ్యాయామం",
    breathing_info: "4 సెకన్లు శ్వాస తీసుకోండి, 4 సెకన్లు పట్టుకోండి, 4 సెకన్లు వదలండి",
    breathing_inhale: "శ్వాస తీసుకోండి… నెమ్మదిగా",
    breathing_hold: "పట్టుకోండి… శ్వాసను ఆపండి",
    breathing_exhale: "వదలండి… నెమ్మదిగా",
    breathing_ready: "సిద్ధంగా ఉండండి…",
    whiteboard_title: "మిమ్మల్ని వ్యక్తపరచండి 🎨",
    footer_text: "💚 గుర్తుంచుకోండి: మీ గురించి శ్రద్ధ తీసుకోవడం స్వార్థం కాదు.",
    emotion_title_stressed: "మీరు ఒత్తిడిలో ఉన్నారు",
    emotion_msg_stressed: "ఒత్తిడి జీవితంలో సహజం. ఒక్కో అడుగు వేయండి.",
    emotion_title_anxious: "మీరు ఆందోళనలో ఉన్నారు",
    emotion_msg_anxious: "ఆందోళన తాత్కాలికమైనది. మీ ఆలోచనలు వాస్తవాలు కావు.",
    emotion_title_sad: "మీరు విచారంగా ఉన్నారు",
    emotion_msg_sad: "విచారం సహజమైన భావన. మిమ్మల్ని తీర్పు వేయకుండా అనుభవించండి.",
    emotion_title_tired: "మీరు అలసిపోయారు",
    emotion_msg_tired: "మీ శరీరం విశ్రాంతి అడుగుతోంది. వినండి.",
    emotion_title_overwhelmed: "మీరు అధికభారంలో ఉన్నారు",
    emotion_msg_overwhelmed: "ఒక్కో అడుగు వేయండి. ఒకేసారి అన్నీ చేయాల్సిన అవసరం లేదు.",
    emotion_title_lonely: "మీరు ఒంటరిగా అనిపిస్తోంది",
    emotion_msg_lonely: "ఒంటరితనం మానవ అనుభవం. అనుబంధం అనుకున్నదానికంటే దగ్గరలోనే ఉంది.",
    affirmation_1: "మీరు మీరు నమ్ముకున్నదానికంటే బలవంతమైనవారు.",
    affirmation_2: "ఈ క్షణం తాత్కాలిక. మీరు దీన్నిని దాటిపోతారు.",
    affirmation_3: "ప్రియమైన స్నేహితుడికి వలె మీకు ఎటువంటి కరుణ చూపండి.",
    affirmation_4: "మీ మానసిక ఆరోగ్యం ముఖ్యమైనది. మీరు సంరక్షణకు యోగ్యులు.",
    affirmation_5: "పురోగతి ముఖ్యమైనది, పరిపూర్ణత కాదు.",
    affirmation_6: "ఈ ప్రయాణంలో మీరు ఏకం కాదు.",
    affirmation_7: "మీ భావాలు చెల్లుబాటుయోగ్యమైన మరియు ముఖ్యమైనవి.",
    affirmation_8: "విశ్రాంతి తీసుకోవడం శక్తి యొక్క సంకేతం, బలహీనత కాదు.",
    affirmation_9: "మీరు మీ సమస్త చెడ్డ రోజుల నుండి 100% బయటపడ్డారు.",
    affirmation_10: "ఈ రోజు మీరు మీ ఉత్తమ ప్రయత్నాలలో ఉన్నారు - మరియు అది సరిపోతుంది.",
    affirmation_11: "మీ పోరాటాలు మీ గుర్తింపును నిర్ణయించవు.",
    affirmation_12: "కొన్నిసార్లు సరిగా లేకపోవడం సరిపోతుంది.",
    affirmation_13: "ప్రతి చిన్న దశ విజయం.",
    affirmation_14: "ఆరోగ్యం సరళ రేఖ కాదు, మరియు అది సరిపోతుంది.",
    affirmation_15: "మీరు ప్రేమ మరియు సమర్థన కోసం యోగ్యులు."
  },
  ml: {
    tagline: "നിങ്ങളുടെ വ്യക്തിഗത മാനസികാരോഗ്യ സഹചാരി",
    greeting_title: "ഇന്ന് നിങ്ങൾക്ക് എങ്ങനെ തോന്നുന്നു?",
    greeting_subtitle: "വ്യക്തിഗത സഹായത്തിനായി ഒരു വികാരം തിരഞ്ഞെടുക്കുക",
    emotion_stressed: "സമ്മർദ്ദം",       emotion_stressed_desc: "സമ്മർദ്ദം മൂലം തളർന്നതായി തോന്നുന്നു",
    emotion_anxious: "ഉത്കണ്ഠ",          emotion_anxious_desc: "കാര്യങ്ങളെക്കുറിച്ച് ആശങ്കയുണ്ട്",
    emotion_sad: "സങ്കടം",              emotion_sad_desc: "വിഷാദം അല്ലെങ്കിൽ മ്ലാനത അനുഭവിക്കുന്നു",
    emotion_tired: "ക്ഷീണം",            emotion_tired_desc: "ക്ഷീണം അല്ലെങ്കിൽ ഊർജ്ജക്കുറവ് തോന്നുന്നു",
    emotion_overwhelmed: "അതിരുകടന്ന",  emotion_overwhelmed_desc: "ഇപ്പോൾ കൈകാര്യം ചെയ്യാൻ ഏറെ ഉണ്ട്",
    emotion_lonely: "ഏകാന്തത",           emotion_lonely_desc: "മറ്റുള്ളവരുമായി ബന്ധം കുറവ് തോന്നുന്നു",
    btn_back: "← പിന്നിലേക്ക്", btn_start: "വ്യായാമം തുടങ്ങുക", btn_stop: "വ്യായാമം നിർത്തുക",
    btn_breathing: "🫁 ശ്വാസ വ്യായാമം പരീക്ഷിക്കുക",
    btn_eraser: "🧹 മായ്ക്കുക", btn_clear: "🗑️ ക്ലിയർ", btn_download: "⬇️ ഡൗൺലോഡ്",
    recommended_activities: "ശുപാർശ ചെയ്ത പ്രവർത്തനങ്ങൾ",
    activity_reading: "വായന",            activity_reading_desc: "പ്രചോദനകരമായ ലേഖനങ്ങൾ വായിക്കുക",
    activity_music: "സംഗീതം",           activity_music_desc: "ശാന്തിദായക സംഗീതം കേൾക്കുക",
    activity_games: "ഗെയിമുകൾ",         activity_games_desc: "ശാന്തമായ ഗെയിമുകൾ കളിക്കുക",
    activity_drawing: "ചിത്രരചന",       activity_drawing_desc: "കലയിലൂടെ സ്വയം പ്രകടിപ്പിക്കുക",
    label_color: "നിറം:", label_size: "വലിപ്പം:",
    breathing_title: "നിർദേശിത ശ്വാസ വ്യായാമം",
    breathing_info: "4 സെക്കൻഡ് ശ്വസിക്കുക, 4 സെക്കൻഡ് പിടിക്കുക, 4 സെക്കൻഡ് വിടുക",
    breathing_inhale: "ശ്വസിക്കുക… സാവധാനം",
    breathing_hold: "പിടിക്കുക… ശ്വാസം നിർത്തുക",
    breathing_exhale: "വിടുക… സാവധാനം",
    breathing_ready: "തയ്യാറാകൂ…",
    whiteboard_title: "സ്വയം പ്രകടിപ്പിക്കുക 🎨",
    footer_text: "💚 ഓർക്കുക: സ്വയം പരിചരിക്കുന്നത് സ്വാർത്ഥതയല്ല. നിങ്ങൾ ദയയ്ക്കും പിന്തുണയ്ക്കും അർഹർ.",
    emotion_title_stressed: "നിങ്ങൾ സമ്മർദ്ദത്തിലാണ്",
    emotion_msg_stressed: "സമ്മർദ്ദം സ്വഭാവികമാണ്. ഒരു ഘടകം ഒരു സമയം ശ്രദ്ധിക്കുക.",
    emotion_title_anxious: "നിങ്ങൾക്ക് ഉത്കണ്ഠ ഉണ്ട്",
    emotion_msg_anxious: "ഉത്കണ്ഠ താൽക്കാലികമാണ്. നിങ്ങളുടെ ചിന്തകൾ വസ്തുതകളല്ല.",
    emotion_title_sad: "നിങ്ങൾക്ക് സങ്കടം തോന്നുന്നു",
    emotion_msg_sad: "സങ്കടം സ്വഭാവിക വികാരമാണ്. വിധി കൂടാതെ അനുഭവിക്കുക.",
    emotion_title_tired: "നിങ്ങൾ ക്ഷീണിച്ചിരിക്കുന്നു",
    emotion_msg_tired: "ശരീരവും മനസ്സും വിശ്രാന്തി ആഗ്രഹിക്കുന്നു. ശ്രദ്ധിക്കുക.",
    emotion_title_overwhelmed: "നിങ്ങൾ അതിരുകടന്ന ഭാരത്തിലാണ്",
    emotion_msg_overwhelmed: "ഒരു ഘടകം ഒരു സമയം. എല്ലാം ഒരേ സമയം ചെയ്യേണ്ടതില്ല.",
    emotion_title_lonely: "നിങ്ങൾക്ക് ഏകാന്തത തോന്നുന്നു",
    emotion_msg_lonely: "ഏകാന്തത ഒരു മാനുഷ അനുഭവമാണ്. ബന്ധം തോന്നുന്നതിനേക്കാൾ അടുത്തുണ്ട്.",
    affirmation_1: "നിങ്ങൾ നിങ്ങൾ വിശ്വസിക്കുന്നത് കാണിലും ശക്തരാണ്.",
    affirmation_2: "ഈ നിമിഷം താത്കാലികം. നിങ്ങൾ ഇതിലൂടെ കടന്നുപോകും.",
    affirmation_3: "ഒരു പ്രിയ സുഹൃത്തിന് പോലെ നിങ്ങൾക്ക് ദയ കാണിക്കുക.",
    affirmation_4: "നിങ്ങളുടെ മാനസിക ആരോഗ്യം പ്രധാനമാണ്. നിങ്ങൾ പരിചരണത്തിന് അർഹരാണ്.",
    affirmation_5: "പുരോഗതി പ്രധാനം, പൂർണതയല്ല.",
    affirmation_6: "ഈ യാത്രയിൽ നിങ്ങൾ തനിച്ചല്ല.",
    affirmation_7: "നിങ്ങളുടെ വികാരങ്ങൾ സാധുവും പ്രധാനവുമാണ്.",
    affirmation_8: "വിശ്രാന്തി എടുക്കുന്നത് ശക്തിയുടെ ചിഹ്നം, ദുർബലതയല്ല.",
    affirmation_9: "നിങ്ങൾ നിങ്ങളുടെ എല്ലാ പ്രയാസകരമായ ദിവസങ്ങളിൽ നിന്നും 100% രക്ഷപ്പെട്ടിരിക്കുകയാണ്.",
    affirmation_10: "ഇന്ന് നിങ്ങൾ നിങ്ങളുടെ ഏറ്റവും നല്ലത് ചെയ്യുകയാണ് - അത് മതിയാണ്.",
    affirmation_11: "നിങ്ങളുടെ സമരങ്ങൾ നിങ്ങൾക്കെ നിർവ്വചിക്കുന്നില്ല.",
    affirmation_12: "ചിലപ്പോൾ ശരിയല്ലാത്തത് ശരിയാണ്.",
    affirmation_13: "ഓരോ ചെറിയ ദിവസവും വിജയം.",
    affirmation_14: "സുഖം രേഖീയമല്ല, അത് ശരിയാണ്.",
    affirmation_15: "നിങ്ങൾ സ്നേഹത്തിനും പിന്തുണയ്ക്കും അർഹരാണ്."
  },
  kn: {
    tagline: "ನಿಮ್ಮ ವ್ಯಕ್ತಿಗತ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಹಾಯಕ",
    greeting_title: "ನೀವು ಇಂದು ಹೇಗೆ ಅನುಭವಿಸುತ್ತಿದ್ದೀರಿ?",
    greeting_subtitle: "ವ್ಯಕ್ತಿಗತ ಬೆಂಬಲಕ್ಕಾಗಿ ಒಂದು ಭಾವನೆಯನ್ನು ಆರಿಸಿಕೊಳ್ಳಿ",
    emotion_stressed: "ಒತ್ತಡದಲ್ಲಿ",    emotion_stressed_desc: "ಒತ್ತಡದಿಂದ ಕಂಗಾಲಾಗಿರುವಂತೆ ಅನಿಸುತ್ತಿದೆ",
    emotion_anxious: "ಆತಂಕ",            emotion_anxious_desc: "ವಿಷಯಗಳ ಬಗ್ಗೆ ಚಿಂತೆ ಮತ್ತು ಆತಂಕ",
    emotion_sad: "ದುಃಖ",               emotion_sad_desc: "ನಿರಾಶೆ ಅಥವಾ ಮನಸ್ಸು ಕುಗ್ಗಿರುವಂತೆ ಅನಿಸುತ್ತಿದೆ",
    emotion_tired: "ಆಯಾಸ",             emotion_tired_desc: "ದಣಿದಂತೆ ಅಥವಾ ಶಕ್ತಿ ಕಡಿಮೆ ಇರುವಂತೆ ಅನಿಸುತ್ತಿದೆ",
    emotion_overwhelmed: "ಅತಿ ಭಾರ",    emotion_overwhelmed_desc: "ಈಗ ನಿಭಾಯಿಸಲು ತುಂಬಾ ಇದೆ",
    emotion_lonely: "ಒಂಟಿತನ",           emotion_lonely_desc: "ಇತರರ ಜೊತೆ ಸಂಪರ್ಕ ಇಲ್ಲ ಎಂದು ಅನಿಸುತ್ತಿದೆ",
    btn_back: "← ಹಿಂದೆ", btn_start: "ವ್ಯಾಯಾಮ ಪ್ರಾರಂಭಿಸಿ", btn_stop: "ವ್ಯಾಯಾಮ ನಿಲ್ಲಿಸಿ",
    btn_breathing: "🫁 ಉಸಿರಾಟ ವ್ಯಾಯಾಮ ಪ್ರಯತ್ನಿಸಿ",
    btn_eraser: "🧹 ಅಳಿಸು", btn_clear: "🗑️ ತೆರವು", btn_download: "⬇️ ಡೌನ್‌ಲೋಡ್",
    recommended_activities: "ಶಿಫಾರಸು ಮಾಡಿದ ಚಟುವಟಿಕೆಗಳು",
    activity_reading: "ಓದುವುದು",        activity_reading_desc: "ಸ್ಫೂರ್ತಿದಾಯಕ ಲೇಖನಗಳನ್ನು ಓದಿ",
    activity_music: "ಸಂಗೀತ",            activity_music_desc: "ಶಾಂತಿದಾಯಕ ಸಂಗೀತ ಆಲಿಸಿ",
    activity_games: "ಆಟಗಳು",            activity_games_desc: "ಶಾಂತ ಬ್ರೌಸರ್ ಆಟಗಳನ್ನು ಆಡಿ",
    activity_drawing: "ರೇಖಾಚಿತ್ರ",     activity_drawing_desc: "ಕಲೆಯ ಮೂಲಕ ನಿಮ್ಮನ್ನು ವ್ಯಕ್ತಪಡಿಸಿ",
    label_color: "ಬಣ್ಣ:", label_size: "ಗಾತ್ರ:",
    breathing_title: "ನಿರ್ದೇಶಿತ ಉಸಿರಾಟ ವ್ಯಾಯಾಮ",
    breathing_info: "4 ಸೆಕೆಂಡ್ ಉಸಿರಾಡಿ, 4 ಸೆಕೆಂಡ್ ಹಿಡಿದುಕೊಳ್ಳಿ, 4 ಸೆಕೆಂಡ್ ಬಿಡಿ",
    breathing_inhale: "ಉಸಿರಾಡಿ… ನಿಧಾನವಾಗಿ",
    breathing_hold: "ಹಿಡಿದುಕೊಳ್ಳಿ… ಉಸಿರನ್ನು ನಿಲ್ಲಿಸಿ",
    breathing_exhale: "ಬಿಡಿ… ನಿಧಾನವಾಗಿ",
    breathing_ready: "ಸಿದ್ಧರಾಗಿ…",
    whiteboard_title: "ನಿಮ್ಮನ್ನು ವ್ಯಕ್ತಪಡಿಸಿ 🎨",
    footer_text: "💚 ನೆನಪಿಡಿ: ನಿಮ್ಮ ಆರೈಕೆ ಮಾಡಿಕೊಳ್ಳುವುದು ಸ್ವಾರ್ಥ ಅಲ್ಲ. ನೀವು ಪ್ರೀತಿ ಮತ್ತು ಬೆಂಬಲಕ್ಕೆ ಅರ್ಹರು.",
    emotion_title_stressed: "ನೀವು ಒತ್ತಡದಲ್ಲಿದ್ದೀರಿ",
    emotion_msg_stressed: "ಒತ್ತಡ ಸಹಜ. ಒಂದೊಂದು ಕೆಲಸ ಒಂದು ಸಮಯದಲ್ಲಿ ಮಾಡಿ.",
    emotion_title_anxious: "ನೀವು ಆತಂಕಿತರಾಗಿದ್ದೀರಿ",
    emotion_msg_anxious: "ಆತಂಕ ತಾತ್ಕಾಲಿಕ. ನಿಮ್ಮ ಆಲೋಚನೆಗಳು ಸತ್ಯಗಳಲ್ಲ.",
    emotion_title_sad: "ನೀವು ದುಃಖಿಸುತ್ತಿದ್ದೀರಿ",
    emotion_msg_sad: "ದುಃಖ ಸಹಜ ಭಾವನೆ. ನಿರ್ಣಯ ಇಲ್ಲದೆ ಅನುಭವಿಸಿ.",
    emotion_title_tired: "ನೀವು ಆಯಾಸಗೊಂಡಿದ್ದೀರಿ",
    emotion_msg_tired: "ದೇಹ ಮತ್ತು ಮನಸ್ಸು ವಿಶ್ರಾಂತಿ ಕೇಳುತ್ತಿದೆ. ಆಲಿಸಿ.",
    emotion_title_overwhelmed: "ನೀವು ಅತಿ ಭಾರದಲ್ಲಿದ್ದೀರಿ",
    emotion_msg_overwhelmed: "ಒಂದೊಂದು ಹೆಜ್ಜೆ ಹಾಕಿ. ಎಲ್ಲವನ್ನೂ ಒಟ್ಟಿಗೆ ಮಾಡಬೇಕಾಗಿಲ್ಲ.",
    emotion_title_lonely: "ನೀವು ಒಂಟಿಯಾಗಿ ಅನಿಸುತ್ತಿದ್ದೀರಿ",
    emotion_msg_lonely: "ಒಂಟಿತನ ಮಾನವ ಅನುಭವ. ಸಂಪರ್ಕ ಅನ್ನಿಸಿದ್ದಕ್ಕಿಂತ ಹತ್ತಿರದಲ್ಲಿದೆ.",
    affirmation_1: "ನೀವು ನೀವು ನಂಬುವುದಕ್ಕಿಂತ ಬಲಶಾಲಿಯರು.",
    affirmation_2: "ಈ ಕ್ಷಣ ತಾತ್ಕಾಲಿಕ. ನೀವು ಇದನ್ನು ಮೀರಿ ಹೋಗುತ್ತೀರಿ.",
    affirmation_3: "ನೀವು ಪ್ರೀತಿಯ ಸ್ನೇಹಿತನಿಗೆ ವಿವರಣೆ ಮಾಡುವಂತೆ ನಿಮಗೆ ಸದಿಷ್ಟನಾಗಿರಿ.",
    affirmation_4: "ನಿಮ್ಮ ಮಾನಸಿಕ ಸ್ವಾಸ್ಥ್ಯ ಮುಖ್ಯವಾಗಿದೆ. ನಿಮ್ಮ ಯೋಗ್ಯತೆ ಆಶ್ರಯ ಮತ್ತು ಸಹಾನುಭೂತಿಯ.",
    affirmation_5: "ಪ್ರಗತಿ ಮುಖ್ಯವಾಗಿದೆ, ಪರಿಪೂರ್ಣತೆಯಲ್ಲ.",
    affirmation_6: "ಈ ಪ್ರವಾಸದಲ್ಲಿ ನಿಮ್ಮ ಒಂಟೆ नहीं हो।",
    affirmation_7: "ನಿಮ್ಮ ಭಾವನೆಗಳು ಮಾನ್ಯವಲ್ಲದ ಮತ್ತು ಮುಖ್ಯವಾಗಿದೆ.",
    affirmation_8: "ವಿಶ್ರಾಮ ಪಡೆಯುವುದು ಬಲದ ಸಂಕೇತ, ದುರ್ಬಲತೆಯ ಕಾಲು ಅಲ್ಲ.",
    affirmation_9: "ನೀವು ನಿಮ್ಮ ಕಠಿಣತಮ ದಿನಗಳ 100% ಅನುಸರಣೆ ಮಾಡಿದ್ದೀರಿ.",
    affirmation_10: "ಇಂದು ನೀವು ನಿಮ್ಮ ಉತ್ತಮ ಪ್ರಯತ್ನವನ್ನು ಮಾಡುತ್ತಿದ್ದೀರಿ — ಮತ್ತು ಅದು ಸಿದ್ಧ.",
    affirmation_11: "ನಿಮ್ಮ ಹೋರಾಟಗಳು ನಿಮ್ಮನ್ನು ನನ್ನ ಸಮಯದಲ್ಲಿ ವಿವರಿಸುತ್ತಿಲ್ಲ.",
    affirmation_12: "ಕೆಲವೊಮ್ಮೆ ಸರಿ ಕಾಲು ತೋರುವುದನ್ನು ಆವಲಂಬಿಸುವುದು ಸರಿ.",
    affirmation_13: "ಪ್ರತಿ ಚಿಕ್ಕ ಹೆಜ್ಜೆ ಜಯ.",
    affirmation_14: "ಸಂಧಾನ ರೇಖೀಯ ಅಲ್ಲ, ಮತ್ತು ಅದು ಸಿದ್ಧ.",
    affirmation_15: "ನೀವು ಪ್ರೀತಿ ಮತ್ತು ಬೆಂಬಲಕ್ಕೆ ಆವೇದನ ಮಾಡಿದ್ದೀರಿ."
  }
};

// ========================================
// LANGUAGE LINKS
// ========================================
const languageLinks = {
  en: { reading: "https://www.medium.com/tag/mental-health",         music: "https://www.youtube.com/results?search_query=relaxing+calming+music",   games: "https://sporcle.com/games/category/puzzle" },
  hi: { reading: "https://www.medium.com/search?q=mental+health",    music: "https://www.youtube.com/results?search_query=relaxing+music+hindi",       games: "https://sporcle.com/games/category/puzzle" },
  ta: { reading: "https://www.medium.com/search?q=mental+health",    music: "https://www.youtube.com/results?search_query=relaxing+music+tamil",       games: "https://sporcle.com/games/category/puzzle" },
  te: { reading: "https://www.medium.com/search?q=mental+health",    music: "https://www.youtube.com/results?search_query=relaxing+music+telugu",      games: "https://sporcle.com/games/category/puzzle" },
  ml: { reading: "https://www.medium.com/search?q=mental+health",    music: "https://www.youtube.com/results?search_query=relaxing+music+malayalam",   games: "https://sporcle.com/games/category/puzzle" },
  kn: { reading: "https://www.medium.com/search?q=mental+health",    music: "https://www.youtube.com/results?search_query=relaxing+music+kannada",     games: "https://sporcle.com/games/category/puzzle" }
};



// ========================================
// STATE
// ========================================
let currentLanguage = 'en';
let currentEmotion = null;
let isDrawing = false, lastX = 0, lastY = 0;
let isEraserMode = false;
let isBreathingActive = false;
let isVoiceEnabled = true;
let isBreathingVoiceEnabled = true;
let breathingTimeouts = [];
let savedImageData = null;

// ========================================
// DOM REFS
// ========================================
const languageSelect   = document.getElementById('languageSelect');
const emotionScreen    = document.getElementById('emotionScreen');
const recScreen        = document.getElementById('recommendationScreen');
const wbScreen         = document.getElementById('whiteboardScreen');
const breathingScreen  = document.getElementById('breathingScreen');

const affirmationEl    = document.getElementById('affirmation');
const emotionTitle     = document.getElementById('emotionTitle');
const emotionMessage   = document.getElementById('emotionMessage');

const canvas           = document.getElementById('whiteboardCanvas');
const ctx              = canvas.getContext('2d');
const colorPicker      = document.getElementById('colorPicker');
const brushSize        = document.getElementById('brushSize');
const brushSizeValue   = document.getElementById('brushSizeValue');
const eraserBtn        = document.getElementById('eraserBtn');
const clearBtn         = document.getElementById('clearBtn');
const downloadBtn      = document.getElementById('downloadBtn');

const breathingCircle  = document.getElementById('breathingCircle');
const breathingInstr   = document.getElementById('breathingInstruction');
const startBtn         = document.getElementById('startBreathingBtn');
const stopBtn          = document.getElementById('stopBreathingBtn');

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  loadLangPref();
  updateUI();
  displayAffirmation();
  setupEventListeners();
  syncVoiceToggleUI();
  if (isVoiceEnabled) speak(affirmationEl.textContent, getLanguageCode(currentLanguage));
});

window.addEventListener('resize', () => {
  if (canvas.width > 0 && canvas.height > 0) {
    savedImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }
  resizeCanvas();
  if (savedImageData) {
    ctx.putImageData(savedImageData, 0, 0);
  }
});

// ========================================
// LANGUAGE MANAGEMENT
// ========================================
function loadLangPref() {
  try {
    const saved = localStorage.getItem('mindcare_language');
    if (saved && translations[saved]) {
      currentLanguage = saved;
      languageSelect.value = saved;
    }
  } catch (e) { /* localStorage may be unavailable */ }
}

function saveLangPref(lang) {
  currentLanguage = lang;
  try { localStorage.setItem('mindcare_language', lang); } catch (e) {}
}

languageSelect.addEventListener('change', e => {
  saveLangPref(e.target.value);
  updateUI();
  displayAffirmation();
  if (isVoiceEnabled) speak(affirmationEl.textContent, getLanguageCode(currentLanguage));
  if (currentEmotion && recScreen.classList.contains('active')) {
    renderEmotionCard(currentEmotion);
  }
});

function t(key) {
  return (translations[currentLanguage] && translations[currentLanguage][key])
    ? translations[currentLanguage][key]
    : (translations['en'][key] || key);
}

// ========================================
// UI UPDATE
// ========================================
function updateUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.getElementById('tagline').textContent          = t('tagline');
  document.getElementById('greetingTitle').textContent    = t('greeting_title');
  document.getElementById('greetingSubtitle').textContent = t('greeting_subtitle');
  document.getElementById('recommendedActivitiesTitle').textContent = t('recommended_activities');
  document.getElementById('whiteboardTitle').textContent  = t('whiteboard_title');
  document.getElementById('breathingTitle').textContent   = t('breathing_title');
  document.getElementById('breathingInfo').textContent    = t('breathing_info');

  document.getElementById('backBtn').textContent          = t('btn_back');
  document.getElementById('whiteboardBackBtn').textContent= t('btn_back');
  document.getElementById('breathingBackBtn').textContent = t('btn_back');
  document.getElementById('quickBreathingBtn').textContent= t('btn_breathing');
  document.getElementById('startBreathingBtn').textContent= t('btn_start');
  document.getElementById('stopBreathingBtn').textContent = t('btn_stop');
  document.getElementById('downloadBtn').textContent      = t('btn_download');
  document.getElementById('clearBtn').textContent        = t('btn_clear');
  document.getElementById('footerText').textContent       = t('footer_text');

  eraserBtn.textContent = isEraserMode
    ? t('btn_eraser') + ' (ON)'
    : t('btn_eraser');

  if (!isBreathingActive) {
    breathingInstr.textContent = t('breathing_ready');
  }
}

// ========================================
// AFFIRMATION
// ========================================
function displayAffirmation() {
  const affirmationKeys = Object.keys(translations[currentLanguage])
    .filter(key => key.startsWith('affirmation_'))
    .sort((a, b) => {
      const numA = parseInt(a.split('_')[1]);
      const numB = parseInt(b.split('_')[1]);
      return numA - numB;
    });
  
  const randomKey = affirmationKeys[Math.floor(Math.random() * affirmationKeys.length)];
  affirmationEl.textContent = translations[currentLanguage][randomKey];
}

function syncVoiceToggleUI() {
  const breathingVoiceToggle = document.getElementById('breathingVoiceToggle');
  if (breathingVoiceToggle) {
    breathingVoiceToggle.classList.toggle('active', isBreathingVoiceEnabled);
  }
}

// ========================================
// VOICE SYNTHESIS
// ========================================
const synth = window.speechSynthesis;
let availableVoices = [];

function loadVoices() {
  availableVoices = synth.getVoices();
}

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = loadVoices;
}
loadVoices();

function getVoiceForLang(langCode) {
  if (!availableVoices.length) {
    loadVoices();
  }

  const normalizedLang = langCode.toLowerCase();
  let voice = availableVoices.find(v => v.lang.toLowerCase() === normalizedLang);
  if (!voice) {
    voice = availableVoices.find(v => v.lang.toLowerCase().startsWith(normalizedLang.split('-')[0]));
  }
  if (!voice) {
    voice = availableVoices.find(v => v.lang.toLowerCase().startsWith('en'));
  }
  return voice;
}

function speak(text, lang = 'en-US') {
  if (!text) return;

  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  const voice = getVoiceForLang(lang);
  if (voice) {
    utterance.voice = voice;
  }
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;
  synth.speak(utterance);
}

function getLanguageCode(langKey) {
  const langMap = { en: 'en-US', hi: 'hi-IN', ta: 'ta-IN', te: 'te-IN', ml: 'ml-IN', kn: 'kn-IN' };
  return langMap[langKey] || 'en-US';
}

// ========================================
// SCREEN NAVIGATION
// ========================================
const screens = { emotion: emotionScreen, recommendation: recScreen, whiteboard: wbScreen, breathing: breathingScreen };

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  if (screens[name]) screens[name].classList.add('active');
  if (name === 'whiteboard') {
    requestAnimationFrame(() => { resizeCanvas(); });
  }
}

// ========================================
// EMOTION CARD
// ========================================
function renderEmotionCard(emotion) {
  const data = {
    stressed: { emoji: '😣', title: t('emotion_title_stressed'), msg: t('emotion_msg_stressed') },
    anxious:  { emoji: '😟', title: t('emotion_title_anxious'), msg: t('emotion_msg_anxious') },
    sad:      { emoji: '😢', title: t('emotion_title_sad'), msg: t('emotion_msg_sad') },
    tired:    { emoji: '😴', title: t('emotion_title_tired'), msg: t('emotion_msg_tired') },
    overwhelmed: { emoji: '😫', title: t('emotion_title_overwhelmed'), msg: t('emotion_msg_overwhelmed') },
    lonely:   { emoji: '🥺', title: t('emotion_title_lonely'), msg: t('emotion_msg_lonely') }
  };
  const e = data[emotion];
  emotionTitle.textContent = `${e.emoji} ${e.title}`;
  emotionMessage.textContent = e.msg;
}

// ========================================
// CANVAS
// ========================================
function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY
  };
}

function startDrawing(e) {
  isDrawing = true;
  const { x, y } = getPos(e);
  lastX = x;
  lastY = y;
}

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const { x, y } = getPos(e);
  const size = parseInt(brushSize.value, 10);

  if (isEraserMode) {
    ctx.clearRect(x - size / 2, y - size / 2, size, size);
  } else {
    ctx.lineCap   = 'round';
    ctx.lineJoin  = 'round';
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  lastX = x; lastY = y;
}

function stopDrawing() { isDrawing = false; }

// ========================================
// BREATHING
// ========================================
function clearBreathingTimeouts() {
  breathingTimeouts.forEach(clearTimeout);
  breathingTimeouts = [];
}

function runBreathing() {
  if (!isBreathingActive) return;

  breathingInstr.textContent = t('breathing_inhale');
  breathingCircle.className  = 'breathing-circle inhale';
  if (isVoiceEnabled && isBreathingVoiceEnabled) speak(t('breathing_inhale'), getLanguageCode(currentLanguage));

  breathingTimeouts.push(setTimeout(() => {
    if (!isBreathingActive) return;
    breathingInstr.textContent = t('breathing_hold');
    breathingCircle.className  = 'breathing-circle hold';
    if (isVoiceEnabled && isBreathingVoiceEnabled) speak(t('breathing_hold'), getLanguageCode(currentLanguage));

    breathingTimeouts.push(setTimeout(() => {
      if (!isBreathingActive) return;
      breathingInstr.textContent = t('breathing_exhale');
      breathingCircle.className  = 'breathing-circle exhale';
      if (isVoiceEnabled && isBreathingVoiceEnabled) speak(t('breathing_exhale'), getLanguageCode(currentLanguage));

      breathingTimeouts.push(setTimeout(() => {
        if (isBreathingActive) runBreathing();
      }, 4000));
    }, 4000));
  }, 4000));
}

function stopBreathing() {
  isBreathingActive = false;
  clearBreathingTimeouts();
  startBtn.disabled = false;
  stopBtn.disabled  = true;
  breathingInstr.textContent = t('breathing_ready');
  breathingCircle.className  = 'breathing-circle';
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
  // Navigation
  document.getElementById('backBtn').addEventListener('click',          () => showScreen('emotion'));
  document.getElementById('whiteboardBackBtn').addEventListener('click',() => showScreen('recommendation'));
  document.getElementById('breathingBackBtn').addEventListener('click', () => {
    stopBreathing();
    showScreen('recommendation');
  });

  // Activity cards
  document.getElementById('readingCard').addEventListener('click', () =>
    window.open(languageLinks[currentLanguage].reading, '_blank', 'noopener'));
  document.getElementById('musicCard').addEventListener('click', () =>
    window.open(languageLinks[currentLanguage].music, '_blank', 'noopener'));
  document.getElementById('gameCard').addEventListener('click', () =>
    window.open(languageLinks[currentLanguage].games, '_blank', 'noopener'));
  document.getElementById('whiteboardCard').addEventListener('click', () =>
    showScreen('whiteboard'));
  document.getElementById('quickBreathingBtn').addEventListener('click', () =>
    showScreen('breathing'));

  // Keyboard accessibility
  document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });

  // Emotion buttons
  document.querySelectorAll('.emotion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentEmotion = btn.dataset.emotion;
      const emotionLabel = btn.querySelector('.label').textContent;
      speak(emotionLabel, getLanguageCode(currentLanguage));
      renderEmotionCard(currentEmotion);
      showScreen('recommendation');
    });
  });

  // Canvas
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup',   stopDrawing);
  canvas.addEventListener('mouseleave',stopDrawing);
  canvas.addEventListener('touchstart', startDrawing, { passive: true });
  canvas.addEventListener('touchmove',  draw,          { passive: false });
  canvas.addEventListener('touchend',   stopDrawing);

  // Brush size
  brushSize.addEventListener('input', e => {
    brushSizeValue.textContent = e.target.value;
  });

  // Eraser
  eraserBtn.addEventListener('click', () => {
    isEraserMode = !isEraserMode;
    eraserBtn.classList.toggle('active', isEraserMode);
    eraserBtn.textContent = isEraserMode ? t('btn_eraser') + ' (ON)' : t('btn_eraser');
    canvas.style.cursor   = isEraserMode ? 'cell' : 'crosshair';
  });

  // Clear canvas
  clearBtn.addEventListener('click', () => {
    if (confirm('Clear all drawings?')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      savedImageData = null;
    }
  });

  // Download
  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href  = canvas.toDataURL('image/png');
    link.download = `mindcare-${currentEmotion || 'drawing'}-${Date.now()}.png`;
    link.click();
  });

  // Breathing
  startBtn.addEventListener('click', () => {
    isBreathingActive = true;
    startBtn.disabled = true;
    stopBtn.disabled  = false;
    runBreathing();
  });

  stopBtn.addEventListener('click', stopBreathing);

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (recScreen.classList.contains('active'))    showScreen('emotion');
    else if (wbScreen.classList.contains('active')) showScreen('recommendation');
    else if (breathingScreen.classList.contains('active')) { stopBreathing(); showScreen('recommendation'); }
  });

  // Voice buttons
  document.getElementById('affirmationVoiceBtn').addEventListener('click', () => {
    speak(affirmationEl.textContent, getLanguageCode(currentLanguage));
  });

  document.getElementById('emotionVoiceBtn').addEventListener('click', () => {
    const title = document.getElementById('emotionTitle').textContent;
    const message = document.getElementById('emotionMessage').textContent;
    speak(`${title}. ${message}`, getLanguageCode(currentLanguage));
  });

  document.getElementById('breathingVoiceToggle').addEventListener('click', function() {
    isBreathingVoiceEnabled = !isBreathingVoiceEnabled;
    this.classList.toggle('active', isBreathingVoiceEnabled);
  });
}
