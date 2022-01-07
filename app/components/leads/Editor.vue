<template>
  <v-dialog
    v-model="showDialog"
    max-width="800"
    scrollable
    transition="slide-x-reverse-transition"
  >
    <v-card>
      <v-toolbar flat dark color="primary" height="60px">
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title> {{ dialogTitle }} </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn
          v-if="!readOnly"
          light
          color="#Fff"
          width="100px"
          @click="item && item.id ? update() : add()"
        >
          Save
        </v-btn>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16">
        <v-form ref="form-lead" :readonly="readOnly">
          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label">Name</label>
              <v-text-field outlined dense v-model="form.name"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Company Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.company_name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Email</label>
              <v-text-field outlined dense v-model="form.email"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Phone</label>
              <v-text-field outlined dense v-model="form.phone"></v-text-field>
            </v-col>
          </v-row>

          <v-divider class="mb-4 mt-6"></v-divider>

          <div class="text-subtitle-1 font-weight-bold">Location</div>

          <v-row dense>
            <v-col cols="12" md="4">
              <label class="label">Country</label>
              <v-text-field
                outlined
                dense
                v-model="form.country"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">State</label>
              <v-text-field outlined dense v-model="form.state"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">City</label>
              <v-text-field outlined dense v-model="form.city"></v-text-field>
            </v-col>
          </v-row>

          <v-divider class="mb-4 mt-6"></v-divider>

          <label class="label">Project Details</label>
          <v-textarea
            rows="2"
            outlined
            dense
            v-model="form.project_details"
          ></v-textarea>

          <label class="label">Project Type</label>

          <v-autocomplete
            outlined
            class="py-0"
            :items="services"
            item-text="name"
            item-value="id"
            v-model="form.service_id"
            :menu-props="{ closeOnContentClick: true }"
            dense
          >
          </v-autocomplete>

          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label">Number of Credits</label>
              <v-text-field
                outlined
                dense
                v-model="form.credit_num"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Project Tag</label>
              <v-select
                :items="projectTags"
                v-model="form.project_tag_id"
                item-text="name"
                item-value="id"
                outlined
                dense
                :rules="[rules.required]"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider class="mb-4 mt-6"></v-divider>

          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label">Buying Stage</label>
              <v-textarea
                rows="2"
                outlined
                dense
                v-model="form.lead_further_detail.buying_stage"
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
              <label class="label">Budget</label>
              <v-textarea
                rows="2"
                outlined
                dense
                v-model="form.lead_further_detail.budget"
              ></v-textarea>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Industry</label>
              <v-text-field
                outlined
                dense
                v-model="form.lead_further_detail.industry"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <label class="label">Time Scales</label>
              <v-text-field
                outlined
                dense
                v-model="form.lead_further_detail.time_scales"
              ></v-text-field>
            </v-col>
          </v-row>
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
    readOnly: Boolean,
  },

  mixins: [DialogMixin],
  computed: {
    leads: get("leads/items"),
    dialogTitle() {
      if (this.readOnly) {
        return "View Lead";
      }
      return this.item && this.item.id ? "Update Lead" : "Add Lead";
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

  async fetch(){
    //fetch all services
    this.fetchServices().then((response) => {
      if (response.data.success) {
        this.services = response.data.services;
      }
    });
  }
};
</script>