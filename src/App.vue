<template>
  <div id="app">
    <component :is="layout"> <!--Происходит обращение по имени к --> 
      <router-view/>
    </component>
  </div>
</template>

<script>
  import EmptyLayout from '@/layouts/EmptyLayout'
  import MainLayout from '@/layouts/MainLayout'

  export default {
    computed: {
      // геттер вычисляемого значения
      layout() {
        // проверка текущего роута
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    components: { 
      // регистрация компонентов
      EmptyLayout, MainLayout
    }
  }
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css'; // подключение пакета materialize
  @import 'assets/index.css'; // подключение стилей проекта
</style>
