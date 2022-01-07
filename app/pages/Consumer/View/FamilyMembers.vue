<template>
  <v-card class="mt-4">
    <v-card-text>
      <FamilyMemberViewer
        :isDialogOpen="isShowDialog"
        @close="isShowDialog = false"
      />
      <v-data-table :headers="headers" :items="itemx" :search="search">
        <template v-slot:top>
          <!-- <v-toolbar> -->
          <v-text-field
            append-icon="mdi-magnify"
            placeholder="Search"
            filled
            rounded
            dense
            v-model="search"
            style="width: 40%"
            class="ml-4 pt-6 mb-6"
          ></v-text-field>
          <v-spacer></v-spacer>

          <!-- </v-toolbar> -->
        </template>

        <template v-slot:[`item.verification_status`]="{ item }">
          <v-btn color="green" dark small> Verified </v-btn>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-icon medium color="green" @click="viewProfile()"> mdi-eye </v-icon>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    consumer: Object,
  },

  data() {
    return {
      isShowDialog: false,
      search: "",
      headers: [
        {
          text: "",
          value: "image",
          width: "10px",
          sortable: false,
        },
        { text: "Name", value: "name" },
        { text: "Relationship", value: "address" },
        { text: "Birthday", value: "birthday" },
        {
          text: "Mobile Number",
          value: "mobile_number",
          sortable: false,
        },
        { text: "Vaccine Manufacturer", value: "manufacturer" },
        {
          text: "Action",
          value: "actions",
          sortable: false,
          align: "center",
          width: "150px",
        },
      ],

      itemx: [
        {
          id: 1,
          name: "s",
          address: "s",
          birthday: "2",
        },

        {
          id: 2,
          name: "s",
          address: "s",
          birthday: "2",
        },
      ],
    };
  },

  methods: {
    viewProfile() {
      this.isShowDialog = true;
    },
  },
};
</script>