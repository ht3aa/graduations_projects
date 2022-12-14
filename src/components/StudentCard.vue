<script setup>
defineProps({
  id: Number,
  name: String,
  project_name: String,
  order: Number,
  order_bg_color: String,
  order_text_color: String,
});
</script>

<template>
  <div class="card_container">
    <h3
      :style="{ 'background-color': order_bg_color, color: order_text_color }"
    >
      {{ order }}
    </h3>
    <img src="../assets/imgs/2022_2023/me2.jpg" alt="hassan img" />
    <p>
      Name:
      <span
        ><bdi>{{ name }}</bdi></span
      >
    </p>
    <p>
      Project Name: <span>{{ project_name }}</span>
    </p>
    <router-link :to="`/student/${id}`"><button>See More</button></router-link>
  </div>
</template>

<style scoped>
.card_container {
  background-color: #e5e1e1;
  width: 240px; /* when you change this you should change the column width */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
img {
  width: 60%;
}
h3 {
  text-align: center;
  padding: 5px 0;
}
img {
  width: 100%;
}

p {
  margin: 7px 10px 0 10px;
}

span {
  font-weight: bold;
}

button {
  width: 100%;
  margin-top: 25px;
  background-color: black;
  color: white;
  padding: 10px 0;
}

button:hover,
button:focus {
  background-color: rgb(43, 43, 43);
}
</style>
