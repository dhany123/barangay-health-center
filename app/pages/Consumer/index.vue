<template>
  <v-container class="mt-14 px-sm-16">
    <ViewConsumerDialog
      v-if="isDialogOpen"
      :isDialogOpen="isDialogOpen"
      @close="isDialogOpen = false"
      :item="viewItem"
    />
    <v-data-table
      :headers="headers"
      :items="consumers.items"
      class="elevation-2"
      :search="search"
      @click:row="viewConsumer"
      item-key="name"
    >
      <template v-slot:top>
        <v-text-field
          append-icon="mdi-magnify"
          placeholder="Search Consumer"
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

      <template v-slot:[`item.image`]="{ item }">
        <v-avatar size="38">
          <img
            contain
            alt="img"
            :src="
              item.profile_image
                ? `https://api.vaxrec.com:3005/public/${item.profile_image}`
                : require('@/assets/images/user.svg')
            "
          />
        </v-avatar>
      </template>

      <template v-slot:[`item.verification_status`]="{ item }">
        <v-btn color="green darken-2" dark rounded>
          <v-icon
            left
            dark
            class="ml-n4 my-n4 pa-4"
            style="
              background-color: #43a047;
              border-radius: 50%;
              border: 2px solid #43a047;
            "
          >
            mdi-check
          </v-icon>
          <span style="width: 100px"> Verified</span>
        </v-btn>

        <!-- <v-btn color="#949494" dark rounded>
          <v-icon
            left
            dark
            class="ml-n4 my-n4 pa-4"
            style="
              background-color: #adadad;
              border-radius: 50%;
              border: 2px solid #adadad;
            "
          >
            mdi-minus
          </v-icon>
          <span style="width: 100px"> Unverified</span>
        </v-btn>

        <v-btn color="#e60000" dark rounded>
          <v-icon
            left
            dark
            class="ml-n4 my-n4 pa-4"
            style="
              background-color: #ff0000;
              border-radius: 50%;
              border: 2px solid #ff0000;
            "
          >
            mdi-close
          </v-icon>
          <span style="width: 100px"> Rejected</span>
        </v-btn> -->
      </template>
    </v-data-table>
  </v-container>
</template>

<router lang="yaml">
    path: /consumer
    name: consumer
</router>

<script>
import { call, get } from "vuex-pathify";
export default {
  computed: {
    consumers: get("consumer/items"),
  },

  data() {
    return {
      search: "",
      isDialogOpen: false,
      viewItem: null,
      headers: [
        {
          text: "",
          value: "image",
          width: "10px",
          sortable: false,
        },
        { text: "Name", value: "name" },

        {
          text: "Mobile Number",
          value: "mobile_number",
          sortable: false,
        },

        {
          text: "Verification Status",
          value: "verification_status",
        },
      ],
    };
  },

  methods: {
    fetchConsumers: call("consumer/fetchItems"),

    viewConsumer(item) {
      // this.viewItem = { ...{}, ...item };
      // this.isDialogOpen = true;
      this.$router.push({
        name: "consumer-view",
        params: {
          item,
        },
        // query: {
        //   id: item.id,
        // },
      });
    },
  },

  async fetch() {
    await this.fetchConsumers();
  },
};
</script>
