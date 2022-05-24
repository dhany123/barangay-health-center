<template>
  <div>
    <TitleHeader title="TARGET CLIENT LIST FOR FAMILY PLANNING SERVICES" />
    <div class="text-right pa-4">
      <v-btn color="primary" @click="test"> Export Data </v-btn>
    </div>
    <v-data-table
      :headers="headers"
      :items="family_planners"
      class="elevation-2"
      item-key="id"
    >
      <template v-slot:[`item.number`]="{ item }">
        <div>{{ family_planners.indexOf(item) }}</div>
      </template>
      <template v-slot:[`item.name`]="{ item }">
        <div>{{ item.last_name }}, {{ item.given_name }}</div>
      </template>
      <template v-slot:[`item.age`]="{ item }">
        <div>
          {{ item.age }}
        </div>
        <v-divider></v-divider>
        <div>{{ item.dob }}</div>
      </template>
      <template v-slot:[`item.se_status`]="{ item }">
        <div v-show="item.nhts === true">NHTS</div>
        <div v-show="item.four_ps === true">4Ps</div>
      </template>
      <template v-slot:[`item.method_currently_used`]="{ item }">
        <div v-show="item.method_currently_used !== ''">
          {{ item.method_currently_used }}
        </div>
      </template>
    </v-data-table>

    <table v-show="false" class="table family-planning-report">
      <thead>
        <tr>
          <th>No.</th>
          <th>Date of Registration</th>
          <th>Complete Name</th>
          <th>Complete Address</th>
          <th>Age/Date of Birth</th>
          <th>SE Status</th>
          <th>Type of Client</th>
          <th>Previous Method</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in family_planners" :key="item.id">
          <td>{{ family_planners.indexOf(item) }}</td>
          <td class="text-center ml-1">{{ item.registration_date }}</td>
          <td>{{ item.last_name }}, {{ item.given_name }}</td>
          <td>{{ item.address }}</td>
          <td style="text-align: center">
            <div>{{ item.age }}</div>
            <div>—</div>
            <div>{{ item.dob }}</div>
          </td>
          <td style="text-align: center">
            <div v-if="item.nhts === true">NHTS</div>
            <div v-if="item.four_ps === true">4Ps</div>
          </td>

          <td>{{ item.selected_client_type }}</td>
          <td>
            <div v-show="item.method_currently_used !== ''">
              {{ item.method_currently_used }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<router lang="yaml">
    path: /reports/list-for-family-planning-services
    name: reports-list-for-family-planning-services
</router>

<script>
import jsPDF from "jspdf";
import "jspdf-autotable";
import { call, get } from "vuex-pathify";

export default {
  data() {
    return {
      headers: [
        { text: "No.", value: "number" },
        { text: "Date of Registration", value: "registration_date" },
        { text: "Complete Name", value: "name" },

        {
          text: "Complete Address",
          value: "address",
          sortable: false,
        },

        {
          text: "Age/Date of Birth",
          value: "age",
          align: "center",
        },

        {
          text: "SE Status",
          value: "se_status",
          sortable: false,
        },

        {
          text: "Type of Client",
          value: "selected_client_type",
          sortable: false,
        },

        {
          text: "Previous Method",
          value: "method_currently_used",
          sortable: false,
        },
      ],

      family_planners: [],
    };
  },
  methods: {
    fetchResidents: call("familyPlanning/fetchItems"),

    test() {
      if (process.client) {
        var pdf = new jsPDF("l", "pt", "legal");

        pdf.setFontSize(16);
        pdf.setFont(undefined, "bold");
        pdf.text("TARGET CLIENT LIST FOR FAMILY PLANNING SERVICES", 300, 60);

        pdf.autoTable({
          html: ".family-planning-report",
          startY: 80,

          useCss: true,
        });

        pdf.output("dataurlnewwindow");
      }
    },
  },

  async fetch() {
    this.fetchResidents().then((response) => {
      this.family_planners = response.data;
      console.info(response.data);
    });
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  background-color: #fff;
}
td {
  padding: 4px 6px;
}
</style>