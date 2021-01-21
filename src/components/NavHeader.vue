<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <div class="header-logo">
            <a href="/#/index"></a>
          </div>
          <a href="/#/index">首页</a>
          <a href="/#/test">心理测试</a>
          <a href="/#/chart">数据统计</a>
          <a href="/#/about">关于我们</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:">登录</a>
          <a href="javascript:">注册</a>
          <a href="javascript:">个人中心</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHeader"
};
</script>

<style lang="scss">
@import "../assets/scss/base";
.header {
  .nav-topbar {
    height: 49px;
    line-height: 49px;
    //background-color: #333333;
    color: #333333;
    .container {
      width: 1600px;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #333333;
        margin-right: 23px;
      }
    }
  }

}
</style>
