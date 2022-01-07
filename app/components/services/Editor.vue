<template>
  <v-dialog
    v-model="showDialog"
    max-width="600"
    persistent
    scrollable
    transition="slide-x-reverse-transition"
    content-class="add-deal-dialog"
  >
    <v-card tile>
      <v-toolbar flat dark color="primary" height="60px">
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title> {{ dialogTitle }} </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn light color="#Fff" @click="item && item.id ? update() : add()">
          Save
        </v-btn>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-12">
        <v-form ref="form-services">
          <label class="label">Name</label>
          <v-text-field
            :rules="[rules.required]"
            outlined
            dense
            v-model="form.name"
          ></v-text-field>

          <label class="label">Category</label>
          <v-select
            :items="categories"
            v-model="form.service_category_id"
            item-text="name"
            item-value="id"
            outlined
            dense
            :rules="[rules.required]"
          ></v-select>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { DialogMixin } from "~/mixins/DialogMixin";
import { call, get } from "vuex-pathify";
import Swal from "sweetalert2";
import { last } from "lodash";

export default {
  props: {
    item: Object,
    value: Boolean,
  },

  mixins: [DialogMixin],
  computed: {
    services: get("services/items"),

    dialogTitle() {
      return this.item && this.item.id ? "Update Services" : "Add Services";
    },
  },

  data() {
    return {
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
      },
      form: null,
      categories: []
    };
  },

  methods: {
    createItem: call("services/addService"),
    updateItem: call("services/updateService"),
    fetchCategories: call("category/fetchServiceCategories"),

  
    add() {
      this.createItem(this.form)
      .then((response) => {
        if (response.data.success) {
          console.info(response.data);
          this.$toast({
            icon: "success",
            title: "Service successfully added.",
          });

          this.$emit("onSubmitClick", {
            tag: "save",
            item: response.data.service,
          });
        }
      })
      .finally(() => {
        this.showDialog = false;
      })
    },

    update() {
      this.updateItem(this.form)
      .then((response) => {
        if (response.data.success) {
          console.info(response.data);
          this.$toast({
            icon: "success",
            title: "Service successfully updated.",
          });

          this.$emit("onSubmitClick", {
            tag: "update",
            item: response.data.service,
          });
        }
      })
      .finally(() => {
        this.showDialog = false;
      })
    },
  
  },

  watch: {
    item: {
      handler(val) {
        this.form = {
          ...{
            id: null,
            name: "",
            service_category: {
              id: "",
              name: ""
            }
          },
          ...val,
        };
      },
      immediate: true,
    },
  },

  async fetch() {
    this.fetchCategories()
    .then((response) => {
      this.categories = response.data.service_categories
    })
  },
};
</script>