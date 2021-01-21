<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../../public/img/logo.png" alt="logo" />
      <p>psychology web site</p>
    </div>
    <div class="footer-link">
      <a href="https://spring.io/projects/spring-boot">spring boot</a><span>|</span>
      <a href="https://cn.vuejs.org/">vue</a><span>|</span>
      <a href="https://element.eleme.cn/">element-ui</a>
    </div>
    <div class="copyright">
      Copyright ©2021 <span class="domain">lby.psychology.com</span> All Rights
      Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "NavFooter"
};
</script>

<style lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  z-index: 9999;
  height: 195px;
  width: 100%;
  border-top: 1px solid #bbb4b4;
  background-color: #eeeaea;
  color: #7f7676;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 23px;
    margin-bottom: 15px;
    img {
      width: 211px;
      height: 49px;
      margin-bottom: 5px;
    }
  }
  .footer-link {
    a {
      color: #7f7676;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 9px;
  }
  .copyright {
    .domain {
      color: #7f7676;
    }
  }
}
</style>
