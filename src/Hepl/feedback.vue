<template>
  <div class="footer">
  <!-- Верхняя часть -->
  <div class="top-bar">
    <div class="container">
      <div class="logo"><a href=""><img src="../assets/logo.jpg" alt=""></a>
      <div class="city-selector" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
        <span class="city">{{ selectedCity }}</span>
 <ul 
                  v-if="showDropdown" 
                  class="dropdown" 
                  style="position: absolute; top: 100%; left: 0; background: white; z-index: 10; list-style: none; margin: 0; padding: 5px; border: 1px solid #ccc;"
                >
                <li 
                  v-for="city in cities" 
                  :key="city" 
                  @click="selectCity(city)"
                  style="padding: 5px 10px; cursor: pointer;"
                >
            {{ city }}
          </li>
        </ul>
      </div>
      </div>
      <div class="socials">
         <span>Присоединяйтесь к нам</span>
        <a href=""><i class="icon"><img src="../assets/F.png" alt="F" style="width: 30px; height: auto;"></i></a>
        <a href=""><i class="icon"><img src="../assets/inst.png" alt="inst" style="width: 30px; height: auto;"></i></a>
        <a href=""><i class="icon"><img src="../assets/VK.png" alt="VK" style="width: 30px; height: auto;"></i></a>
      </div>
    </div>
  </div>

  <!-- Основной контент -->
  <div class="footer-links">
    <div class="container">
      <div class="column">
        <h4>Доска объявлений</h4>
        <ul>
          <li>Объявления</li>
          <li>Магазины</li>
          <li>Благотворительность</li>
          <li>Личный кабинет</li>
        </ul>
      </div>
      <div class="column">
        <h4>Сервисный центр</h4>
        <ul>
          <li>Что мы чиним</li>
          <li>Адреса сервисных центров</li>
        </ul>
      </div>
      <div class="column">
        <h4>Интернет-магазин</h4>
        <ul>
          <li>Каталог товаров</li>
          <li>Доставка и оплата</li>
          <li>Корзина</li>
          <li>Личный кабинет</li>
          <li>Контакты</li>
          <li>Вакансии</li>
        </ul>
      </div>
      <div class="column">
        <h4>Пользователям</h4>
        <ul>
          <li>Гарантии</li>
          <li>Доставка и оплата</li>
          <li>Служба поддержки</li>
          <li>Вопрос-ответ</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Нижняя часть -->
  <div class="bottom-bar">
    <div class="container">
      <ul>
        <li>Политика конфиденциальности</li>
        <li>Пользовательское соглашение</li>
        <li>Использование cookies</li>
        <li>Карта сайта</li>
      </ul>
      <div class="copyright">Dily.ru © 2025</div>
    </div>
  </div>
</div>

</template>


<script setup>
import { ref, onMounted } from 'vue'

const selectedCity = ref('Павлодар')
const showDropdown = ref(false)

const cities = ['Павлодар', 'Экибастуз', 'Астана', 'Тараз', 'Омск']

// Загружаем сохранённый город
onMounted(() => {
  const savedCity = localStorage.getItem('selectedCity')
  if (savedCity && cities.includes(savedCity)) {
    selectedCity.value = savedCity
  }
})

// Сохраняем выбранный город
function selectCity(city) {
  selectedCity.value = city
  localStorage.setItem('selectedCity', city)
  showDropdown.value = false
}
</script>

<style scoped>
.footer {
  background: #EFEFEF;
  font-family: sans-serif;
  
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  align-items: center;
  background: #EFEFEF;
  border-bottom: 1px solid #DADCDC;
  border-top: 1px solid #DADCDC;
}


.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}


.footer-links {
  padding: 40px 0; 
}

.bottom-bar {
  padding: 20px 0; 
}


.logo {
  font-weight: bold;
  
  color: #00c853;
  font-size: 14px;
}

.city-selector {
  position: relative;
  cursor: pointer;
  padding-left: 55px;
  color: #00C65E;
  font-weight: 400;
}

.city {
  color: #00c853;
  font-weight: 500;
  position: relative;
}

.dropdown {
  position: absolute;
  top: 30px;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  list-style: none;
  z-index: 100;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.dropdown li {
  padding: 5px 10px;
  cursor: pointer;
  
}

.dropdown li:hover {
  background-color: #f0f0f0;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
}

.socials span{
    font-weight: 500;
}

.icon {
  background: #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}



li{
    font-weight: 500;
}



.footer-links {
  display: flex;
  padding: 40px 20px;
}

.column {
  width: 15%;
}

.column h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.column ul {
  list-style: none;
  padding: 0;
}

.column li {
  margin: 5px 0;
  color: #444;
  font-size: 14px;
  font-family: 'Rubik', sans-serif;
}

.bottom-bar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 12px;
  border-top: 1px solid #ddd;
  background: #fff;
}

.bottom-bar li{
    font-family: 'Rubik', sans-serif;
    font-size: 12px;
}

.bottom-bar ul {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
}


.copyright{
    font-weight: 500;
}
</style>
