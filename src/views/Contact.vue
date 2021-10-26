<template>
  <div class="contact">
    <div class="container">
      <h2>follow me</h2>
      <div class="sns-wrapper">
        <a href="https://twitter.com/kou20004603">
          <font-awesome-icon :icon="['fab', 'twitter']" class=" fab twitter"/>
        </a>
        <a href="https://github.com/kouta1206">
          <font-awesome-icon :icon="['fab', 'github-square']" class="fab git-hub"/>
        </a>
      </div>
      <div class="e-mail">
        <p>For work requests, please contact this g-mail...</p>
        <font-awesome-icon :icon="['fas', 'envelope']" class=" fab mail"/>
        <h2>ko.bump1206@gmail.com</h2>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

.contact {
  padding: 40px;
}

.contact h2 {
  font-size: 36px;
  text-align: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-style: oblique;
}

.sns-wrapper {
  text-align: center;
  padding: 20px;
}

.fab {
  font-size: 50px;
  margin-right: 10px;
}

.twitter {
  color: #1D9CF0;
}

.e-mail {
  text-align: center;
  padding: 50px;
}

.e-mail p {
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
  font-style: oblique;
}
</style>