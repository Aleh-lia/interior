<template>
  <div class="home">
    <app-header></app-header>
    <section class="banner center">
      <div class="banner__photo">
        <img src="../assets/banner_photo.jpg" alt="" />
      </div>

      <div class="banner__info">
        <h1 class="banner__info__title">Let Your Home Be Unique</h1>
        <p class="banner__info__text">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <a class="banner__info__button" href="#"
          >Get Started<img
            class="banner__info__button__img"
            src="../assets/Vector.svg"
            alt=""
        /></a>
      </div>
    </section>
    <comp-project></comp-project>

    <section class="counter center">
      <div class="counter__item">
        <h2 class="counter__item__title">12</h2>
        <p class="counter__item__text">Years Of Experiance</p>
      </div>

      <div class="counter__vertical"></div>

      <div class="counter__item">
        <h2 class="counter__item__title">85</h2>
        <p class="counter__item__text">Success Project</p>
      </div>

      <div class="counter__vertical"></div>

      <div class="counter__item">
        <h2 class="counter__item__title">15</h2>
        <p class="counter__item__text">Active Project</p>
      </div>

      <div class="counter__vertical"></div>

      <div class="counter__item">
        <h2 class="counter__item__title">95</h2>
        <p class="counter__item__text">Happy CUstomers</p>
      </div>
    </section>
    <comp-news class="news3"></comp-news>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "@/HeaderApp.vue";
import Footer from "@/FooterApp.vue";
import HomeProjects from "@/form/HomeProjects.vue";
import HomeNews from "@/form/HomeNews.vue";
export default {
  name: "HomeComp",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "comp-project": HomeProjects,
    "comp-news": HomeNews,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.top {
  overflow: hidden;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.indent-from-left {
  margin-left: -360px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 53px;
  margin-bottom: 57px;
}

.header__left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__left__logo {
  width: 34px;
  height: 34px;
}

.header__left__link {
  font-family: "DM Serif Display", serif;
  color: #4d5053;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.header__right {
  display: flex;
  gap: 50px;
}

.header__right__link {
  color: #4d5053;
  text-align: center;
  font-family: Jost, serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.banner {
  display: flex;
  margin-bottom: 96px;
}

.banner__photo {
  border-radius: 45px;
  fill: #f4f0ec;
}

.banner__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  gap: 21px;
  margin-top: 208px;
  margin-left: 52px;
  max-width: 434px;
}

.banner__info__title {
  color: #292f36;
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.banner__info__text {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.banner__info__button {
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  /* 22.5px */
  letter-spacing: 0.36px;
  display: flex;
  padding: 26px 49px 26px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: auto;
  border-radius: 18px;
  background: #292f36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
}

.banner__info__button__img {
  color: #cda274;
}

.project {
  margin-bottom: 97px;
}

.project__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}

.project__title {
  color: #292f36;
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.project__text {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
  margin-bottom: 93px;
  margin-left: 232px;
  margin-right: 232px;
  max-width: 737px;
}

.project__item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 56px 100px;
}

.project__item__info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-top: 24px;
}

.project__item__title {
  color: #292f36;
  grid-column: 1/2;
  grid-row: 1/2;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
}

.project__item__text {
  grid-column: 1/2;
  grid-row: 2/3;
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.project__item__photo1 {
  border-radius: 0px 80px 0px 0px;
  background: #c4c4c4;
}

.project__item__photo2 {
  border-radius: 80px 0px 0px 0px;
  background: #c4c4c4;
}

.project__item__photo3 {
  border-radius: 0px 0px 80px 0px;
  background: #c4c4c4;
}

.project__item__photo4 {
  border-radius: 0px 0px 0px 80px;
  background: #c4c4c4;
}

.project__button {
  border-radius: 36px;
  border-color: #f4f0ec;
  background-color: #f4f0ec;
  grid-column: 2/3;
  grid-row: 1/3;
  width: 70px;
  height: 70px;
  margin-left: 260px;
}

.project__item1 {
  grid-column: 1/2;
  grid-row: 1/2;
  border-radius: 45px 45px 0 0;
}

.project__item2 {
  grid-column: 2/3;
  grid-row: 1/2;
  border-radius: 45px 45px 0 0;
}

.project__item3 {
  grid-column: 1/2;
  grid-row: 2/3;
}

.project__item4 {
  grid-column: 2/3;
  grid-row: 2/3;
}

.counter {
  display: flex;
  fill: #f4f0ec;
  background-color: #f4f0ec;
  margin-bottom: 96px;
}

.counter__item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 151px;
  margin-left: 76px;
}

.counter__item__title {
  color: #cda274;
  font-size: 85px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 106.25px */
  letter-spacing: 1.7px;
}

.counter__item__text {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
  margin-bottom: 151px;
}

.counter__vertical {
  border-left: 1px solid #cda274;
  height: 130px;
  margin-top: 169px;
  margin-left: 54px;
}

.blog {
  margin-bottom: 96px;
}

.blog__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.blog__title {
  color: #292f36;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 62.5px */
  letter-spacing: 1px;
}

.blog__text {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
  max-width: 811px;
  margin-bottom: 52px;
}

.blog__item {
  display: flex;
  gap: 27px;
}

.blog__item__photo {
  width: 340px;
  border-radius: 45px 45px 0 0;
  background: #eaeaea;
}

.blog__item__tag {
  color: #4d5053;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
  padding: 8px 16px;
  background: #fff;
  border-radius: 8px 8px 8px 0;
  position: relative;
  top: -66px;
  left: 20px;
  max-width: 120px;
}

.blog__item__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog__item__date {
  color: #4d5053;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}

.blog__item__button {
  border-radius: 36px;
  border-color: #f4f0ec;
  background-color: #f4f0ec;
}

.blog__item__button:hover circle {
  fill: #ffffff;
}

.blog__item__title {
  color: #292f36;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
  min-width: 290px;
  margin-top: 21px;
  margin-bottom: 30px;
}

.blog__item__bg {
  display: inline-flex;
  width: 382px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
}

.blog__item__bg:hover {
  background: #f4f0ec;
}

.blog__item1 {
  padding: 21px;
}

.blog__item2 {
  padding: 21px;
}

.blog__item3 {
  padding: 21px;
}
</style>
