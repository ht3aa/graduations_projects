<script setup></script>

<template>
  <nav>
    <div class="logo_container">
      <img src="./assets/logo.png" alt="bit logo" />
    </div>
    <menu>
      <li>Years</li>
    </menu>
  </nav>

  <router-view></router-view>
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
</style>
