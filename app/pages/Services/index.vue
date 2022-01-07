<template>
  <v-container class="mt-14 px-sm-16">
    <ServicesEditor
      v-if="showEditor"
      :isDialogOpen="showEditor"
      @close="showEditor = false"
      :item="editLead"
      @onSubmitClick="onSubmitClick"
    />

    <TestPdf ref="html2Pdf" />
    <v-data-table
      :headers="headers"
      :items="services"
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
            placeholder="Search Leads"
            filled
            rounded
            dense
            v-model="search"
            style="width: 40%"
            class="ml-4 pt-6 mb-6"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="generatePDF"> Add </v-btn>
        </div>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
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

<router lang="yaml">
    path: /services
    name: services
</router>

<script>
import Swal from "sweetalert2";
import { call, get } from "vuex-pathify";
export default {
  data() {
    return {
      search: "",
      showEditor: false,
      editLead: null,
      headers: [
        { text: "Category", value: "service_category.name" },
        { text: "Name", value: "name" },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          align: "center",
          width: "105px",
        },
      ],

      services: [],
    };
  },

  methods: {
    fetchServices: call("services/fetchServices"),

    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },

    addLead() {
      this.editLead = null;
      this.showEditor = true;
    },

    updateLead(item) {
      this.editLead = { ...{}, ...item };
      this.showEditor = true;
    },

    deleteItem(item) {
      this.deleteServices(item.id).then(
        (res) => {
          this.showMsg("Successfully deleted!");
        },
        (err) => {
          this.showMsg("Something went wrong!", "error");
        }
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

    onSubmitClick(data) {
      if (data.tag === "save") {
        this.services.push(data.item);
        return;
      }

      //update
      this.services.splice(
        this.services.findIndex((items) => items.id === data.item.id),
        1,
        data.item
      );
    },
  },

  async fetch() {
    this.fetchServices().then((response) => {
      this.services = response.data.services;
    });
  },
};
</script>
