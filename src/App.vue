<template>
    <header>
    <h1><router-link to ="/"><img src="./assets/portlogo.svg" alt="포트폴리오 로고"></router-link></h1>
    <div class="trigger">
      <div class="linebox">
        <span class="shortline"></span>
        <span class="longline"></span>
        <span class="shortline"></span>
      </div>
    </div>
    <nav class="portmenu">
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/project">Project</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
    </header>
  <nav>
    <!-- <router-link to="/">Home</router-link>  -->
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
  <FooterSection/>
</template>

<script>
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: 'App',
  components: {
    FooterSection,
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

#app {
  font-family: 'Montserrat' , Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--serve-color);
}
body{
  margin: 0 auto;
}
:root {
  --primary-color: #2546B4;  // CSS 변수 선언
  --width-size: 82%;
  --serve-color: #2D2D2D;
}
header{
  width: var(--width-size);
  margin:  0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{ 
    margin-top: 30px;
    width: 230px;
    a{ display: block;
      width:100%;
      img{
        cursor: pointer;
        width: 100%;}
    }
  }
  .trigger{
    cursor: pointer;
    position: fixed;
    top: 4%;
    right: 12%;
    z-index: 30;
    &::after{
      content: '';
      display: block;
      position: fixed;
      width: 60px;
      height: 60px;
      border-radius: 6px;
      background-color: var(--primary-color);
    }
    .linebox{
      cursor: pointer;
      position: absolute;
      width: 60px;
      height: 60px;
      z-index: 3;
      left: 0;
      top:0;
      span{
        position: absolute;
        display: block;
        width: 100px;
        border-bottom: 1px solid white;
        left:11px;
        z-index: 3;
        &:nth-child(1){
          width: 45%;
          top: 20px;
        }
        &:nth-child(3){
          width: 45%;
          top: 40px;  
        }
       }
    .longline{
      width: 65%;
      top: 30px;
      }
   }
  }
}
.portmenu{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content:center;
  align-items: center;
  z-index: 1;
  opacity: 0;
  ul{
    li{list-style: none;
       margin-bottom: 40%;
      a{
        color: #2c3e50;
        font-size: 1.5rem;
        font-weight: 300;
        text-decoration: none;
       }
      }
    }
}
</style>
