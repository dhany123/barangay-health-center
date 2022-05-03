<template>
  <v-container>
    <FamilyPlanningEditor
      v-if="showEditor"
      :isDialogOpen="showEditor"
      @close="showEditor = false"
      :item="editRecord"
      @onSubmitClick="onSubmitClick"
      :readOnly="readOnly"
    />
    <TitleHeader title="FAMILY PLANNING" />
    <v-data-table
      :headers="headers"
      :items="immunizations"
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
            placeholder="Search Resident"
            filled
            rounded
            dense
            v-model="search"
            style="width: 40%"
            class="ml-4 pt-6 mb-6"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="addResident"> Add </v-btn>
        </div>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon medium class="mr-2" color="green" @click="viewResident(item)">
          mdi-eye
        </v-icon>
        <v-icon medium class="mr-2" color="blue" @click="updateResident(item)">
          mdi-pencil
        </v-icon>

        <v-icon
          medium
          class="mr-2"
          color="red"
          @click="showDeleteConfirmation(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<router lang="yaml">
    path: /family-planning
    name: family-planning 
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
          text: "Date of Birth",
          value: "dob",
          sortable: false,
        },

        {
          text: "Gender",
          value: "sex",
        },

        {
          text: "Mother's Name",
          value: "mothers_name",
          sortable: false,
        },

        {
          text: "Address",
          value: "address",
          sortable: false,
        },

        {
          text: "Actions",
          value: "actions",
          sortable: false,
          align: "center",
          width: "150px",
        },
      ],

      immunizations: [],
      readOnly: false,
    };
  },

  methods: {
    fetchChildRecord: call("immunization/fetchItems"),
    deleteChildRecord: call("immunization/removeItem"),

    addResident() {
      this.editRecord = null;
      this.showEditor = true;
      this.readOnly = false;
    },

    updateResident(item) {
      this.editRecord = { ...{}, ...item };
      this.showEditor = true;
      this.readOnly = false;
    },

    viewResident(item) {
      this.editRecord = { ...{}, ...item };
      this.showEditor = true;
      this.readOnly = true;
    },

    deleteItem(item) {
      this.deleteChildRecord(item.id).then(
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
        this.immunizations.push(data.item);
        return;
      }

      //update
      this.immunizations.splice(
        this.immunizations.findIndex((items) => items.id === data.item.id),
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
    this.fetchChildRecord().then((response) => {
      this.immunizations = response.data;
      console.info(response.data);
    });
  },
};
</script>
