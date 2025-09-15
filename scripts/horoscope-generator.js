const zodiacSigns = {
  January: { symbol: "♑", name: "Capricorn" },
  February: { symbol: "♒", name: "Aquarius" },
  March: { symbol: "♓", name: "Pisces" },
  April: { symbol: "♈", name: "Aries" },
  May: { symbol: "♉", name: "Taurus" },
  June: { symbol: "♊", name: "Gemini" },
  July: { symbol: "♋", name: "Cancer" },
  August: { symbol: "♌", name: "Leo" },
  September: { symbol: "♍", name: "Virgo" },
  October: { symbol: "♎", name: "Libra" },
  November: { symbol: "♏", name: "Scorpio" },
  December: { symbol: "♐", name: "Sagittarius" }
};

const fortunes = [
  "Today is a day to embrace new opportunities. Something wonderful is about to happen!",
  "Your creative energy is at a peak. Use it to solve a problem you've been pondering.",
  "A surprise encounter will lead to an exciting new connection. Keep your heart open.",
  "Financial blessings are coming your way. Be wise with your resources.",
  "Travel is in your stars. A journey will bring you valuable insights.",
  "Your hard work is about to pay off. Success is just around the corner.",
  "Someone from your past will reenter your life with important news.",
  "Trust your intuition today. It will guide you in the right direction.",
  "A risk taken now will lead to great rewards. Have courage!",
  "Focus on self-care. Your well-being is the foundation of your happiness.",
  "An unexpected opportunity will arise. Say yes without hesitation.",
  "Your positive attitude will attract good things. Spread kindness wherever you go."
];

const birthMonthSelect = document.getElementById('birthMonth');
const generateBtn = document.getElementById('generateBtn');
const resultDiv = document.getElementById('result');

function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

function displayHoroscope() {
  const birthMonth = birthMonthSelect.value;

  if (!birthMonth) {
      resultDiv.innerHTML = `
          <div class="zodiac-sign">❓</div>
          <div class="zodiac-name">Unknown</div>
          <p class="fortune">Please select your birth month first.</p>
      `;
      resultDiv.classList.remove('fade-in');
      void resultDiv.offsetWidth;
      resultDiv.classList.add('fade-in');
      return;
  }

  const zodiac = zodiacSigns[birthMonth];
  const fortune = getRandomFortune();

  resultDiv.innerHTML = `
      <div class="zodiac-sign">${zodiac.symbol}</div>
      <div class="zodiac-name">${zodiac.name}</div>
      <p class="fortune">${fortune}</p>
  `;

  resultDiv.classList.remove('fade-in');
  void resultDiv.offsetWidth;
  resultDiv.classList.add('fade-in');
}

generateBtn.addEventListener('click', displayHoroscope);

function createConstellation() {
  const constellation = document.getElementById('constellation');
  const starsCount = 100;
  
  for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const size = Math.random() * 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite alternate`;
      
      constellation.appendChild(star);
  }

  const style = document.createElement('style');
  style.textContent = `
      @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
      }
  `;
  document.head.appendChild(style);
}
        
createConstellation();