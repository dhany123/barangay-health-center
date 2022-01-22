<template>
  <v-dialog
    v-model="showDialog"
    max-width="800"
    scrollable
    transition="slide-x-reverse-transition"
  >
    <v-card>
      <v-toolbar flat dark color="primary" height="60px">
        <v-spacer></v-spacer>

        <v-toolbar-title> {{ dialogTitle }}</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16">
        <v-img
          :src="require('@/assets/images/bpreadings.jpg')"
          max-height="250px"
          contain
          class="mx-auto"
        ></v-img>
        <v-form ref="form-record" :readonly="readOnly">
          <v-row dense>
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
              <label class="label"> Age</label>
              <v-text-field
                outlined
                dense
                v-model="form.age"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Date</label>
              <v-text-field
                outlined
                dense
                type="date"
                v-model="form.date"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">BP</label>
              <v-text-field
                outlined
                dense
                v-model="form.bp"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label class="label">Level</label>
              <v-select
                :items="bpLevels"
                v-model="form.level"
                item-text="name"
                item-value="id"
                outlined
                dense
                :rules="[rules.required]"
              ></v-select>
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
    dialogTitle() {
      if (this.readOnly) {
        return "View Record";
      }
      return this.item && this.item.id ? "Update Record" : "BP Record Form";
    },
  },

  data() {
    return {
      valid: true,
      rules: {
        required: (value) => !!value || "Required.",
      },
      form: null,

      bpLevels: [
        {
          id: 1,
          name: "Normal",
        },
        {
          id: 2,
          name: "Elevated",
        },
        {
          id: 3,
          name: "High Blood Pressure Stage 1",
        },

        {
          id: 4,
          name: "High Blood Pressure Stage 2",
        },
        {
          id: 5,
          name: "Hypertensive Crisis",
        },
      ],

      services: [],
    };
  },

  methods: {
    createBPRecord: call("residents/bpmonitoring/createItem"),
    updateBPRecord: call("residents/bpmonitoring/updateItem"),

    add() {
      if (!this.$refs["form-record"].validate()) return;

      this.createBPRecord(this.form)
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

      this.updateBPRecord(this.form)
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
            name: "",
            age: "",
            date: "",
            bp: "",
            level: this.bpLevels[0],
          },
          ...val,
        };
      },
      immediate: true,
    },
  },
};
</script>