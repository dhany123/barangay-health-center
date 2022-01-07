<template>
  <v-dialog
    v-model="showDialog"
    max-width="600"
    transition="slide-x-reverse-transition"
  >
    <v-card tile class="text-center d-flex align-center" min-height="300">
      <v-card-text class="px-16">
        <div>
          <v-btn color="primary" block outlined @click="registerClick" large>
            Register
          </v-btn>
        </div>
        <div class="mt-8">
          <v-btn color="primary" block @click="loginClick" large> Login </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { DialogMixin } from "~/mixins/DialogMixin";
export default {
  mixins: [DialogMixin],

  methods: {
    loginClick() {
      this.$router.push({
        path: "/login",
      });
    },
    registerClick() {
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>