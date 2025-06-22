<template>
  <div class="admin-panel">
    <h1>Админ-панель</h1>
    <div class="admin-header">
      <span class="admin-name" @mouseenter="showMenu = true" @mouseleave="showMenu = false">
        Здравствуйте, {{ adminEmail }}
        <div v-if="showMenu" class="popup-menu">
          <ul>
            <li @click="activeSection = 'users'">Список пользователей</li>
            <li @click="activeSection = 'order'">Заказы</li>
            <li @click="activeSection = 'repairs'">Заявки на ремонт</li>
            <li class="logout" @click="logout">Выйти</li>
          </ul>
        </div>
      </span>
    </div>

    <div class="section-content">
      <div v-if="activeSection === 'users'">
        <h2>Список пользователей</h2>
        <div v-if="loading">Загрузка...</div>
        <table v-else>
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Email</th>
              <th>Роль</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in users" :key="u.id">
              <td>{{ u.id }}</td>
              <td>{{ u.fullName || '—' }}</td>
              <td>{{ u.email }}</td>
              <td>{{ u.isAdmin ? 'Админ' : 'Пользователь' }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else-if="activeSection === 'order'">
        <h2>Список заказов</h2>
        <div v-if="loading">Загрузка...</div>
        <table v-else>
          <thead>
            <tr>
              <th>ID заказа</th>
              <th>Покупатель</th>
              <th>Товары</th>
              <th>Итоговая сумма</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="o in order" :key="o.id">
              <td>{{ o.id }}</td>
              <td>{{ o.user }}</td>
              <td>
                <ul>
                  <li v-for="item in o.items" :key="item.title">
                    {{ item.title }} — {{ item.quantity }} шт.
                  </li>
                </ul>
              </td>
              <td>{{ totalSum(o.items) }} тг</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else-if="activeSection === 'repairs'">
        <h2>Заявки на ремонт</h2>
        <p>Пока пусто...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const showMenu = ref(false)
const activeSection = ref('users')
const adminEmail = ref('Admin@Admin')
const users = ref([])
const order = ref([])
const loadingUsers = ref(true)
const loadingOrders = ref(true)
const router = useRouter()

onMounted(async () => {
  try {
    const res = await fetch('https://6b22c28e8a529007.mokky.dev/users')
    users.value = await res.json()
  } catch (e) {
    console.error('Ошибка загрузки пользователей', e)
  } finally {
    loadingUsers.value = false
  }
})

onMounted(async () => {
  try {
    const res = await fetch('https://6b22c28e8a529007.mokky.dev/order')
    order.value = await res.json()
  } catch (e) {
    console.error('Ошибка загрузки пользователей', e)
  } finally {
    loadingOrders.value = false
  }
})

const totalSum = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

const logout = () => {
  localStorage.removeItem('user')
  router.push('/')
}
</script>

<style scoped>
.admin-panel {
  padding: 40px;
}
.admin-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
}
.admin-name {
  position: relative;
  font-weight: bold;
  cursor: pointer;
}
.popup-menu {
  position: absolute;
  top: 25px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 100;
}
.popup-menu ul {
  list-style: none;
  margin: 0;
  padding: 10px;
}
.popup-menu li {
  padding: 8px 12px;
  cursor: pointer;
}
.popup-menu li:hover {
  background: #f0f0f0;
}
.logout {
  color: red;
}
.section-content {
  margin-top: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background: #f3f3f3;
}
</style>
