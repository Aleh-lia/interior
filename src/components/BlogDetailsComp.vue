<template>
  <div class="top">
    <app-header></app-header>
    <section class="banner-blog center_1920 indent-from-left">
      <img
        class="banner-blog__photo"
        src="../assets/bannerBlogNews.jpg"
        alt="baner"
      />
    </section>
    <section class="post-blog center">
      <div class="post-blog__item__bg">
        <form-post></form-post>
        <!--        <div class="post-blog__item content1">-->
        <!--          <h2 class="post-blog__item__title">-->
        <!--            Let’s Get Solution for Building <br />Construction Work-->
        <!--          </h2>-->

        <!--          <div class="post-blog__item__photo">-->
        <!--            <img src="../assets/postBlogDetails1.jpg" alt="image" />-->
        <!--          </div>-->

        <!--          <div class="post-blog__item__date">-->
        <!--            <datagrid>26 December,2022 </datagrid>-->
        <!--            <p>Interior / Home / Decore</p>-->
        <!--          </div>-->

        <!--          <div class="post-blog__item__info">-->
        <!--            <p class="post-blog__item__info__text">-->
        <!--              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae-->
        <!--              turpmaximus.posuere in.Contrary to popular belief.There are many-->
        <!--              variations of passages of Lorem Ipsum available, but the majority-->
        <!--              have suffered alteration in some form, by injecthumour, or-->
        <!--              randomised words which don't look even slightly believable.-->
        <!--            </p>-->
        <!--            <p class="post-blog__item__info__text">-->
        <!--              Embarrassing hidden in the middle of text. All the Lorem Ipsum-->
        <!--              generators on the Internet tend to repeat predefined chunks as-->
        <!--              necessary.-->
        <!--            </p>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>

      <div class="post-blog__quotes">
        <h3 class="post-blog__quotes__title">"</h3>
        <h4 class="post-blog__quotes__text">
          The details are not the details. <br />They make the design.
        </h4>
      </div>

      <div class="post-blog__item content2">
        <h2 class="post-blog__item__title">Design sprints are great</h2>
        <p class="post-blog__item__info">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
        <ul class="post-blog__item__list">
          <li class="post-blog__item__list__item">
            Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.
          </li>
          <li class="post-blog__item__list__item">
            Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.
          </li>
          <li class="post-blog__item__list__item">
            Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.
          </li>
        </ul>

        <div class="post-blog__item__photo">
          <img src="../assets/postBlogDetails2.jpg" alt="image" />
        </div>

        <p class="post-blog__item__info">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
      </div>

      <!--      <nav class="sidebar center">-->
      <!--        <h3 class="sidebar__title">Tags</h3>-->
      <!--        <div class="tags">-->
      <!--          <a class="tags__link" href="#">Kitchen</a>-->
      <!--          <a class="tags__link" href="#">Bedroom</a>-->
      <!--          <a class="tags__link" href="#">Building</a>-->
      <!--          <a class="tags__link" href="#">Architecture</a>-->
      <!--          <a class="tags__link" href="#">Kitchen Planning</a>-->
      <!--          <a class="tags__link" href="#">Decore</a>-->
      <!--        </div>-->
      <!--      </nav>-->
      <div><form-tag></form-tag></div>
      <div id="app">
        <some-sort></some-sort>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "@/HeaderApp.vue";
import Footer from "@/FooterApp.vue";
import Post from "@/form/Post.vue";
import Tags from "@/form/Tags.vue";
export default {
  name: "BlogDetailsComp",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "form-post": Post,
    "form-tag": Tags,
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.center_1920 {
  padding-left: calc(50% - 960px);
  padding-right: calc(50% - 960px);
}
.banner-blog {
  width: 1920px;
  height: 356px;
  margin-bottom: 200px;
}

.post-blog {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px 52px;
}
.post-blog__item {
  width: 800px;
}
.post-blog__item__title {
  color: #292f36;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 1px;
  margin-bottom: 21px;
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
.post-blog__item__info__text {
  margin-bottom: 35px;
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
