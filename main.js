const captions = {
  attitude: {
    english: [
      "Built different, moving silent.",
      "Low talk, high standards.",
      "Not rude, just selective."
    ],
    punjabi: [
      "ਚੁੱਪ ਰਹਿਣਾ ਕਮਜ਼ੋਰੀ ਨਹੀਂ।",
      "ਰਵੱਈਆ ਨਹੀਂ, ਸੋਚ ਵੱਖਰੀ ਆ।",
      "ਘੱਟ ਬੋਲਦੇ ਆਂ, ਪਰ ਸਹੀ।"
    ],
    roman: [
      "Chup rehna kamzori nahi.",
      "Style simple, attitude strong.",
      "Apna time aayega."
    ],
    hinglish: [
      "Level apna alag hai 😎",
      "Shor nahi, kaam bolta hai.",
      "Apni lane mein fast."
    ]
  },

  sad: {
    english: [
      "Smiling outside, broken inside.",
      "Some pain never leaves."
    ],
    punjabi: [
      "ਹੱਸਦੇ ਰਹੇ, ਦਰਦ ਛੁਪਾ ਕੇ।",
      "ਖਾਮੋਸ਼ੀ ਵੀ ਦਰਦ ਹੁੰਦੀ ਆ।"
    ],
    roman: [
      "Dard lafzan ch nahi aunda.",
      "Khamoshi sab keh jandi aa."
    ],
    hinglish: [
      "Dil toota, par shor nahi.",
      "Khamoshi bhi cheekh hoti hai."
    ]
  },

  motivation: {
    english: [
      "Work in silence, win loud.",
      "No excuses, only results."
    ],
    punjabi: [
      "ਮਿਹਨਤ ਕਦੇ ਧੋਖਾ ਨਹੀਂ ਦਿੰਦੀ।",
      "ਸਬਰ ਦਾ ਫਲ ਮਿੱਠਾ।"
    ],
    roman: [
      "Mehnat kabhi fail nahi hundi.",
      "Roz thoda behtar."
    ],
    hinglish: [
      "Aaj mehnat, kal success 🔥",
      "Focus. Grind. Repeat."
    ]
  },

  love: {
    english: [
      "You feel like home ❤️",
      "Love in its purest form."
    ],
    punjabi: [
      "ਤੂੰ ਮੇਰੀ ਹਰ ਦੁਆ ਵਿੱਚ ❤️",
      "ਤੇਰੇ ਨਾਲ ਸਭ ਸੋਹਣਾ।"
    ],
    roman: [
      "Tu hi sukoon aa ❤️",
      "Bas tera saath."
    ],
    hinglish: [
      "Tu ho toh sab theek ❤️",
      "Dil ne tujhe chuna."
    ]
  },

  funny: {
    english: [
      "Mood depends on food 😂",
      "Still waiting for my glow up."
    ],
    punjabi: [
      "ਮੂਡ WiFi ਵਰਗਾ ਆ 😂",
      "ਹੱਸਣਾ ਵੀ ਕਲਾ ਆ।"
    ],
    roman: [
      "Life serious, main nahi 😂",
      "Mood off, battery low."
    ],
    hinglish: [
      "Zindagi comedy ban gayi 😂",
      "Full vibes, no tension."
    ]
  }
};

const songs = {
  attitude: ["295 – Sidhu Moosewala", "Still Rollin – Shubh"],
  sad: ["Qismat – Ammy Virk", "Channa Mereya – Arijit Singh"],
  motivation: ["Apna Time Aayega", "Zinda – Bhaag Milkha Bhaag"],
  love: ["Heeriye – Jasleen Royal", "Perfect – Ed Sheeran"],
  funny: ["Badtameez Dil", "Ullu Ka Pattha"]
};

function generate() {
  const mood = document.getElementById("mood").value;
  const lang = document.getElementById("language").value;

  const captionList = captions[mood][lang];
  const songList = songs[mood];

  document.getElementById("captionText").innerText =
    captionList[Math.floor(Math.random() * captionList.length)];

  document.getElementById("songText").innerText =
    songList[Math.floor(Math.random() * songList.length)];
}

function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}
