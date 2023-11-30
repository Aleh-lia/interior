<template>
  <div class="home">
    <section class="project center">
      <div class="project__info">
        <h1 class="project__title">{{ title }}</h1>
        <p class="project__text">{{ text }}</p>
      </div>
      <div class="project__item">
        <div v-for="item in projects" :key="item.id">
          <div :class="'project__item' + item.id">
            <img
              :class="'project__item__photo' + item.id"
              :src="item.img"
              alt="photo"
            />
            <div class="project__item__info">
              <h3 class="project__item__title">{{ item.name }}</h3>
              <p class="project__item__text">{{ item.tag }}</p>
              <router-link class="news__item__button" to="`${item.name}`">
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
  name: "HomeComp",
  data() {
    return {
      classItem: "`project__item$+{projects.id}`",
      title: "Follow Our Projects",
      text: "It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.",
      projects: [
        {
          id: 1,
          name: "Modern Kitchan",
          tag: "Decor / Artchitecture",
          img: require("../assets/Photo1.jpg"),
        },
        {
          id: 2,
          name: "Modern Kitchan",
          tag: "Decor / Artchitecture",
          img: require("../assets/Photo2.jpg"),
        },
        {
          id: 3,
          name: "Modern Kitchan",
          tag: "Decor / Artchitecture",
          img: require("../assets/Photo3.jpg"),
        },
        {
          id: 4,
          name: "Modern Kitchan",
          tag: "Decor / Artchitecture",
          img: require("../assets/Photo4.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
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
</style>
