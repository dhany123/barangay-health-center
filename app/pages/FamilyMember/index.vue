<template>
  <div>
    <PricingDialog
      :isDialogOpen="(isPricingDialogOpen = true)"
      @close="isPricingDialogOpen = false"
    />

    <TitleHeader title="Family Members " />
    <v-container fill-height fluid class="px-0 px-sm-6 px-md-16">
      <v-row align="center">
        <v-col>
          <FamilyMemberEditor
            :isDialogOpen="isAddFamilyMemberOpen"
            @close="isAddFamilyMemberOpen = false"
          />
          <v-data-table :headers="headers" :items="items" class="mb-4">
            <template v-slot:top>
              <v-toolbar flat>
                <v-spacer></v-spacer>

                <v-btn color="primary" @click="addFamilyMemberDialog"
                  >Add Family Member</v-btn
                >
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                medium
                class="mr-2"
                color="blue"
                @click="addFamilyMemberDialog"
              >
                mdi-pencil
              </v-icon>
              <v-icon medium class="mr-2" color="red"> mdi-delete </v-icon>
              <v-icon medium class="mr-2" color="green" @click="viewProfile">
                mdi-eye
              </v-icon>
              <v-icon medium @click="viewProfile"> mdi-qrcode </v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<router lang="yaml">
    path: /family-members
    name: family-members
</router>

<script>
export default {
  data() {
    return {
      isAddFamilyMemberOpen: false,
      headers: [
        { text: "Name", value: "name", width: "20%" },
        { text: "Vaccine Manufacturer", value: "vaccine_manufacturer" },
        { text: "Vaccine Lot # ", value: "vaccine_lot_number" },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          align: "center",
          width: "180px",
        },
      ],

      items: [
        {
          id: 1,
          name: "Zendy",
          vaccine_manufacturer: "Moderna",
          vaccine_lot_number: "123456",
        },
      ],
    };
  },

  methods: {
    addFamilyMemberDialog() {
      this.isAddFamilyMemberOpen = true;
    },

    viewProfile() {
      this.$router.push({
        name: "family-members-profile",
      });
    },
  },
};
</script>