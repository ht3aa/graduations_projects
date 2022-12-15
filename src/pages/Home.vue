<script setup>
import StudentCardVue from "../components/StudentCard.vue";
import data from "../data/data.js";
</script>

<template>
  <h1>
    Here is the memory of all the graduated students with their graduated
    projects in BME department.
  </h1>
  <main>
    <div v-for="item in data" :key="item.id">
      <h2 class="graduated_year">{{ item.graduated_year }}</h2>
      <div class="grid_container">
        <StudentCardVue
          :id="student.id"
          :name="student.name"
          :project_name="student.project_name"
          :order="student.order"
          :order_bg_color="student.order_bg_color"
          :order_text_color="student.order_text_color"
          v-for="student in item.students"
          :key="student.id"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  padding: 100px var(--wrap-padding);
}

h1 {
  text-align: center;
  padding: 150px 250px 0 250px;
  font-size: 2.3rem;
}

@media only screen and (max-width: 1100px) {
  h1 {
    padding: 150px 150px 0 150px;
    font-size: 2rem;
  }
}

@media only screen and (max-width: 600px) {
  h1 {
    padding: 150px 50px 0 50px;
    font-size: 1.6rem;
  }
}

main .grid_container {
  width: 100%;
  display: grid;
  row-gap: 40px;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.graduated_year {
  text-align: center;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid #393939;
  margin-bottom: 20px;
}
</style>
