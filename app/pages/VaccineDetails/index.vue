<template>
  <div>
    <TitleHeader title="Vaccination Details" />
    <VaccineDialog
      :isDialogOpen="isEditorDialogOpen"
      @close="isEditorDialogOpen = false"
    />
    <v-container fill-height fluid>
      <div class="mx-auto page-card">
        <v-card class="px-4 px-sm-12 mb-12" outlined>
          <v-card-text>
            <div class="text-right">
              <v-btn disabled color="primary" @click="editorClick">Edit</v-btn>
            </div>
            <v-select
              class="mt-5"
              readonly
              :items="vaccines"
              item-text="type"
              item-value="id"
              outlined
              dense
              v-model="consumer.vaccine_id"
            ></v-select>

            <v-row dense>
              <v-col cols="12" md="6">
                <label class="label">Dose 1</label>
                <v-text-field
                  readonly
                  :rules="[rules.required]"
                  outlined
                  dense
                  v-model="consumer.vaccine_first_dose_date"
                ></v-text-field>
              </v-col>
              <v-col v-if="consumer.vaccine_dose_count > 1" cols="12" md="6">
                <label class="label">Dose 2</label>
                <v-text-field
                  readonly
                  :rules="[rules.required]"
                  outlined
                  dense
                  v-model="consumer.vaccine_second_dose_date"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col cols="12" md="6">
                <label class="label">Vaccine Lot #</label>
                <v-text-field
                  readonly
                  :rules="[rules.required]"
                  outlined
                  dense
                  v-model="vaccine_lot_number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <label class="label">Expiration Date</label>
                <v-text-field
                  readonly
                  outlined
                  dense
                  v-model="consumer.expiration_date"
                ></v-text-field>
              </v-col>
            </v-row>

            <label class="label">Location</label>
            <v-text-field
              readonly
              outlined
              dense
              v-model="consumer.vaccine_received_location"
            ></v-text-field>

            <p class="mt-7">Uploaded Vaccine Card</p>
            <v-row class="mb-10" cols="12">
              <v-col
                md="6"
                v-for="images in vaccineCardImageDisplay"
                :key="images.index"
              >
                <v-card>
                  <v-img
                    readonly
                    contain
                    :lazy-src="images"
                    min-height="350"
                    max-height="350"
                    min-width="350"
                    max-width="350"
                    :src="images"
                    class="mx-auto"
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<router lang="yaml">
    path: /vaccine-details
    name: vaccine-details
</router>

<script>
import { call, get } from "vuex-pathify";

export default {
  data() {
    return {
      isEditorDialogOpen: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      selectedVaccine: "Moderna",
      image: null,

      consumer: {
        vaccine_id: "",
        vaccine_first_dose_date: "",
        vaccine_second_dose_date: "",
        expiration_date: new Date().toISOString().substr(0, 10),
        vaccine_received_location: "",
      },

      vaccine_lot_number: "123456",

      testdate: "2019-07-04",

      consumer_vaccine_card_images: null,
    };
  },

  computed: {
    vaccines: get("vaccine/items"),

    vaccineCardImageDisplay() {
      let images = [];
      if (!_.isEmpty(this.consumer_vaccine_card_images)) {
        this.consumer_vaccine_card_images.forEach((item) => {
          images.push(`${process.env.imagesBaseUrl}${item.vaccine_card_image}`);
        });
      }
      return images;
    },
  },

  methods: {
    fetchVaccines: call("vaccine/fetchItems"),
    findConsumerVaccine: call("consumer/vaccine/findItem"),

    editorClick() {
      this.isEditorDialogOpen = true;
    },
    imagesDisplay() {
      return this.image === null ? "" : URL.createObjectURL(this.image);
    },
  },

  async fetch() {
    await this.fetchVaccines();

    await this.findConsumerVaccine({
      query: {
        id: this.$auth.$storage.getUniversal("consumer_id"),
      },
    }).then((response) => {
      if (response.success) {
        this.consumer = response.consumer_vaccine;
        this.consumer_vaccine_card_images =
          response.consumer_vaccine_card_images;
      }
      console.info("consumer", response);
    });
  },
};
</script>

<style scoped>
.page-card {
  width: 80%;
}

@media screen and (max-width: 600px) {
  .page-card {
    width: 100%;
  }
}
</style>