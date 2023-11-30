<template>
  <div id="PostComp">
    <section class="post-blog center">
      <div class="post-blog__item__bg">
        <div v-for="p in blogs" :key="p.id" class="post-blog__item content1">
          <h2 class="post-blog__item__title">
            {{ p.title }}
          </h2>

          <img class="post-blog__item__photo" :src="p.img" alt="image" />

          <div class="post-blog__item__date">
            <div>{{ p.date }}</div>
            <p>Interior / Home / {{ p.tag }}</p>
          </div>

          <div class="post-blog__item__info">
            <p class="post-blog__item__info__text">
              {{ p.news }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PostComp",
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "Let’s Get Solution for Building Construction Work",
          date: "26 December,2022",
          news: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          img: require("../assets/PhotoBlog1.jpg"),
          tag: "Decore",
        },
        {
          id: 2,
          title: "Форма кухни: какая бывает?",
          date: "26 December,2022",
          news: "Существует большое количество видов кухонь: с островом, П- и Г-образные и множество других. Как же среди огромного количества выбрать нужную? Все проще, чем может показаться на первый взгляд, нужно только учитывать функционал и пространство. Пространство в помещении имеет конкретную форму, и именно эту самую форму кухня должна поддерживать. Нужно учитывать особенности помещения и исходя из них подбирать и устанавливать мебель и технику.Одно из главных правил в современном дизайне — это способность предельно скрыть предметы в пространстве комнаты. Кухня не должна быть чрезмерно громоздкой и даже наоборот — должна казаться едва заметной и органично вписываться в пространство. Так, например, шкафы являются довольно крупными и тяжелыми предметами, которые могут значительно навредить функциональности комнаты и ее интерьеру. Чтобы кухню можно было назвать элитной и правильно продуманной, следует правильно спрятать шкафы, что позволит оставить больше свободного пространства в помещении, при этом не навредив функциональности.",
          img: require("../assets/kitchenPost1.jpg"),
          tag: "Kitchen",
        },
      ],
    };
  },
  computed: {
    list() {
      return this.blogs
        .filter((p) => {
          return p.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        })
        .sort((a, b) => {
          // sort using this.orderBy
          const first = a[this.orderBy].toLowerCase();
          const next = b[this.orderBy].toLowerCase();
          if (first > next) {
            return 1;
          }
          if (first < next) {
            return -1;
          }
          return 0;
        });
    },
  },
  methods: {
    // search component method
    emitSearch(ev) {
      this.$root.$emit("PostComp:search", ev.target.value);
    },
  },
  created() {
    // list component lifecycle hook
    this.$root.$on("PostComp:search", (search) => {
      this.search = search;
    });
  },
  beforeDestroy() {
    // list component lifecycle hook
    // dont forget to remove the listener
    this.$root.$off("PostComp:search");
  },
};
</script>

<style scoped>
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
  width: 799px;
  height: 539px;
  flex-shrink: 0;
  -o-object-fit: cover;
  object-fit: cover;
  margin-bottom: 46px;
  border-radius: 50px;
  background: #c4c4c4;
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
.content1 {
  grid-column: 1/2;
  grid-row: 1/2;
}
</style>
