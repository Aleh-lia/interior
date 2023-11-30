<template>
  <div id="app" class="top">
    <footer class="footer center">
      <div class="footer__info">
        <div class="footer__info__logo">
          <img src="../src/assets/Logo.svg" alt="Logo" />
          <router-link class="footer__logo__link" to="/">Interno</router-link>
        </div>
        <p class="footer__info__text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <div class="footer__info__social">
          <a href="https://twitter.com"
            ><img src="../src/assets/twitter.svg" alt="twitter"
          /></a>
          <a href="https://www.linkedin.com"
            ><img src="../src/assets/in.svg" alt="linkedin"
          /></a>
        </div>
      </div>
      <nav class="footer__nav">
        <h3 class="footer__nav__title">Pages</h3>
        <div class="footer__nav__link">
          <router-link class="footer__nav__home" to="/">Home</router-link><br />
          <router-link class="footer__nav__project" to="/project"
            >Project</router-link
          ><br />
          <router-link class="footer__nav__blog" to="/blog">Blog</router-link>
        </div>
      </nav>
      <div class="footer__contact">
        <h3 class="footer__contact__title">Contact</h3>
        <div class="footer__contact__text">
          <p class="footer__contact__adress">
            55 East Birchwood Ave <br />Brooklyn, New York 1120
          </p>
          <p class="footer__contact__email">contact@interno.com</p>
          <p class="footer__contact__phone">(123) 456 - 7890</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 134px;
  gap: 101px;
  justify-items: start;
}
.footer__info {
  width: 393px;
}
.footer__info__logo {
  display: flex;
  gap: 10px;
}
.footer__logo__link {
  color: #292f36;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
}
.footer__info__text {
  margin-top: 18px;
  margin-bottom: 31px;
  text-align: left;
}
.footer__info__social {
  display: flex;
  gap: 54px;
}
.footer__nav {
  display: flex;
  flex-direction: column;
}
.footer__nav__title {
  margin-bottom: 8px;
}
.footer__nav__link {
  text-align: left;
}
.footer__nav__home,
.footer__nav__blog,
.footer__nav__project {
  color: #4d5053;
  font-family: "Jost", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 300%; /* 66px */
  letter-spacing: 0.22px;
}

.footer__contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.footer__contact__title {
  color: #292f36;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  margin-bottom: 26px;
}
.footer__contact__text {
  color: #4d5053;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  text-align: left;
}
.footer__contact__email {
  line-height: 300%;
}
</style>
