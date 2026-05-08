/* =====================================================
   THE BIG FAT GREEK — Cart & Order System
   ===================================================== */

// ── Full Menu Data ────────────────────────────────────
const MENU = [
  {
    id: 'pita', label: 'Pita Wraps',
    name: 'Pita Bread Wraps',
    desc: 'Authentic Greek wraps packed with flavour, grilled fresh every time. All include tomatoes, onion, fries & sauce. Add Feta or Halloumi for £1.50.',
    items: [
      { id:'pw01', name:'Pork Gyros Pita Wrap',              price:8.00 },
      { id:'pw02', name:'BFG Pork Gyros Wrap (XXL Pita)',    price:11.00 },
      { id:'pw03', name:'Chicken Gyros Pita Wrap',           price:8.00 },
      { id:'pw04', name:'BFG Chicken Gyros Wrap (XXL Pita)', price:11.00 },
      { id:'pw05', name:'Mix Gyros Pita Wrap',               price:8.00 },
      { id:'pw06', name:'BFG Mix Gyros Wrap (XXL Pita)',     price:11.00 },
      { id:'pw07', name:'Pork Souvlaki Pita Wrap',           price:8.00 },
      { id:'pw08', name:'Chicken Souvlaki Pita Wrap',        price:8.00 },
      { id:'pw09', name:'Panseta Pork Pita Wrap',            price:8.00 },
      { id:'pw10', name:'Lamb Souvlaki Pita Wrap',           price:8.40 },
      { id:'pw11', name:'Kebap Pita Wrap',                   price:8.00 },
      { id:'pw12', name:'Greek Sausage Pita Wrap',           price:8.00 },
      { id:'pw13', name:'Bifteki Classic Pita Wrap',         price:8.00 },
      { id:'pw14', name:'Bifteki Chicken Pita Wrap',         price:8.00 },
      { id:'pw15', name:'Halloumi Pita Wrap',                price:8.00, veg:true },
      { id:'pw16', name:'Zucchini Croquets Pita Wrap',       price:8.00, veg:true },
    ]
  },
  {
    id: 'tortilla', label: 'Tortilla Wraps',
    name: 'Tortilla Wraps',
    desc: 'A lighter wrap option with the same bold Greek flavours. All include tomatoes, onion, fries & sauce. Add Feta or Halloumi for £1.50.',
    items: [
      { id:'tw01', name:'Tortilla Gyros Pork Wrap',        price:8.00 },
      { id:'tw02', name:'Tortilla Gyros Chicken Wrap',     price:8.00 },
      { id:'tw03', name:'Tortilla Gyros Mix Wrap',         price:8.00 },
      { id:'tw04', name:'Tortilla Pork Souvlaki Wrap',     price:8.00 },
      { id:'tw05', name:'Tortilla Chicken Souvlaki Wrap',  price:8.00 },
      { id:'tw06', name:'Tortilla Panseta Pork Wrap',      price:8.00 },
      { id:'tw07', name:'Tortilla Lamb Souvlaki Wrap',     price:8.40 },
      { id:'tw08', name:'Tortilla Kebap Wrap',             price:8.00 },
      { id:'tw09', name:'Tortilla Greek Sausage Wrap',     price:8.00 },
      { id:'tw10', name:'Tortilla Halloumi Wrap',          price:8.00, veg:true },
      { id:'tw11', name:'Tortilla Zucchini Croquetes Wrap',price:8.00, veg:true },
    ]
  },
  {
    id: 'boxes', label: 'Box Meals',
    name: 'Main Box Meals',
    desc: 'Full Greek meal boxes served with pita bread, fries, dip, and side salad.',
    items: [
      { id:'bx01', name:'Pork Gyros Main Box',      price:14.50 },
      { id:'bx02', name:'Chicken Gyros Main Box',   price:14.50 },
      { id:'bx03', name:'Mix Gyros Main Box',       price:15.00 },
      { id:'bx04', name:'Pork Souvlaki Main Box',   price:14.50 },
      { id:'bx05', name:'Chicken Souvlaki Main Box',price:14.50 },
      { id:'bx06', name:'Panseta Pork Main Box',    price:14.50 },
      { id:'bx07', name:'Lamb Souvlaki Main Box',   price:16.50 },
      { id:'bx08', name:'Kebap Main Box',           price:14.50 },
      { id:'bx09', name:'Greek Sausage Main Box',   price:14.50 },
      { id:'bx10', name:'Classic Bifteki Main Box', price:14.50 },
      { id:'bx11', name:'Chicken Bifteki Main Box', price:14.50 },
      { id:'bx12', name:'Halloumi Main Box',        price:14.50, veg:true },
    ]
  },
  {
    id: 'grill', label: 'Grill Boxes',
    name: 'Grill Main Boxes',
    desc: 'Bigger grills, bigger flavours, and proper portions made for serious appetites.',
    items: [
      { id:'gr01', name:'Grill Chicken Main Box',          price:15.50, sub:'Half boneless chicken, fries, dip, salad' },
      { id:'gr02', name:'Souvlaki Mix Main Box',           price:18.00, sub:'Pork, chicken & lamb souvlaki, halloumi, fries, dip, salad' },
      { id:'gr03', name:'BFG Mega Mix (Family Box)',       price:40.00, sub:'Pork & chicken gyros, 2 sausages, 2 kebabs, 2 panseta, 2 fries, Greek salad, large dip' },
    ]
  },
  {
    id: 'extras', label: 'Extras',
    name: 'Extras',
    desc: 'Perfect for adding a little extra flavour to your order.',
    items: [
      { id:'ex01', name:'Pork Souvlaki Single Skewer',    price:3.50 },
      { id:'ex02', name:'Chicken Souvlaki Single Skewer', price:3.50 },
      { id:'ex03', name:'Lamb Souvlaki Single Skewer',    price:3.70 },
      { id:'ex04', name:'Kebap Single',                   price:3.50 },
      { id:'ex05', name:'Greek Sausage Single',           price:3.50 },
      { id:'ex06', name:'Pita Bread',                     price:1.00, veg:true },
    ]
  },
  {
    id: 'salads', label: 'Salads',
    name: 'Salads',
    desc: 'Fresh, vibrant Greek salads made to balance every meal perfectly.',
    items: [
      { id:'sl01', name:'Greek Salad (Horiatiki)',           price:8.00, veg:true },
      { id:'sl02', name:'Chicken Gyros Salad (Caesar Style)',price:8.50 },
      { id:'sl03', name:'Rainbow Salad (Politiki)',          price:8.00, veg:true, sub:'Cabbage, carrot, celery, parsley' },
    ]
  },
  {
    id: 'sides', label: 'Sides',
    name: 'Sides',
    desc: 'The perfect add-ons to complete your Greek feast.',
    items: [
      { id:'sd01', name:'Chicken Nuggets (8pcs) & Fries',        price:5.00 },
      { id:'sd02', name:'Zucchini Croquets (8pcs) & Fries',      price:5.00, veg:true },
      { id:'sd03', name:'Fries',                                  price:3.00, veg:true },
      { id:'sd04', name:'Feta Fries',                            price:4.50, veg:true },
      { id:'sd05', name:'Cheesy Fries',                          price:4.50, veg:true },
      { id:'sd06', name:'Feta with Olive Oil',                   price:4.00, veg:true },
    ]
  },
  {
    id: 'dips', label: 'Dips',
    name: 'Dips',
    desc: 'Freshly made Greek dips packed with flavour.',
    items: [
      { id:'dp01', name:'Tzatziki Dip',                 price:1.50 },
      { id:'dp02', name:'Tirokafteri Dip (Spicy Feta)', price:1.50 },
      { id:'dp03', name:'Hummus Dip',                   price:1.50, veg:true },
      { id:'dp04', name:'Greek Sauce Dip',              price:1.50 },
    ]
  },
  {
    id: 'desserts', label: 'Desserts',
    name: 'Sweets & Desserts',
    desc: 'Traditional Greek desserts for the perfect sweet finish.',
    items: [
      { id:'ds01', name:'Baklava',   price:4.50 },
      { id:'ds02', name:'Kandaifi',  price:4.50 },
    ]
  },
  {
    id: 'drinks', label: 'Drinks',
    name: 'Drinks',
    desc: 'Classic soft drinks and authentic Greek sodas.',
    items: [
      { id:'dr01', name:'Soda Can Drinks',      price:1.20 },
      { id:'dr02', name:'Loux Greek Soda Drinks',price:1.60 },
    ]
  },
];

// ── Cart State ────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('bfg-cart') || '[]');

function saveCart() {
  localStorage.setItem('bfg-cart', JSON.stringify(cart));
}

function addToCart(id, name, price) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }
  saveCart();
  renderCart();
  showToast('Added: ' + name);
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function cartTotal()  { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function cartCount()  { return cart.reduce((s, i) => s + i.qty, 0); }

// ── Render Cart ───────────────────────────────────────
function renderCart() {
  const el      = document.getElementById('cart-items');
  const badge   = document.getElementById('cart-badge');
  const totalEl = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  if (!el) return;

  const count = cartCount();
  if (badge)   badge.textContent = count;
  if (totalEl) totalEl.textContent = '£' + cartTotal().toFixed(2);

  if (cart.length === 0) {
    el.innerHTML = '<p class="cart-empty">🛒 Your basket is empty.<br>Add items from the menu below.</p>';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  el.innerHTML = cart.map(item => `
    <div class="cart-entry">
      <div class="cart-entry-name">${item.name}</div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
      </div>
      <div class="cart-entry-price">£${(item.price * item.qty).toFixed(2)}</div>
    </div>
  `).join('');
}

// ── Build Order Menu ──────────────────────────────────
function buildOrderMenu() {
  const container = document.getElementById('order-menu-sections');
  const tabsEl    = document.getElementById('order-tabs');
  if (!container) return;

  // Tabs
  if (tabsEl) {
    tabsEl.innerHTML = MENU.map(cat => `
      <button class="menu-tab-btn" onclick="scrollToSection('${cat.id}')">${cat.label}</button>
    `).join('');
  }

  // Sections
  container.innerHTML = MENU.map(cat => `
    <div class="menu-section" id="order-${cat.id}">
      <div class="menu-section-header">
        <div class="menu-section-title">${cat.name}</div>
        <p class="menu-section-desc">${cat.desc}</p>
      </div>
      <div class="menu-items-grid">
        ${cat.items.map(item => `
          <div class="menu-item">
            <div class="menu-item-info">
              <div class="menu-item-name-row">
                <span class="menu-item-name">${item.name}</span>
                ${item.veg ? '<span class="veg-badge">V</span>' : ''}
              </div>
              ${item.sub ? `<p class="menu-item-sub">${item.sub}</p>` : ''}
            </div>
            <div class="menu-item-right">
              <span class="menu-item-price">£${item.price.toFixed(2)}</span>
              <button class="add-btn" onclick="addToCart('${item.id}', '${item.name.replace(/'/g,"\\'")}', ${item.price})">+ Add</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function scrollToSection(id) {
  const el = document.getElementById('order-' + id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Checkout ──────────────────────────────────────────
let orderType = 'Collection';

function setOrderType(type) {
  orderType = type;
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('type-' + type).classList.add('selected');
  const addrGroup = document.getElementById('address-group');
  if (addrGroup) addrGroup.style.display = type === 'Delivery' ? 'block' : 'none';
}

function toggleCheckout() {
  if (cart.length === 0) { showToast('Add some items first!'); return; }
  const panel = document.getElementById('checkout-panel');
  if (panel) {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

async function submitOrder(e) {
  e.preventDefault();

  const name    = document.getElementById('o-name').value.trim();
  const phone   = document.getElementById('o-phone').value.trim();
  const address = document.getElementById('o-address')?.value.trim() || '';
  const notes   = document.getElementById('o-notes').value.trim();

  const lines = cart.map(i => `${i.qty}x ${i.name} — £${(i.price * i.qty).toFixed(2)}`).join('\n');
  const total = '£' + cartTotal().toFixed(2);

  const params = {
    customer_name:    name,
    customer_phone:   phone,
    order_type:       orderType,
    customer_address: orderType === 'Delivery' ? address : 'Collection',
    order_items:      lines,
    order_total:      total,
    notes:            notes || 'None',
  };

  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    // Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID after setting up EmailJS
    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params);
    showSuccess(name, phone, total);
    clearCart();
  } catch (err) {
    console.error(err);
    btn.textContent = 'Place Order';
    btn.disabled = false;
    alert('Sorry — there was a problem sending your order.\nPlease call us on 01482 480433.');
  }
}

function showSuccess(name, phone, total) {
  const panel = document.getElementById('checkout-panel');
  if (panel) {
    panel.innerHTML = `
      <div class="order-success">
        <div class="tick">✅</div>
        <h3>Order Received!</h3>
        <p>Thank you, <strong>${name}</strong>! We'll call you on <strong>${phone}</strong> to confirm your order.</p>
        <p style="margin-top:10px;">Order total: <strong>${total}</strong></p>
      </div>`;
  }
}

// ── Toast ─────────────────────────────────────────────
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

// ── Init ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildOrderMenu();
  renderCart();

  document.getElementById('checkout-btn')
    ?.addEventListener('click', toggleCheckout);

  document.getElementById('clear-cart-btn')
    ?.addEventListener('click', () => { if (confirm('Clear your basket?')) clearCart(); });

  document.getElementById('order-form')
    ?.addEventListener('submit', submitOrder);

  // Default: collection selected
  setOrderType('Collection');
});
