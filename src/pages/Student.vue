<script setup></script>

<template>
  <main>
    <div class="main_information">
      <img src="../assets/imgs/2022_2023/me2.jpg" alt="me" />
      <div class="information">
        <p><span>Name: </span>حسن تحسين عبدالرضا</p>
        <p><span>Birth date: </span>2001/9/2</p>
        <p><span>Branch: </span>Medical devices</p>
        <p><span>Project Name:</span> CT scan</p>
      </div>
    </div>

    <p class="description_p">
      <span>Description: </span>
      here will be small description about the project.
    </p>

    <div class="btn_group">
      <a
        href="https://downloads.hindawi.com/journals/jhe/2022/9580991.pdf"
        download
        ><button class="download_btn">Download PDF</button></a
      >
      <router-link to="/"
        ><button class="goBack_btn">Go back</button></router-link
      >
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 100px var(--wrap-padding);
  width: 100%;
}

span {
  font-weight: bold;
}

.main_information {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.main_information img {
  width: 20%;
  min-width: 150px;
}

.main_information .information {
  width: 80%;
}

.information > p {
  margin: 10px;
}

@media only screen and (max-width: 860px) {
  .main_information img {
    width: 40%;
  }
  .information > p {
    margin: 10px 0;
  }
}

.description_p {
  margin: 10px 0;
}

.btn_group {
  margin: 50px auto;
  width: 300px;
}

.btn_group .download_btn,
.btn_group .goBack_btn {
  padding: 10px 15px;

  color: white;
}
.btn_group .download_btn {
  background-color: #f40000;
}

.btn_group .goBack_btn {
  background-color: #484848;
}

.btn_group .download_btn:hover,
.btn_group .download_btn:focus {
  background-color: #b20000;
}

.btn_group .goBack_btn:hover,
.btn_group .goBack_btn:focus {
  background-color: #242424;
}
</style>
