<template>
  <div class="mx-n4 mb-4">
    <v-card prominent color="primary" flat height="50px" tile>
      <v-toolbar dense color="primary" flat>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>