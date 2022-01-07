<template>
  <v-row>
    <v-col cols="12" sm="6" md="6">
      <v-card class="mx-auto mt-4" max-width="400">
        <v-img
          height="250"
          :src="require('@/assets/images/vcard-1.jpg')"
          contain
        ></v-img>

        <v-card-title>Moderna</v-card-title>

        <v-card-text class="mt-n4">
          <InlineListItem fieldTitle="Dose Date" fieldOutput="date" />
          <InlineListItem fieldTitle="Lot Number" fieldOutput="1234" />

          <InlineListItem fieldTitle="Expiration Date" fieldOutput="date" />
          <InlineListItem fieldTitle="Location" fieldOutput="location" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>