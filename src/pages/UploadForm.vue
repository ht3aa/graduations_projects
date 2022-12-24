<script setup>
import { ref } from "vue";
const err_msg = ref("");

const validate = (e) => {
  err_msg.value = "";
  const inputs = Array.from(e.target.elements);

  for (let i = 0; i < inputs.length - 1; i++) {
    if (inputs[i].value == "") {
      err_msg.value = "some fields are empty";
      return;
    }
  }

  submit();
};

const submit = () => {};
</script>

<template>
  <form @submit.prevent="validate">
    <p>
      Note: You must send 25000IQD to the number 07708246418 by zain Cash
      payment method.
    </p>
    <div class="field">
      <label for="name">Name: </label>
      <input id="name" type="text" placeholder="Enter your name" />
    </div>
    <div class="field">
      <label for="project_name">Project Name: </label>
      <input id="project_name" type="text" placeholder="Enter Project Name" />
    </div>
    <div class="field">
      <label for="description"
        >Description: (description about the project)
      </label>
      <input id="description" type="text" placeholder="Enter description" />
    </div>
    <div class="field">
      <label for="birth_date">Birth Date:</label>
      <input id="birth_date" type="text" placeholder="yyyy/mm/dd" />
    </div>
    <div class="field">
      <label for="branch">Branch: </label>
      <input id="branch" type="text" placeholder="Enter Branch" />
    </div>
    <div class="field">
      <label for="order">order: </label>
      <input id="order" type="number" min="1" />
    </div>
    <p class="err_msg">{{ err_msg }}</p>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
form {
  padding: 100px var(--wrap-padding);
}
.field:not(:last-child) {
  margin-bottom: 25px;
}
input {
  padding: 3px 5px;
}

p {
  margin-bottom: 25px;
  font-weight: bold;
}
.err_msg {
  color: red;
  font-weight: bold;
}

button {
  padding: 10px 20px;
  background-color: #002c9c;
  color: white;
}
button:hover,
button:focus {
  background-color: #001c61;
}
</style>
