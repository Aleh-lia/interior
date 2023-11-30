<template>
  <div>
    <app-header></app-header>
    <section class="banner-blog center indent-from-left">
      <img class="banner-blog__photo" src="../assets/bannerBlog.jpg" alt="" />
      <div class="banner-blog__info">
        <h1 class="banner-blog__title">Articles & News</h1>
        <p class="banner-blog__text">Home / Blog</p>
      </div>
    </section>
    <comp-post></comp-post>
    <comp-news></comp-news>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "@/HeaderApp.vue";
import Footer from "@/FooterApp.vue";
import News from "@/components/BlogNews.vue";
import LatestPost from "@/components/BlogLatestPost.vue";
export default {
  name: "BlogComp",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "comp-news": News,
    "comp-post": LatestPost,
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

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.banner-blog {
  width: 1920px;
  height: 356px;
  margin-bottom: 200px;
}
.banner-blog__info {
  display: flex;
  padding: 36px 0;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 37px 37px 0 0;
  position: relative;
  top: -180px;
  left: 708px;
  max-width: 503px;
}
.banner-blog__title {
  color: #292f36;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  width: 347px;
}
.banner-blog__text {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
</style>
