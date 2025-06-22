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





    <div class="Remont">
    <h2>Популярные услуги</h2>
    <div class="services-grid">
      <div class="service-item">
        <img src="../assets/Zamen.jpg" alt="Замена дисплея" class="service-icon" />
        <span class="service-label">Замена дисплея</span>
      </div>
      <div class="service-item">
        <img src="../assets/PO.jpg" alt="Восстановление ПО" class="service-icon" />
        <span class="service-label">Восстановление ПО</span>
      </div>
      <div class="service-item">
        <img src="../assets/ZamenaB.jpg" alt="Замена батареи" class="service-icon" />
        <span class="service-label">Замена батареи</span>
      </div>
      <div class="service-item">
        <img src="../assets/Dinam.jpg" alt="Замена динамика" class="service-icon" />
        <span class="service-label">Замена динамика</span>
      </div>
    </div>
  </div>

      <div class="Remont">
      <span>Модели</span>
      <div class="Technicc">
        <div class="TechnicBox">
          <img src="../assets/Tovar/iPad Pro.png" alt="" style="width: 120px; height: auto;" />
          <span>iPad Pro</span>
        </div>
        <div class="TechnicBox">
          <img src="../assets/Tovar/iPad Air.png" alt="" style="width: 100px; height: auto;" />
          <span>iPad Air</span>
        </div>
        <div class="TechnicBox">
          <img src="../assets/Tovar/iPad mini.png" alt="" style="width: 100px; height: auto;" />
          <span>iPad mini</span>
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









.services {
  
  text-align: center;
}





.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  justify-items: center;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
}

.service-label {
  font-size: 14px;
  color: #333;
}
</style>