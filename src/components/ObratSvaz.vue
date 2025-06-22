<template>
  <div class="estimate-section">
    <h2>Остались вопросы?</h2>
    <p>Оставьте заявку и наш менеджер свяжется с вами</p>
    
    <div class="number">
        <input v-model="form.phone1" type="tel" placeholder="Введите номер телефона" required />
        <button @click="showModal = true">Заказать звонок</button>
    </div>

    <!-- Модальное окно -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal">
        <h2>Заказать ремонт</h2>
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
    <div class="cvaz">
        <label>Или позвоните сами </label>
        <p><img src="../assets/Calll.png" alt="">
         +7 (968) 430-88-20</p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
</script>

<style scoped>
.estimate-section {
  text-align: center;
  padding: 60px 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.196);
  background: #F7F7F7;
  

}

.estimate-section h2 {
  color: #363A45;
  font-size: 28px;
  margin-bottom: 10px;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
}

.estimate-section p {
  color: #363A45;
  font-weight: 500;
  font-size: 16px;
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


.number {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px; 
  flex-wrap: wrap; 
  margin-bottom: 20px;
}


.number input {
  float: 1;
  min-width: 240px;
  width: 60px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
}

.number button {
  height: 41px;
  background-color: #00c853;
  color: #fff;
  border: none;
  padding: 0 30px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
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
  color: #363A45;
  font-size: 32px;
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



.cvaz{
  display: flex;
  align-items: center;
  justify-content: center;
  
}


.cvaz label{
    font-family: 'Rubik', sans-serif;
    padding-right: 20px;
    font-weight: 500;
    font-size: 16px;
}

.cvaz p {
    margin-bottom: 5px;
}


.cvaz img{
    
    width: 24.99px;
    height: 25px;
}

</style>
