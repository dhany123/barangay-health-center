<template>
  <v-container class="mt-14">
    <VaccineEditor
      :isDialogOpen="showEditor"
      @close="showEditor = false"
      :item="editItem"
    />
    <v-data-table
      :headers="headers"
      :items="vaccines.items"
      class="elevation-2"
      :search="search"
    >
      <template v-slot:top>
        <!-- <v-toolbar> -->
        <div
          class="d-inline-flex justify-space-between align-center"
          style="width: 98%"
        >
          <v-text-field
            append-icon="mdi-magnify"
            label="Search Vaccine"
            single-line
            hide-details
            v-model="search"
            style="width: 20%"
            class="ml-4 pt-6 mb-6"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="addItem">Add</v-btn>
        </div>
        <!-- </v-toolbar> -->
      </template>

      <template v-slot:[`item.image`]="{ item }">
        <v-avatar size="38">
          <img :src="item.profile_image" alt="Img" />
        </v-avatar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon medium color="blue" @click="editVaccineItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon medium color="red" @click="showDeleteConfirmation(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<router lang="yaml">
    path: /vaccine
    name: vaccine
</router>

<script>
import { call, get } from "vuex-pathify";
import Swal from "sweetalert2";
export default {
  computed: {
    vaccines: get("vaccine/items"),
  },

  data() {
    return {
      search: "",
      showEditor: false,
      editItem: null,
      headers: [
        { text: "Type", value: "type" },

        { text: "Dose Count", value: "dose_count" },

        {
          text: "Action",
          value: "actions",
          sortable: false,
          align: "center",
          width: "150px",
        },
      ],
    };
  },

  methods: {
    fetchVaccines: call("vaccine/fetchItems"),
    deleteVaccine: call("vaccine/deleteItem"),

    addItem() {
      this.editItem = null;
      this.showEditor = true;
    },
    editVaccineItem(item) {
      this.editItem = { ...{}, ...item };
      this.showEditor = true;
    },

    deleteItem(item) {
      this.deleteVaccine(item.id).then(
        (res) => {
          Swal.fire({
            title: "Successfully Deleted",
            icon: "success",
          });
        },

        (err) => {
          alert(err);
        }
      );
    },

    showDeleteConfirmation(item) {
      Swal.fire({
        icon: "warning",
        title: "Are you sure you want to delete the item?",
        showCancelButton: true,
        confirmButtonText: `Yes`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteItem(item);
        }
      });
    },
  },

  async fetch() {
    await this.fetchVaccines();
  },
};
</script>
