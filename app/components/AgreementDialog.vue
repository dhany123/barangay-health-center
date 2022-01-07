<template>
  <v-dialog
    v-model="showDialog"
    max-width="600"
    persistent
    scrollable
    transition="slide-x-reverse-transition"
    content-class="add-deal-dialog"
  >
    <v-card tile class="pa-6">
      <v-toolbar flat height="60px">
        <v-spacer></v-spacer>

        <v-toolbar-title> Agreement </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text>
        <p class="mt-2">
          All I information provided is confidential and will be utilized for
          confirmation of valid vaccine record.
        </p>

        <p>
          I accept: The information I provided will be used by merchants for
          confirmation of my vax record and contact tracing in the event of
          exposure. My information will not be sold or used for marketing of any
          kind by entities with access to my information.
        </p>

        <p>
          Acknowledgement I confirm that all the information I have provided is
          accurate and true. I understand that falsification of vaccine record
          is not permitted and will create validation impacts to statistical
          information.
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="onAgreementClick(false)"> Disagree </v-btn>
        <v-btn color="primary" text @click="onAgreementClick(true)"> Agree </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { DialogMixin } from "~/mixins/DialogMixin";
export default {
  mixins: [DialogMixin],

  methods: {
    onAgreementClick(value){
      this.$emit('onAgreement', value)
      this.closeDialog()
    }
  }

};
</script>