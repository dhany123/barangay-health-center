<template>
  <v-container fluid fill-height style="background-color: #0093e9">
    <v-row class="mt-6">
      <v-col cols="12" class="d-flex justify-center align-center mt-8">
        <v-card
          ref="form"
          :width="$vuetify.breakpoint.smAndDown ? '100%' : '30vw'"
          min-height="450"
          dark
          class="px-4 px-sm-10 mx-16 d-flex align-center"
          style="
            background-color: #0093e9;
            background-image: linear-gradient(to top, #04befe 0%, #4481eb 100%);
          "
        >
          <v-card-text class="white--text">
            <!-- <v-img
              height="50"
              width="250"
              :src="require('@/assets/logo.png')"
              class="mx-auto mb-6"
              contain
            ></v-img> -->

            <p class="text-h6 text-center text-uppercase">
              Barangay Health Center Record Management System
            </p>

            <label for="" class="font-weight-bold">Email</label>
            <v-text-field
              v-model="user.email"
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>

            <div class="d-flex justify-space-between mb-n2">
              <label for="" class="font-weight-bold">Password</label>

              <p>Forgot password?</p>
            </div>
            <v-text-field
              v-model="user.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
              outlined
              dense
            ></v-text-field>

            <v-btn
              block
              color="primary"
              class="mt-4"
              dark
              x-large
              @click="onLoginClick"
            >
              LOGIN
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { call, get } from "vuex-pathify";

export default {
  layout: "nolayout",
  data() {
    return {
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },

      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    userLogin: call("user/login"),

    async onLoginClick() {
      try {
        this.$nuxt.$loading.start();

        let response = await this.$auth.loginWith("local", {
          data: this.user,
        });

        if (!response.data.success) {
          this.$toast({
            icon: "error",
            title: response.data.message,
          });
          return;
        }

        this.$toast({
          icon: "success",
          title: "Successfully logged in.",
        });

        this.$auth.setUser(this.user);

        this.$auth.$storage.setUniversal("user", response.data.user);

        this.$router.push({
          name: "leads",
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.$nuxt.$loading.finish();
      }
    },
  },
};
</script>

<style scoped>
.v-text-field > .v-input__control > .v-input__slot {
  border: 2px solid #fff;
}
</style>
