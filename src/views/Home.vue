<template>
  <div class="home">
    <transition name="bottom">
      <Header/>
    </transition>
    <div class="container">
      <vue-typer
        :text="text"
        :repeat='0'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='1000'
        :type-delay='150'
        :pre-erase-delay='1000'
        :erase-delay='250'
        erase-style='select-all'
        :erase-on-complete='false'
        caret-animation='smooth'
        >
      </vue-typer>
      <transition name="fade" appear>
        <div class="my-name">
          <h1></h1>
        </div>
      </transition>

    </div>
    <Particles/>
  </div>
</template>

<script>
import Particles from "../components/Particles.vue";
export default {
  components: {
   Particles
 },
  data() {
    return {
      text: "Welcome To Myportfolio!"
    }
  }

}
</script>

<style scoped>

.container {
  text-align: center;
  margin: auto;
}

.vue-typer {
  font-family: Copperplate, 'Copperplate Gothic Light', fantasy;
  font-size: 120px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {

}

@media screen and (min-width: 1024px) {
  .vue-typer {
  font-size: 209px;
  }

}





</style>