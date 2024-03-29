<template>
  <v-dialog
    v-model="showDialog"
    max-width="400"
    scrollable
    transition="slide-x-reverse-transition"
  >
    <v-card>
      <v-toolbar flat dark color="primary" height="60px">
        <v-spacer></v-spacer>

        <v-toolbar-title> Remove Medicine </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16">
        <v-form ref="form-lead" :readonly="readOnly">
          <v-row dense>
            <v-col cols="12">
              <label class="label">Quantity</label>
              <v-text-field
                outlined
                dense
                v-model="form.quantity"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <label class="label">Medicine Issue</label>
              <v-textarea rows="2" outlined v-model="form.issue"></v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn @click="closeDialog"> Cancel </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="item && item.id ? update() : add()">
          Save
        </v-btn>
      </v-card-actions>
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
    readOnly: Boolean,
  },

  mixins: [DialogMixin],
  computed: {
    leads: get("leads/items"),
    dialogTitle() {
      if (this.readOnly) {
        return "View Resident";
      }
      return this.item && this.item.id ? "Update Medicine" : "Add Medicine";
    },
  },

  data() {
    return {
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
      },
      form: null,
      items: ["Projects", "Tenders", "Intelligence"],
      projectTags: [
        {
          id: 1,
          name: "Projects",
        },
        {
          id: 2,
          name: "Tenders",
        },
        {
          id: 3,
          name: "Intelligence",
        },
      ],

      services: [],
    };
  },

  methods: {
    fetchServices: call("services/fetchServices"),
    createLead: call("leads/createLead"),
    updateLead: call("leads/updateLead"),

    add() {
      this.createLead(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Lead successfully added.",
            });

            this.$emit("onSubmitClick", {
              tag: "save",
              item: response.data.lead,
            });
          }
        })
        .finally(() => {
          this.showDialog = false;
        });
    },

    update() {
      console.info(this.form);

      this.updateLead(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Lead successfully updated.",
            });

            this.$emit("onSubmitClick", {
              tag: "update",
              item: response.data.lead,
            });
          }
        })
        .finally(() => {
          this.showDialog = false;
        });
    },
  },

  watch: {
    item: {
      handler(val) {
        this.form = {
          ...{
            id: null,
            name: "",
            company_name: "",
            country: "",
            state: "",
            city: "",
            email: "",
            phone: "",
            project_details: "",
            service_id: "",
            project_tag_id: "",
            credit_num: "",
            lead_further_detail: {
              buying_stage: "",
              industry: "",
              budget: "",
              time_scales: "",
            },
            project_tag: {
              id: 1,
              name: "",
              color: "",
            },
          },
          ...val,
        };
      },
      immediate: true,
    },
  },

  async fetch() {
    //fetch all services
    this.fetchServices().then((response) => {
      if (response.data.success) {
        this.services = response.data.services;
      }
    });
  },
};
</script>