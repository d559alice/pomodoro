<template>
  <div id="app">
  <div class="h-100 row no-gutters justify-content-center align-content-between">
    <!-- <router-link  > -->
      <b-link href="/" id="title">POMODORO</b-link>
    <!-- </router-link> -->
    <div id="nav" class="w-100 d-flex justify-content-between align-items-end">
      <router-link to="/">
        <b-icon icon="house-door-fill" variant="light" font-scale="4"></b-icon>
      </router-link>
      <router-link to="/list">
        <b-icon icon="layout-text-window" variant="light" font-scale="3"></b-icon>
      </router-link>
      <router-link to="/settings">
        <b-icon icon="music-note-beamed" variant="light" font-scale="3"></b-icon>
      </router-link>
    </div>
  </div>
    <div id="main">
      <keep-alive>
      <router-view/>
    </keep-alive>
    </div>

  </div>
</template>

<style lang="stylus">
#app
  position relative
  text-align center
  color #fff
  padding 2rem
  height 100vh
  #title
    font-size:3.5rem
    color:white
    text-decoration:none
    text-shadow:1px 1px 8px #333
  #main
    width 100%
    height 70%
    position absolute
    top 20%
    left 0
</style>
