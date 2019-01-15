<template>
  <div id="app" :style="{width: width, height: height}">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        width: "1080px",
        height: "1920px"
      };
    },
    
    created() {
      const { userAgent } = navigator;
      const mobileList = [
        "Android",
        "iPhone",
        "Symbian",
        "WindowsPhone",
        "iPod",
        "BlackBerry",
        "Windows CE"
      ];
      if (userAgent.includes("iPhone") && screen.height === 812) {
        this.ixIphonX = true;
      }
      for (let i in mobileList) {
        if (userAgent.includes(mobileList[i])) {
          this.$router.replace("/m");
        }
      }
      const width =
              document.documentElement.clientWidth || document.body.clientWidth;
      const height = document.documentElement.clientHeight || document.body.clientHeight;
      if(width <= 737) {
        this.$router.replace('/m');
      } else {
        this.$router.replace('/');
      }
      document.documentElement.style.fontSize = `${width*100/1920}px`
      this.width = `${width}px`;
      this.height = `${height}px`;
    }
  };
</script>

<style>
  @import "./assets/font/font.css";
  
  html {
    font-size: 16px;
  }
  
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }
  
  body {
    margin: 0;
    height: 100%;
    background: rgba(17, 17, 17, 1);
  }
  
  img {
    width: 100%;
    height: 100%;
  }
  
  a {
    text-decoration: none;
  }
  
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #999;
  }
</style>
