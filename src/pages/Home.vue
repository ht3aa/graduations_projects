<script setup>
import StudentCardVue from "../components/StudentCard.vue";
import data from "../data/data.js";
</script>

<template>
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

h2 {
  margin-bottom: 20px;
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
