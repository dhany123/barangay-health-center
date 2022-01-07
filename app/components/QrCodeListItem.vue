<template>
  <v-row align="center" dense>
    <v-col cols="12" md="5" class="d-inline-flex">
      <span class="text-body-2">{{ fieldTitle }}:</span></v-col
    >
    <v-col cols="12" md="7"
      ><span class="ml-4 ml-md-0 text-body-2 font-weight-black">{{
        fieldOutput
      }}</span></v-col
    >
  </v-row>
</template>

<script>
export default {
  props: {
    fieldTitle: String,
    fieldOutput: String,
  },
};
</script>