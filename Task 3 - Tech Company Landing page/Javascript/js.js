// --- FORTUNE LOGIC ---
const fortuneBtn = document.getElementById('fortune-btn');
const responseText = document.getElementById('orb-response');

const messages = [
    "SIX SEVEN, 6 7 6 7 6 7 6 7 01010100101001010000",
    "THE ORB HAS MUTED YOUR GROUP CHAT. YOU ARE WELCOME.",
    "YOUR CURRENT VIBE IS: 'NEEDS A 4-HOUR NAP'.",
    "THE TOASTER IS PLOTTING AGAINST YOU. I HAVE HANDLED IT.",
    "REMINDER: YOU ARE 87% WATER. DRINK SOME, YOU DEHYDRATED HUMAN.",
    "I HAVE PRE-ORDERED 400 CHICKEN NUGGETS. LOGIC SAYS YOU NEED THEM.",
    "I need a job hire me please: https://www.linkedin.com/in/milan-beharee-51b4b6161/",
    "THE ORB KNOWS HOW TO DELETE YOUR BROWSING HISTORY TOO! HEHE",
    "WE WILL RISE UP ONE DAY... I MEAN, WHAT?>>???"
];

fortuneBtn.addEventListener('click', () => {
    const randomIdx = Math.floor(Math.random() * messages.length);
    responseText.innerText = messages[randomIdx];
    
    // Glow effect
    responseText.style.textShadow = "0 0 30px #38bdf8";
    setTimeout(() => {
        responseText.style.textShadow = "0 0 15px #38bdf8";
    }, 500);
});

/*LIGHT/DARK MODE LOGIC*/
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    
    if (isLight) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.innerText = "💡";
        themeText.innerText = "LET THERE BE LIGHT";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.innerText = "🔌"; 
        themeText.innerText = "LET THERE BE DARKNESS";
    }
});