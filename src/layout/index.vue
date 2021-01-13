<template>
  <div class="app-main">
    <div class="nav_bar">
      <side-menu></side-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import SideMenu from './sideMenu'
  export default {
    name: 'AppMain',
    components: {SideMenu}
  }
</script>

<style lang="scss" scoped>
  .app-main{
    width: 100%;
    height: 969px;
    position: relative;
  }
  .nav_bar{
    width: 200px;
    height: 100%;
  }
</style>
