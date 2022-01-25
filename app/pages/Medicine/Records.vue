<template>
  <v-container>
    <TitleHeader title="Medicine Records" />
    <v-data-table
      :headers="headers"
      :items="medicines"
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
            placeholder="Search Record"
            filled
            rounded
            dense
            v-model="search"
            style="width: 40%"
            class="ml-4 pt-6 mb-6"
          ></v-text-field>
          <v-spacer></v-spacer>
        </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<router lang="yaml">
    path: /medicine/records
    name: medicine-records
</router>

<script>
import Swal from "sweetalert2";
import { call, get } from "vuex-pathify";
export default {
  computed: {},

  data() {
    return {
      search: "",

      headers: [
        {
          text: " Name",
          value: "name",
        },

        {
          text: "Type",
          value: "type",
        },

        {
          text: "Description",
          value: "description",
          sortable: false,
        },

        {
          text: "Quantity",
          value: "stocks.quantity",
        },

        {
          text: "Date Supplied",
          value: "stocks.date_supplied",
        },
        {
          text: "Supplier",
          value: "stocks.supplier_name",
        },
      ],

      medicines: [],
    };
  },

  methods: {
    fetchMedicines: call("medicines/fetchItems"),
  },

  async fetch() {
    this.fetchMedicines().then((response) => {
      this.medicines = response.data;
      console.info(response.data);
    });
  },
};
</script>
