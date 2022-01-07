<template>
  <v-container fill-height>
    <div class="d-inline-flex align-center">
      <v-img
        min-width="48"
        max-width="48"
        max-height="48"
        :src="require('@/assets/images/' + imageIcon + '.svg')"
        class="mr-4"
      ></v-img>

      <div style="max-width: 80%">
        {{ text }}
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    imageIcon: String,
    text: String,
  },
};
</script>