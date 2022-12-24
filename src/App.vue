<script setup></script>

<template>
  <nav>
    <div class="logo_container">
      <img src="./assets/logo.png" alt="bit logo" />
    </div>
    <menu>
      <li><router-link to="/uploadForm">Upload</router-link></li>
      <li><router-link to="/">Home</router-link></li>
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
  display: flex;
}
menu li {
  cursor: pointer;
}
menu li a:hover,
menu li a:focus {
  color: rgb(255, 213, 0);
}

a {
  color: white;
  text-decoration: none;
}
.router-link-active,
.router-link-exact-active {
  color: rgb(255, 213, 0);
}
menu li:not(:last-child) {
  margin-right: 30px;
}
</style>
