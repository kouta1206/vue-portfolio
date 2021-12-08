<template>
  <div class="works">
      <h2>works</h2>
      <div class="works-item">
      <div class="work">
        <a href="isara-coding.netlify.app">
          <img src="./img/isara.png" alt="">
          <div class="work-txt">
            <p>HTML、CSSを用いて、isaraというランディングページのコーディングjavascriptのみでアコーディオンUIを実装</p>
          </div>
        </a>
      </div>
      <div class="work">
        <a href="">
          <img src="./img/coffee.png" alt="">
          <div class="work-txt">
            <p>HTML、CSSを用いて、coffeeという架空ランディングページのコーディング</p>
          </div>
        </a>
      </div>
      <div class="work">
        <a href="shuffle-number-game.netlify.app/">
          <img src="./img/Number.png" alt="">
          <div class="work-txt">
            <p>javascriptで数あてゲームを実装してみました</p>
          </div>
        </a>
      </div>
      <div class="work">
        <a href="movie-quiz-game.netlify.app/">
          <img src="./img/Quiz.png" alt="">
          <div class="work-txt">
            <p>javascriptでクイズwebアプリを実装してみました</p>
          </div>
        </a>
      </div>
      <div class="work">
        <a href="https://kota-portfolio-site.netlify.app/">
          <img src="./img/portfolio.png" alt="">
          <div class="work-txt">
            <p>Vue.jsでこちらのポートフォリオサイトを制作してみました</p>
          </div>
        </a>
      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.works {
  width: 90vw;
  margin: auto;

}

.works h2{
  font-family: Shadows Into Light,cursive;
  font-size: 30px;
  font-style: italic;
  border-bottom: 2px solid #ddd;
  display: inline-block;
  color: gray;
}

.work {
  text-align: center;
  margin: auto;
  margin-bottom: 15px;
  box-shadow: 1px 1px 3px gray;
  padding: 8px;
  margin-top: 10px;
  width: 90%;
  border-radius: 5px;
}

.work img {
  height: 250px;
  width: 250px;
}

.work-txt {
  width: 50%;
  margin: auto;
  padding: 10px;
}

.work-txt p {
  font-size: 13px;
  color: gray;
}

@media screen and (min-width: 768px) and (max-width: 1024px){

}

@media screen and (min-width: 1024px){
  .works-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .work {
    width: 24vw;
    transition: transform .3s;
  }

  .work:hover {
    transform: scale(1.1);
  }
}


</style>