<template>
  <v-app id="home">
    <header-navbar></header-navbar>
    <v-content>
      <v-container>
        <section id="home-content">
          <v-layout row wrap>
            <v-flex xs12>
              <chats></chats>
              <router-view/>
            </v-flex>
          </v-layout>
        </section>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HeaderNavbar from './HeaderNavbar'
import Chats from './Chat'

export default {
  components: {
    'chats': Chats,
    'header-navbar': HeaderNavbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#home #home-content {
  padding-top: 60px;
}
</style>
