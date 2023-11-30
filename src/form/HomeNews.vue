<template>
  <div>
    <section class="news center">
      <h1 class="news__title">{{ title }}</h1>
      <div class="news__content">
        <div class="news__item" v-for="blog in blogs" :key="blog.id">
          <img class="news__item__image" :src="blog.img" alt="photo" />

          <div class="news__item__tag">
            <router-link to="`${blog.routerLink}`">
              <p class="news__item__tag__text">{{ blog.name }}</p>
            </router-link>
          </div>
          <div class="news__item__content">
            <h2 class="news__item__title">{{ blog.news }}</h2>
            <div class="news__item__footer">
              <p class="news__item__date">{{ blog.date }}</p>
              <router-link
                class="news__item__button"
                :to="`${blog.routerLink}`"
              >
                <img
                  class="news__item__button__img"
                  src="../assets/arrow.svg"
                  alt=""
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "NewsComp",
  data() {
    return {
      numb: 3,
      title: "Articles & News",
      blogs: [
        {
          id: 1,
          name: "Kitchen Design",
          date: "26 December,2022",
          news: "Let’s Get Solution For Building Construction Work",
          img: require("../assets/PhotoBlog1.jpg"),
          routerLink: "blogDetails",
        },
        {
          id: 2,
          name: "Living Design",
          date: "22 December,2022",
          news: "Low Cost Latest Invented Interior Designing Ideas.",
          img: require("../assets/PhotoBlog2.jpg"),
          routerLink: "living",
        },
        {
          id: 3,
          name: "Interior design",
          date: "25 December,2022",
          news: "Best For Any Office & Business Interior Solution",
          img: require("../assets/PhotoBlog3.jpg"),
          routerLink: "living",
        },
        // {
        //   id: 4,
        //   name: "Kitchen Design",
        //   date: "26 December,2022",
        //   news: "Let’s Get Solution For Building Construction Work",
        //   img: require("../assets/PhotoBlog4.jpg"),
        // routerLink: "blogDetails",
        // },
        // {
        //   id: 5,
        //   name: "Living Design",
        //   date: "22 December,2022",
        //   news: "Low Cost Latest Invented Interior Designing Ideas.",
        //   img: require("../assets/PhotoBlog5.jpg"),
        // routerLink: "living",
        // },
        // {
        //   id: 6,
        //   name: "Interior Design",
        //   date: "25 December,2022",
        //   news: "Best For Any Office & Business Interior Solution",
        //   img: require("../assets/PhotoBlog6.jpg"),
        // routerLink: "living",
        // },
      ],
    };
  },
};
</script>

<style scoped>
.news {
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
}
.news__title {
  color: #292f36;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
}
.news__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 28px;
}
.news__item {
  display: flex;
  padding: 21px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}
.news__item__tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px 8px 8px 0;
  background: #fff;
  position: relative;
  bottom: 81px;
  left: 30px;
}
.news__item__tag__text {
  color: #4d5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
  padding: 8px 10px;
}
.news__item__image {
  display: inline-block;
  text-align: center;
  margin: 10px;
  border-radius: 45px 45px 0 0;
  background: #eaeaea;
}
.news__item__content {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.news__item__title {
  width: 265px;
  color: #292f36;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
  text-align: left;
}
.news__item__footer {
  display: flex;
  width: 340px;
  align-items: center;
  gap: 65px;
  justify-content: space-between;
}
.news__item__date {
  color: #4d5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.news__item__button__img {
  width: 52px;
  height: 52px;
}
</style>
