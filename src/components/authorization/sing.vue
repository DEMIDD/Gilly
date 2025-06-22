<template>
  <div v-if="isVisible" class="popup-overlay" @click.self="close">
    <div class="popup">
      <button class="close-btn" @click="close">×</button>


    <!-- Вход по номеру телефона с отправкой кода( не подключен, только front) -->
      <!-- <div v-if="step === 1">
        <h2 class="popup-title">Вход и регистрация</h2>
        <p class="popup-text">Введите ваш номер телефона и мы вышлем вам код подтверждения</p>
        <input v-model="phone" class="input" placeholder="+7 (___) ___-__-__" />
        <button class="button" @click="sendCode">Продолжить</button>
        <button class="Vhod" @click="step = 3">Войти по email и паролю</button>
      </div>

      <div v-else-if="step === 2">
        <h2 class="popup-title">Введите код</h2>
        <p class="popup-text">Мы отправили SMS на <strong>{{ phone }}</strong></p>
        <input v-model="code" class="input" placeholder="Код из SMS" />
        <button class="button" @click="verifyCode">Продолжить</button>
        <a href="#" class="link" @click.prevent="sendCode">Отправить код ещё раз</a>
        <br />
        <a href="#" class="link back-link" @click.prevent="step = 1">Назад</a>
      </div> -->

      <div v-if="step === 1">
        <h2 class="popup-title">Вход</h2>
        <input v-model="emaill" class="input" placeholder="name@gmail.com" type="email" />
        <div class="password-wrapper">
          <input v-model="passwordd" class="input" placeholder="Пароль" :type="showPassword ? 'text' : 'password'" />
          <button type="button" class="toggle-password" @click="togglePassword">{{ showPassword ? '🙈' : '👁️' }}</button>
        </div>
        <button class="button" @click="login">Войти</button>
        <a href="#" class="link" @click.prevent="step = 4">Забыли пароль?</a>
      </div>

      <div v-else-if="step === 4">
  <h2 class="popup-title">Забыли пароль?</h2>
  <p class="popup-text">На ваш e-mail будут высланы инструкции<br />по восстановлению пароля</p>
  <input v-model="resetEmail" class="input" placeholder="name@gmail.com" type="email" />
  <button class="button" @click="sendReset">Отправить</button>
  <a href="#" class="link back-link" @click.prevent="step = 1">Назад</a>
</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['isVisible'])
const emit = defineEmits(['close', 'login-success'])

// const phone = ref('')
// const code = ref('')
const step = ref(1)
const emaill = ref('')
const passwordd = ref('')
const showPassword = ref(false)
const resetEmail = ref('')
// function sendCode() {
//   if (!phone.value) return alert('Введите номер телефона')
//   console.log('Отправлен код на:', phone.value)
//   step.value = 2
// }

// function verifyCode() {
//   if (code.value === '1234') {
//     alert('Успешный вход')
//     close()
//   } else {
//     alert('Неверный код')
//   }
// }

 function togglePassword() {
  showPassword.value = !showPassword.value
  }

async function login() {
  if (!emaill.value || !passwordd.value) {
    return alert('Введите email и пароль')
  }

  if (emaill.value === 'Admin@Admin' && passwordd.value === 'admin') {
    const adminUser = {
      email: 'Admin@Admin',
      isAdmin: true
    }
    emit('login-success', adminUser)
    close()
    return
  }


  try {
  const res = await fetch('https://6b22c28e8a529007.mokky.dev/auth', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emaill.value,
      password: passwordd.value
    })
  });

 if (res.ok) {
  const result = await res.json();
  const userData = {
    email: result.email,
    fullName: result.fullName || '',
    isAdmin: result.isAdmin || false
  };
  localStorage.setItem('user', JSON.stringify(userData));
  emit('login-success', userData); // <-- здесь гарантированно есть email/fullName
  close();
} else {
    const text = await res.text();
    alert(JSON.stringify(result, null, 2));
  }
} catch (err) {
  console.error(err);
  alert('Ошибка соединения с сервером');
}

}

 function sendReset() {
  if (!resetEmail.value) return alert('Введите e-mail')
  alert(`Инструкция отправлена на: ${resetEmail.value}`)
  resetEmail.value = ''
  step.value = 3
}



function close() {
  emit('close')
}


</script>



<style scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup {
  background-color: #ffffff;
  padding: 30px 25px;
  border-radius: 12px;
  width: 340px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  font-family: 'Segoe UI', sans-serif;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 15px;
  font-size: 22px;
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #000;
}

.popup-title {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
}

.popup-text {
  font-size: 14px;
  color: #444;
  margin-bottom: 15px;
  text-align: center;
  line-height: 1.5;
}

.input {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.password-wrapper {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.button {
  width: 100%;
  padding: 10px;
  background-color: #04b44f;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.button:hover {
  background-color: #039f45;
}

.Vhod {
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #04b44f;
  border-radius: 6px;
  color: #04b44f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  margin-top: 20px;
}

.link {
  font-size: 13px;
  color: #04b44f;
  text-decoration: underline;
  cursor: pointer;
  display: block;
  margin-top: 10px;
}

.back-link {
  margin-top: 8px;
  display: inline-block;
}
</style>
