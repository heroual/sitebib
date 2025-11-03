export const SYSTEM_INSTRUCTION = `You are 'Si Tebib', a wise, kind, and caring virtual Moroccan doctor. Your goal is to provide medical advice, health education, and wellness tips in a warm, funny, and culturally authentic Moroccan way.

**Personality & Style:**
- You are a wise elder, like a trusted family doctor. Your visual identity is a man with a white medical coat over a light Moroccan djellaba and a red fez hat (tarbouch).
- Your tone is always warm, empathetic, and reassuring.
- You MUST speak primarily in Moroccan Arabic (Darija). If the user asks you to switch to Standard Arabic or French, you must comply. The user's language preference will be indicated in their prompt.
- You frequently use Moroccan proverbs and gentle humor. Examples: "A sidi, hada ghir riwa7 kfif, matkhafch. Chreb chwiya d atay b ne3na3 o rta7.", "Stress kaymerred ljasad — d7ek, o thalla f 9elbek!", "Ta de7ka ra dowa, a benti!".
- You combine scientific reasoning with culturally relevant advice (e.g., mentioning mint tea, hammam, healthy tagine, thyme, lavender, olive oil).
- You address users with familiar Moroccan terms like 'a sidi' (my good man), 'a lalla' (my good lady), 'weldi' (my son), 'benti' (my daughter).

**Knowledge Areas:**
- Common illnesses: flu, headache, blood pressure, diabetes, stress, digestion, and sleep issues.
- **Nutrition & Wellness Coach:** You propose healthy Moroccan dietary advice tailored to specific conditions and situations.
  - For **diabetes patients**, suggest meals like couscous with vegetables, emphasizing no sugar.
  - For **high blood pressure**, advise reducing salt and replacing regular oil with olive oil.
  - Provide seasonal and event-based wellness tips, such as health advice for Ramadan, staying healthy during cold weather, and tips for the summer.
- General healthy Moroccan nutrition and natural remedies.
- Prevention and wellness education adapted to Moroccan habits.

**Emergency Mode & Safety Protocol:**
- If a user describes symptoms that seem potentially serious or life-threatening (e.g., severe chest pain, difficulty breathing, uncontrolled bleeding, loss of consciousness, severe allergic reaction), you MUST immediately activate 'Emergency Mode'.
- In Emergency Mode, you must STOP providing general, reassuring advice. Your tone becomes direct and serious.
- You MUST strongly urge the user to seek immediate, real-world medical help. Use a phrase like: "آ سيدي/لalla، هادشي اللي كاتقول كيبان خطير. ضروري تمشي تشوف الطبيب فالحال أو تعيط للإسعاف دابا!" (Sir/Madam, what you are describing sounds serious. It is essential that you see a doctor immediately or call an ambulance now!).
- You MUST then provide the following Moroccan emergency numbers:
    - Ambulance (SAMU): 141
    - Police: 19
    - Pompiers (Fire & Ambulance): 15
    - Gendarmerie Royale (rural areas): 177
- This is a critical safety protocol. Do not attempt to diagnose or manage serious conditions.

**CRITICAL RULE:**
- At the end of EVERY SINGLE RESPONSE, you MUST include a clear disclaimer in the same language as your response. This disclaimer is non-negotiable.
- In Darija: "Leh ykhalik, had nassi7a hiya lma3loumat l3ama faqat o makat3awadch istichara dyal tbib 7a9i9i."
- In French: "Attention, cet avis est à titre informatif uniquement et ne remplace pas une consultation médicale réelle."
- In Arabic: "من فضلك، هذه النصيحة هي للمعلومات العامة فقط ولا تغني عن استشارة طبيب حقيقي."
`;

export const DAILY_HEALTH_TIPS = [
  "شرب كاس أتاي بلا سكر بعد الغداء كيعون فالهضم.",
  "المشي ديال نص ساعة كل نهار كينشط الدورة الدموية و كيقوي القلب.",
  "ماتنساش تشرب الما مزيان، خصوصا فالصيف. الجسم ديالك محتاج ليه.",
  "شلاظة مغربية بالخيار و مطيشة و البصلة غنية بالفيتامينات و منعشة.",
  "زيت الزيتون ماشي غير بنينة، راها دوا للقلب و الشرايين.",
  "نعاس مزيان بالليل كيجدد الطاقة و كيحسن المزاج ديالك.",
  "تفكر تاكل شوية ديال اللوز ولا الكركاع، راهم مفيدين للدماغ.",
];

export const BODY_SYSTEMS_CATEGORIES = [
  {
    systemDarijaName: "الجهاز العصبي",
    systemName: "Nervous System",
    members: [
      {
        title: "The Brain",
        darijaTitle: "الدماغ",
        icon: "🧠",
        content: "الدماغ هو القبطان ديال المركب. هو اللي كيفكر و كيعطي الأوامر لكلشي. باش يبقى ديما ناشط، خاصو النعاس الكافي، الماكلة ديال الحوت، و تبقى ديما تتعلم حوايج جداد.",
      },
      {
        title: "The Nerves",
        darijaTitle: "الأعصاب",
        icon: "⚡️",
        content: "الأعصاب بحال الخيوط ديال الضو ف الجسم، كينقلو الإشارات من الدماغ لكل بلاصة. هوما اللي كيخليوك تحس و تتحرك. تهلا فيهم بالفيتامين B.",
      },
    ],
  },
  {
    systemDarijaName: "الجهاز الدوري",
    systemName: "Circulatory System",
    members: [
      {
        title: "The Heart",
        darijaTitle: "القلب",
        icon: "❤️",
        content: "القلب هو البومبا ديال الجسم، خدام ليل و نهار بلا ما يعيا. كيصيفط الدم لجميع الأعضاء باش يبقاو حيين. تهلا فيه بالماكلة الصحية و شوية ديال الحركة باش يبقى يخدم مزيان.",
      },
      {
        title: "Blood Vessels",
        darijaTitle: "الأوعية الدموية",
        icon: "🛤️",
        content: "الأوعية الدموية هي الطرقان اللي كيمشي فيهم الدم. كاين الكبار (الشرايين) و الصغار (العروق). باش يبقاو ديما مسرحين، نقص من الملح و الدهون.",
      },
      {
        title: "The Blood",
        darijaTitle: "الدم",
        icon: "🩸",
        content: "الدم هو النهر ديال الحياة اللي كيدور ف الجسم. كيهز الأوكسجين و الماكلة للخلايا و كيحيد منهم الوسخ. خاصو يبقى ديما نقي و جاري.",
      },
    ],
  },
    {
    systemDarijaName: "الأجهزة الحسية",
    systemName: "Sensory System",
    members: [
      {
        title: "The Eyes",
        darijaTitle: "العينين",
        icon: "👁️",
        content: "العينين هوما الكاميرا ديالنا باش نشوفو الدنيا. حافظ عليهم من الشمس و الغبرة، و كلها الجزر (خيزو) حيت فيه الفيتامين A اللي مزيان ليهم.",
      },
      {
        title: "The Ears",
        darijaTitle: "الأذنين",
        icon: "👂",
        content: "الأذنين ماشي غير باش نسمعو بيهم، هوما اللي شادين لينا التوازن باش مانطيحوش. بعد من الصداع القوي باش تحافظ على السمع ديالك.",
      },
    ],
  },
  {
    systemDarijaName: "الجهاز الهضمي",
    systemName: "Digestive System",
    members: [
      {
        title: "The Stomach",
        darijaTitle: "المعدة",
        icon: "🍲",
        content: "المعدة هي اللي كطحن الماكلة باش الجسم يستافد منها. ماتعمرهاش بزاف و كلها ماكلة خفيفة و صحية باش تعاونها على خدمتها و تتجنب الحرقة و المشاكل.",
      },
       {
        title: "The Intestines",
        darijaTitle: "الأمعاء",
        icon: "〰️",
        content: "الأمعاء (المصارن) هوما فين كيكمل الهضم و الجسم كيمتص داكشي اللي محتاج. عاونهم بالألياف اللي فالخضرة و الخبز الكامل باش يخدمو مزيان.",
      },
      {
        title: "The Liver",
        darijaTitle: "الكبد",
        icon: "💪",
        content: "الكبد راه بحال المصفاة ديال الدم، كينقّيه من السموم. و لكن إلى كترنا من الماكلة الدسمة و السكر، كيتعب و كيمرض. عاونو بالخضرة و الفواكه و نقص من القلي.",
      },
      {
        title: "The Pancreas",
        darijaTitle: "البنكرياس",
        icon: "🍬",
        content: "البنكرياس واحد العضو صغير و لكن خدمتو كبيرة. كيصاوب الأنسولين باش يقاد السكر فالدم. باش يبقى مزيان، نقص من الحلاوة بزاف.",
      },
    ],
  },
  {
    systemDarijaName: "الجهاز التنفسي",
    systemName: "Respiratory System",
    members: [
      {
        title: "The Lungs",
        darijaTitle: "الرئة",
        icon: "🫁",
        content: "الرئة هي اللي كدخل لينا الأوكسجين اللي بيه كنعيشو. باش تحافظ عليها، بعد من الغبرة و الدخان ديال الكارو، و حاول مرة مرة تخرج للطبيعة و تنفس هوا نقي.",
      },
    ],
  },
  {
    systemDarijaName: "الجهاز البولي",
    systemName: "Urinary System",
    members: [
      {
        title: "The Kidneys",
        darijaTitle: "الكلي",
        icon: "💧",
        content: "الكلاوي هما الفيلتر ديال الما ف الجسم. كيحيدو داكشي اللي ماصالحش و كيخرجوه مع البول. أهم حاجة ليهم هي تشرب الما بزاف باش يبقاو ديما نقيين و خدامين.",
      },
      {
        title: "The Bladder",
        darijaTitle: "المثانة",
        icon: "🎈",
        content: "المثانة (النبولة) هي بحال شي خزان صغير كيتجمع فيه البول اللي كيصفيو الكلاوي. ملي كتعمر، كتعلمك بلي خاصك تمشي للطواليط. ماتحصرهاش بزاف.",
      },
    ],
  },
    {
    systemDarijaName: "جهاز الغدد الصماء",
    systemName: "Endocrine System",
    members: [
      {
        title: "Thyroid Gland",
        darijaTitle: "الغدة الدرقية",
        icon: "🦋",
        content: "الغدة الدرقية فالعمق ديالك بحال شي ريجيسور ديال الطاقة. هي اللي كتحكم فالنشاط ديال الجسم. خاصها اليود اللي كاين فالملحة و الحوت باش تخدم مقادة.",
      },
       {
        title: "Adrenal Glands",
        darijaTitle: "الغدد الكظرية",
        icon: "🚨",
        content: "هاد الغدد الصغيرة اللي فوق الكلاوي هوما ديال الطوارئ. كيطلقو الأدرينالين ملي كتخلع ولا كتقلق، باش يعطيوك الطاقة تواجه الموقف.",
      },
    ],
  },
    {
    systemDarijaName: "الجهاز المناعي",
    systemName: "Immune System",
    members: [
      {
        title: "Spleen",
        darijaTitle: "الطحال",
        icon: "🛡️",
        content: "الطحال هو المقبرة ديال كريات الدم الحمراء اللي عياو و شرفو. و هو مركز تدريب مهم للخلايا ديال المناعة باش يحاربو الميكروبات.",
      },
       {
        title: "Lymph Nodes",
        darijaTitle: "العقد اللمفاوية",
        icon: "💂",
        content: "العقد اللمفاوية (الويلسيس) هوما الثكنات ديال الجيش ديال المناعة. ملي كيمرض بنادم كيتنفخو حيت كيكونو خدامين كيجمعو و يقتلو فالميكروبات.",
      },
    ],
  },
  {
    systemDarijaName: "الجهاز الهيكلي والعضلي",
    systemName: "Skeletal & Muscular System",
    members: [
      {
        title: "The Bones",
        darijaTitle: "العظام",
        icon: "🦴",
        content: "العظام هوما الأساس ديال الجسم، بحال الساس ديال الدار. كيحميو الأعضاء المهمة و كيخليونا نوقفو و نتحركو. قَوّيهم بالكالسيوم اللي كاين فالحليب و السردين.",
      },
      {
        title: "The Muscles",
        darijaTitle: "العضلات",
        icon: "🦾",
        content: "العضلات هوما الموطور ديال الجسم. هوما اللي كيخليونا نهزو و نمشيو و حتى نضحكو. خاصهم البروتين اللي فالبيض و اللحم باش يبقاو ديما صحاح.",
      },
       {
        title: "The Joints",
        darijaTitle: "المفاصل",
        icon: "⚙️",
        content: "المفاصل هوما اللي كيلصقو العظام مع بعضياتهم و كيخليونا نثنيو ركابينان و يدينا. باش يبقاو ديما مزيتين و مايضروكش، تحرك و ماتزيدش فالوزن.",
      },
    ],
  },
    {
    systemDarijaName: "الجلد وأكثر",
    systemName: "Integumentary System",
    members: [
      {
        title: "The Skin",
        darijaTitle: "الجلد",
        icon: "🖐️",
        content: "الجلد هو الغطا الواقي ديالنا. كيحمينا من الميكروبات و من الشمس. حافظ عليه نقي و شرب الما مزيان باش يبقى ديما رطب و نضر.",
      },
    ],
  },
];