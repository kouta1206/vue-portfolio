<template>
  <div class="header">
      <transition name="bottom" appear>
        <div class="header-item">
          <router-link to="/" class="home">HOME</router-link>
          <router-link to="/about">ABOUT</router-link>
          <router-link to="/work">WORK</router-link>
          <router-link to="/contact">CONTACT</router-link>
        </div>
      </transition>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.header-item {
  margin:  auto;
  text-align: center;
  padding: 30px 0;
}

.header a {
  color: #808000;
  display: inline-block;
  margin-right: 15px;
  text-decoration: none;
  font-size: 20px;
  font-style: oblique ;
  transform: rotate(45deg);
  transition: all .3s ease;
}

.header a:hover {
  transform: rotate(0);
}

.bottom-enter-active, .bottom-leave-active {
  transform: translate(0px, 0px);
  transition: transform 1000ms cubic-bezier(0, 0, 0.2, 1) 5000ms;
}

.bottom-enter, .bottom-leave-to {
  opacity: 0;
  transform: translateY(150vh) translateY(0px);
}

@media screen and (min-width: 768px) and (max-width: 1024px) {

}

@media screen and (min-width: 1024px) {
  .header {
    padding: 20px;
    padding-top: 40px;
    text-align: center;
  }
  .header a {
    display: inline-block;
    margin-left: 50px;
    transform: rotate(45deg);
    transition: all .3s ease;
    font-size: 40px;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
}

</style>