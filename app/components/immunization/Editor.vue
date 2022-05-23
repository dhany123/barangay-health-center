<template>
  <v-dialog
    v-model="showDialog"
    max-width="800"
    scrollable
    transition="slide-x-reverse-transition"
  >
    <ImmunizationRecordEditor
      v-if="showEditor"
      :isDialogOpen="showEditor"
      @close="showEditor = false"
      :item="record"
      @add-record="onAddClick"
    />

    <v-card>
      <v-toolbar flat dark color="primary" height="60px">
        <v-spacer></v-spacer>

        <v-toolbar-title> {{ dialogTitle }} </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16">
        <v-form ref="form-immunization" :readonly="readOnly">
          <v-row dense>
            <v-col cols="12" md="6">
              <label class="label"> Family Record No.</label>
              <v-text-field
                outlined
                dense
                v-model="form.family_record_no"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <label class="label"> Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.name"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Date of Birth</label>
              <v-text-field
                outlined
                dense
                type="date"
                v-model="form.dob"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Sex</label>
              <v-select
                :items="genders"
                v-model="form.sex"
                outlined
                dense
                :rules="[rules.required]"
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Mother's Name</label>
              <v-text-field
                outlined
                dense
                v-model="form.mothers_name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Father's Occupation</label>
              <v-text-field
                outlined
                dense
                v-model="form.fathers_occupation"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <label class="label">Address</label>
              <v-textarea outlined rows="2" v-model="form.address"></v-textarea>
            </v-col>
          </v-row>

          <div class="text-center text-body-1 font-weight-bold">
            PAST HISTORY
          </div>

          <v-divider></v-divider>

          <v-row align="end" dense class="mt-2">
            <v-col cols="12" md="6">
              <label class="label">Delivery</label>
              <v-select
                :items="deliveryItems"
                v-model="form.past_history.delivery"
                item-text="name"
                outlined
                dense
                :rules="[rules.required]"
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Specify</label>
              <v-text-field
                outlined
                dense
                v-model="form.past_history.specify"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Birth Order No.</label>
              <v-text-field
                outlined
                dense
                v-model="form.past_history.birth_order_no"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                :items="birthTypeItems"
                v-model="form.past_history.birth_type"
                item-text="name"
                outlined
                dense
                :rules="[rules.required]"
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Delivered by</label>
              <v-select
                :items="deliveredByItems"
                v-model="form.past_history.delivered_by"
                item-text="name"
                outlined
                dense
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Specify</label>
              <v-text-field
                outlined
                dense
                v-model="form.past_history.others"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <label class="label">Past Disease</label>
              <v-text-field
                outlined
                dense
                v-model="form.past_history.past_disease"
              ></v-text-field>
            </v-col>
          </v-row>

          <div class="text-center text-body-1 font-weight-bold">
            FILL-UP ONLY FOR 2 YEARS OLD WITH ABNORMALITY
          </div>
          <v-divider></v-divider>
          <v-row dense class="mt-2">
            <v-col cols="12" md="6">
              <label class="label">Age Teething Started</label>
              <v-text-field
                outlined
                dense
                v-model="form.past_history.age_teething_started"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Sit with Support</label>
              <v-text-field
                outlined
                dense
                v-model="form.past_history.sit_with_support"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Stand without abnormality</label>
              <v-text-field
                outlined
                dense
                v-model="form.past_history.stand_without_abnormality"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <label class="label">Walk First Step</label>
              <v-text-field
                outlined
                dense
                v-model="form.past_history.walk_first_step"
              ></v-text-field>
            </v-col>
          </v-row>

          <div class="text-center text-body-1 font-weight-bold">
            IMMUNIZATION RECORD
          </div>
          <v-divider></v-divider>

          <v-row dense class="mt-2">
            <v-col cols="12" md="6">
              <label class="label">BCG</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.bcg"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Scar</label>
              <v-select
                :items="yesOrNo"
                v-model="form.immunization_record.scar"
                item-text="name"
                outlined
                dense
                :rules="[rules.required]"
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">Pentevalent 1</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.pentavalent_1"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">Pentevalent 2</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.pentavalent_2"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">Pentevalent 3</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.pentavalent_3"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">OPV 1</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.opv_1"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">OPV 2</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.opv_2"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">OPV 3</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.opv_3"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">PCV 1</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.pcv_1"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">PCV 2</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.pcv_2"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">PCV 3</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.pcv_3"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">Measles</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.measles"
                type="date"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <label class="label">MMR 3</label>
              <v-text-field
                outlined
                dense
                v-model="form.immunization_record.mmr"
                type="date"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-data-table
            :headers="headers"
            :items="form.immunization_record.records"
            class="elevation-2"
            item-key="id"
          >
            <template v-slot:top>
              <div class="text-right pt-3 pr-3">
                <v-btn
                  color="primary"
                  @click="addImmunization"
                  v-show="!readOnly"
                >
                  Add
                </v-btn>
              </div>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <v-btn icon :disabled="readOnly">
                <v-icon
                  medium
                  class="mr-2"
                  color="red"
                  @click="deleteItem(item)"
                >
                  mdi-delete
                </v-icon>
              </v-btn>
            </template>
          </v-data-table>
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
        return "View Child";
      }
      return this.item && this.item.id
        ? "Update Child Record"
        : "Add Child Record";
    },
  },

  data() {
    return {
      valid: true,
      showEditor: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      form: null,
      genders: ["Male", "Female"],

      deliveryItems: ["Normal", "Abnormal"],

      birthTypeItems: ["Single", "Multiple"],

      deliveredByItems: ["Midwife", "Hilot", "Doctor"],

      yesOrNo: ["No", "Yes"],

      headers: [
        {
          text: "Date",
          value: "date",
        },

        {
          text: "Complaints/Diagnosis",
          value: "complaints_diagnosis",
          sortable: false,
        },

        {
          text: "Treatment",
          value: "treatment",
          sortable: false,
        },

        {
          text: "Actions",
          value: "actions",
          sortable: false,
          align: "center",
          width: "150px",
        },
      ],

      immunization_record: [],
      record: {
        date: null,
        complaints_diagnosis: null,
        treatment: null,
      },
    };
  },

  methods: {
    createRecord: call("immunization/createItem"),
    updateRecord: call("immunization/updateItem"),

    addImmunization() {
      this.showEditor = true;
    },
    onAddClick() {
      this.form.immunization_record.records.push({ ...this.record });
      console.log(this.form.immunization_record.records);
      this.showEditor = false;
    },

    deleteItem(item) {
      this.form.immunization_record.records.splice(item, 1);
    },

    add() {
      if (!this.$refs["form-immunization"].validate()) return;

      this.createRecord(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Record successfully added.",
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

      this.updateRecord(this.form)
        .then((response) => {
          if (response.data.success) {
            console.info(response.data);
            this.$toast({
              icon: "success",
              title: "Record successfully updated.",
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
            family_record_no: "",
            name: "",
            dob: "",
            sex: this.genders[0],
            mothers_name: "",
            fathers_occupation: "",
            address: "",
            past_history: {
              delivery: this.deliveryItems[0],
              specify: "",
              birth_order_no: "",
              birth_type: this.birthTypeItems[0],
              delivered_by: this.deliveredByItems[0],
              others: "",
              past_disease: "",
              age_teething_started: "",
              sit_with_support: "",
              stand_without_abnormality: "",
              walk_first_step: "",
            },
            immunization_record: {
              bcg: "",
              scar: this.yesOrNo[0],
              pentavalent_1: "",
              pentavalent_2: "",
              pentavalent_3: "",
              opv_1: "",
              opv_2: "",
              opv_3: "",
              pcv_1: "",
              pcv_2: "",
              pcv_3: "",
              measles: "",
              mmr: "",
              records: [],
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