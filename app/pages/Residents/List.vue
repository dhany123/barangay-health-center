<template>
  <v-container>
    <ResidentEditor
      v-if="showEditor"
      :isDialogOpen="showEditor"
      @close="showEditor = false"
      :item="editResident"
      @onSubmitClick="onSubmitClick"
      :readOnly="readOnly"
    />
    <v-data-table
      :headers="headers"
      :items="leads"
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
        <v-icon medium class="mr-2" color="green" @click="viewLead(item)">
          mdi-eye
        </v-icon>
        <v-icon medium class="mr-2" color="blue" @click="updateLead(item)">
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

<script>
import Swal from "sweetalert2";
import { call, get } from "vuex-pathify";
export default {
  computed: {},

  data() {
    return {
      search: "",
      showEditor: false,
      editResident: null,
      headers: [
        { text: "Name", value: "name" },

        {
          text: "Age",
          value: "company_name",
          sortable: false,
        },

        {
          text: "Sex",
          value: "location",
        },

        {
          text: "Civil Status",
          value: "email",
          sortable: false,
        },

        {
          text: "Address",
          value: "phone",
          sortable: false,
        },

        {
          text: "4Ps Member",
          value: "credit_num",
        },

        {
          text: "Actions",
          value: "actions",
          sortable: false,
          align: "center",
          width: "105px",
        },
      ],

      leads: [],
      readOnly: false,
    };
  },

  methods: {
    fetchLeads: call("leads/fetchLeads"),
    deleteLead: call("leads/removeLead"),

    addResident() {
      this.editResident = null;
      this.showEditor = true;
      this.readOnly = false;
    },

    updateLead(item) {
      this.editResident = { ...{}, ...item };
      this.showEditor = true;
      this.readOnly = false;
    },

    viewLead(item) {
      this.editResident = { ...{}, ...item };
      this.showEditor = true;
      this.readOnly = true;
    },

    deleteItem(item) {
      this.deleteLead(item.id).then(
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
        this.leads.push(data.item);
        return;
      }

      //update
      this.leads.splice(
        this.leads.findIndex((items) => items.id === data.item.id),
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
    this.fetchLeads().then((response) => {
      this.leads = response.data.leads;
      console.info(response.data);
    });
  },
};
</script>
