<script setup>
import StudentCardVue from "./components/StudentCard.vue";
import data from "./data/data.js";

console.log(data);
</script>

<template>
  <nav>
    <div class="logo_container">
      <img src="./assets/logo.png" alt="bit logo" />
    </div>
    <menu>
      <li>Years</li>
    </menu>
  </nav>
  <main>
    <div v-for="item in data" :key="item.id">
      <h2 class="graduated_year">{{ item.graduated_year }}</h2>
      <div class="grid_container">
        <StudentCardVue v-for="student in item.students" :key="student.id" />
      </div>
    </div>
  </main>
</template>

<style scoped>
nav {
  width: 100%;
  height: 64px;
  background-color: #282828;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--wrap-padding);
}

.logo_container {
  width: 60px;
}

.logo_container img {
  width: 100%;
}

menu {
  list-style: none;
  color: white;
}

main {
  width: 100%;
  padding: 100px var(--wrap-padding);
}

main .grid_container {
  width: 100%;
  display: grid;
  row-gap: 15px;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

.graduated_year {
  text-align: center;
  width: 100%;
}
</style>
