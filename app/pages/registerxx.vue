<template>
  <v-app>
    <v-container fill-height fluid class="ma-n3">
      <v-row align="center">
        <v-col cols="12" md="6" sm="12">
          <div class="d-none d-sm-none d-md-flex">
            <v-img
              max-height="500"
              max-width="500"
              :src="require('@/assets/images/bg2.jpg')"
              class="mx-auto"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-row justify="center">
            <v-col cols="12" md="10" sm="12">
              <v-card
                ref="form"
                class="px-10 ma-7 mx-sm-16 pa-xs-1 rounded-lg"
                color="rgba(238, 196, 234, 0.44)"
              >
                <v-card-text>
                  <v-img
                    max-height="140"
                    max-width="140"
                    :src="require('@/assets/images/logo.png')"
                    class="mx-auto mb-6"
                  ></v-img>

                  <v-text-field label="First Name"></v-text-field>

                  <v-text-field label="Last Name"></v-text-field>

                  <v-text-field label="Email"></v-text-field>

                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    @click:append="show1 = !show1"
                  ></v-text-field>


                  <v-btn block color="primary" class="mt-4" dark x-large>
                    Register
                  </v-btn>

                  <div class="text-center mt-4">
                    <div>
                      Already have an account?
                      <b
                        class="primary--text"
                        @click="registerClick"
                        style="cursor: pointer"
                        >Login</b
                      >
                    </div>
                  </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "register",
  data() {
    return {
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    registerClick() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>
