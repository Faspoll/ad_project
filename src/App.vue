<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      color="primary"

    >


    <v-list  color="primary" dark>
      <v-subheader>Menu</v-subheader>
      <v-list-item-group 
          v-for="link of links"
          :key="link.title"

        >
        <v-list-item
          :to="link.url"
        >
          <v-list-item-icon>
            <v-icon >{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>


    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      color="primary"

    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-sm-flex d-md-none">
      </v-app-bar-nav-icon>
      <v-toolbar flat dark color="primary">
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad application</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items
        v-for="link of links"
        :key="link.title"
        class="hidden-sm-and-down"
        
      >
        <v-btn text :to="link.url">
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
        
      </v-toolbar-items>

      
    </v-toolbar>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      links: [
        {title: 'Login', icon: 'mdi-account', url: '/login'},
        {title: 'Registration', icon: 'mdi-account-plus', url: '/registration'},
        {title: 'Orders', icon: 'mdi-airplane', url: '/orders'},
        {title: 'New ad', icon: 'mdi-briefcase-download-outline', url: '/new'},
        {title: 'My ad', icon: 'mdi-animation', url: '/list'}
       ]
    }),
  }
</script>

<style scoped>
  .pointer{
    cursor: pointer
}

</style>