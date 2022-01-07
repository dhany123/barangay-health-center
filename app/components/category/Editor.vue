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
        <v-form ref="form-category">
          <label class="label">Name</label>
          <v-text-field
            :rules="[rules.required]"
            outlined
            dense
            v-model="form.name"
          ></v-text-field>
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
    categories: get("category/items"),
    dialogTitle() {
      return this.item && this.item.id ? "Update Category" : "Add Category";
    },
  },

  data() {
    return {
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
      },
      form: null,
    };
  },

  methods: {
    createItem: call("category/addServiceCategories"),
    updateItem: call("category/updateServiceCategories"),

    add() {
      this.createItem(this.form)
      .then((response) => {
        if (response.data.success) {
          console.info(response.data);
          this.$toast({
            icon: "success",
            title: "Category successfully added.",
          });

          this.$emit("onSubmitClick", {
            tag: "save",
            item: response.data.service_category,
          });
        }
      })
      .finally(() => {
        this.showDialog = false;
      })
    },

    update() {
      if (!this.$refs["form-category"].validate()) return;

      this.updateItem(this.form)
      .then((response) => {
        if (response.data.success) {
          console.info(response.data);
          this.$toast({
            icon: "success",
            title: "Category successfully updated.",
          });

          this.$emit("onSubmitClick", {
            tag: "update",
            item: response.data.service_category,
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
          },
          ...val,
        };
      },
      immediate: true,
    },
  },
};
</script>