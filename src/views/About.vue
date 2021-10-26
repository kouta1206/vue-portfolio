<template>
  <div class="about">
    <Particles/>
    <div class="container">
      <div class="introduce-wrapper">
        <h2>introduce</h2>

        <dl>
          <div class="introduce">
            <dt>name:</dt>
            <dd>平尾孝太</dd>
          </div>
          <div class="introduce">
            <dt>from:</dt>
            <dd>徳島県</dd>
          </div>
          <div class="introduce">
            <dt>birthday:</dt>
            <dd>1995/12/06(25歳)</dd>
          </div>
          <div class="introduce">
            <dt>club:</dt>
            <dd>空手,卓球</dd>
          </div>
        </dl>

        <div class="career">
          <h2>career</h2>
          <p>某警備会社に入社して早５年、将来に不安を感じながら何かスキルを身につけたいと思い、プログラミングを勉強。自ら何かを作る楽しさ、プログラミング、そのものの楽しさに目覚め、日々、勉強中。</p>
        </div>

        <h2>skill</h2>
        <div class="skills">
          <div class="skill">
            <img src="./img/html.svg" alt="">
            <div class="skill-txt">
              <p>isaraというLP、架空のLPをコーディングしてみました</p>
            </div>
          </div>

          <div class="skill">
            <img src="./img/css.jpg" alt="">
            <div class="skill-txt">
              <p>LPのレスポンシブ対応や基本的なアニメーションをjavascriptミニゲームで実装しました</p>
            </div>
          </div>

          <div class="skill">
            <img src="./img/js.png" alt="" style="width: 150px;">
             <div class="skill-txt">
              <p>javascriptで数あてゲームやクイズアプリなどを制作しました。</p>
            </div>
          </div>


          <div class="skill">
            <img src="./img/vue-logo.png" alt="">
            <div class="skill-txt">
              <p>Vue.jsでポートフォリオサイトを制作しました。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style scoped>

.about {
  width: 80vw;
  margin: auto;

}

.container {
  background-color:#fff;
  padding: 20px;
}

.introduce-wrapper h2{
  font-family: Shadows Into Light,cursive;
  font-size: 30px;
  font-style: italic;
  border-bottom: 2px solid #ddd;
  display: inline-block;
  color: gray;
}

.introduce {
  display: flex;
  margin-bottom: 5px;
}

dl {
  padding:10px;
  font-size: 16px;
}

dd {
  -webkit-font-smoothing: antialiased;
}

dt {
  -webkit-font-smoothing: antialiased;
}

.career p {
  padding: 10px;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

.skill {
  text-align: center;
  margin-bottom: 15px;
  box-shadow: 2px 2px 7px gray;
  padding: 8px;
  margin-top: 10px;
  width: 70vw;
   border-radius: 10px;
}

.skill img {
  height: 250px;
  width: 250px;
}

.skill-txt {
  width: 50%;
  margin: auto;
  padding: 10px;
}

.skill-txt p {
  font-size: 13px;
  color: gray;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {

}

@media screen and (min-width: 1024px) {
  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  .skill {
    width: 27vw;
  }
  }










</style>