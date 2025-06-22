<template>
    <div v-for="order in orders" :key="order.id" class="order">
  <h3>Пользователь: {{ order.emaill }}</h3>
  <p>Сумма: {{ order.totalPrice }} тг</p>
  <p>Дата: {{ new Date(order.createdAt).toLocaleString() }}</p>
  <ul>
    <li v-for="item in order.items" :key="item.title">
      {{ item.title }} — {{ item.quantity }} шт.
    </li>
  </ul>
</div>

</template>



<script setup>

const orders = ref([])

onMounted(async () => {
  const res = await fetch('https://6b22c28e8a529007.mokky.dev/order')
  orders.value = await res.json()
})

</script>