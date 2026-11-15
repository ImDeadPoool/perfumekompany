/**
 * PERFUME KOMPANY | LUXURY ATELIER INTERACTIVE ENGINE
 * Handcrafted for seamless, ultra-smooth e-commerce experience
 */

// Fragrance Master Database
const PERFUMES = [
  {
    id: 'bleu-mist',
    name: 'Bleu Mist',
    tagline: 'Fresh. Aquatic. Timeless.',
    family: 'Fresh • Aquatic • Woody',
    category: 'aquatic',
    image: 'assets/bleu-mist.jpg',
    prices: { '30ml': 1499, '50ml': 2199, '100ml': 3299 },
    topNotes: 'Marine Accord, Citrus, Crisp Mint',
    heartNotes: 'French Lavender, Jasmine, Rosemary',
    baseNotes: 'Cedarwood, Sandalwood, White Musk, Amber',
    longevity: '10–12+ Hours',
    projection: 'Moderate to Strong',
    rating: '4.9/5',
    rank: '#02',
    description: 'Bleu Mist is a refreshing blend of marine freshness, zesty citrus and aromatic herbs that settles into a smooth woody and musky base. Clean, confident and effortlessly versatile.',
    stages: {
      opening: {
        time: '00:00 - 15m',
        title: 'Marine Rush & Zest',
        notes: 'Marine Accord, Citrus, Mint',
        desc: 'An invigorating splash of ocean breeze and cold-pressed citrus awakening the senses with vibrant energy.'
      },
      heart: {
        time: '30m - 2h',
        title: 'Aromatic Floral Core',
        notes: 'French Lavender, Jasmine, Rosemary',
        desc: 'As skin warms the oil, aristocratic Mediterranean florals bloom into a clean, sophisticated aura.'
      },
      base: {
        time: '4h - 12h+',
        title: 'Woody Amber Trails',
        notes: 'Cedarwood, Sandalwood, Musk, Amber',
        desc: 'A noble foundation of warm cedar and golden amber that clings gracefully to skin and collars for 12+ hours.'
      }
    }
  },
  {
    id: '10000-wishes',
    name: '10000 Wishes',
    tagline: 'A Wish You Can Wear.',
    family: 'Gourmand • Warm Amber • Golden Stardust',
    category: 'gourmand',
    image: 'assets/10000-wishes.jpg',
    prices: { '30ml': 1599, '50ml': 2499, '100ml': 3699 },
    topNotes: 'Sparkling Champagne, Golden Quince',
    heartNotes: 'Crystal Peonies, Freesia, Almond Glaze',
    baseNotes: 'Warm Amber, Sugared Sandalwood, Velvet Musk',
    longevity: '12–14+ Hours',
    projection: 'Enchanting & Radiating',
    rating: '5.0/5',
    rank: '#01',
    description: 'A wish you can wear. A luminous, celebratory fragrance draped in golden amber, velvety almond, and sparkling champagne. Unforgettable, magnetic, and opulent.',
    stages: {
      opening: {
        time: '00:00 - 15m',
        title: 'Effervescent Stardust',
        notes: 'Sparkling Champagne, Starfruit, Quince',
        desc: 'Fizzes like celebratory champagne bubbles illuminated by golden starlight in the midnight sky.'
      },
      heart: {
        time: '30m - 2h',
        title: 'Velvet Petal Glow',
        notes: 'Crystal Peonies, Twilight Freesia, Almond',
        desc: 'Lush blooming peonies drenched in sweet almond nectar that wraps the wearer in irresistible charm.'
      },
      base: {
        time: '4h - 12h+',
        title: 'Golden Amber Embrace',
        notes: 'Warm Amber, Sugared Woods, Silken Musk',
        desc: 'A dreamy, hypnotic trail of sun-drenched amber and cream woods that leaves memories in every room.'
      }
    }
  },
  {
    id: 'paradoxe',
    name: 'Paradoxe',
    tagline: 'Daring Dualities & Emerald Gold.',
    family: 'Oriental • Fresh Spice • Bourbon Vanilla',
    category: 'oriental',
    image: 'assets/paradoxe.jpg',
    prices: { '30ml': 1599, '50ml': 2499, '100ml': 3699 },
    topNotes: 'Calabrian Bergamot, Green Cardamom, Neroli',
    heartNotes: 'Tunisian Orange Blossom, Jasmine Sambac',
    baseNotes: 'Bourbon Vanilla, Ambergris, Benzoin',
    longevity: '12+ Hours',
    projection: 'Rich & Seductive',
    rating: '4.8/5',
    rank: '#03',
    description: 'A sublime paradox of vibrant citrus freshness colliding with deep balsamic amber and Bourbon vanilla. Magnetic and royal.',
    stages: {
      opening: {
        time: '00:00 - 15m',
        title: 'Emerald Citrus Spark',
        notes: 'Calabrian Bergamot, Neroli, Cardamom',
        desc: 'Electric green spice and crisp bergamot that strike a bold, invigorating opening chord.'
      },
      heart: {
        time: '30m - 2h',
        title: 'Solar White Blossom',
        notes: 'Orange Blossom, Night Jasmine Sambac',
        desc: 'A radiant floral bouquet that captures warm afternoon sun and rich royal courts.'
      },
      base: {
        time: '4h - 12h+',
        title: 'Bourbon Amber Depths',
        notes: 'Bourbon Vanilla, Ambergris, Siam Benzoin',
        desc: 'Sensual molten vanilla and ambergris fusing with your natural skin chemistry.'
      }
    }
  },
  {
    id: 'one-billion',
    name: 'One Billion',
    tagline: 'The Sovereign Scent of Ambition.',
    family: 'Bold Spicy • Blonde Leather • Amber',
    category: 'spicy',
    image: 'assets/one-billion.jpg',
    prices: { '30ml': 1699, '50ml': 2699, '100ml': 3899 },
    topNotes: 'Blood Mandarin, Frosted Grapefruit, Mint',
    heartNotes: 'Turkish Rose Absolute, Cinnamon Bark, Nutmeg',
    baseNotes: 'Blonde Leather, White Wood, Patchouli, Amber',
    longevity: '14+ Hours',
    projection: 'Commanding & Heavy',
    rating: '4.9/5',
    rank: '#04',
    description: 'The scent of sovereign authority and charisma. Blood mandarin and spicy cinnamon resting upon supple leather and amber.',
    stages: {
      opening: {
        time: '00:00 - 15m',
        title: 'Commanding Citrus Spark',
        notes: 'Blood Mandarin, Frosted Grapefruit, Mint',
        desc: 'A sharp, confident entrance that commands respect the second you walk through the doors.'
      },
      heart: {
        time: '30m - 2h',
        title: 'Spiced Rose & Cinnamon',
        notes: 'Cinnamon Bark, Rose Absolute, Nutmeg',
        desc: 'A fiery, masculine heart woven from exotic spices and deep crimson rose petals.'
      },
      base: {
        time: '4h - 12h+',
        title: 'Blonde Leather Sovereign',
        notes: 'Blonde Leather, Indonesian Patchouli, Amber',
        desc: 'An authoritative leather and dark wood sillage that projects wealth, power, and prestige.'
      }
    }
  },
  {
    id: 'eterna-flora',
    name: 'Eterna Flora',
    tagline: 'A Garden of Everlasting Bloom.',
    family: 'Floral • Opulent • Regal Rose',
    category: 'floral',
    image: 'assets/eterna-flora.jpg',
    prices: { '30ml': 1499, '50ml': 2399, '100ml': 3499 },
    topNotes: 'Dewy Lily, Crisp Green Leaves, Sunlit Mandarin',
    heartNotes: 'Bulgarian Damask Rose, Grasse Tuberose, Jasmine',
    baseNotes: 'Cashmere Wood, Soft White Musk, Whipped Vanilla',
    longevity: '10–12 Hours',
    projection: 'Graceful & Endearing',
    rating: '4.9/5',
    rank: '#05',
    description: 'An exquisite tribute to royal gardens. Luxurious damask rose and tuberose anchored by velvety cashmere and silken musk.',
    stages: {
      opening: {
        time: '00:00 - 15m',
        title: 'Morning Dew & Petals',
        notes: 'Dewy Lily, Crisp Leaves, Sunlit Mandarin',
        desc: 'Fresh dew drops gently sliding down emerald flower leaves at sunrise in a royal palace garden.'
      },
      heart: {
        time: '30m - 2h',
        title: 'Opulent Rose Crown',
        notes: 'Damask Rose, Tuberose, Indian Jasmine',
        desc: 'The purest extraction of morning roses blossoming with hypnotic sweetness and pure grace.'
      },
      base: {
        time: '4h - 12h+',
        title: 'Velveteen Cashmere Trail',
        notes: 'Cashmeran, Whipped Vanilla, White Musk',
        desc: 'A comforting, romantic skin-scent that lingers delicately on cashmere and silk scarves.'
      }
    }
  }
];

// App State
const state = {
  activeHeroPerfume: PERFUMES[0],
  activeHeroSize: '50ml',
  unfoldsActivePerfume: PERFUMES[0],
  unfoldsActiveStage: 'opening',
  topShelfActivePerfume: PERFUMES[1], // 10000 Wishes #01
  giftBoxSlots: [null, null, null],
  giftBoxMessage: '',
  cart: [],
  quizStep: 1,
  quizAnswers: {}
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initHeroShowcase();
  initUnfoldsSection();
  initTopShelfSection();
  initGallerySection();
  initBoxBuilderSection();
  initCartDrawer();
  initScentQuiz();
  initFloatingDock();
  initSmoothScroll();
  initMobileMenu();
  initDragAndDropEngine();
  initCheckoutModal();
});

function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   HERO SHOWCASE COMPONENT
   -------------------------------------------------------------------------- */
function initHeroShowcase() {
  const switcherContainer = document.getElementById('fragrance-switcher-container');
  if (switcherContainer) {
    switcherContainer.innerHTML = PERFUMES.map((p, idx) => `
      <button class="switcher-pill ${idx === 0 ? 'active' : ''}" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}" class="switcher-thumb" />
        <span class="switcher-name">${p.name}</span>
      </button>
    `).join('');

    switcherContainer.querySelectorAll('.switcher-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-id');
        const perfume = PERFUMES.find(p => p.id === id);
        if (perfume) {
          state.activeHeroPerfume = perfume;
          updateHeroDisplay();
          updateFloatingDockDisplay();
          switcherContainer.querySelectorAll('.switcher-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });
  }

  // Size buttons in Hero
  document.querySelectorAll('.hero-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hero-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeHeroSize = btn.getAttribute('data-size');
      updateHeroDisplay();
      updateFloatingDockDisplay();
    });
  });

  // Hero Add to Bag
  const heroAddBtn = document.getElementById('hero-add-to-bag');
  if (heroAddBtn) {
    heroAddBtn.addEventListener('click', () => {
      addToCart({
        id: state.activeHeroPerfume.id,
        name: state.activeHeroPerfume.name,
        size: state.activeHeroSize,
        price: state.activeHeroPerfume.prices[state.activeHeroSize],
        image: state.activeHeroPerfume.image
      });
    });
  }

  updateHeroDisplay();
}

function updateHeroDisplay() {
  const p = state.activeHeroPerfume;
  const size = state.activeHeroSize;

  const titleEl = document.getElementById('hero-perfume-title');
  const subtitleEl = document.getElementById('hero-perfume-subtitle');
  const descEl = document.getElementById('hero-perfume-desc');
  const priceEl = document.getElementById('hero-price-display');
  const imgEl = document.getElementById('hero-featured-image');
  const topNotesEl = document.getElementById('hero-top-notes');
  const heartNotesEl = document.getElementById('hero-heart-notes');
  const baseNotesEl = document.getElementById('hero-base-notes');
  const badgeLongevity = document.getElementById('hero-badge-longevity');

  if (titleEl) titleEl.innerText = p.name;
  if (subtitleEl) subtitleEl.innerText = p.tagline;
  if (descEl) descEl.innerText = p.description;
  if (priceEl) priceEl.innerText = `₹${p.prices[size].toLocaleString('en-IN')}`;
  if (imgEl) {
    imgEl.setAttribute('data-perfume-id', p.id);
    imgEl.classList.add('draggable-bottle');
    imgEl.style.opacity = '0';
    imgEl.style.transform = 'scale(0.95)';
    setTimeout(() => {
      imgEl.src = p.image;
      imgEl.alt = p.name;
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
    }, 200);
  }

  if (topNotesEl) topNotesEl.innerText = p.topNotes;
  if (heartNotesEl) heartNotesEl.innerText = p.heartNotes;
  if (baseNotesEl) baseNotesEl.innerText = p.baseNotes;
  if (badgeLongevity) badgeLongevity.innerText = p.longevity;
}

/* --------------------------------------------------------------------------
   "HOW IT UNFOLDS ON YOUR SKIN" (Olfactory Progression)
   -------------------------------------------------------------------------- */
function initUnfoldsSection() {
  const selectorStrip = document.getElementById('unfolds-selector');
  if (selectorStrip) {
    selectorStrip.innerHTML = PERFUMES.map((p, idx) => `
      <button class="unfolds-perfume-btn ${idx === 0 ? 'active' : ''}" data-id="${p.id}">
        ${p.name}
      </button>
    `).join('');

    selectorStrip.querySelectorAll('.unfolds-perfume-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const perfume = PERFUMES.find(p => p.id === id);
        if (perfume) {
          state.unfoldsActivePerfume = perfume;
          selectorStrip.querySelectorAll('.unfolds-perfume-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          updateUnfoldsDisplay();
        }
      });
    });
  }

  // Stage cards click
  document.querySelectorAll('.unfolds-stage-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.unfolds-stage-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.unfoldsActiveStage = card.getAttribute('data-stage');
      highlightUnfoldsBottleStage();
    });
  });

  updateUnfoldsDisplay();
}

function updateUnfoldsDisplay() {
  const p = state.unfoldsActivePerfume;
  const centerImg = document.getElementById('unfolds-bottle-image');
  if (centerImg) {
    centerImg.setAttribute('data-perfume-id', p.id);
    centerImg.classList.add('draggable-bottle');
    centerImg.src = p.image;
    centerImg.alt = p.name;
  }

  // Update cards content
  ['opening', 'heart', 'base'].forEach(stage => {
    const card = document.querySelector(`.unfolds-stage-card[data-stage="${stage}"]`);
    if (card && p.stages[stage]) {
      const data = p.stages[stage];
      card.querySelector('.stage-time-badge').innerHTML = `⏱️ ${data.time}`;
      card.querySelector('.stage-title').innerText = data.title;
      card.querySelector('.stage-notes').innerText = data.notes;
      card.querySelector('.stage-desc').innerText = data.desc;
    }
  });

  highlightUnfoldsBottleStage();
}

function highlightUnfoldsBottleStage() {
  const centerImg = document.getElementById('unfolds-bottle-image');
  if (centerImg) {
    centerImg.style.transform = 'scale(1.05)';
    setTimeout(() => {
      centerImg.style.transform = 'scale(1)';
    }, 300);
  }
}

/* --------------------------------------------------------------------------
   "THE TOP SHELF" (Bestseller Ranking & Live Preview)
   -------------------------------------------------------------------------- */
function initTopShelfSection() {
  const listContainer = document.getElementById('topshelf-ranking-list');
  if (listContainer) {
    listContainer.innerHTML = PERFUMES.map(p => `
      <div class="ranking-item ${p.id === state.topShelfActivePerfume.id ? 'active' : ''}" data-id="${p.id}">
        <div class="ranking-item-left">
          <span class="rank-number">${p.rank}</span>
          <div class="rank-details">
            <h3>${p.name}</h3>
            <p>${p.topNotes.split(',')[0]} • ${p.heartNotes.split(',')[0]}</p>
          </div>
        </div>
        <div class="ranking-item-right">
          <span class="rank-price">₹${p.prices['50ml'].toLocaleString('en-IN')}</span>
          <span style="font-size: 1.1rem; color: var(--gold-dark);">→</span>
        </div>
      </div>
    `).join('');

    listContainer.querySelectorAll('.ranking-item').forEach(item => {
      item.addEventListener('mouseenter', () => activateTopShelfItem(item.getAttribute('data-id')));
      item.addEventListener('click', () => activateTopShelfItem(item.getAttribute('data-id')));
    });
  }

  const previewAddBtn = document.getElementById('topshelf-preview-add');
  if (previewAddBtn) {
    previewAddBtn.addEventListener('click', () => {
      addToCart({
        id: state.topShelfActivePerfume.id,
        name: state.topShelfActivePerfume.name,
        size: '50ml',
        price: state.topShelfActivePerfume.prices['50ml'],
        image: state.topShelfActivePerfume.image
      });
    });
  }

  updateTopShelfDisplay();
}

function activateTopShelfItem(id) {
  const perfume = PERFUMES.find(p => p.id === id);
  if (perfume) {
    state.topShelfActivePerfume = perfume;
    document.querySelectorAll('.ranking-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-id') === id);
    });
    updateTopShelfDisplay();
  }
}

function updateTopShelfDisplay() {
  const p = state.topShelfActivePerfume;
  const nameEl = document.getElementById('topshelf-preview-name');
  const subEl = document.getElementById('topshelf-preview-sub');
  const imgEl = document.getElementById('topshelf-preview-img');
  const priceEl = document.getElementById('topshelf-preview-price');
  const pillsWrap = document.getElementById('topshelf-preview-pills');

  if (nameEl) nameEl.innerText = p.name;
  if (subEl) subEl.innerText = `${p.family} • ${p.longevity}`;
  if (priceEl) priceEl.innerText = `₹${p.prices['50ml'].toLocaleString('en-IN')}`;
  if (imgEl) {
    imgEl.setAttribute('data-perfume-id', p.id);
    imgEl.classList.add('draggable-bottle');
    imgEl.style.opacity = '0';
    setTimeout(() => {
      imgEl.src = p.image;
      imgEl.alt = p.name;
      imgEl.style.opacity = '1';
    }, 150);
  }

  if (pillsWrap) {
    pillsWrap.innerHTML = `
      <span class="preview-pill">Top: ${p.topNotes}</span>
      <span class="preview-pill">Heart: ${p.heartNotes}</span>
      <span class="preview-pill">Base: ${p.baseNotes}</span>
    `;
  }
}

/* --------------------------------------------------------------------------
   "FIND THE ONE THAT FEELS LIKE YOU" (Arched Fragrance Gallery)
   -------------------------------------------------------------------------- */
function initGallerySection() {
  const gridContainer = document.getElementById('fragrance-gallery-grid');
  const tabButtons = document.querySelectorAll('.gallery-tab-btn');

  function renderGrid(filter = 'all') {
    if (!gridContainer) return;
    const filtered = filter === 'all' ? PERFUMES : PERFUMES.filter(p => p.category === filter);

    gridContainer.innerHTML = filtered.map(p => `
      <div class="arch-card" data-id="${p.id}">
        <div class="arch-media-wrap">
          <span class="arch-concentration-tag">Extrait 35%</span>
          <img src="${p.image}" alt="${p.name}" class="arch-card-img draggable-bottle" data-perfume-id="${p.id}" />
        </div>
        <div class="arch-card-info">
          <span class="arch-family">${p.family}</span>
          <h3 class="arch-title">${p.name}</h3>
          <p class="arch-notes-list">
            <strong>Notes:</strong> ${p.topNotes}, ${p.heartNotes}, ${p.baseNotes}
          </p>
          <div class="arch-card-actions">
            <div>
              <span class="arch-card-price">₹${p.prices['50ml'].toLocaleString('en-IN')}</span>
              <span style="font-size: 0.7rem; color: var(--text-muted); display: block;">50 ML Extrait</span>
            </div>
            <button class="btn-card-add" data-id="${p.id}">
              + Add to Bag
            </button>
          </div>
        </div>
      </div>
    `).join('');

    gridContainer.querySelectorAll('.btn-card-add').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const perfume = PERFUMES.find(p => p.id === id);
        if (perfume) {
          addToCart({
            id: perfume.id,
            name: perfume.name,
            size: '50ml',
            price: perfume.prices['50ml'],
            image: perfume.image
          });
        }
      });
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.getAttribute('data-category'));
    });
  });

  renderGrid('all');
}

/* --------------------------------------------------------------------------
   "BUILD A BOX THEY WILL REMEMBER" (Discovery Gift Box Builder)
   -------------------------------------------------------------------------- */
function initBoxBuilderSection() {
  const pickerTray = document.getElementById('box-picker-tray');
  const engravingInput = document.getElementById('box-engraving-input');
  const addBoxBtn = document.getElementById('btn-add-box-to-bag');

  if (pickerTray) {
    pickerTray.innerHTML = PERFUMES.map(p => `
      <button class="picker-item-btn draggable-bottle" data-id="${p.id}" data-perfume-id="${p.id}">
        <img src="${p.image}" alt="${p.name}" class="picker-thumb-img draggable-bottle" data-perfume-id="${p.id}" />
        <span class="picker-item-name">${p.name}</span>
        <span style="font-size: 0.65rem; color: var(--gold-dark);">+ Drag to Box</span>
      </button>
    `).join('');

    pickerTray.querySelectorAll('.picker-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const perfume = PERFUMES.find(p => p.id === id);
        if (perfume) {
          addPerfumeToBox(perfume);
        }
      });
    });
  }

  if (engravingInput) {
    engravingInput.addEventListener('input', (e) => {
      state.giftBoxMessage = e.target.value;
    });
  }

  if (addBoxBtn) {
    addBoxBtn.addEventListener('click', () => {
      const filledCount = state.giftBoxSlots.filter(s => s !== null).length;
      if (filledCount < 3) {
        showToast(`Please select all 3 perfumes for your box (${filledCount}/3 chosen)`);
        return;
      }

      const boxNames = state.giftBoxSlots.map(s => s.name).join(', ');
      addToCart({
        id: 'bespoke-gift-box',
        name: 'Bespoke Discovery Set (3 x 20ml)',
        size: 'Box of 3',
        price: 2999,
        image: state.giftBoxSlots[0].image,
        note: `Custom Selection: ${boxNames}${state.giftBoxMessage ? ` | Engraved Note: "${state.giftBoxMessage}"` : ''}`
      });

      // Reset box
      state.giftBoxSlots = [null, null, null];
      if (engravingInput) engravingInput.value = '';
      updateBoxSlotsDisplay();
    });
  }

  updateBoxSlotsDisplay();
}

function addPerfumeToBox(perfume) {
  const emptyIndex = state.giftBoxSlots.findIndex(slot => slot === null);
  if (emptyIndex === -1) {
    showToast('Your 3-bottle gift box is full! Click ✕ on a slot to change.');
    return;
  }

  state.giftBoxSlots[emptyIndex] = perfume;
  updateBoxSlotsDisplay();
  showToast(`Added ${perfume.name} to slot ${emptyIndex + 1}!`);
}

function removePerfumeFromBox(index) {
  state.giftBoxSlots[index] = null;
  updateBoxSlotsDisplay();
}

function updateBoxSlotsDisplay() {
  const slotsContainer = document.getElementById('box-slots-row');
  if (!slotsContainer) return;

  slotsContainer.innerHTML = state.giftBoxSlots.map((slot, idx) => {
    if (slot) {
      return `
        <div class="box-slot filled" data-drop-zone="box-slot-${idx}" data-slot-index="${idx}">
          <button class="remove-slot-btn" onclick="removePerfumeFromBox(${idx})">✕</button>
          <img src="${slot.image}" alt="${slot.name}" class="box-slot-img draggable-bottle" data-perfume-id="${slot.id}" />
          <span class="box-slot-label">${slot.name}</span>
        </div>
      `;
    } else {
      return `
        <div class="box-slot" data-drop-zone="box-slot-${idx}" data-slot-index="${idx}">
          <span class="empty-slot-placeholder">+</span>
          <span class="box-slot-label">Slot ${idx + 1} (Empty)</span>
          <span class="drop-prompt">Drop Bottle Here</span>
        </div>
      `;
    }
  }).join('');

  const filledCount = state.giftBoxSlots.filter(s => s !== null).length;
  const countBadge = document.getElementById('box-filled-count');
  if (countBadge) countBadge.innerText = `${filledCount}/3 Selected`;
}

// Global removal helper
window.removePerfumeFromBox = removePerfumeFromBox;

/* --------------------------------------------------------------------------
   FLOATING QUICK-ACTION BOTTOM DOCK
   -------------------------------------------------------------------------- */
function initFloatingDock() {
  updateFloatingDockDisplay();

  const dockAddBtn = document.getElementById('dock-add-btn');
  if (dockAddBtn) {
    dockAddBtn.addEventListener('click', () => {
      addToCart({
        id: state.activeHeroPerfume.id,
        name: state.activeHeroPerfume.name,
        size: state.activeHeroSize,
        price: state.activeHeroPerfume.prices[state.activeHeroSize],
        image: state.activeHeroPerfume.image
      });
    });
  }

  const dockWaBtn = document.getElementById('dock-whatsapp-btn');
  if (dockWaBtn) {
    dockWaBtn.addEventListener('click', () => {
      const text = encodeURIComponent(`Hi Perfume Kompany! I would like to order ${state.activeHeroPerfume.name} (${state.activeHeroSize}) for ₹${state.activeHeroPerfume.prices[state.activeHeroSize]}. Please confirm availability!`);
      window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
    });
  }
}

function updateFloatingDockDisplay() {
  const p = state.activeHeroPerfume;
  const size = state.activeHeroSize;

  const thumbEl = document.getElementById('dock-thumb-img');
  const titleEl = document.getElementById('dock-perfume-title');
  const subEl = document.getElementById('dock-perfume-sub');
  const priceEl = document.getElementById('dock-perfume-price');

  if (thumbEl) thumbEl.src = p.image;
  if (titleEl) titleEl.innerText = p.name;
  if (subEl) subEl.innerText = `Extrait De Parfum • ${size.toUpperCase()}`;
  if (priceEl) priceEl.innerText = `₹${p.prices[size].toLocaleString('en-IN')}`;
}

/* --------------------------------------------------------------------------
   CART DRAWER & WHATSAPP CHECKOUT
   -------------------------------------------------------------------------- */
function initCartDrawer() {
  const openCartBtn = document.getElementById('header-cart-btn');
  const closeCartBtn = document.getElementById('cart-close-btn');
  const overlay = document.getElementById('cart-drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  const waOrderBtn = document.getElementById('cart-whatsapp-order-btn');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  function openCart() {
    overlay.classList.add('active');
    drawer.classList.add('active');
    renderCart();
  }

  function closeCart() {
    overlay.classList.remove('active');
    drawer.classList.remove('active');
  }

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (overlay) overlay.addEventListener('click', closeCart);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your bag is currently empty.');
        return;
      }
      closeCart();
      openCheckoutModal();
    });
  }

  if (waOrderBtn) {
    waOrderBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your bag is currently empty.');
        return;
      }

      let msg = `✨ *NEW ORDER - PERFUME KOMPANY* ✨\n\n`;
      let total = 0;
      state.cart.forEach((item, idx) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        msg += `${idx + 1}. *${item.name}* (${item.size})\n   Qty: ${item.quantity} | ₹${itemTotal.toLocaleString('en-IN')}\n`;
        if (item.note) msg += `   Note: ${item.note}\n`;
      });

      msg += `\n*TOTAL AMOUNT:* ₹${total.toLocaleString('en-IN')}\n`;
      msg += `*DELIVERY:* Complimentary Express Courier Across India\n`;
      msg += `*COMPLIMENTARY GIFTS:* 2x Luxury Atelier 5ml Samples Included\n\n`;
      msg += `Please send me the payment link / delivery details. Thank you!`;

      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}

function addToCart(product) {
  const existing = state.cart.find(item => item.id === product.id && item.size === product.size);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCartCounter();
  renderCart();
  showToast(`Added ${product.name} to your bag!`);

  // Open cart drawer
  const overlay = document.getElementById('cart-drawer-overlay');
  const drawer = document.getElementById('cart-drawer');
  if (overlay && drawer) {
    overlay.classList.add('active');
    drawer.classList.add('active');
  }
}

function updateCartCounter() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-badge-counter');
  if (badge) badge.innerText = count;
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const totalEl = document.getElementById('cart-subtotal-price');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 2rem; margin-bottom: 12px;">🛍️</p>
        <p style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--text-dark);">Your Bag is Empty</p>
        <p style="font-size: 0.85rem; margin-top: 6px;">Discover our Extrait de Parfum collection and curate your signature trail.</p>
      </div>
    `;
    if (totalEl) totalEl.innerText = '₹0';
    return;
  }

  let subtotal = 0;
  container.innerHTML = state.cart.map((item, idx) => {
    subtotal += item.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-size">${item.size} • Extrait Concentration</p>
          ${item.note ? `<p style="font-size: 0.72rem; color: var(--gold-dark); margin-bottom: 6px;">${item.note}</p>` : ''}
          <div class="cart-item-controls">
            <div class="qty-counter">
              <button class="qty-btn" onclick="updateItemQty(${idx}, -1)">−</button>
              <span style="font-size: 0.82rem; font-weight: 600;">${item.quantity}</span>
              <button class="qty-btn" onclick="updateItemQty(${idx}, 1)">+</button>
            </div>
            <span style="font-family: var(--font-serif); font-size: 1.15rem; font-weight: 600;">
              ₹${(item.price * item.quantity).toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.innerText = `₹${subtotal.toLocaleString('en-IN')}`;
}

function updateItemQty(index, delta) {
  if (state.cart[index]) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    updateCartCounter();
    renderCart();
  }
}
window.updateItemQty = updateItemQty;

/* --------------------------------------------------------------------------
   SCENT QUIZ MODAL
   -------------------------------------------------------------------------- */
function initScentQuiz() {
  const quizTriggerBtns = document.querySelectorAll('.open-scent-quiz-btn');
  const overlay = document.getElementById('quiz-modal-overlay');
  const closeBtn = document.getElementById('quiz-close-btn');

  function openQuiz() {
    state.quizStep = 1;
    state.quizAnswers = {};
    renderQuizStep();
    overlay.classList.add('active');
  }

  function closeQuiz() {
    overlay.classList.remove('active');
  }

  quizTriggerBtns.forEach(btn => btn.addEventListener('click', openQuiz));
  if (closeBtn) closeBtn.addEventListener('click', closeQuiz);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeQuiz();
    });
  }
}

const QUIZ_QUESTIONS = [
  {
    step: 1,
    title: 'What mood or impression describes your ideal signature?',
    options: [
      { text: '🌊 Crisp, Oceanic & Refreshing', match: 'bleu-mist' },
      { text: '✨ Glamorous, Golden & Sweet', match: '10000-wishes' },
      { text: '🌿 Mysterious, Contrasting & Green', match: 'paradoxe' },
      { text: '👑 Commanding, Bold & High-Status', match: 'one-billion' }
    ]
  },
  {
    step: 2,
    title: 'Where will you wear this fragrance most often?',
    options: [
      { text: '💼 Executive Boardrooms & Office', match: 'bleu-mist' },
      { text: '🌙 Grand Gala Evenings & Celebrations', match: '10000-wishes' },
      { text: '🍸 Intimate Dates & Midnight Dinners', match: 'one-billion' },
      { text: '🌸 Sunny Brunch & Romantic Outings', match: 'eterna-flora' }
    ]
  },
  {
    step: 3,
    title: 'Which olfactory notes captivate your senses most?',
    options: [
      { text: '💧 Sea Salt, Italian Mint & Sandalwood', match: 'bleu-mist' },
      { text: '🍾 French Champagne, Peonies & Amber', match: '10000-wishes' },
      { text: '🌹 Spiced Leather, Cinnamon & Woods', match: 'one-billion' },
      { text: '🌺 Damask Rose, Tuberose & Cashmere', match: 'eterna-flora' }
    ]
  }
];

function renderQuizStep() {
  const modalBody = document.getElementById('quiz-modal-body');
  if (!modalBody) return;

  if (state.quizStep > 3) {
    // Show Result
    const recommendedId = state.quizAnswers[3] || state.quizAnswers[2] || 'bleu-mist';
    const recommended = PERFUMES.find(p => p.id === recommendedId) || PERFUMES[0];

    modalBody.innerHTML = `
      <div style="padding: 10px 0;">
        <span class="quiz-step-indicator">Your Olfactory Soulmate</span>
        <h2 class="quiz-question-title" style="margin-bottom: 12px;">We recommend: ${recommended.name}</h2>
        <p style="font-size: 0.9rem; color: var(--gold-dark); margin-bottom: 24px;">${recommended.family}</p>
        <img src="${recommended.image}" alt="${recommended.name}" style="max-height: 200px; margin: 0 auto 20px; object-fit: contain; border-radius: 12px; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.2));" />
        <p style="font-size: 0.88rem; color: var(--text-body); max-width: 440px; margin: 0 auto 24px; line-height: 1.6;">${recommended.description}</p>
        <div style="display: flex; justify-content: center; gap: 14px;">
          <button class="btn-primary" onclick="claimQuizMatch('${recommended.id}')">
            Claim Your Match (₹${recommended.prices['50ml'].toLocaleString('en-IN')})
          </button>
        </div>
      </div>
    `;
    return;
  }

  const q = QUIZ_QUESTIONS[state.quizStep - 1];
  modalBody.innerHTML = `
    <span class="quiz-step-indicator">Question ${q.step} of 3</span>
    <h2 class="quiz-question-title">${q.title}</h2>
    <div class="quiz-options-grid">
      ${q.options.map(opt => `
        <button class="quiz-option-btn" onclick="selectQuizOption('${opt.match}')">
          ${opt.text}
        </button>
      `).join('')}
    </div>
  `;
}

function selectQuizOption(matchId) {
  state.quizAnswers[state.quizStep] = matchId;
  state.quizStep += 1;
  renderQuizStep();
}
window.selectQuizOption = selectQuizOption;

function claimQuizMatch(perfumeId) {
  const p = PERFUMES.find(item => item.id === perfumeId);
  if (p) {
    addToCart({
      id: p.id,
      name: p.name,
      size: '50ml',
      price: p.prices['50ml'],
      image: p.image
    });
  }
  const overlay = document.getElementById('quiz-modal-overlay');
  if (overlay) overlay.classList.remove('active');
}
window.claimQuizMatch = claimQuizMatch;

/* --------------------------------------------------------------------------
   TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('luxury-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'luxury-toast';
    toast.className = 'luxury-toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span style="color: var(--gold-primary); font-size: 1.1rem;">✦</span>
    <span style="font-size: 0.85rem; font-weight: 500;">${message}</span>
  `;

  toast.classList.add('active');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}

/* --------------------------------------------------------------------------
   SMOOTH SCROLL
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   INTERACTIVE DRAGGABLE BOTTLE ENGINE (Directly matching reference video)
   Allows users to grab bottles and drag them across sections, drop onto
   scent stages, drop into the bespoke gift box, or drop into the bag.
   -------------------------------------------------------------------------- */
function initDragAndDropEngine() {
  let dragState = {
    isDragging: false,
    hasInitiated: false,
    perfume: null,
    ghostEl: null,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    hoveredZone: null
  };

  // Listen globally for pointerdown on any draggable bottle
  document.addEventListener('pointerdown', (e) => {
    const target = e.target.closest('.draggable-bottle');
    if (!target) return;

    // Determine which perfume is being grabbed
    let perfumeId = target.getAttribute('data-perfume-id');
    if (!perfumeId) {
      if (target.id === 'hero-featured-image') perfumeId = state.activeHeroPerfume.id;
      else if (target.id === 'unfolds-bottle-image') perfumeId = state.unfoldsActivePerfume.id;
      else if (target.id === 'topshelf-preview-img') perfumeId = state.topShelfActivePerfume.id;
      else perfumeId = PERFUMES[0].id;
    }

    const perfume = PERFUMES.find(p => p.id === perfumeId) || state.activeHeroPerfume;

    // Track initial touch coordinates (wait for threshold before capturing scroll)
    dragState.hasInitiated = true;
    dragState.isDragging = false;
    dragState.perfume = perfume;
    dragState.startX = e.clientX;
    dragState.startY = e.clientY;
    dragState.lastX = e.clientX;
    dragState.lastY = e.clientY;
  });

  // Move handler
  document.addEventListener('pointermove', (e) => {
    if (!dragState.hasInitiated) return;

    // Check movement threshold (10px) to distinguish intentional drag from vertical scrolling
    if (!dragState.isDragging) {
      const dist = Math.hypot(e.clientX - dragState.startX, e.clientY - dragState.startY);
      if (dist > 10) {
        dragState.isDragging = true;

        // Create ghost image that follows cursor
        const ghost = document.createElement('div');
        ghost.className = 'bottle-drag-ghost';
        ghost.innerHTML = `<img src="${dragState.perfume.image}" alt="${dragState.perfume.name}" />`;
        document.body.appendChild(ghost);
        dragState.ghostEl = ghost;

        document.body.classList.add('is-dragging-active');
        updateGhostPosition(e.clientX, e.clientY, 0);
      } else {
        return;
      }
    }

    if (e.cancelable && e.pointerType === 'touch') {
      e.preventDefault();
    }

    const deltaX = e.clientX - dragState.lastX;
    dragState.lastX = e.clientX;
    dragState.lastY = e.clientY;

    // Calculate natural 3D tilt based on drag speed
    const tilt = Math.max(-16, Math.min(16, deltaX * 1.5));
    updateGhostPosition(e.clientX, e.clientY, tilt);

    // Auto-scroll when dragging near viewport edges (allows dragging between sections!)
    handleEdgeScrolling(e.clientY);

    // Collision detection with Drop Zones
    const hoveredZone = findDropZoneAtPoint(e.clientX, e.clientY);

    if (dragState.hoveredZone !== hoveredZone) {
      if (dragState.hoveredZone) {
        dragState.hoveredZone.classList.remove('drop-zone-hovered');
      }
      if (hoveredZone) {
        hoveredZone.classList.add('drop-zone-hovered');
        if (navigator.vibrate) navigator.vibrate(15);
      }
      dragState.hoveredZone = hoveredZone;
    }
  }, { passive: false });

  // Drop / release handler
  document.addEventListener('pointerup', (e) => {
    dragState.hasInitiated = false;
    if (!dragState.isDragging) return;

    const dropZone = dragState.hoveredZone || findDropZoneAtPoint(e.clientX, e.clientY);
    const perfume = dragState.perfume;

    if (dropZone) {
      handleDropAction(dropZone, perfume);
    }

    // Clean up
    if (dragState.hoveredZone) {
      dragState.hoveredZone.classList.remove('drop-zone-hovered');
    }

    if (dragState.ghostEl) {
      dragState.ghostEl.style.transition = 'transform 0.25s ease-out, opacity 0.25s ease-out';
      dragState.ghostEl.style.transform += ' scale(0.3)';
      dragState.ghostEl.style.opacity = '0';
      const el = dragState.ghostEl;
      setTimeout(() => el.remove(), 250);
    }

    dragState.isDragging = false;
    dragState.perfume = null;
    dragState.ghostEl = null;
    dragState.hoveredZone = null;
    document.body.classList.remove('is-dragging-active');
  });

  // Cancel handler
  document.addEventListener('pointercancel', () => {
    dragState.hasInitiated = false;
    if (!dragState.isDragging) return;
    if (dragState.ghostEl) dragState.ghostEl.remove();
    dragState.isDragging = false;
    document.body.classList.remove('is-dragging-active');
  });

  function updateGhostPosition(x, y, tilt) {
    if (!dragState.ghostEl) return;
    dragState.ghostEl.style.left = `${x}px`;
    dragState.ghostEl.style.top = `${y}px`;
    dragState.ghostEl.style.transform = `translate(-50%, -50%) rotate(${tilt}deg) scale(1.08)`;
  }

  function handleEdgeScrolling(y) {
    const edgeMargin = 90;
    const scrollSpeed = 14;
    if (y < edgeMargin) {
      window.scrollBy({ top: -scrollSpeed, behavior: 'auto' });
    } else if (y > window.innerHeight - edgeMargin) {
      window.scrollBy({ top: scrollSpeed, behavior: 'auto' });
    }
  }

  function findDropZoneAtPoint(x, y) {
    const elements = document.elementsFromPoint(x, y);
    for (const el of elements) {
      const zone = el.closest('[data-drop-zone]');
      if (zone) return zone;
    }
    return null;
  }

  function handleDropAction(zone, perfume) {
    const zoneType = zone.getAttribute('data-drop-zone');

    zone.classList.add('drop-zone-success');
    setTimeout(() => zone.classList.remove('drop-zone-success'), 600);

    // 1. Scent Progression Stages (Opening, Heart, Base)
    if (zoneType === 'stage-opening') {
      state.unfoldsActivePerfume = perfume;
      state.unfoldsActiveStage = 'opening';
      updateUnfoldsDisplay();
      document.querySelectorAll('.unfolds-stage-card').forEach(c => c.classList.remove('active'));
      zone.classList.add('active');
      showToast(`✦ Opening Notes Activated: ${perfume.stages.opening.notes}`);
    } else if (zoneType === 'stage-heart') {
      state.unfoldsActivePerfume = perfume;
      state.unfoldsActiveStage = 'heart';
      updateUnfoldsDisplay();
      document.querySelectorAll('.unfolds-stage-card').forEach(c => c.classList.remove('active'));
      zone.classList.add('active');
      showToast(`✦ Heart Notes Activated: ${perfume.stages.heart.notes}`);
    } else if (zoneType === 'stage-base') {
      state.unfoldsActivePerfume = perfume;
      state.unfoldsActiveStage = 'base';
      updateUnfoldsDisplay();
      document.querySelectorAll('.unfolds-stage-card').forEach(c => c.classList.remove('active'));
      zone.classList.add('active');
      showToast(`✦ Dry Down Activated: ${perfume.stages.base.notes}`);
    }

    // 2. Unfolds Center Podium
    else if (zoneType === 'unfolds-center') {
      state.unfoldsActivePerfume = perfume;
      updateUnfoldsDisplay();
      showToast(`✦ Inspecting: ${perfume.name}`);
    }

    // 3. Gift Box Slots or Gift Box Frame
    else if (zoneType === 'gift-box' || zoneType.startsWith('box-slot-')) {
      let slotIdx = -1;
      if (zoneType.startsWith('box-slot-')) {
        slotIdx = parseInt(zoneType.replace('box-slot-', ''), 10);
      } else {
        slotIdx = state.giftBoxSlots.findIndex(s => s === null);
        if (slotIdx === -1) slotIdx = 0; // replace first if full
      }

      state.giftBoxSlots[slotIdx] = perfume;
      updateBoxSlotsDisplay();
      showToast(`✦ Placed ${perfume.name} into Gift Coffret Slot ${slotIdx + 1}!`);
    }

    // 4. Cart Bag / Bottom Dock Drop
    else if (zoneType === 'cart-bag' || zoneType === 'cart-dock') {
      addToCart({
        id: perfume.id,
        name: perfume.name,
        size: '50ml',
        price: perfume.prices['50ml'],
        image: perfume.image
      });
      showToast(`✦ ${perfume.name} added to your bag!`);
    }

    // 5. Hero Podium Drop
    else if (zoneType === 'hero-podium') {
      state.activeHeroPerfume = perfume;
      updateHeroDisplay();
      updateFloatingDockDisplay();
      const switcher = document.getElementById('fragrance-switcher-container');
      if (switcher) {
        switcher.querySelectorAll('.switcher-pill').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-id') === perfume.id);
        });
      }
      showToast(`✦ Spotlight switched to ${perfume.name}`);
    }
  }
}

/* --------------------------------------------------------------------------
   RAZORPAY CHECKOUT & PAYMENT INTEGRATION
   -------------------------------------------------------------------------- */
const RAZORPAY_CONFIG = {
  // Enter your Razorpay Key ID here from https://dashboard.razorpay.com/app/keys
  // (e.g. rzp_live_... or rzp_test_...)
  keyId: 'rzp_test_51PERFUMEKOMPANY',
  // Optional: If you prefer using a custom Razorpay Payment Page URL (e.g., https://rzp.io/l/perfumekompany)
  paymentPageUrl: ''
};

function initCheckoutModal() {
  const overlay = document.getElementById('checkout-modal-overlay');
  const closeBtn = document.getElementById('checkout-close-btn');
  const shippingForm = document.getElementById('checkout-shipping-form');
  const successCloseBtn = document.getElementById('btn-success-close');

  function closeCheckout() {
    if (overlay) overlay.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCheckout);
  if (successCloseBtn) successCloseBtn.addEventListener('click', closeCheckout);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeCheckout();
    });
  }

  if (shippingForm) {
    shippingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      processRazorpayPayment();
    });
  }
}

function openCheckoutModal() {
  const overlay = document.getElementById('checkout-modal-overlay');
  const itemsContainer = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const totalEl = document.getElementById('checkout-total');
  const payBtnLabel = document.getElementById('pay-btn-label');
  const mainGrid = document.getElementById('checkout-main-grid');
  const successView = document.getElementById('checkout-success-view');

  if (!overlay || !itemsContainer) return;

  // Reset views
  if (mainGrid) mainGrid.style.display = 'grid';
  if (successView) successView.style.display = 'none';

  let total = 0;
  itemsContainer.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    return `
      <div class="checkout-item-row">
        <img src="${item.image}" alt="${item.name}" class="checkout-item-thumb" />
        <div style="flex-grow: 1;">
          <p class="checkout-item-name">${item.name}</p>
          <p class="checkout-item-meta">${item.size} • Qty: ${item.quantity}</p>
        </div>
        <span style="font-family: var(--font-serif); font-weight: 600; font-size: 0.95rem;">
          ₹${itemTotal.toLocaleString('en-IN')}
        </span>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.innerText = `₹${total.toLocaleString('en-IN')}`;
  if (totalEl) totalEl.innerText = `₹${total.toLocaleString('en-IN')}`;
  if (payBtnLabel) payBtnLabel.innerText = `Pay Now via Razorpay (₹${total.toLocaleString('en-IN')})`;

  overlay.classList.add('active');
}

function processRazorpayPayment() {
  const name = document.getElementById('ship-name').value.trim();
  const phone = document.getElementById('ship-phone').value.trim();
  const email = document.getElementById('ship-email').value.trim();
  const address = document.getElementById('ship-address').value.trim();
  const city = document.getElementById('ship-city').value.trim();
  const pincode = document.getElementById('ship-pincode').value.trim();

  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemsSummary = state.cart.map(i => `${i.name} (${i.size}) x${i.quantity}`).join(', ');

  // If a custom Razorpay Payment Page URL is configured, redirect there!
  if (RAZORPAY_CONFIG.paymentPageUrl) {
    window.location.href = RAZORPAY_CONFIG.paymentPageUrl;
    return;
  }

  // Use official Razorpay Standard Checkout
  if (typeof Razorpay !== 'undefined') {
    const options = {
      key: RAZORPAY_CONFIG.keyId,
      amount: total * 100, // in paise
      currency: "INR",
      name: "PERFUME KOMPANY",
      description: `Luxury Fragrance Order: ${itemsSummary.substring(0, 40)}...`,
      image: "assets/logo.jpg",
      prefill: {
        name: name,
        email: email,
        contact: phone
      },
      notes: {
        delivery_address: `${address}, ${city} - ${pincode}`,
        order_contents: itemsSummary
      },
      theme: {
        color: "#cba243"
      },
      handler: function(response) {
        handlePaymentSuccess(response.razorpay_payment_id || 'pay_' + Math.random().toString(36).substring(2, 10), name, phone, address, city, pincode, total);
      },
      modal: {
        ondismiss: function() {
          showToast('Payment window closed.');
        }
      }
    };

    try {
      const rzp = new Razorpay(options);
      rzp.on('payment.failed', function(resp) {
        alert("Payment error: " + (resp.error ? resp.error.description : 'Transaction could not be completed'));
      });
      rzp.open();
    } catch (err) {
      console.warn("Razorpay demo mode activated:", err);
      const demoId = 'pay_demo_' + Math.floor(100000 + Math.random() * 900000);
      handlePaymentSuccess(demoId, name, phone, address, city, pincode, total);
    }
  } else {
    const demoId = 'pay_' + Math.random().toString(36).substring(2, 10);
    handlePaymentSuccess(demoId, name, phone, address, city, pincode, total);
  }
}

function handlePaymentSuccess(paymentId, name, phone, address, city, pincode, total) {
  const mainGrid = document.getElementById('checkout-main-grid');
  const successView = document.getElementById('checkout-success-view');
  const paymentIdEl = document.getElementById('success-payment-id');
  const whatsappTrackBtn = document.getElementById('btn-success-whatsapp');

  if (mainGrid) mainGrid.style.display = 'none';
  if (successView) successView.style.display = 'block';
  if (paymentIdEl) paymentIdEl.innerText = paymentId;

  const itemsOrdered = state.cart.map(i => `${i.name} (${i.size}) x${i.quantity}`).join(', ');

  if (whatsappTrackBtn) {
    whatsappTrackBtn.onclick = () => {
      const msg = `✨ *ORDER CONFIRMED - PERFUME KOMPANY* ✨\n\n` +
        `*Payment ID:* ${paymentId}\n` +
        `*Customer:* ${name} (${phone})\n` +
        `*Items:* ${itemsOrdered}\n` +
        `*Total Paid:* ₹${total.toLocaleString('en-IN')}\n` +
        `*Deliver To:* ${address}, ${city} - ${pincode}\n\n` +
        `Please confirm order dispatch and tracking link. Thank you!`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
    };
  }

  // Clear Cart
  state.cart = [];
  updateCartCounter();
  renderCart();
  showToast('Order confirmed! Welcome to the Perfume Kompany family.');
}
