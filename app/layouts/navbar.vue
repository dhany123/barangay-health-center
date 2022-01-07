<template>
  <v-app>
    <v-container class="d-none d-md-flex">
      <v-toolbar dense flat>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            depressed
            color="#fff"
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
          >
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-container>
    <client-only>
      <nuxt />
    </client-only>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sidebar: false,
      menuItems: [
        { title: "Login", path: "/login" },
        { title: "Register", path: "/register" },
      ],
    };
  },
};
</script>
<style>
</style>
