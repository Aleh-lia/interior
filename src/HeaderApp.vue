<template>
  <div id="app" class="top">
    <header class="header center">
      <nav class="header__left">
        <img
          class="header__left__logo"
          src="../src/assets/Logo.svg"
          alt="Logo"
        />
        <router-link class="header__left__link" to="/">Interno</router-link>
      </nav>
      <nav class="header__right">
        <router-link class="header__right__link" to="/">Home</router-link>
        <router-link class="header__right__link" to="/project"
          >Project</router-link
        >
        <router-link class="header__right__link" to="/blog">Blog</router-link>
      </nav>
    </header>
  </div>
</template>

<style>
#app {
  font-family: "Jost", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d5053;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Jost", sans-serif;
  background: #ffffff;
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}

a {
  text-decoration: none;
  font-family: "DM Serif Display", serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "DM Serif Display", serif;
}
h1 {
  color: #292f36;
  font-size: 85px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 106.25px */
}
h2 {
  color: #292f36;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
}
h3 {
  color: #292f36;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
}

h4 {
  color: #292f36;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 27.5px */
}

h5 {
  color: #292f36;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 25px */
}
h6 {
  color: #292f36;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
}
.top {
  overflow: hidden;
}

.center {
  padding-left: calc(50% - 620px);
  padding-right: calc(50% - 620px);
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
  font-family: "Jost", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}
</style>
