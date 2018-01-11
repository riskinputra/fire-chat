<template>
  <v-toolbar fixed id="dataMenu">
    <v-toolbar-title id="title" color="primary">Fire Chat</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items id="nav-list" v-for="item in menuItems" :key="item.title">
      <v-btn flat :key="item.title" :to="item.route">
        <v-icon>{{ item.icon }}</v-icon>&nbsp;
        <div class="hidden-xs-only">{{ item.title }}</div>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    menuItems () {
      let items = [
        { icon: 'home', title: 'Home', route: '/' },
        { icon: 'face', title: 'Register', route: '/register' },
        { icon: 'lock_open', title: 'Login', route: '/login' },
        { icon: 'chat', title: 'Create a Chat', route: '/create' }
      ]
      // if (this.userIsAuthenticated) {
      //   items = [
      //     {icon: 'chat', title: 'Create a Chat', route: '/create'}
      //   ]
      // }
      return items
    }
  }
}
</script>

<style>

</style>
