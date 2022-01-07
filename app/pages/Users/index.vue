<template>
  <v-container class="mt-14 px-sm-16">
    <UserView
      v-if="isDialogOpen"
      :isDialogOpen="isDialogOpen"
      @close="isDialogOpen = false"
      :item="viewItem"
    />
    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-2"
      :search="search"
      item-key="id"
    >
      <template v-slot:top>
        <v-text-field
          append-icon="mdi-magnify"
          placeholder="Search User"
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

      <template v-slot:[`item.action`]="{ item }">
        <v-icon medium class="mr-2" color="green" @click="viewProfile(item)">
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<router lang="yaml">
    path: /users
    name: users
</router>

<script>
import Swal from "sweetalert2";
import { call, get } from "vuex-pathify";
export default {
  data() {
    return {
      search: "",
      isDialogOpen: false,
      viewItem: null,
      headers: [
        { text: "Name", value: "name" },

        {
          text: "Email",
          value: "email",
        },

        {
          text: "Phone",
          value: "phone",
        },

        {
          text: "Location",
          value: "location",
        },

        {
          text: "Website",
          value: "website",
        },

        {
          text: "Company Name",
          value: "company_name",
        },

        {
          text: "Action",
          value: "action",
          sortable: false,
          width: "105px",
        },
      ],

      users: [],
    };
  },

  methods: {
    fetchUsers: call("user/fetchUsers"),

    viewProfile(item) {
      this.viewItem = { ...{}, ...item };
      this.isDialogOpen = true;
    },
  },

  async fetch() {
    this.fetchUsers().then((response) => {
      this.users = response.data.users;
      console.info(response.data);
    });
  },
};
</script>
