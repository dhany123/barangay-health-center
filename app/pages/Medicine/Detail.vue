<template>
  <v-container>
    <MedicineEditor
      v-if="showEditor"
      :isDialogOpen="showEditor"
      @close="showEditor = false"
      :item="editChild"
      @onSubmitClick="onSubmitClick"
      :readOnly="readOnly"
    />

    <MedicineAddStock
      v-if="showAddStockEditor"
      :isDialogOpen="showAddStockEditor"
      :item="addStocks"
      @close="showAddStockEditor = false"
      :readOnly="readOnly"
    />

    <MedicineRemove
      v-if="showRemoveEditor"
      :isDialogOpen="showRemoveEditor"
      @close="showRemoveEditor = false"
      :readOnly="readOnly"
    />
    <TitleHeader title="Medicine Details" />

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
            placeholder="Search Medicine"
            filled
            rounded
            dense
            v-model="search"
            style="width: 40%"
            class="ml-4 pt-6 mb-6"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="addMedicine"> Add </v-btn>
        </div>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-btn color="primary" class="mr-2" @click="addStock(item)">
          Add Stock
        </v-btn>
        <v-icon medium class="mr-2" color="green" @click="viewMedicine(item)">
          mdi-eye
        </v-icon>
        <v-icon medium class="mr-2" color="blue" @click="updateMedicine(item)">
          mdi-pencil
        </v-icon>

        <v-icon medium class="mr-2" color="red" @click="removeMedicine(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<router lang="yaml">
    path: /medicine/detail
    name: medicine-detail
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
      showRemoveEditor: false,
      showAddStockEditor: false,
      editChild: null,
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
          text: "Stocks",
          value: "stock",
        },

        {
          text: "Actions",
          value: "actions",
          sortable: false,
          align: "center",
          width: "280px",
        },
      ],

      medicines: [],
      readOnly: false,
    };
  },

  methods: {
    fetchMedicines: call("medicines/fetchItems"),
    // deleteMedicine: call("leads/removeItem"),

    addMedicine() {
      this.editChild = null;
      this.showEditor = true;
      this.readOnly = false;
    },

    addStock(item) {
      this.addStocks = { ...{}, ...item };
      this.addStocks.stocks = { ...{}, ...item.stocks };
      this.showAddStockEditor = true;
    },
    updateMedicine(item) {
      this.editChild = { ...{}, ...item };
      this.showEditor = true;
      this.readOnly = false;
    },

    viewMedicine(item) {
      this.editChild = { ...{}, ...item };
      this.showEditor = true;
      this.readOnly = true;
    },

    removeMedicine(item) {
      this.showRemoveEditor = true;
    },

    onSubmitClick(data) {
      if (data.tag === "save") {
        this.medicines.push(data.item);
        return;
      }

      //update
      this.medicines.splice(
        this.medicines.findIndex((items) => items.id === data.item.id),
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
  },

  async fetch() {
    this.fetchMedicines().then((response) => {
      this.medicines = response.data;
      console.info(response.data);
    });
  },
};
</script>
