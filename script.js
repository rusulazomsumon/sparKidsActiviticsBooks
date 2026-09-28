// Data Array: Easily add or remove topics here
const pyramidTopics = [
  {
    id: 1,
    title: 'The Cat',
    icon: '🐱',
    words: ['The', 'cat', 'is', 'on', 'the', 'mat.'],
  },
  {
    id: 2,
    title: 'The Dog',
    icon: '🐶',
    words: ['I', 'see', 'a', 'big', 'brown', 'dog.'],
  },
  {
    id: 3,
    title: 'The Sun',
    icon: '☀️',
    words: ['The', 'sun', 'is', 'shining', 'so', 'bright.'],
  },
  {
    id: 4,
    title: 'The Car',
    icon: '🚗',
    words: ['Look', 'at', 'that', 'fast', 'red', 'car.'],
  },
  {
    id: 5,
    title: 'The Bird',
    icon: '🐦',
    words: ['A', 'blue', 'bird', 'sings', 'a', 'song.'],
  },
  {
    id: 6,
    title: 'The Fish',
    icon: '🐟',
    words: ['The', 'little', 'fish', 'swims', 'in', 'water.'],
  },
];

const root = document.getElementById('worksheet-root');

// Group worksheets 2 topics per page
for (let i = 0; i < pyramidTopics.length; i += 2) {
  const pageIndex = Math.floor(i / 2) + 1;
  const pageNum = String(pageIndex).padStart(2, '0');
  const item1 = pyramidTopics[i];
  const item2 = pyramidTopics[i + 1];

  const pageHtml = `
    <div class="page">
      <div>
        <table class="header-table">
          <tr>
            <td style="width: 45%;">Name: ______________________</td>
            <td style="width: 30%; text-align: center;">Date: _________</td>
            <td style="width: 25%; text-align: right;">Page: ${pageNum}</td>
          </tr>
        </table>

        <div class="page-title">
          <h1>Sentence Pyramid Reading Practice</h1>
          <p>Read step-by-step and build reading fluency!</p>
        </div>

        <div class="exercise-grid">
          ${renderPyramidCard(item1)}
          ${item2 ? renderPyramidCard(item2) : ''}
        </div>
      </div>

      <div class="footer">
        <span>SparKids | English Reading Series</span>
        <span>Sentence Pyramid Worksheet</span>
      </div>
    </div>
  `;

  root.innerHTML += pageHtml;
}

// Append Advertisement Page at the end of the Book
appendPromoPage();

// Helper Function: Render individual Pyramid Card
function renderPyramidCard(data) {
  let linesHtml = '';
  let currentSentence = [];

  data.words.forEach((word, index) => {
    const previousText = currentSentence.join(' ');
    currentSentence.push(word);

    const lineText = previousText
      ? `${previousText} <span class="highlight-word">${word}</span>`
      : `<span class="highlight-word">${word}</span>`;

    linesHtml += `
      <div class="pyramid-line">
        <span class="step-number">${index + 1}</span>
        <span class="sentence-text">${lineText}</span>
      </div>
    `;
  });

  return `
    <div class="exercise-card">
      <div class="card-header">
        <div class="card-title">
          <span class="topic-icon">${data.icon}</span>
          <span>${data.title}</span>
        </div>
      </div>
      <div class="pyramid-container">
        ${linesHtml}
      </div>
    </div>
  `;
}

// Helper Function: Render Final Promo & WhatsApp Page
function appendPromoPage() {
  const promoHtml = `
    <div class="page">
      <div>
        <div class="page-title">
          <h1>SparKids - লার্নিং কালেকশন</h1>
          <p>প্লে থেকে প্রি-স্কুল শিশুদের সম্পূর্ণ শিক্ষা সহায়িকা</p>
        </div>

        <div class="promo-card">
          <div class="promo-title">
            📚 এই জাতীয় ৩০০+ বইয়ের কালকশন আছে আমাদের!
          </div>

          <p style="text-align: center;">
            আমাদের ফেসবুক গ্রুপ লিংক: <br>
            <a class="promo-link-btn" href="https://m.me/j/NxxIN3umBLLMX81P/?send_source=gc%3Acopy_invite_link_c" target="_blank">
              <i class="fa-brands fa-facebook-messenger"></i> ফেসবুক গ্রুপে যুক্ত হন
            </a>
          </p>

          <div class="package-price">
            💡 আপনি যদি সবগুলি ফাইল আগেই পেতে চান, তাহলে মাত্র <strong>৯৯ টাকা হাদিয়ার বিনিময়ে</strong> নিতে পারেন।
          </div>

          <p><strong>প্যাকেজে যা যা পাবেন:</strong></p>
          <ul class="package-list">
            <li><strong>১।</strong> ক্যামব্রিয়াম স্কুলের নার্সারি, প্লে এবং কেজি-র সিলেবাস ও বই।</li>
            <li><strong>২।</strong> ব্রিটিশ কাউন্সিলের সম্পূর্ণ ওয়ার্কশিট (১০৮ টি, প্লে-কেজি)।</li>
            <li><strong>৩।</strong> Scholastica সহ সকল ইংরেজি মিডিয়ামের সিলেবাস + প্রশ্ন + কারিকুলাম।</li>
            <li><strong>৪।</strong> দেশের সেরা ইংরেজি ও বাংলা মিডিয়ামের সহায়ক সিলেবাসভুক্ত গল্পের বইসমূহ (৫০+)।</li>
          </ul>

          <p style="font-size: 14px; color: #d81b60; font-weight: bold; margin-top: 6px;">
            🎉 মোট ৩০০+ ফাইল পাবেন প্লে থেকে প্রি-স্কুলের জন্য! আর সম্পূর্ণ ফ্রিতে পেতে আমাদের গ্রুপে সাথেই থাকুন, নিয়মিত ফাইলগুলো আপলোড দেওয়া হবে।
          </p>

          <a class="whatsapp-box" href="https://wa.me/8801882834071" target="_blank">
            <i class="fa-brands fa-whatsapp" style="font-size: 24px;"></i>
            <span>WhatsApp / Call: 01882834071</span>
          </a>
        </div>
      </div>

      <div class="footer">
        <span>SparKids Education Hub</span>
        <span>যোগাযোগ: 01882834071</span>
      </div>
    </div>
  `;

  root.innerHTML += promoHtml;
}
