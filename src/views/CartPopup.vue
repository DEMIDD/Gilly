<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="popup">
      <button class="close-btn" @click="$emit('close')">×</button>
      <h2>Корзина</h2>

      <div
        class="cart-item"
        v-for="(item, index) in cart"
        :key="index"
      >
        <img :src="item.img" alt="Товар" />
        <div class="item-info">
          <p class="item-category">{{ item.category || 'Товар' }}</p>
          <p class="item-title">{{ item.title }}</p>
        </div>
        <div class="quantity">
          <button @click="decreaseQuantity(index)">−</button>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(index)">+</button>
        </div>
        <p class="price">{{ formatPrice(item.price * item.quantity) }}</p>
        <button class="delete" @click="removeItem(index)">
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_390_2497" fill="white">
              <rect x="1.61035" y="4" width="12" height="13" rx="1" />
            </mask>
            <rect
              x="1.61035"
              y="4"
              width="12"
              height="13"
              rx="1"
              stroke="#DADCDC"
              stroke-width="3"
              mask="url(#path-1-inside-1_390_2497)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.64554 0C4.31118 0 3.99895 0.167101 3.81349 0.4453L3.27702 1.25H1.11035C0.696138 1.25 0.360352 1.58579 0.360352 2C0.360352 2.41421 0.696138 2.75 1.11035 2.75H14.1104C14.5246 2.75 14.8604 2.41421 14.8604 2C14.8604 1.58579 14.5246 1.25 14.1104 1.25H11.9437L11.4072 0.4453C11.2218 0.167101 10.9095 0 10.5752 0H4.64554Z"
              fill="#DADCDC"
            />
          </svg>
        </button>
      </div>

      <div class="promo">
        <input v-model="promoCode" placeholder="Промокод" />
        <button @click="applyPromo">Применить</button>
      </div>

      <div class="summary">
        <p>Скидка ({{ discountRate }}%)  <span>- {{ formatPrice(discount) }}</span></p>
        <p>
          <strong>Всего</strong>
          <span><strong>{{ formatPrice(totalPrice) }}</strong></span>
        </p>
      </div>

      <button class="checkout" @click="placeOrder">
        Перейти к оформлению
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  cart: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['close'])

const promoCode = ref('')
const discount = ref(0)
const discountRate = ref(0)

const applyPromo = () => {
  const code = promoCode.value.toLowerCase()

  if (code === 'skidka10') {
    discountRate.value = 10
  } else if (code === 'sale20') {
    discountRate.value = 20
  } else {
    discountRate.value = 0
    alert('Неверный промокод')
  }
}



const totalPrice = computed(() => {
  const subtotal = props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return Math.max(subtotal - totalDiscount.value, 0)
})


const increaseQuantity = (index) => {
  props.cart[index].quantity++
}

const decreaseQuantity = (index) => {
  if (props.cart[index].quantity > 1) {
    props.cart[index].quantity--
  }
}

const removeItem = (index) => {
  props.cart.splice(index, 1)
}


const totalDiscount = computed(() => {
  return props.cart.reduce((sum, item) => {
    const discountPerItem = (item.price * item.quantity * discountRate.value) / 100
    return sum + discountPerItem
  }, 0)
})


const formatPrice = (value) => {
  return value.toLocaleString('ru-RU') + ' тг'
}

const placeOrder = async () => {
  const orderData = {
    user: 'Admin@Admin', // или другой авторизованный пользователь
    items: props.cart,
    totalPrice: totalPrice.value,
    createdAt: new Date().toISOString()
  }
const user = JSON.parse(localStorage.getItem('user'))
orderData.user = user.email

  try {
    const res = await fetch('https://6b22c28e8a529007.mokky.dev/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })

    if (!res.ok) throw new Error('Ошибка при оформлении')

    alert('Заказ успешно оформлен!')
    props.cart.length = 0
    discount.value = 0
    promoCode.value = ''
    emit('close')
  } catch (err) {
    console.error(err)
    alert('Не удалось оформить заказ')
  }
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
  position: relative;
  background: #fff;
  padding: 30px;
  width: 600px;
  border-radius: 12px;
}
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
  border: none;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  cursor: pointer;
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
  border-radius: 10px;
}
</style>
