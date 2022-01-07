<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      <v-container fill-height fluid>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="6">
            <v-img
              max-height="97vh"
              max-width="96vh"
              :src="require('@/assets/images/error.png')"
              class="mx-auto"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <div class="text-h6 text-sm-h4 mb-12 mt-2">
              Ooooppss!! Page not found.
            </div>
            <NuxtLink to="/"
              ><v-btn color="primary" dark
                >Return to Home page
              </v-btn></NuxtLink
            >
          </v-col>
        </v-row>
      </v-container>
    </h1>
    <h1 v-else>
      {{ otherError }}
      <NuxtLink to="/"> Home page </NuxtLink>
    </h1>
  </v-app>
</template>

<script>
export default {
  layout: "nolayout",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
