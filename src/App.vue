<template>
  <div id="app">
    <category/>
    <!--<router-view />-->
  </div>
</template>

<script>
import Category from '@/features/Category'

export default {
  name: 'app',

  components: {
    Category
  }
}
</script>

<style>
#app {}
</style>
