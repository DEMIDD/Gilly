<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import LoginPopup from './components/authorization/sing.vue'
import RegistPopup from './components/authorization/singUp.vue'
import Obrat from './components/ObratSvaz.vue'
import Info from './components/InfoSevrice.vue'
import Feedback from './Hepl/feedback.vue'

const router = useRouter()
const showLogin = ref(false)
const showRegister = ref(false)
const showModal = ref(false)
const user = ref(null)
const showUserDropdown = ref(false)
const showMenu = ref(false)
const activeSection = ref(null)

const handleLoginSuccess = (userData) => {
  user.value = userData
  localStorage.setItem('user', JSON.stringify(userData))
  showLogin.value = false
  showRegister.value = false

  if (userData.isAdmin) {
    router.push('/admin')
  }
}



// Город
const selectedCity = ref('Павлодар')
const showDropdown = ref(false)
const cities = ['Павлодар', 'Экибастуз', 'Астана', 'Тараз', 'Омск']
const selecttCity = (city) => {
  selectedCity.value = city
  localStorage.setItem('selectedCity', city)
  showDropdown.value = false
}

// Форма
const form = ref({
  name: '',
  deviceType: '',
  phone: '',
  model: '',
  problem: '',
  agreed: false,
})

const submitForm = () => {
  alert('Форма отправлена!')
  showModal.value = false
}

onMounted(() => {
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
  }

  const savedCity = localStorage.getItem('selectedCity')
  if (savedCity && cities.includes(savedCity)) {
    selectedCity.value = savedCity
  }
})


const props = defineProps({
  user: {
    type: Object,
    default: () => ({})
  }
})


function logout() {
  localStorage.removeItem('user')
  window.location.reload() // или emit('logout') — если есть логика выхода
}
</script>

<template>
  <div class="line"></div>
  <header class="header">
    <!-- Верхняя часть -->
    <div class="header-top">
      <div class="logo">
        <router-link to="/glav"><img src="../src/assets/logo.jpg" alt="Dily.ru" /></router-link>
      </div>

      <nav class="nav">
        <router-link to="/" class="active">Доска объявлений</router-link>
        <router-link to="/service" class="active">Сервисный центр</router-link>
        <router-link to="/shop" class="active">Интернет-магазин Dily.ru</router-link>
        <a href="#" class="active">Скупка</a>
      </nav>

      <hr />

      <div class="actions">
        <div class="location">
          <img src="../src/assets/location.jpg" width="15px" alt="">
          <div class="city-selector" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false" style="cursor: pointer;">
            <span class="city">{{ selectedCity }}</span>
             <ul 
                  v-if="showDropdown" 
                  class="dropdown" 
                  style="position: absolute; top: 100%; left: 0; background: white; z-index: 10; list-style: none; margin: 0; padding: 5px; border: 1px solid #ccc;"
                >
                <li 
                  v-for="city in cities" 
                  :key="city" 
                  @click="selecttCity(city)"
                  style="padding: 5px 10px; cursor: pointer;"
                >
                {{ city }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Авторизация -->
        <div v-if="!user" class="auth">
          <img src="../src/assets/auth.jpg" width="15px" alt="">
          <button class="sing" @click="showLogin = true">Вход</button>
          <p>/</p>
          <button class="sing" @click="showRegister = true">Регистрация</button>
          <LoginPopup :isVisible="showLogin" @close="showLogin = false" @login-success="handleLoginSuccess" />
          <RegistPopup :isVisible="showRegister" @close="showRegister = false" @login-success="handleLoginSuccess" />
        </div>

        <!-- Если пользователь админ -->
        <div
          v-else-if="user && user.isAdmin"
          class="auth user-auth"
          @mouseenter="showMenu = true"
          @mouseleave="showMenu = false"
        >
            <div style="display: flex; align-items: center; cursor: pointer;">
    <img src="../src/assets/auth.jpg" width="15px" alt="">
    <span class="username" style="margin-left: 5px;">
      Здравствуйте, {{ user.email }}
    </span>
  </div>

  <div 
    v-if="showMenu" 
    class="popup-menu" 
    style="position: absolute; top: 100%; left: 0; background: white; z-index: 1000; border: 1px solid #ccc; padding: 10px;"
  >
    <ul style="margin: 0; padding: 0; list-style: none;">
      <li @click="activeSection = 'users'" style="padding: 5px 10px; cursor: pointer;">Список пользователей</li>
      <li @click="activeSection = 'orders'" style="padding: 5px 10px; cursor: pointer;">Заказы</li>
      <li @click="activeSection = 'repairs'" style="padding: 5px 10px; cursor: pointer;">Заявки на ремонт</li>
      <li 
        class="logout" 
        @click="logout" 
        style="padding: 5px 10px; cursor: pointer; color: red;"
      >
        Выйти
      </li>
            </ul>
          </div>
        </div>

        <!-- Если пользователь обычный -->
        <div
          v-else
          class="auth user-auth"
          @mouseenter="showUserDropdown = true"
          @mouseleave="showUserDropdown = false"
        >
          <div style="display: flex; align-items: center; cursor: pointer;">
      <img src="../src/assets/auth.jpg" width="15px" alt="" />
      <span class="username" style="margin-left: 5px;">
        Здравствуйте, {{ user?.fullName || user?.email || 'пользователь' }}
      </span>
    </div>

    <!-- Выпадающее меню -->
    <div
      v-if="showUserDropdown"
      class="dropdown user-dropdown"
      style="position: absolute; top: 100%; left: 0; z-index: 10; background: white; border: 1px solid #ccc; padding: 10px;"
    >
      <button class="logout-btn" @click="logout">Выйти</button>
    </div>
        </div>
      </div>
    </div>

    <!-- Нижняя часть -->
    <!-- <div class="header-bottom">
      <div class="services">
        <a href="#" class="service-link">
          <img src="../src/assets/service.jpg" width="15px" alt="">
          <span>Что мы чиним</span>
        </a>
        <a href="#" class="service-link">
          <img src="../src/assets/homework.jpg" width="15px" alt="">
          <span>Адреса сервисов</span>
        </a>
      </div>
      <div class="search">
        <input type="text" placeholder="Я хочу купить" />
        <button>Найти</button>
      </div>
      <button @click="showModal = true" class="price-button">Заказать ремонт</button>
    </div>

     Модалка
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal">
        <h2>Заказать ремонт</h2>
        <form @submit.prevent="submitForm">
          <div class="form-grid">
            <div><label>Имя</label><input v-model="form.name" type="text" placeholder="Петров Петр" required /></div>
            <div><label>Тип устройства</label><input v-model="form.deviceType" type="text" placeholder="Xiaomi" required /></div>
            <div><label>Телефон</label><input v-model="form.phone" type="tel" placeholder="+7 (123)-456-78-90" required /></div>
            <div><label>Бренд и модель</label><input v-model="form.model" type="text" placeholder="Mi 8" required /></div>
          </div>
          <div>
            <label>Опишите поломку</label>
            <textarea v-model="form.problem" placeholder="Разбилось стекло..." required />
          </div>
          <div class="agreement">
            <input type="checkbox" v-model="form.agreed" required />
            <label>Я согласен с условиями обработки <br /><a href="#">персональных данных</a></label>
            <div><button type="submit" class="submit-btn">Отправить</button></div>
          </div>
        </form>
      </div>
    </div> -->
  </header>

  <router-view />
  <Obrat />
  <Info />
  <Feedback />
</template>

<style scoped>
.user-auth {
  position: relative;
  cursor: pointer;
}
.user-dropdown,
.popup-menu {
  position: absolute;
  top: 30px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 10px;
  z-index: 1000;
}
.popup-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.popup-menu li {
  padding: 8px 12px;
  cursor: pointer;
}
.popup-menu li:hover {
  background-color: #f5f5f5;
}
.logout-btn {
  background: #ff4d4d;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.logout-btn:hover,
.popup-menu li.logout:hover {
  
  color: white;
}
</style>
