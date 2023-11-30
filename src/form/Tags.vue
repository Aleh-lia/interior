<template>
  <div>
    <nav class="sidebar center">
      <h3 class="sidebar__title">{{ title }}</h3>
      <div class="tags">
        <a v-for="tag in tags" :key="tag" class="tags__link" href="#">{{
          tag.name
        }}</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PostComp",
  data() {
    return {
      title: "Tags",
      tags: [
        {
          name: "Kitchen",
        },
        {
          name: "Bedroom",
        },
        {
          name: "Building",
        },
        {
          name: "Architecture",
        },
        {
          name: "Kitchen Planning",
        },
        {
          name: "Decor",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
