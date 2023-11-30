<template>
  <div>
    <section class="post center">
      <h2 class="post__title">{{ name }}</h2>
      <div class="post__item__bg" v-for="post in posts" :key="post.id">
        <div class="post__item">
          <div class="post__item__photo">
            <img :src="post.img" alt="image" />
          </div>

          <div class="post__item__info">
            <h3 class="post__item__info__title">
              {{ post.title }}
            </h3>
            <p class="post__item__info__text">
              {{ post.news }}
            </p>
            <div class="post__item__info__link">
              <div class="post__info__link__date">{{ post.date }}</div>
              <router-link to="/blogDetails">
                <svg
                  class="post__data__link__button"
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                  <path
                    d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
  name: "LatestPost",
  data() {
    return {
      name: "Latest Post",
      posts: [
        {
          id: 1,
          title: "Low Cost Latest Invented Interior Designing Ideas",
          date: "26 December,2022",
          news: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
          img: require("../assets/postBlog.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.post {
  margin-bottom: 150px;
}
.post__title {
  color: #292f36;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
  margin-bottom: 27px;
}
.post__item {
  display: flex;
  gap: 65px;
}
.post__item__bg {
  padding: 22px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
}
.post__item__photo {
  width: 569px;
  height: 478px;
  flex-shrink: 0;
}
.post__item__info {
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 469px;
  margin-top: 51px;
}
.post__item__info__title {
  color: #292f36;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
  text-align: left;
}
.post__item__info__text {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  text-align: left;
}
.post__item__info__link {
  margin-top: 19px;
  width: 489px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post__info__link__date {
  color: #4d5053;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
</style>
