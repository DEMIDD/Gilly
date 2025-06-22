<template>
  <div class="shop-wrapper">
    <!-- Верхнее меню -->
    <header class="shop-header">
      <div class="header-content">
      <!-- Левая часть -->
      <div class="left-section">
        <div class="menu-item green">
          <span class="icon">☰</span>
          <a href="#">Каталог товаров</a>
        </div>
        <div class="menu-item">
          <span class="icon">💬</span>
          <a href="#">Доставка и оплата</a>
        </div>
      </div>

      <!-- Центр -->
      <div class="center-section">
        <input
          class="search-input"
          type="text"
          placeholder="Я хочу купить"
        />
        <button class="search-button">Найти</button>
      </div>

      <!-- Правая часть -->
      <div class="right-section">
        <span class="text">Поддержка</span>
        <span class="icon">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.38281 11.625H3.50781C3.81605 11.625 4.07031 11.8793 4.07031 12.1875V14.3125C4.07031 14.6207 3.81605 14.875 3.50781 14.875H1.38281C1.07458 14.875 0.820312 14.6207 0.820312 14.3125V12.1875C0.820312 11.8793 1.07458 11.625 1.38281 11.625ZM6.69531 11.625H17.3203C17.6285 11.625 17.8828 11.8793 17.8828 12.1875V14.3125C17.8828 14.6207 17.6285 14.875 17.3203 14.875H6.69531C6.38708 14.875 6.13281 14.6207 6.13281 14.3125V12.1875C6.13281 11.8793 6.38708 11.625 6.69531 11.625ZM1.38281 6.3125H3.50781C3.81605 6.3125 4.07031 6.56677 4.07031 6.875V9C4.07031 9.30823 3.81605 9.5625 3.50781 9.5625H1.38281C1.07458 9.5625 0.820312 9.30823 0.820312 9V6.875C0.820312 6.56677 1.07458 6.3125 1.38281 6.3125ZM6.69531 6.3125H17.3203C17.6285 6.3125 17.8828 6.56677 17.8828 6.875V9C17.8828 9.30823 17.6285 9.5625 17.3203 9.5625H6.69531C6.38708 9.5625 6.13281 9.30823 6.13281 9V6.875C6.13281 6.56677 6.38708 6.3125 6.69531 6.3125ZM1.38281 1H3.50781C3.81605 1 4.07031 1.25427 4.07031 1.5625V3.6875C4.07031 3.99573 3.81605 4.25 3.50781 4.25H1.38281C1.07458 4.25 0.820312 3.99573 0.820312 3.6875V1.5625C0.820312 1.25427 1.07458 1 1.38281 1ZM6.69531 1H17.3203C17.6285 1 17.8828 1.25427 17.8828 1.5625V3.6875C17.8828 3.99573 17.6285 4.25 17.3203 4.25H6.69531C6.38708 4.25 6.13281 3.99573 6.13281 3.6875V1.5625C6.13281 1.25427 6.38708 1 6.69531 1Z" stroke="#363A45"/>
            <circle cx="16.7891" cy="12.7188" r="3.89803" fill="#00C65E" stroke="#00C65E" stroke-width="1.76645"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7892 10.2734C16.6242 10.2734 16.4904 10.4072 16.4904 10.5723V12.4199H14.6426C14.4775 12.4199 14.3438 12.5537 14.3438 12.7188C14.3438 12.8838 14.4775 13.0176 14.6426 13.0176H16.4904V14.8651C16.4904 15.0302 16.6242 15.164 16.7892 15.164C16.9543 15.164 17.0881 15.0302 17.0881 14.8651V13.0176H18.9355C19.1005 13.0176 19.2343 12.8838 19.2343 12.7188C19.2343 12.5537 19.1005 12.4199 18.9355 12.4199H17.0881V10.5723C17.0881 10.4072 16.9543 10.2734 16.7892 10.2734Z" fill="white"/>
            </svg>
        </span>
        <span class="icon">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_13495_2801)">
            <path d="M4.36035 1.17285C6.21207 0.504951 8.44655 1.00304 9.95312 3.33008L10.2891 3.84766L10.625 3.33008C12.1405 0.993719 14.2667 0.521972 15.9941 1.18555C17.7469 1.85895 19.1699 3.73154 19.1699 6.26074C19.1699 7.15158 18.6981 8.22607 17.9033 9.3877C17.1166 10.5375 16.0525 11.7184 14.9512 12.8096C13.8517 13.899 12.7249 14.8898 11.8203 15.6621C11.3676 16.0486 10.9729 16.3783 10.6621 16.6406C10.5216 16.7592 10.3945 16.8675 10.2871 16.9609C10.1747 16.8657 10.0419 16.7556 9.89453 16.6357C9.56928 16.3712 9.16117 16.0449 8.68555 15.6562C7.73987 14.8836 6.55869 13.8924 5.4043 12.8027C4.24778 11.7111 3.1281 10.5299 2.30078 9.37988C1.46419 8.21696 0.970775 7.14532 0.970703 6.26074C0.970703 3.72642 2.4899 1.84758 4.36035 1.17285Z" stroke="#363A45" stroke-width="0.8"/>
            </g>
            <defs>
            <clipPath id="clip0_13495_2801">
            <rect width="19" height="17" fill="white" transform="translate(0.570312 0.5)"/>
            </clipPath>
            </defs>
            </svg>
        </span>
        <div class="cart-container" @mouseenter="showCart = true" @mouseleave="showCart = false">
            <span class="icon cart-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.995703 0.525391C0.774789 0.525391 0.595703 0.704477 0.595703 0.925391C0.595703 1.1463 0.774789 1.32539 0.995703 1.32539H1.50805C2.22593 1.32539 2.85594 1.80354 3.04907 2.49496L5.2913 10.5224C5.29595 10.5391 5.30158 10.5552 5.30813 10.5707L5.55914 11.4966C5.72455 12.1067 6.27825 12.5303 6.91037 12.5303H14.5753C15.2074 12.5303 15.7611 12.1067 15.9265 11.4966L17.5141 5.64051C17.7555 4.75039 17.0852 3.87418 16.1629 3.87418H4.26493L3.81957 2.27974C3.52988 1.24261 2.58488 0.525391 1.50805 0.525391H0.995703ZM6.33127 11.2873L4.5384 4.67418H16.1629C16.5582 4.67418 16.8454 5.0497 16.742 5.43118L15.1544 11.2873C15.0835 11.5487 14.8462 11.7303 14.5753 11.7303H6.91037C6.63946 11.7303 6.40216 11.5487 6.33127 11.2873Z" fill="#363A45"/>
            <path d="M7.84668 14.2539C8.63408 14.2539 9.2722 14.891 9.27246 15.6768C9.27246 16.4627 8.63424 17.1006 7.84668 17.1006C7.05921 17.1005 6.42188 16.4627 6.42188 15.6768C6.42214 14.8911 7.05937 14.254 7.84668 14.2539Z" stroke="#363A45" stroke-width="0.8"/>
            <path d="M13.6396 14.2539C14.427 14.2539 15.0652 14.891 15.0654 15.6768C15.0654 16.4627 14.4272 17.1006 13.6396 17.1006C12.8522 17.1005 12.2148 16.4627 12.2148 15.6768C12.2151 14.8911 12.8523 14.254 13.6396 14.2539Z" stroke="#363A45" stroke-width="0.8"/>
            </svg>
            </span>
            <span v-if="cartCount" class="badge">{{ cartCount }}</span>
            <transition name="fade">
              <div v-if="showCart" class="cart-popup">
                <div v-if="cart.length === 0" class="empty">
                  <p>В корзине нет товаров,<br>выберите что-нибудь из каталога</p>
                  <button @click="goToCatalog">В каталог</button>
                </div>
                <div v-else class="items">
                  <div v-for="(item, i) in cart" :key="i" class="cart-item">
                    <img :src="item.img" alt="item" />
                    <div>
                      <p>{{ item.title }}</p>
                      <b>{{ item.price }} тг</b>
                      
                      <p>Кол-во: {{ item.quantity }}</p>
                     <div class="controls">
                        
                    </div>
                    </div>
                    
                  </div>
                  <div>
                  <button @click="showCartl = true" class="to-cart">В корзину</button>
                  <CartPopup v-if="showCartl" :cart="cart" @close="showCartl = false"  />
                  </div>
                </div>
              </div>
            </transition>
          </div>
       
      </div>
    </div>
    </header>

    <!-- Баннер -->
<section class="banner">
  <img src="../assets/ShopTovar.png" alt="Баннер Samsung" class="banner-img" />
</section>


    <!-- Сравнение товаров -->
    <!-- <div class="compare-popup">
      <div class="item" v-for="n in 2" :key="n">
        <img src="../assets/Tovar/8PRO.png" alt="iPhone" />
        <div>
          <p>Смартфон Apple Iphone 12 mini 64 GB Green</p>
          <b>70 000 ₽</b>
        </div>
      </div>
      <button class="compare-btn">В сравнение</button>
    </div> -->

    <!-- Хиты продаж -->


    <section class="hits">
      <div class="hits-header">
        <h3>Хиты продаж</h3>
        <a href="#">Смотреть все</a>
      </div>
      <div class="products">
        <div v-for="n in 4" :key="n" class="product">
          <img src="../assets/Tovar/8PRO.png" alt="Xiaomi Redmi" />
          <p class="title">Xiaomi Redmi зелёный</p>
          <div class="colors">
            <span class="color green"></span>
            <span class="color gray"></span>
            <span class="color orange"></span>
          </div>
          <div class="price-block">
          
          <span class="price">10 000 тг</span>
            <span class="rating">4 <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.62465 0.758498C4.83903 0.111751 5.77016 0.111751 5.98383 0.758498L6.74845 3.07022C6.79517 3.21101 6.88598 3.33368 7.0079 3.4207C7.12983 3.50772 7.27663 3.55464 7.42733 3.55475H9.90128C10.5937 3.55475 10.881 4.42551 10.3215 4.82578L8.32058 6.2541C8.1984 6.3412 8.10743 6.46407 8.0607 6.60511C8.01397 6.74614 8.01389 6.8981 8.06046 7.03919L8.82509 9.35091C9.03947 9.99765 8.28556 10.5363 7.7246 10.136L5.72371 8.70767C5.60166 8.62059 5.45471 8.5737 5.30388 8.5737C5.15306 8.5737 5.0061 8.62059 4.88405 8.70767L2.88316 10.136C2.32291 10.5363 1.56972 9.99765 1.78339 9.35091L2.54801 7.03919C2.59459 6.8981 2.5945 6.74614 2.54778 6.60511C2.50105 6.46407 2.41007 6.3412 2.2879 6.2541L0.287724 4.82648C-0.27181 4.42621 0.0161753 3.55545 0.707911 3.55545H3.18115C3.33197 3.55549 3.47893 3.50864 3.601 3.42161C3.72307 3.33458 3.81399 3.21182 3.86074 3.07092L4.62537 0.759201L4.62465 0.758498Z" fill="#363A45"/>
            </svg>
            </span>
            <span class="reviews"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.617188 4.27344C0.617188 2.06794 2.86019 0.273438 5.61719 0.273438C8.37419 0.273438 10.6172 2.06794 10.6172 4.27344C10.6172 6.43344 8.46569 8.19944 5.78719 8.27094L3.11719 10.2734V7.74044C1.56619 7.03144 0.617188 5.72744 0.617188 4.27344Z" fill="#363A45"/>
            </svg>
             25</span>
          </div>
          <button class="buy-btn" @click="addToCart({
            img: '/images/8PRO.png',
            title: 'Xiaomi Redmi Note 8 Pro 128GB Green',
            price: 10000
          })">Купить</button>
        </div>
      </div>
    </section>

    <section class="hits">
    <div class="hits-header">
        <h3>Новинки</h3>
        <a href="#">Смотреть все</a>
      </div>
      <div class="products">
        <div class="product" v-for="n in 6" :key="n">
          <img src="../assets/Tovar/Mac.png" alt="Xiaomi Redmi" />
          <p class="title">Apple MacBook Air 13 золотой</p>
          <div class="colors">
            <span class="color green"></span>
            <span class="color gray"></span>
            <span class="color orange"></span>
          </div>
          <div class="price-block">
            <span class="price">50 000 тг</span>
            <span class="rating">5 <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.62465 0.758498C4.83903 0.111751 5.77016 0.111751 5.98383 0.758498L6.74845 3.07022C6.79517 3.21101 6.88598 3.33368 7.0079 3.4207C7.12983 3.50772 7.27663 3.55464 7.42733 3.55475H9.90128C10.5937 3.55475 10.881 4.42551 10.3215 4.82578L8.32058 6.2541C8.1984 6.3412 8.10743 6.46407 8.0607 6.60511C8.01397 6.74614 8.01389 6.8981 8.06046 7.03919L8.82509 9.35091C9.03947 9.99765 8.28556 10.5363 7.7246 10.136L5.72371 8.70767C5.60166 8.62059 5.45471 8.5737 5.30388 8.5737C5.15306 8.5737 5.0061 8.62059 4.88405 8.70767L2.88316 10.136C2.32291 10.5363 1.56972 9.99765 1.78339 9.35091L2.54801 7.03919C2.59459 6.8981 2.5945 6.74614 2.54778 6.60511C2.50105 6.46407 2.41007 6.3412 2.2879 6.2541L0.287724 4.82648C-0.27181 4.42621 0.0161753 3.55545 0.707911 3.55545H3.18115C3.33197 3.55549 3.47893 3.50864 3.601 3.42161C3.72307 3.33458 3.81399 3.21182 3.86074 3.07092L4.62537 0.759201L4.62465 0.758498Z" fill="#363A45"/>
            </svg>
            </span>
            <span class="reviews"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.617188 4.27344C0.617188 2.06794 2.86019 0.273438 5.61719 0.273438C8.37419 0.273438 10.6172 2.06794 10.6172 4.27344C10.6172 6.43344 8.46569 8.19944 5.78719 8.27094L3.11719 10.2734V7.74044C1.56619 7.03144 0.617188 5.72744 0.617188 4.27344Z" fill="#363A45"/>
            </svg>
             162</span>
          </div>
          <button class="buy-btn"  @click="addToCart({
            img: '/images/Mac.png',
            title: 'Apple MacBook Air 13 золотой',
            price: 50000
          })">Купить</button>
        </div>
      </div>
      </section>
  </div>




</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import CartPopup from '../views/CartPopup.vue';

const cart = ref([])
const showCart = ref(false)
const router = useRouter()
const showCartl = ref(false);


const quantity = ref(1);
const discount = ref(5400);
const promoCode = ref('');
const basePrice = 70000;

const finalTotal = computed(() => basePrice * quantity.value - discount.value);

const emit = defineEmits(['close']);


const closePopup = () => emit('close');
const remove = () => alert('Товар удален');

const increase = () => quantity.value++;
const decrease = () => {
  if (quantity.value > 1) quantity.value--;
};

const applyPromo = () => {
  alert(`Промокод "${promoCode.value}" применён`);
};

const cartCount = computed(() =>
  cart.value.reduce((total, item) => total + item.quantity, 0)
)

function addToCart(newItem) {
  const existingItem = cart.value.find(item => item.title === newItem.title)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.value.push({ ...newItem, quantity: 1 })
  }
}

const closePopupp = () => {
  showCartl.value = false
}

function decreaseItem(index) {
  if (cart.value[index].quantity > 1) {
    cart.value[index].quantity -= 1
  } else {
    cart.value.splice(index, 1)
  }
}



function removeItem(index) {
  cart.value.splice(index, 1)
}


const increaseItem = (index) => {
  cart.value[index].quantity++
}




function goToCatalog() {
  router.push('/catalog')
}





</script>

<style scoped>

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  position: relative; /* добавлено для позиционирования крестика */
  background: #fff;
  padding: 30px;
  width: 600px;
  border-radius: 12px;
}

/* Крестик */
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}



.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.cart-item img {
  width: 60px;
  margin-right: 15px;
}
.item-info {
  flex: 1;
}
.item-category {
  font-size: 12px;
  color: gray;
}
.item-title {
  font-size: 14px;
}
.quantity {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.quantity button {
  width: 30px;
  height: 30px;
}
.quantity span {
  margin: 0 10px;
}
.price {
  width: 80px;
}
.delete {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
.promo {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.promo input {
  flex: 1;
  padding: 10px;
}
.promo button {
  padding: 10px;
  background-color: #00c853;
  color: white;
  border: none;
  cursor: pointer;
}
.summary {
  border-top: 1px solid #ccc;
  padding-top: 15px;
  margin-bottom: 20px;
}
.summary p {
  display: flex;
  justify-content: space-between;
}
.checkout {
  width: 100%;
  padding: 15px;
  background-color: #00c853;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}




.close-btn:hover {
  color: #000;
}





.controls {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 5px;
}

.button {
  background-color: #f0f0f0;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.controls button:hover {
  background-color: #e0e0e0;
}

.count {
  min-width: 20px;
  text-align: center;
  font-weight: bold;
}

.remove-btn {
  
  background-color: #ff4d4f;
  color: white;
  
  border-radius: 4px;
}

.remove-btn:hover {
  background-color: #d9363e;
}





.cart-container { position: relative; display: inline-block; }
.cart-icon { font-size: 24px; cursor: pointer; }
.badge {
  position: absolute;
  top: -5px; right: -10px;
  background: #00C65E;
  color: #fff;
  border-radius: 50%;
  padding: 0px 5px;
  font-size: 10px;
}
.cart-popup {
  position: absolute;
  top: 40px; right: 0;
  width: 300px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  padding: 16px;
  z-index: 1000;
  font-family: 'Segoe UI', sans-serif;
}
.cart-item {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
}
.cart-item img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
}
.cart-popup p { margin: 0; }
.cart-popup b {
  display: block;
  margin-top: 4px;
  color: #00C65E;
}
.cart-popup button {
  width: 100%;
  padding: 10px;
  background: #00C65E;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;
}
.cart-popup button:hover {
  background: #019c52;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }










 .shop-header {
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  font-family: sans-serif;
  font-size: 14px;
}

.left-section,
.right-section {
  display: flex;
  gap: 20px;
  align-items: center;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.menu-item a {
  text-decoration: none;
  color: #333;
}

.menu-item.green a {
  color: #00b35f;
  font-weight: 600;
}

.center-section {
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  margin: 0 20px;
}

.search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 20px 0 0 20px;
  font-size: 14px;
}

.search-button {
  padding: 8px 16px;
  border: none;
  background: #cfcfcf;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
}

.icon {
  font-size: 18px;
}

.text {
  color: #333;
}







.shop-wrapper {
  font-family: 'Segoe UI', sans-serif;
  background: #fff;
}
.shop-header {
  background: #f6f6f6;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
}
.submenu {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  max-width: 900px;
  margin: 0 auto;
}
.submenu a,
.submenu span {
  color: #333;
  text-decoration: none;
  cursor: pointer;
}
.icon {
  font-size: 18px;
}


.banner {
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
  border-radius: 10px;
}

.banner-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 10px;
}




.compare-popup {
  position: relative;
  display: flex;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 15px;
  max-width: 600px;
  gap: 15px;
  border-radius: 10px;
  align-items: center;
}
.compare-popup .item {
  display: flex;
  gap: 10px;
  align-items: center;
}
.compare-popup img {
  width: 60px;
  height: auto;
  border-radius: 6px;
}
.compare-btn {
  background: #00b35f;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.hits {
  padding: 80px;
}
.hits-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.hits-header h3{
    font-weight: 700;
    font-size: 32px;
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}
.product {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background: white;
}
.product img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.title {
  font-weight: 600;
  margin-bottom: 5px;
}
.colors {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
}
.color {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.price{
    font-size: 18px;
    font-weight: 700;
    color: #00b35f;
}

.gray { background: gray; }
.orange { background: orange; }
.price-block {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}
.buy-btn {
  background: #ffffff;
  color: #363A45;
  border: none;
  padding: 8px 48px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}


.buy-btn:hover{
    color: #ffffff;
    background:#00b35f;
    transform: translateY(-5px);
}
</style>
