<template>
  <div class="top">
    <app-header></app-header>
    <section class="banner-blog center indent-from-left">
      <img
        class="banner-blog__photo"
        src="../assets/bannerBlogDetails.jpg"
        alt="photo"
      />
    </section>

    <section class="post-blog center">
      <h2 class="post-blog__title">Minimal Look Bedrooms</h2>
      <p class="post-blog__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
        vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel
        maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh
        in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel
        lectus bibendum commodo.<br />
        <br />
        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus
        lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.
        Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis
        convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd
        porta. Proin tincidunt ligula id purus porttitor.
      </p>
    </section>

    <section class="post-blog__img center">
      <div class="post-blog__item__bg">
        <div class="post-blog__item content1">
          <div class="post-blog__item__photo">
            <img src="../assets/photoBlogDetails1.jpg" alt="image" />
          </div>
          <div class="post-blog__item__photo">
            <img src="../assets/photoBlogDetails2.jpg" alt="image" />
          </div>
          <div class="post-blog__item__photo">
            <img src="../assets/photoBlogDetails3.jpg" alt="image" />
          </div>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "@/HeaderApp.vue";
import Footer from "@/FooterApp.vue";
export default {
  name: "BlogDetailsComp",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Jost", sans-serif;
  background: #ffffff;
}

link {
  text-decoration: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  font-family: "DM Serif Display", serif;
}

.top {
  overflow: hidden;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.post-blog {
  display: flex;
  flex-direction: column;
  width: 658px;
  gap: 11px;
}
.post-blog__title {
  color: #292f36;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
}
.post-blog__text {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  text-align: left;
}
.post-blog__item__photo {
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  margin-bottom: 46px;
}
.post-blog__item__date {
  color: #4d5053;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
  display: flex;
  gap: 409px;
  margin-bottom: 48px;
}
.post-blog__item__list {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  margin-top: 24px;
  margin-bottom: 9px;
  max-width: 737px;
}
.post-blog__item__list__item {
  margin-bottom: 35px;
}
.post-blog__item__info {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}

.post-blog__quotes {
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  width: 346px;
  padding: 53px 227px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: #f4f0ec;
  margin-bottom: 27px;
}
.post-blog__quotes__title {
  width: 106px;
  height: 133px;
  flex-shrink: 0;
  color: #cda274;
  text-align: center;
  font-size: 200px;
  font-style: italic;
  font-weight: 400;
  line-height: 125%; /* 250px */
  letter-spacing: 4px;
}
.post-blog__quotes__text {
  color: #cda274;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}

.content1 {
  grid-column: 1/2;
  grid-row: 1/2;
}

.content2 {
  grid-column: 1/2;
  grid-row: 3/4;
  margin-bottom: 96px;
}

.sidebar {
  grid-column: 2/3;
}
.sidebar__title {
  color: #292f36;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
  margin-bottom: 24px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 11px 10px;
}
.tags__link {
  display: flex;
  padding: 9px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #292f36;
  background: #f4f0ec;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  border-radius: 10px;
}
.tags__link:hover {
  background: #292f36;
  color: #ffffff;
}
</style>
