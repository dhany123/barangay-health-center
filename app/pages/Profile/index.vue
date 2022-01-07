<template>
  <div>
    <TitleHeader title="Consumer Details" />

    <ConsumerDialog
      :isDialogOpen="isEditorDialogOpen"
      @close="isEditorDialogOpen = false"
    />
    <v-container fill-height fluid>
      <div class="mx-auto mt-12 profile-card">
        <v-card class="px-4 px-sm-8" outlined>
          <v-card-text>
            <div class="text-right">
              <v-btn disabled color="primary" @click="editorClick">Edit</v-btn>
            </div>
            <v-img
              style="margin-bottom: 20px"
              max-height="180"
              max-width="180"
              min-height="180"
              :lazy-src="profileDisplay"
              :src="profileDisplay"
              class="mx-auto rounded-circle"
            >
            </v-img>

            <label class="label"
              >Name as it is identified on ID and Vaccine Card</label
            >
            <v-text-field
              readonly
              outlined
              dense
              v-model="consumer.name"
            ></v-text-field>

            <label class="label">Address</label>
            <v-text-field
              readonly
              outlined
              dense
              v-model="consumer.address"
            ></v-text-field>

            <v-row dense>
              <v-col cols="12" md="6"
                ><label class="label">City</label>
                <v-text-field
                  readonly
                  outlined
                  dense
                  v-model="consumer.city"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <label class="label">State</label>
                <v-text-field
                  readonly
                  outlined
                  dense
                  v-model="consumer.state"
                ></v-text-field
              ></v-col>

              <v-col cols="12" md="6">
                <label class="label">Zip</label>
                <v-text-field
                  readonly
                  outlined
                  dense
                  v-model="consumer.zip"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <label class="label">Date of Birth (DOB)</label>
                <v-text-field
                  readonly
                  outlined
                  dense
                  type="date"
                  v-model="consumer.dob"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="px-4 px-sm-8 mt-8" outlined>
          <v-card-text>
            <b class="text-subtitle-1 text-sm-h6 font-weight-bold"
              >Primary Contact Information</b
            >
            <v-divider class="mb-4"></v-divider>

            <v-row dense>
              <v-col cols="12" md="6">
                <label class="label">Mobile Tel#</label>
                <v-text-field
                  readonly
                  outlined
                  dense
                  v-model="consumer.mobile_number"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <label class="label">Home Tel#</label>
                <v-text-field
                  readonly
                  outlined
                  dense
                  v-model="consumer.home_tel_number"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12">
                <label class="label">Email Address</label>
                <v-text-field
                  readonly
                  outlined
                  dense
                  v-model="consumer.email"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card style="margin-bottom: 40px" class="px-4 px-sm-8 mt-8" outlined>
          <v-card-text>
            <b class="text-subtitle-1 text-sm-h6 font-weight-bold"
              >Primary Medical Doctor Information</b
            >
            <v-divider class="mb-4"></v-divider>

            <v-row dense>
              <v-col cols="12" md="6">
                <label class="label">Primary Doctor Name</label>
                <v-text-field
                  outlined
                  dense
                  readonly
                  v-model="consumer.primary_doctor_name"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <label class="label">Primary Doctor Tel#</label>
                <v-text-field
                  outlined
                  dense
                  readonly
                  v-model="consumer.primary_doctor_tel"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <p class="mt-6">Uploaded Valid ID</p>
        <v-row cols="12">
          <v-col md="12">
            <v-card>
              <v-img
                contain
                :lazy-src="validIdImageDisplay"
                min-height="350"
                max-height="350"
                min-width="350"
                max-width="350"
                :src="validIdImageDisplay"
                class="mx-auto"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<router lang="yaml">
    path: /Profile
    name: profile
</router>

<script>
import { call, get } from "vuex-pathify";

export default {
  data() {
    return {
      isEditorDialogOpen: false,
      tab: null,
      rules: {
        required: (value) => !!value || "Required.",
      },
      e1: 1,
      image: null,

      consumer: {
        profile: {
          raw: null,
          base64: "",
          extension: "",
        },
        name: "",
        address: "",
        dob: "",
        city: "",
        state: "",
        zip: "",
        mobile_number: "",
        home_tel_number: "",

        valid_id: {
          raw: null,
          base64: "",
          extension: "",
        },

        primary_doctor_name: "",
        primary_doctor_tel: "",

        email: "",
        password: "",
        retype_password: "",

        vaccine: "",
        vaccine_lot_number: "",
        vaccine_dose_count: "",
        vaccine_id: "",
        vaccine_first_dose_date: "",
        vaccine_second_dose_date: "",
        vaccine_expiration_date: "",
        vaccine_received_location: "",

        vaccine_card_images: [],
      },
    };
  },

  computed: {
    vaccines: get("vaccine/items"),

    //todo remove image base url and use from api
    profileDisplay() {
      return this.consumer.profile_image === ""
        ? require("~/assets/images/user.svg")
        : `${process.env.imagesBaseUrl}${this.consumer.profile_image}`;
    },

    validIdImageDisplay() {
      return this.consumer.valid_id_image === ""
        ? require("~/assets/images/user.svg")
        : `${process.env.imagesBaseUrl}${this.consumer.valid_id_image}`;
    },

    vaccineCardImageDisplay() {
      let images = [];
      if (!_.isEmpty(this.consumer.vaccine_card_images)) {
        this.consumer.vaccine_card_images.forEach((item) => {
          images.push(URL.createObjectURL(item.raw));
        });
      }
      return images;
    },
  },

  methods: {
    findConsumer: call("consumer/findItem"),
    fetchVaccines: call("vaccine/fetchItems"),

    editorClick() {
      this.isEditorDialogOpen = true;
    },
  },

  mounted() {
    console.info("storage", this.$auth.$storage.getUniversal("consumer_id"));
  },

  async fetch() {
    await this.fetchVaccines();

    this.findConsumer({
      query: {
        id: this.$auth.$storage.getUniversal("consumer_id"),
      },
    }).then((response) => {
      if (response.success) {
        this.consumer = { ...this.consumer, ...response.consumer };
      }
      console.info("consumerx", this.consumer);
    });
  },
};
</script>

<style scoped>
.profile-card {
  width: 80%;
}

@media screen and (max-width: 600px) {
  .profile-card {
    width: 100%;
  }
}
</style>
