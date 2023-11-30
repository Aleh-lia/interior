<template>
  <div>
    <app-header></app-header>
    <div class="error center">
      <div class="error__full">
        <div class="error__context">
          <h1 class="error__context__title">404</h1>
          <p class="error__context__text">
            We are sorry, but the page you requested was not found Back To Home
          </p>
        </div>
        <router-link to="/" class="error__button">
          <div class="error__button__context">
            <p class="error__button__text">Back To Home</p>
            <img
              class="banner__info__button__img"
              src="../assets/Vector.svg"
              alt=""
            />
          </div>
        </router-link>
      </div>
      <div class="error__img">
        <img src="../assets/error.jpg" alt="error" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/HeaderApp.vue";
export default {
  name: "ErrorComp",
  components: {
    "app-header": Header,
  },
};
</script>

<style scoped>
.error {
  display: flex;
}

.error__full {
  display: flex;
  width: 569px;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  flex-shrink: 0;
  justify-content: center;
}

.error__context {
  display: flex;
  width: 569px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.error__button__context {
  display: flex;
  padding: 26px 54px;
  gap: 9px;
}

.error__button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  background: #292f36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
}

.error__button__text {
  color: #fff;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
}

.error__context__text {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 52.5px */
  letter-spacing: 0.35px;
  text-align: left;
}

.error__context__title {
  color: #cda274;
  font-size: 250px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.error__img {
  border-radius: 0 0 0 353px;
  background: #ebebeb;
}

.footer {
  display: none;
}
</style>
