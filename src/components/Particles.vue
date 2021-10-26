<template>
  <div id="particles-js">
    <vue-particles
      color="#add8e6"
      :particleOpacity="0.7"
      linesColor="#add8e6"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="6"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      retina_detect="true"
        >
    </vue-particles>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -999;
}

</style>