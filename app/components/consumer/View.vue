<template>
  <v-dialog
    v-model="showDialog"
    max-width="500"
    persistent
    scrollable
    transition="slide-x-reverse-transition"
    content-class="add-deal-dialog"
  >
    <v-card tile>
      <v-toolbar flat height="45px">
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <!-- <v-card class="pa-4" outlined> -->
        <v-row>
          <v-col cols="12" sm="3">
            <v-img
              max-height="80"
              max-width="80"
              :src="require('@/assets/images/user.svg')"
            ></v-img>
          </v-col>

          <v-col cols="12" sm="7">
            <div>Juan Pablo</div>
            <div>Vaccine Location</div>
            <div>Lot #</div>
          </v-col>
        </v-row>

        <v-simple-table dense class="mt-2 text-center">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Vaccine</th>
                <th class="text-left">Manufacturer</th>

                <th class="text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1<sup>st</sup> Dose</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2<sup>nd</sup> Dose</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!-- </v-card> -->
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { DialogMixin } from "~/mixins/DialogMixin";
export default {
  mixins: [DialogMixin],
};
</script>
