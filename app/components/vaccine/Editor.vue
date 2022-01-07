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
      <v-card-text class="mt-6">
        <v-form ref="form-vaccine">
          <label class="label">Manufacturer</label>
          <v-text-field
            :rules="[rules.required]"
            outlined
            dense
            v-model="form.type"
          ></v-text-field>

          <label class="label">Dose Count</label>
          <v-text-field
            :rules="[rules.required]"
            outlined
            dense
            v-model="form.dose_count"
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
    vaccines: get("vaccine/items"),
    dialogTitle() {
      return this.item && this.item.id ? "Update" : "Add";
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
    createItem: call("vaccine/createItem"),
    updateItem: call("vaccine/updateItem"),

    add() {
      if (!this.$refs["form-vaccine"].validate()) return;

      const _lastIdPlusOne = last(this.vaccines).id + 1;
      this.form.id = _lastIdPlusOne;
      this.createItem(this.form).then(
        (res) => {
          Swal.fire({
            title: "Success",
            icon: "success",
            confirmButtonText: "Cool",
          });
          this.$emit("on-submit", this.form, "add");
          this.showDialog = false;
        },

        (err) => {
          alert("Error", "error");
        }
      );
    },

    update() {
      if (!this.$refs["form-vaccine"].validate()) return;

      this.updateItem(this.form).then(
        (res) => {
          Swal.fire({
            title: "Success",
            icon: "success",
            confirmButtonText: "Cool",
          });

          this.$emit("on-submit", this.form, "update");
          this.showDialog = false;
        },

        (err) => {
          alert("Error", "error");
        }
      );
    },
  },

  watch: {
    item: {
      handler(val) {
        this.form = {
          ...{
            id: null,
            type: "",
            dose_count: "",
          },
          ...val,
        };
      },
      immediate: true,
    },
  },
};
</script>