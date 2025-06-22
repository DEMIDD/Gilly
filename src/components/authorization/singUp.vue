<template>
  <div v-if="props.isVisible" class="popup-overlay" @click.self="close">
    <div class="register-container">
      <div class="left-panel">
        <h1>Dily.ru</h1>
        <h2>Супер доска объявлений</h2>
        <ul class="features">
          <li>Размещайте объявления бесплатно</li>
          <li>Продавайте на аукционе</li>
          <li>Ремонтируйте свою технику</li>
          <li>Откройте свой магазин</li>
          <li>Помогайте нуждающимся</li>
        </ul>
      </div>

      <div class="right-panel">
        <button class="close-btn" @click="close">×</button>
        <div class="profile-pic">ИП</div>
        <form @submit.prevent="handleSubmit">
          <label>
            Ваше имя *
            <input v-model="form.firstName" required />
          </label>

          <label>
            E-mail *
            <input v-model="form.email" type="email" required />
          </label>

          <label>
            Пароль *
            <input
              v-model="form.password"
              type="password"
              required
              @focus="showRegister = true"
              @blur="showRegister = false"
            />
            <div v-if="showRegister" class="hint">
              Пароль должен состоять из 8 цифр и латинских строчных и заглавных символов
            </div>
          </label>

          <label>
            Повторите пароль *
            <input v-model="form.confirmPassword" type="password" required />
          </label>

          <button class="SingAp" type="submit">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['isVisible'])
const emit = defineEmits(['close', 'login-success'])

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
})


const showRegister = ref(false)

async function handleSubmit() {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Пароли не совпадают')
    return
  }

  const data = form.value

  try {
    const res = await fetch('https://6b22c28e8a529007.mokky.dev/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password
      }),
    })

    if (res.ok) {
      const result = await res.json()
      alert('Регистрация успешна')

      emit('login-success', result)
      close()
    } else {
      const errorText = await res.text()
      alert('Ошибка регистрации: ' + errorText)
    }
  } catch (error) {
    console.error(error)
    alert('Сетевая ошибка при регистрации')
  }
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

.register-container {
  display: flex;
  font-family: 'Segoe UI', sans-serif;
}

.left-panel {
  background: #00c363;
  color: white;
  padding: 40px;
  width: 40%;
  border-radius: 30px 0px 0px 30px;
}

.left-panel h1 {
  font-size: 28px;
}

.features {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.features li {
  margin-bottom: 10px;
}

.right-panel {
  padding: 40px;
  width: 60%;
  background: #fdfdfd;
  position: relative;
  border-radius: 0px 30px 30px 0px;
}

.profile-pic {
  background: #e6e6e6;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

form {
  max-width: 300px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 15px;
  font-size: 14px;
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

input {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-top: 5px;
}

.SingAp {
  width: 100%;
  padding: 10px;
  background-color: #04b44f;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.SingAp:hover {
  background-color: #039f45;
}

.hint {
  background: #2c2c2c;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-top: 5px;
}
</style>

