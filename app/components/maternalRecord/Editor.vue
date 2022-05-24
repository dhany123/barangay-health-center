<template>
  <v-dialog
    v-model="showDialog"
    max-width="800"
    scrollable
    transition="slide-x-reverse-transition"
    fullscreen
  >
    <MaternalRecordAntePartumVisitEditor
      v-if="showAntePartumDialog"
      :isDialogOpen="showAntePartumDialog"
      @close="showAntePartumDialog = false"
      :item="ante_partum_record"
      @add-record="onAddAntePartumRecord"
    />
    <v-card>
      <v-toolbar flat dark color="primary" height="60px">
        <v-spacer></v-spacer>

        <v-toolbar-title> {{ dialogTitle }} </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="closeDialog"><v-icon dark>mdi-close</v-icon></v-btn>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16">
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="8">
            <v-form ref="form-resident" :readonly="readOnly">
              <v-row dense align="end">
                <v-col cols="12" md="6">
                  <label class="label"> Family No.</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.family_no"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <label class="label"> Date of First Visit</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.date_of_first_visit"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                  <label class="label">Term</label>
                  <v-select
                    outlined
                    dense
                    :items="termsItems"
                    v-model="form.pregnancy_term"
                    item-text="name"
                    :rules="[rules.required]"
                  ></v-select>
                </v-col>
              </v-row>

              <v-row dense>
                <v-col cols="12" md="6">
                  <label class="label"> Name</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Husband</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.husband"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Occupation</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.occupation"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Age</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.age"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Birth Date </label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.dob"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Height</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.height"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <label class="label">Adress</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.address"
                  ></v-text-field>
                </v-col>
              </v-row>

              <div class="text-center text-body-1 font-weight-bold">
                PAST HISTORY
              </div>

              <v-divider></v-divider>

              <div class="mt-4">
                CHECK IF CONDITIONED IN PREVIOUS PREGNANCIES:
              </div>

              <v-row class="mt-2" dense>
                <v-col cols="12" md="6">
                  <label class="label">Abortion No.</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.abortion_no"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Edema</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.edema"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Convulsions</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.convulsions"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Still Births</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.still_births"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Abnormal Deliveries</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.abnormal_deliveries"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Post-Partum Hemorrhage</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.post_partum_hemorrhage"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Labor More Than 24 Hours</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.labor_more_than_24hrs"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Birth Weight 2500 Grams</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.birth_weight_2500_grams"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <label class="label">Other Health Problems</label>
                  <v-textarea
                    outlined
                    rows="2"
                    v-model="form.other_health_problems"
                  ></v-textarea>
                </v-col>
              </v-row>

              <div class="text-center text-body-1 font-weight-bold">
                FAMILY PLANNING HISTORY
              </div>
              <v-divider></v-divider>

              <v-row dense class="mt-2" v-show="!readOnly">
                <v-col cols="12" md="4">
                  <label class="label">Date</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="family_planning_record.date"
                    type="date"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <label class="label">Methods</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="family_planning_record.methods"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <label class="label">Remarks</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="family_planning_record.remarks"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <div class="text-center">
                    <v-btn
                      color="primary"
                      @click="addFamilyPlanningHistoryRecord"
                      >Add</v-btn
                    >
                  </div>
                </v-col>
              </v-row>

              <v-data-table
                :headers="headers"
                :items="form.family_planning_history"
                class="elevation-2 my-4"
                item-key="id"
                mobile-breakpoint="0"
              >
                <template v-slot:[`item.action`]="{ item }">
                  <v-btn icon :disabled="readOnly">
                    <v-icon
                      medium
                      class="mr-2"
                      color="red"
                      @click="deleteFamilyPlanningRecord(item)"
                    >
                      mdi-delete
                    </v-icon>
                  </v-btn>
                </template>
              </v-data-table>

              <div class="text-center text-body-1 font-weight-bold">
                TT HISTORY
              </div>
              <v-divider class="mb-4"></v-divider>

              <v-row align="center" dense>
                <v-col cols="12" md="6">
                  <label class="label">TT1</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.tt_history.tt_1"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <label class="label">TT2</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.tt_history.tt_2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <label class="label">TT3</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.tt_history.tt_3"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <label class="label">TT4</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.tt_history.tt_4"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <label class="label">TT5</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.tt_history.tt_5"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Last Delivery</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.tt_history.last_delivery"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <label class="label">Remarks</label>
                  <v-textarea
                    outlined
                    rows="2"
                    v-model="form.tt_history.remarks"
                  ></v-textarea>
                </v-col>
              </v-row>

              <div class="text-center text-body-1 font-weight-bold">
                PRESENT PREGNANCY
              </div>
              <v-divider class="mb-4"></v-divider>

              <v-row dense>
                <v-col cols="12" md="6">
                  <label class="label">LMP</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.present_pregnancy.lmp"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">EDC</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.present_pregnancy.edc"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">G</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.present_pregnancy.g"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">P</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.present_pregnancy.p"
                  ></v-text-field>
                </v-col>
              </v-row>

              <div><label class="label">Ante-Partum Visits</label></div>

              <div class="text-right">
                <v-btn
                  color="primary"
                  class="my-2"
                  @click="onAddAntePartumClick"
                  v-show="!readOnly"
                  >Add</v-btn
                >
              </div>
              <div style="max-width: 100%; overflow-x: auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>UT/WT</th>
                      <th>BP</th>
                      <th>FUNDIC Ht</th>
                      <th>Presenation FHB</th>
                      <th>Hb</th>
                      <th>Urine</th>
                      <th colspan="2">Exam Sugar</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in form.present_pregnancy.ante_partum_visits"
                      :key="item.id"
                    >
                      <td>{{ item.date }}</td>
                      <td>{{ item.ut_wt }}</td>
                      <td>{{ item.bp }}</td>
                      <td>{{ item.fundic_ht }}</td>
                      <td>{{ item.presentation_fhb }}</td>
                      <td>{{ item.hb }}</td>
                      <td>{{ item.urine }}</td>
                      <td>{{ item.exam_sugar_1 }}</td>
                      <td>{{ item.exam_sugar_2 }}</td>
                      <td>
                        <v-btn icon :disabled="readOnly">
                          <v-icon
                            color="red"
                            @click="deleteAntePartumRecord(item)"
                            >mdi-delete</v-icon
                          >
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="text-center text-body-1 font-weight-bold mt-6">
                DELIVERY
              </div>
              <v-divider class="mb-4"></v-divider>

              <v-row align="center" dense>
                <v-col cols="12" md="3">
                  <label class="label">Date</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.delivery.date"
                    type="date"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <label class="label">Time</label>
                  <v-text-field
                    outlined
                    dense
                    type="time"
                    v-model="form.delivery.time"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <label class="label">Attended by</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.delivery.attended_by"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <label class="label">Designation</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.delivery.designation"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Place</label>
                  <v-textarea outlined rows="2" v-model="form.delivery.place">
                  </v-textarea>
                </v-col>

                <v-col cols="12" md="3">
                  <v-radio-group
                    v-model="form.delivery.is_baby_normal"
                    row
                    dense
                    class="mt-n2 mb-n6"
                  >
                    <v-radio value="yes">
                      <template v-slot:label>
                        <div class="ml-n2">Normal</div>
                      </template>
                    </v-radio>
                    <v-radio value="no" class="ml-6">
                      <template v-slot:label>
                        <div class="ml-n2">Abnormal</div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>

                <v-col
                  cols="12"
                  md="3"
                  v-if="form.delivery.is_baby_normal === 'no'"
                >
                  <label class="label">Specify</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.delivery.specify_baby"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
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

export default {
  props: {
    item: Object,
    value: Boolean,
    readOnly: Boolean,
  },

  mixins: [DialogMixin],
  computed: {
    dialogTitle() {
      if (this.readOnly) {
        return "View Resident";
      }
      return this.item && this.item.id
        ? "Update Maternal Record"
        : "Add Maternal Record";
    },
  },

  data() {
    return {
      valid: true,
      showAntePartumDialog: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      form: null,
      family_planning_history: [],
      termsItems: [
        {
          id: 1,
          name: "1st Trimester",
        },
        {
          id: 2,
          name: "2nd Trimester",
        },
        {
          id: 3,
          name: "3rd Trimester",
        },
      ],
      genders: [
        {
          id: 1,
          name: "Male",
        },
        {
          id: 2,
          name: "Female",
        },
      ],
      civilStatusItems: [
        {
          id: 1,
          name: "Single",
        },
        {
          id: 2,
          name: "Married",
        },
        {
          id: 3,
          name: "Divorced",
        },
        {
          id: 4,
          name: "Widowed",
        },
      ],
      yesOrNo: [
        {
          id: 1,

          name: "No",
        },
        {
          id: 2,
          name: "Yes",
        },
      ],

      headers: [
        { text: "Date", value: "date" },

        {
          text: "Methods",
          value: "methods",
          sortable: false,
        },

        {
          text: "Remarks",
          value: "remarks",
        },

        {
          text: "Action",
          value: "action",
          sortable: false,
          align: "center",
        },
      ],

      services: [],
      family_planning_record: {
        date: "",
        methods: "",
        remarks: "",
      },

      ante_partum_record: {
        date: "",
        ut_wt: "",
        bp: "",
        fundic_ht: "",
        presentation_fhb: "",
        hb: "",
        urine: "",
        exam_sugar_1: "",
        exam_sugar_2: "",
      },
    };
  },

  methods: {
    createResident: call("maternalrecord/createItem"),
    updateResident: call("maternalrecord/updateItem"),

    addFamilyPlanningHistoryRecord() {
      this.form.family_planning_history.push({
        ...this.family_planning_record,
      });
      this.family_planning_record = [];
    },

    deleteFamilyPlanningRecord(item) {
      this.form.family_planning_history.splice(item, 1);
    },

    onAddAntePartumClick() {
      this.showAntePartumDialog = !this.showAntePartumDialog;
    },

    onAddAntePartumRecord() {
      this.form.present_pregnancy.ante_partum_visits.push({
        ...this.ante_partum_record,
      });

      this.showAntePartumDialog = false;
    },

    deleteAntePartumRecord(item) {
      this.form.present_pregnancy.ante_partum_visits.splice(item, 1);
    },

    add() {
      if (!this.$refs["form-resident"].validate()) return;

      this.createResident(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Resident successfully added.",
            });

            this.$emit("onSubmitClick", {
              tag: "save",
              item: response.data,
            });
          }
        })
        .finally(() => {
          this.showDialog = false;
        });
    },

    update() {
      console.info(this.form);

      this.updateResident(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Resident successfully updated.",
            });

            this.$emit("onSubmitClick", {
              tag: "update",
              item: response.data,
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
            family_no: "",
            date_of_first_visit: "",
            pregnancy_term: "",
            name: "",
            husband: "",
            address: "",
            occupation: "",
            age: "",
            dob: "",
            height: "",
            abortion_no: "",
            convulsions: "",
            abnormal_deliveries: "",
            labor_more_than_24hrs: "",
            other_health_problems: "",
            edema: "",
            still_births: "",
            post_partum_hemorrhage: "",
            birth_weight_2500_grams: "",
            family_planning_history: [],

            tt_history: {
              tt_1: "",
              tt_2: "",
              tt_3: "",
              tt_4: "",
              tt_5: "",
              remarks: "",
              last_delivery: "",
            },

            present_pregnancy: {
              lmp: "",
              edc: "",
              g: "",
              p: "",
              ante_partum_visits: [],
            },
            delivery: {
              date: "",
              time: "",
              place: "",
              attended_by: "",
              designation: "",
              is_baby_normal: "",
              specify_baby: "",
            },
          },
          ...val,
        };
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #828080;
  padding: 8px;
  text-align: center;
  font-family: "Quicksand", sans-serif;
}

th {
  font-size: 14px;
  font-weight: 900;
  color: rgb(26, 25, 25);
}
</style>