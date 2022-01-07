<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" class="d-none d-md-flex">
        <v-img
          max-height="85vh"
          max-width="40vw"
          :src="require('@/assets/images/logo.gif')"
          class="ma-auto"
        ></v-img>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-md-flex align-center justify-center"
        style="
          background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
          height: 100vh;
        "
      >
        <v-img
          :height="$vuetify.breakpoint.xs ? '300' : '400'"
          :src="require('@/assets/images/logo.gif')"
          class="d-md-none my-6"
        ></v-img>
        <v-card
          ref="form"
          dark
          class="px-0 px-sm-10 mx-7"
          :flat="$vuetify.breakpoint.mobile"
          style="
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(3.5px);
            -webkit-backdrop-filter: blur(3.5px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
          "
        >
          <v-card-text>
            <v-text-field label="Email" v-model="email"></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              @click:append="show1 = !show1"
            ></v-text-field>

            <div class="text-right mt-2">
              <p>Forgot password?</p>
            </div>

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
  <!-- <v-app style="height: 100%">
    <v-img
      :height="$vuetify.breakpoint.xs ? '300' : '400'"
      :src="require('@/assets/images/logo.gif')"
      class="d-md-none"
    ></v-img>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" class="d-none d-md-flex">
        <div>
          <v-img
            max-height="85vh"
            max-width="40vw"
            :src="require('@/assets/images/logo.gif')"
            class="mx-auto ml-4"
          ></v-img>
        </div>
      </v-col>
      <v-col cols="12" md="4" sm="8">
        <v-card
          ref="form"
          class="px-0 px-sm-10 mx-7 d-flex align-center"
          color="#FFFFFFC4"
          :flat="$vuetify.breakpoint.mobile"
          :height="$vuetify.breakpoint.mobile ? '' : '70vh'"
        >
          <v-card-text>
            <v-text-field label="Email" v-model="email"></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              @click:append="show1 = !show1"
            ></v-text-field>

            <div class="text-right mt-2">
              <p>Forgot password?</p>
            </div>

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
  </v-app> -->
</template>

<router lang="yaml">
    path: /loginV2
    name: profile-v2
</router>

<script>
export default {
  data() {
    return {
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },

      email: "",
      password: "",
    };
  },
  methods: {
    registerClick() {
      this.$router.push({
        path: "/register",
      });
    },

    async onLoginClick() {
      try {
        this.$nuxt.$loading.start();

        let response = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
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
          title: response.data.message,
        });

        this.$auth.setUser({
          email: this.email,
          password: this.password,
        });

        this.$auth.$storage.setUniversal("login", true);
        this.$auth.$storage.setUniversal(
          "consumer_id",
          response.data.consumer.id
        );
        this.$auth.$storage.setUniversal(
          "consumer_name",
          response.data.consumer.name
        );

        this.$router.push({
          name: "profile",
          query: {
            id: response.data.consumer.id,
          },
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
