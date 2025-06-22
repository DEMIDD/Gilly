


<template>
       <div class="header-bottom">
      <div class="services">
        <a href="#" class="service-link">
          <img src="../assets/service.jpg" width="15px" alt="">
          <span>Что мы чиним</span>
        </a>
        <a href="#" class="service-link">
          <img src="../assets/homework.jpg" width="15px" alt="">
          <span>Адреса сервисов</span>
        </a>
      </div>
      <div class="search">
        <input type="text" placeholder="Я хочу купить" />
        <button>Найти</button>
      </div>
      <button @click="showModal = true" class="price-button">Заказать ремонт</button>
    </div>

    <!-- Модалка -->
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
    </div>

   <!-- Слайдер -->

  <div class="slider-container">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="slide" v-for="(img, i) in slides" :key="i">
        <img :src="img" :alt="'Slide ' + (i + 1)" />
      </div>
    </div>



    <div class="dots">
      <span
        v-for="(img, i) in slides"
        :key="'dot-' + i"
        :class="{ active: currentSlide === i }"
        @click="goToSlide(i)"
      ></span>
    </div>
  </div>





    <div class="experience">
      <div class="Run">
        <span>Быстро</span> 
        <img src="../assets/Tovar/Run.jpg" alt="доставка">
      </div>
      <div class="Run">
        <span>С гарантией</span> 
        <img src="../assets/Tovar/Garant.jpg" alt="доставка">
      </div>
      <div class="Run">
        <span>Профессионально</span> 
        <img src="../assets/Tovar/Profi.jpg" alt="доставка">
      </div>
      <div class="Run">
        <span>Отличная цена</span> 
        <img src="../assets/Tovar/Price.jpg" alt="доставка">
      </div>
    </div>
  


      <!-- Мы ремонтирум -->
    <div class="Remont">
      <span>Мы ремонтируем</span>
      <div class="Technic">
        <div class="TechnicBox">
          
          <img src="/src/assets/Remont/Apple.png" alt="" style="width: 90px; height: auto;" />
          <span>Apple</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/Fone.png" alt="" style="width: 80px; height: auto;" />
          <span>Телефоны</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/AppleBook.png" alt="" style="width: 130px; height: auto;" />
          <span>Планшеты</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/MacBook.png" alt="" style="width: 190px; height: auto; padding-top: 10px;" />
          <span>Ноутбуки</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/MacBookTV.png" alt="" style="width: 170px; height: auto;" />
          <span>Моноблоки</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/Monitor.png" alt="" style="width: 200px; height: auto;" />
          <span>Мониторы</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/TV.png" alt="" style="width: 140px; height: auto;" />
          <span>ТВ, аудио</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/BitTech.png" alt="" style="width: 120px; height: auto;" /> 
          <span>Бытовая техника</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/Photo.png" alt="" style="width: 170px; height: auto;" />
          <span>Фото и видео</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/Epson.png" alt="" style="width: 200px; height: auto; padding-top: 10px;"/>
          <span>Орг техника</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/reloop.png" alt="" style="width: 190px; height: auto; padding-top: 11px;" />
          <span>Оборудование</span>
        </div>
        <div class="TechnicBox">
          <img src="/src/assets/Remont/Aegon.png" alt="" style="width: 100px; height: auto;" />
          <span>Инструменты</span>
        </div>
      </div>
    </div>
    <div class="container">
    <div class="box">
      <h2 class="section-title">Неисправности</h2>
      <div class="three-columns">
        <div class="column">
          <h3><img src="../assets/Voskl.jpg" alt="">Не работает гнездо зарядки</h3>
          <p><img src="../assets/Voskl.jpg" alt="">Не работает аккумулятор<br/>
            <img src="../assets/Voskl.jpg" alt="">Не работает динамик<br/>
            <img src="../assets/Voskl.jpg" alt="">Не работает гнездо наушников<br/> 
            <img src="../assets/Voskl.jpg" alt="">Не работает вибрация<br/>
            <img src="../assets/Voskl.jpg" alt="">Не работает звук</p>
        </div>
        <div class="column">
          <h3><img src="../assets/Voskl.jpg" alt="">Не работает микрофон</h3>
          <p> <img src="../assets/Voskl.jpg" alt="">Не работает GPS<br/>
            <img src="../assets/Voskl.jpg" alt=""> Не работает Bluetooth<br/>
            <img src="../assets/Voskl.jpg" alt=""> Не работает гироскоп<br/>
            <img src="../assets/Voskl.jpg" alt=""> Не работает кнопка громкости<br/>
            <img src="../assets/Voskl.jpg" alt=""> Не работают кнопки</p>
        </div>
        <div class="column">
          <h3><img src="../assets/Voskl.jpg" alt="">Не работает кнопка включения</h3>
          <p><img src="../assets/Voskl.jpg" alt="">Не работает кнопка Home<br/>
            <img src="../assets/Voskl.jpg" alt="">Не работает камера<br/>
            <img src="../assets/Voskl.jpg" alt="">Не заряжается<br/>
            <img src="../assets/Voskl.jpg" alt="">Не видит Sim-карту<br/>
            <img src="../assets/Voskl.jpg" alt="">Не работает Wi-Fi</p>
        </div>
      </div>
    </div>
  </div>
    



  <div class="estimate-section">
    <h2>Узнайте стоимость ремонта онлайн</h2>
    <p>И получите скидку 5%</p>
    <button @click="showModal = true">Узнать</button>

    <!-- Модальное окно -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal">
        <h2>Узнайте стоимость ремонта онлайн</h2>
        <p>И получите скидку 5%</p>
        <form @submit.prevent="submitForm">
          <div class="form-grid">
            <div>
              <label>Имя</label>
              <input v-model="form.name" type="text" placeholder="Петров Петр" required />
            </div>
            <div>
              <label>Тип устройства</label>
              <input v-model="form.deviceType" type="text" placeholder="Xiaomi" required />
            </div>
            <div>
              <label>Телефон</label>
              <input v-model="form.phone" type="tel" placeholder="+7 (123)-456-78-90" required />
            </div>
            <div>
              <label>Бренд и модель</label>
              <input v-model="form.model" type="text" placeholder="Mi 8" required />
            </div>
          </div>
          <div>
            <label>Опишите поломку</label>
            <textarea v-model="form.problem" placeholder="Разбилось стекло..." required />
          </div>
          <div class="agreement">
            <input type="checkbox" v-model="form.agreed" required />
            <label>Я согласен с условиями обработки<br/> <a href="#">персональных данных</a></label>
            <div><button type="submit" class="submit-btn">Отправить</button></div>
          </div>
          
        </form>
      </div>
    </div>
  </div>


 <div class="repair-types">
    <h2 class="title">Виды работ</h2>
    <div class="cards">
      <div 
        v-for="(type, index) in repairTypes" 
        :key="index" 
        class="card"
      >
        <div class="icon-wrapper">
          <img :src="type.icon" alt="img" class="icon" />
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ type.title }}</h3>
          <ul class="card-list">
            <li v-for="(item, i) in visibleItems(type, index)" :key="i">{{ item }}</li>
          </ul>
          <div class="card-footer">
            <button @click="toggle(index)" class="toggle-btn">
              <span v-if="expanded[index]">▲</span>
              <span v-else>▼</span>
            </button>
            <button class="arrow-btn">➜</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'





const slides = [
  '/src/assets/Tovar/Sliderr.png',
  '/src/assets/Tovar/Sliderr2.jpg',
  '/src/assets/Tovar/Sliderr3.jpg'
]

const currentSlide = ref(0)
let intervalId = null

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}
function goToSlide(index) {
  currentSlide.value = index
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000) // автопрокрутка каждые 5 сек
})
onUnmounted(() => {
  clearInterval(intervalId)
})



const showModal = ref(false)

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

const repairTypes = [
  {
    title: 'Модульный ремонт',
    icon: '/src/assets/ModulRem.jpg',
    items: [
      'Замена блока питания',
      'Чистка от пыли',
      'Замена кнопок громкости',
      'Замена кнопки Home (домой)',
    ],
  },
  {
    title: 'Аппаратный ремонт',
    icon: '/src/assets/AppartRem.jpg',
    items: [
      'Ремонт датчика Face ID',
      'Замена шлейфа',
      'Ремонт сканера отпечатков Touch ID',
      'Замена разъема наушников',
    ],
  },
  {
    title: 'Компонентный ремонт',
    icon: '/src/assets/KomponentRem.jpg',
    items: [
      'Замена Wi-Fi модуля',
      'Замена шлейфа',
      'Замена контроллера цепи питания',
      'Замена контроллера питания U7 (U2)',
    ],
  },
  {
    title: 'Программный ремонт',
    icon: '/src/assets/ProgramRem.jpg',
    items: [
      'Снятие пароля Apple ID',
      'Восстановление True Tone',
      'Восстановление информации',
      'Диагностика',
    ],
  },
]

const expanded = ref(Array(repairTypes.length).fill(false))

const toggle = (index) => {
  expanded.value[index] = !expanded.value[index]
}

const visibleItems = (type, index) => {
  return expanded.value[index] ? type.items : type.items.slice(0, 2)
}
</script>

<style scoped>



.slider-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
}

.slides {
  display: flex;
  transition: transform 0.6s ease-in-out;
}

.slide {
  min-width: 100%;
  height: 400px;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
}
.nav-button:hover {
  background: white;
}
.prev {
  left: 15px;
}
.next {
  right: 15px;
}

.dots {
  text-align: center;
  margin-top: 10px;
}
.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 6px;
  background-color: #bebebe;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}
.dots span.active {
  background-color: #00b14f;
}


.container {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.box {
  max-width: 1200px;
  width: 100%;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  text-align: center;
}

.section-title {
  font-size: 28px;
  margin-bottom: 24px;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
}

.three-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  text-align: left;
}

.column {
  padding: 10px;
}

.column img{
    width: 20px; 
    height: 20px;
    margin-right: 10px;
}

.column h3,p{
    font-weight: 500;
}



.estimate-section {
  text-align: center;
  padding: 60px 20px;
  background: #f9fdfb;
  border-radius: 12px;
}

.estimate-section h2 {
  color: #00c853;
  font-size: 28px;
  margin-bottom: 10px;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
}

.estimate-section p {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 20px;
}

.estimate-section button {
    width: 250px;
    height: 41px;
  background-color: #00c853;
  color: #fff;
  border: none;
  padding: 10px 30px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background: #f0f0f0;
  padding: 40px;
  border-radius: 12px;
  max-width: 700px;
  width: 90%;
  text-align: left;
}

.modal h2 {
  color: #00c853;
  font-size: 26px;
  margin-bottom: 10px;
  text-align: center;
}

.modal p {
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
}

.agreement input{
    width: auto;
}

.agreement div{
    margin-left: 120px;
}

textarea {
  resize: vertical;
  height: 80px;
}

.agreement {
  display: flex;
  align-items: center;
  
  margin: 20px 0;
}

.agreement label {
  margin-left: 8px;
  font-size: 14px;
}

.submit-btn {
  width: 100%;
  background-color: #00c853;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}



.repair-types {
  padding: 60px 20px;
  text-align: center;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  width: 260px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-wrapper {
  padding: 20px;
  background: linear-gradient(135deg, #f0fff4, #e0fff0);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.icon {
  width: 60px;
  height: 60px;
}

.card-content {
  padding: 16px;
  width: 100%;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #00c853;
  margin-bottom: 12px;
}

.card-list {
  display: block;
  list-style: none;
  padding: 0;
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #333;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle-btn,
.arrow-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #646464;
}

.toggle-btn:hover{
    color: #00c853;
}
.arrow-btn:hover{
    color: #00c853;
}
</style>
