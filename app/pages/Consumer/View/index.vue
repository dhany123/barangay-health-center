<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="2">
        <v-img
          max-height="200"
          max-width="200"
          :src="
            consumer.profileImage
              ? `https://api.vaxrec.com:3005/public/${consumer.profileImage}`
              : require('@/assets/images/user.svg')
          "
          class="mx-auto rounded-circle mt-16"
          alt="Img"
          contain
        >
        </v-img>
        <div class="text-center mt-4">
          <v-btn color="green" rounded dark> Verified </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="10">
        <v-tabs v-model="tab" show-arrows background-color="transparent">
          <v-tab href="#basic-info"> Consumer Information </v-tab>
          <v-tab href="#vaccine-info"> Vaccine Information </v-tab>
          <v-tab href="#family-members"> Family Members </v-tab>
        </v-tabs>

        <v-tabs-items :value="tab">
          <v-tab-item value="basic-info" style="background: #eceff2">
            <BasicInfo :item="consumer" />
          </v-tab-item>

          <v-tab-item value="vaccine-info" style="background: #eceff2">
            <VaccineInfo :item="vaccine" />
          </v-tab-item>

          <v-tab-item value="family-members" style="background: #eceff2">
            <FamilyMembers />
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<router lang="yaml">
    path: /consumer-view
    name: consumer-view
</router>

<script>
import { call, get } from "vuex-pathify";
import BasicInfo from "~/pages/Consumer/View/BasicInfo";
import VaccineInfo from "~/pages/Consumer/View/VaccineInfo";
import FamilyMembers from "~/pages/Consumer/View/FamilyMembers";

export default {
  components: {
    BasicInfo,
    VaccineInfo,
    FamilyMembers,
  },
  data() {
    return {
      tab: null,
      consumer: {},
      vaccine: {
        vaccine_id: "",
        vaccine_first_dose_date: "",
        vaccine_second_dose_date: "",
        expiration_date: new Date().toISOString().substr(0, 10),
        vaccine_received_location: "",
      },
    };
  },

  computed: {
    // vaccine: get("consumer/vaccine/items"),
  },

  methods: {
    findConsumerVaccine: call("consumer/vaccine/findItem"),
  },

  mounted() {
    let item = this.$nuxt.$route.params.item;
    this.consumer = {
      id: item.consumer_id,
      profileImage: item.profile_image,
      firstName: item.name,
      dob: item.dob,
      address: item.address,
      city: item.city,
      state: item.state,
      zip: item.zip,
      mobileNumber: item.mobile_number,
      homeNumber: item.home_tel_number,
      doctorName: item.primary_doctor_name,
      doctorNumber: item.primary_doctor_tel,
      ValidID: item.valid_id_image,
    };
  },

  async fetch() {
    await this.findConsumerVaccine({
      query: {
        // consumer_id: this.$nuxt.$route.query.id,

        id: this.$auth.$storage.getUniversal("consumer_id"),
      },
    }).then((response) => {
      if (response.success) {
        this.vaccine = response.consumer_vaccine;
        // this.consumer_vaccine_card_images =
        //   response.consumer_vaccine_card_images;
      }
      console.info("consumer", response);
    });
  },
};
</script>
