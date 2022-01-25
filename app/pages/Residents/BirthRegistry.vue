<template>
  <v-container>
    <ResidentBirthRegistryEditor
      v-if="showEditor"
      :isDialogOpen="showEditor"
      @close="showEditor = false"
      :item="editRecord"
      @onSubmitClick="onSubmitClick"
      :readOnly="readOnly"
    />

    <TitleHeader title="Birth Registry Record" />

    <v-data-table
      :headers="headers"
      :items="birthRegistries"
      class="elevation-2"
      :search="search"
      item-key="id"
    >
      <template v-slot:top>
        <div
          class="d-inline-flex justify-space-between align-center"
          style="width: 98%"
        >
          <v-text-field
            append-icon="mdi-magnify"
            placeholder="Search Children"
            filled
            rounded
            dense
            v-model="search"
            style="width: 40%"
            class="ml-4 pt-6 mb-6"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="addRecord"> Add </v-btn>
        </div>
      </template>

      <template v-slot:[`item.name`]="{ item }">
        <span>{{ item.first_name }} {{ item.last_name }}</span>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon medium class="mr-2" color="green" @click="viewRecord(item)">
          mdi-eye
        </v-icon>
        <v-icon medium class="mr-2" color="blue" @click="updateRecord(item)">
          mdi-pencil
        </v-icon>

        <!-- <v-icon
          medium
          class="mr-2"
          color="red"
          @click="showDeleteConfirmation(item)"
        >
          mdi-delete
        </v-icon> -->
      </template>
    </v-data-table>
  </v-container>
</template>

<router lang="yaml">
    path: /residents/birth-registry
    name: residents-birth-registry
</router>

<script>
import Swal from "sweetalert2";
import { call, get } from "vuex-pathify";
export default {
  computed: {},

  data() {
    return {
      search: "",
      showEditor: false,
      editRecord: null,
      headers: [
        { text: "Name", value: "name" },

        {
          text: "Parent Name",
          value: "parent_name",
          sortable: false,
        },

        {
          text: "Date of Birth",
          value: "dob",
        },

        {
          text: "Birth Weight",
          value: "birth_weight",
          sortable: false,
        },

        {
          text: "Registered",
          value: "is_registered",
          sortable: false,
        },

        {
          text: "Actions",
          value: "actions",
          sortable: false,
          align: "center",
          width: "105px",
        },
      ],

      birthRegistries: [],
      readOnly: false,
    };
  },

  methods: {
    fetchRecords: call("residents/birthregistry/fetchItems"),
    deleteRecord: call("residents/birthregistry/removeItem"),

    addRecord() {
      this.editRecord = null;
      this.showEditor = true;
      this.readOnly = false;
    },

    updateRecord(item) {
      this.editRecord = { ...{}, ...item };
      this.showEditor = true;
      this.readOnly = false;
    },

    viewRecord(item) {
      this.editRecord = { ...{}, ...item };
      this.showEditor = true;
      this.readOnly = true;
    },

    deleteItem(item) {
      this.deleteRecord(item.id).then(
        (res) => {
          this.showMsg("Successfully deleted!");
        },
        (err) => {
          this.showMsg("Something went wrong!", "error");
        }
      );
    },

    onSubmitClick(data) {
      if (data.tag === "save") {
        this.birthRegistries.push(data.item);
        return;
      }

      //update
      this.birthRegistries.splice(
        this.birthRegistries.findIndex((items) => items.id === data.item.id),
        1,
        data.item
      );
    },

    showMsg(msg = "success", icon = "success") {
      this.$toast({
        title: msg,
        icon: icon,
      });
    },
    showDeleteConfirmation(item) {
      Swal.fire({
        icon: "question",
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
    this.fetchRecords().then((response) => {
      this.birthRegistries = response.data;
      console.info(response.data);
    });
  },
};
</script>
