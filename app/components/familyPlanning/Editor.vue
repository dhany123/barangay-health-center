<template>
  <v-dialog
    v-model="showDialog"
    max-width="800"
    scrollable
    transition="slide-x-reverse-transition"
    fullscreen
  >
    <ImmunizationRecordEditor
      v-if="showEditor"
      :isDialogOpen="showEditor"
      @close="showEditor = false"
      :item="editResident"
      @onSubmitClick="onSubmitClick"
      :readOnly="readOnly"
    />

    <v-card>
      <v-toolbar flat dark color="primary" height="60px">
        <v-spacer></v-spacer>

        <v-toolbar-title>
          Family Planning Client Assessment Record
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="mt-6 px-4 px-md-16 d-flex justify-center">
        <v-form ref="form-immunization" :readonly="readOnly">
          <v-row dense class="justify-center">
            <v-col cols="12" md="6">
              <v-row dense>
                <v-col cols="12" md="4">
                  <label class="label">Client ID</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.family_record_no"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <label class="label">PhilHealth No.</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.family_record_no"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="d-flex align-center">
                  <v-checkbox class="mr-6 mt-4" dense value="Worldwide">
                    <template v-slot:label>
                      <div class="text-subtitle-2 mt-1">NHTS?</div>
                    </template>
                  </v-checkbox>

                  <v-checkbox class="mt-4" dense value="Worldwide">
                    <template v-slot:label>
                      <div class="text-subtitle-2 mt-1">4Ps?</div>
                    </template>
                  </v-checkbox>
                </v-col>

                <v-col cols="12" class="mb-2">
                  <v-divider></v-divider>
                </v-col>

                <v-col cols="12" md="6" class="mt-n2">
                  <label class="label">Last Name</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="11" md="5" class="mt-n2">
                  <label class="label">Given Name</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="1" md="1" class="mt-n2">
                  <label class="label">MI</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Date of Birth</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.dob"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Age</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.dob"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Educational Attainment</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.mothers_name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Occupation</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.fathers_occupation"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" class="mt-n2">
                  <label class="label">Address</label>
                  <v-textarea
                    outlined
                    rows="1"
                    v-model="form.address"
                    dense
                    auto-grow
                  ></v-textarea>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Contact Number</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.dob"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Civil Status</label>
                  <v-select
                    :items="birthTypeItems"
                    v-model="form.past_history.birth_type"
                    item-text="name"
                    outlined
                    dense
                  ></v-select>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Religion</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.dob"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-divider class="mb-2"></v-divider>
                  <label class="label">Spouse Info</label>
                </v-col>

                <v-col cols="12" md="6" class="mt-n2">
                  <label class="label">Last Name</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="11" md="5" class="mt-n2">
                  <label class="label">Given Name</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="1" md="1" class="mt-n2">
                  <label class="label">MI</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Date of Birth</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.dob"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Age </label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.dob"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Occupation</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.dob"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-divider class="mb-2"></v-divider>
                </v-col>

                <v-col cols="12" md="4" class="mt-n2">
                  <label class="label">No. of Living Children</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.dob"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="mt-n2">
                  <label class="label">Plan to have more children</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.dob"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="mt-n2">
                  <label class="label">Ave. monthly income</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.dob"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense class="d-flex align-end">
                <v-col cols="12" md="3">
                  <label class="label">Type of Client</label>
                  <v-select
                    :items="clientTypes"
                    v-model="selectedClientType"
                    item-text="name"
                    outlined
                    dense
                    :rules="[rules.required]"
                  ></v-select>
                </v-col>
                <template v-if="selectedClientType == 'New Acceptor'">
                  <v-col cols="12" md="3">
                    <label class="label">Reason for FP</label>
                    <v-select
                      :items="currentUserReason"
                      v-model="form.past_history.birth_type"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                    ></v-text-field>
                  </v-col>
                </template>
                <template v-if="selectedClientType == 'Current User'">
                  <v-col cols="12" md="3">
                    <v-select
                      :items="currentUserType"
                      v-model="selectedCurrentUserType"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <label class="label">Reason</label>
                    <v-select
                      :items="currentUserReason"
                      v-model="form.past_history.birth_type"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                    ></v-text-field>
                  </v-col>
                </template>

                <template v-if="selectedCurrentUserType === 'Changing Method'">
                  <v-col cols="12" md="3">
                    <label class="label">Method currently used</label>
                    <v-select
                      :items="clientTypes"
                      v-model="client_type"
                      item-text="name"
                      outlined
                      dense
                      :rules="[rules.required]"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                    ></v-text-field>
                  </v-col>
                </template>
                <v-col cols="12">
                  <v-divider></v-divider>

                  <div class="mt-1">I. MEDICAL HISTORY</div>
                </v-col>
                <v-col cols="12">
                  <v-data-table
                    :headers="medicalHistoryHeaders"
                    :items="medical_history_questions"
                    class="elevation-0"
                    item-key="id"
                    disable-pagination
                    hide-default-footer
                    mobile-breakpoint="0"
                  >
                    <template v-slot:[`item.text`]="{ item }">
                      <div>• {{ item.text }}</div>

                      <div
                        class="d-flex align-center"
                        v-if="item.text === 'with disability?'"
                      >
                        (if YES please specify:
                        <v-text-field outlined dense class="mx-2"></v-text-field
                        >)
                      </div>
                    </template>

                    <template v-slot:[`item.options`]="{ item }">
                      <v-radio-group
                        v-model="item.value"
                        row
                        dense
                        class="mt-n2 mb-n6"
                      >
                        <v-radio value="yes">
                          <template v-slot:label>
                            <div class="ml-n2">Yes</div>
                          </template>
                        </v-radio>
                        <v-radio value="no">
                          <template v-slot:label>
                            <div class="ml-n2">No</div>
                          </template>
                        </v-radio>
                      </v-radio-group>
                    </template>
                  </v-data-table>
                </v-col>

                <v-col cols="12">
                  <v-divider></v-divider>

                  <div class="mt-1">II. OBSTETRICAL HISTORY</div>
                </v-col>

                <v-col cols="12">
                  <v-row align="center">
                    <v-col cols="4" md="3">
                      <div>Number of pregnancies:</div>
                    </v-col>
                    <v-col cols="3" md="2">
                      <label> G</label>
                      <v-text-field
                        outlined
                        dense
                        v-model="form.family_record_no"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3" md="2">
                      <label> P</label>
                      <v-text-field
                        outlined
                        dense
                        v-model="form.family_record_no"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>

                <v-row dense>
                  <v-col cols="12" md="3">
                    <label> Full term</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Premature</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Abortion</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Living children</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row dense>
                  <v-col cols="12" md="3">
                    <label> Date of last delivery</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                      type="date"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Type of last delivery</label>
                    <v-select
                      :items="lastDeliveryTypes"
                      v-model="selectedDeliveryType"
                      item-text="name"
                      outlined
                      dense
                      :rules="[rules.required]"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Last menstrual period</label>
                    <v-text-field
                      outlined
                      dense
                      type="date"
                      v-model="form.family_record_no"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Previous menstrual period</label>
                    <v-text-field
                      outlined
                      dense
                      type="date"
                      v-model="form.family_record_no"
                    ></v-text-field>
                  </v-col>

                  <v-row align="center">
                    <v-col cols="12" md="3">
                      <label> Menstrual flow</label>
                      <v-select
                        :items="menstrualFlows"
                        v-model="selectedmentrualFlo"
                        item-text="name"
                        outlined
                        dense
                        :rules="[rules.required]"
                      ></v-select>
                    </v-col>

                    <v-col cols="12" md="3">
                      <v-checkbox v-model="checkbox">
                        <template v-slot:label>
                          <div class="text-subtitle-2 mt-1">Dysmenorrhea</div>
                        </template></v-checkbox
                      >
                    </v-col>

                    <v-col cols="12" md="3">
                      <v-checkbox v-model="checkbox">
                        <template v-slot:label>
                          <div class="text-subtitle-2 mt-1">
                            Hydatidiform mole (within the last 12 mons.)
                          </div>
                        </template>
                      </v-checkbox>
                    </v-col>

                    <v-col cols="12" md="3">
                      <v-checkbox v-model="checkbox">
                        <template v-slot:label>
                          <div class="text-subtitle-2 mt-1">
                            History of ectopic pregnancy
                          </div>
                        </template>
                      </v-checkbox>
                    </v-col>
                  </v-row>
                </v-row>

                <v-col cols="12">
                  <v-divider></v-divider>

                  <div class="mt-1">
                    III. RISKS FOR SEXUALLY TRANSMITTED INFECTIONS
                  </div>
                </v-col>

                <v-col cols="12">
                  <v-data-table
                    :headers="risksForSTIHeaders"
                    :items="risks_for_sti_questions"
                    class="elevation-0"
                    item-key="id"
                    disable-pagination
                    hide-default-footer
                    mobile-breakpoint="0"
                  >
                    <template v-slot:[`item.text`]="{ item }">
                      <div>• {{ item.text }}</div>
                      <div
                        class="d-flex ml-4"
                        v-if="
                          item.text ===
                          'abnormal discharge from the genital area'
                        "
                      >
                        <i> if "YES" please indicate it from: </i>
                        <v-radio-group row dense class="mt-n2 mb-n6 ml-2">
                          <v-radio value="yes">
                            <template v-slot:label>
                              <div class="ml-n2">Vagina</div>
                            </template>
                          </v-radio>
                          <v-radio value="no">
                            <template v-slot:label>
                              <div class="ml-n2">Penis</div>
                            </template>
                          </v-radio>
                        </v-radio-group>
                      </div>
                    </template>

                    <template v-slot:[`item.options`]="{ item }">
                      <v-radio-group
                        v-model="item.value"
                        row
                        dense
                        class="mt-n2 mb-n6"
                      >
                        <v-radio value="yes">
                          <template v-slot:label>
                            <div class="ml-n2">Yes</div>
                          </template>
                        </v-radio>
                        <v-radio value="no">
                          <template v-slot:label>
                            <div class="ml-n2">No</div>
                          </template>
                        </v-radio>
                      </v-radio-group>
                    </template>
                  </v-data-table>
                </v-col>

                <v-col cols="12">
                  <v-divider></v-divider>

                  <div class="mt-1">
                    IV. RISKS FOR VIOLENCE AGAINST WOMEN(VAW)
                  </div>
                </v-col>

                <v-col cols="12">
                  <v-data-table
                    :headers="risksForVAWHeaders"
                    :items="risks_for_vaw_questions"
                    class="elevation-0"
                    item-key="id"
                    disable-pagination
                    hide-default-footer
                    mobile-breakpoint="0"
                    hide-default-header
                  >
                    <template v-slot:[`item.text`]="{ item }">
                      <div>• {{ item.text }}</div>

                      <v-row
                        class="align-center ml-4"
                        v-if="
                          item.text === 'history of domestic violence or VAW'
                        "
                      >
                        <v-col cols="12" md="4">
                          <label> Referred to:</label>
                          <v-select
                            :items="referredToOrganizations"
                            v-model="selectedOrganization"
                            item-text="name"
                            outlined
                            dense
                            style="max-width: 120px"
                          ></v-select>
                        </v-col>

                        <v-col
                          cols="12"
                          md="8"
                          v-if="selectedOrganization === 'Others'"
                        >
                          <label> Specify:</label>
                          <v-text-field outlined dense></v-text-field>
                        </v-col>
                      </v-row>
                    </template>

                    <template v-slot:[`item.options`]="{ item }">
                      <v-radio-group
                        v-model="item.value"
                        row
                        dense
                        class="mt-n2 mb-n6"
                      >
                        <v-radio value="yes">
                          <template v-slot:label>
                            <div class="ml-n2">Yes</div>
                          </template>
                        </v-radio>
                        <v-radio value="no">
                          <template v-slot:label>
                            <div class="ml-n2">No</div>
                          </template>
                        </v-radio>
                      </v-radio-group>
                    </template>
                  </v-data-table>
                </v-col>

                <v-col cols="12">
                  <v-divider></v-divider>

                  <div class="mt-1">V. PHYSICAL EXAMINATION</div>
                </v-col>

                <v-row dense>
                  <v-col cols="12" md="3">
                    <label> Weight</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                      suffix="kg"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Height </label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                      suffix="m"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Blood Pressure </label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                      suffix="mmHg"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Pulse rate </label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                      suffix="/min"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> SKIN </label>
                    <v-select
                      :items="birthTypeItems"
                      v-model="form.past_history.birth_type"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> CONJUNCTIVA </label>
                    <v-select
                      :items="birthTypeItems"
                      v-model="form.past_history.birth_type"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> NECK </label>
                    <v-select
                      :items="birthTypeItems"
                      v-model="form.past_history.birth_type"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> BREAST </label>
                    <v-select
                      :items="birthTypeItems"
                      v-model="form.past_history.birth_type"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> ABDOMEN </label>
                    <v-select
                      :items="birthTypeItems"
                      v-model="form.past_history.birth_type"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> EXTREMITIES </label>
                    <v-select
                      :items="birthTypeItems"
                      v-model="form.past_history.birth_type"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="6">
                      <label> PELVIC EXAMINATION (For IUD acceptors) </label>
                   <v-row dense>
                     <v-col cols="12" md="6">
                      
                    <v-select
                      :items="birthTypeItems"
                      v-model="form.past_history.birth_type"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                     </v-col>

                     <v-col  cols="12" md="6">
<v-text-field
                      outlined
                      dense
                      v-model="form.family_record_no"
                      suffix="kg"
                    ></v-text-field>
                     </v-col>
                   </v-row>
                  </v-col>
                </v-row>
              </v-row>
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
      selectedClientType: "",
      clientTypes: [
        {
          id: 1,
          name: "New Acceptor",
        },
        {
          id: 2,
          name: "Current User",
        },
      ],
      selectedCurrentUserType: "",

      currentUserType: [
        {
          id: 1,
          name: "Changing Method",
        },
        {
          id: 2,
          name: "Changing Clinic",
        },
        {
          id: 3,
          name: "Dropout/Restart",
        },
      ],

      currentUserReason: [
        {
          id: 1,
          name: "Medical Condition",
        },
        {
          id: 2,
          name: "Side Effects",
        },
      ],

      medicalHistoryHeaders: [
        {
          text: "Does the client have any of the following",
          value: "text",
          sortable: false,
        },

        {
          text: "",
          value: "options",
          sortable: false,
          align: "center",
        },
      ],

      medical_history_questions: [
        {
          id: 1,
          text: "severe headaches",
          value: "yes",
        },

        {
          id: 2,
          text: "history of stroke / heart attack / hypertension",
          value: "yes",
        },
        {
          id: 3,
          text: "non-traumatic hematoma / frequent bruising or gum bleeding",
          value: "no",
        },
        {
          id: 4,
          text: "current or history of breast cancer / breat mass",
          value: "no",
        },

        {
          id: 5,
          text: "severe chest pain",
          value: "no",
        },

        {
          id: 6,
          text: "cough for more than 14 days",
          value: "no",
        },

        {
          id: 7,
          text: "jaundice",
          value: "no",
        },

        {
          id: 8,
          text: "unexpected vaginal bleeding",
          value: "no",
        },

        {
          id: 9,
          text: "abnormal vaginal discharge",
          value: "no",
        },

        {
          id: 10,
          text: "intake of phenobarbital (anti-seizure) or rifampicin(anti-TB)",
          value: "no",
        },

        {
          id: 2,
          text: "is client a SMOKER?",
          value: "no",
        },

        {
          id: 2,
          text: "with disability?",
          value: "no",
        },
      ],
      selectedDeliveryType: "",

      lastDeliveryTypes: [
        {
          id: 1,
          name: "Vaginal",
        },
        {
          id: 1,
          name: "Cesarian Section",
        },
      ],
      selectedMenstrualFlow: "",

      menstrualFlows: [
        {
          id: 1,
          name: "scanty (1-2 pads per day)",
        },
        {
          id: 1,
          name: "moderate (3-5 pads per day)",
        },

        {
          id: 1,
          name: "heavy (>5 pads per day)",
        },
      ],

      risksForSTIHeaders: [
        {
          text: "Does the client or the client's partner have any of the following?",
          value: "text",
          sortable: false,
        },

        {
          text: "",
          value: "options",
          sortable: false,
          align: "center",
        },
      ],

      risks_for_sti_questions: [
        {
          id: 1,
          text: "abnormal discharge from the genital area",
          value: "yes",
        },

        {
          id: 2,
          text: "sores or ulcers in the genital area",
          value: "yes",
        },

        {
          id: 3,
          text: "pain or burning sensation in the genital area",
          value: "yes",
        },

        {
          id: 4,
          text: "history of treatment for sexually transmitted infections",
          value: "yes",
        },

        {
          id: 5,
          text: "HIV / AIDS / Pelvic inflammatory disease",
          value: "yes",
        },
      ],

      risksForVAWHeaders: [
        {
          text: "",
          value: "text",
          sortable: false,
        },

        {
          text: "",
          value: "options",
          sortable: false,
          align: "center",
        },
      ],

      risks_for_vaw_questions: [
        {
          id: 1,
          text: "unpleasant relationship with partner",
          value: "yes",
        },

        {
          id: 2,
          text: "partner does not approve of the visit to FP clinic",
          value: "yes",
        },

        {
          id: 3,
          text: "history of domestic violence or VAW",
          value: "",
        },
      ],
      selectedOrganization: "",

      referredToOrganizations: [
        {
          id: 1,
          name: "DSWD",
        },
        {
          id: 2,
          name: "WCPU",
        },

        {
          id: 3,
          name: "NGOs",
        },

        {
          id: 4,
          name: "Others",
        },
      ],

      checkbox: "",

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
      deliveryItems: [
        {
          id: 1,
          name: "Normal",
        },
        {
          id: 2,
          name: "Abnormal",
        },
      ],

      birthTypeItems: [
        {
          id: 1,
          name: "Single",
        },
        {
          id: 2,
          name: "Multiple",
        },
      ],

      deliveredByItems: [
        {
          id: 1,
          name: "Midwife",
        },
        {
          id: 2,
          name: "Hilot",
        },
        {
          id: 3,
          name: "Doctor",
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
        {
          text: "Date",
          value: "records.date",
        },

        {
          text: "Complaints/Diagnosis",
          value: "records.complaints_diagnosis",
          sortable: false,
        },

        {
          text: "Treatment",
          value: "records.treatment",
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
    };
  },

  methods: {
    createRecord: call("immunization/createItem"),
    updateRecord: call("immunization/updateItem"),

    addImmunization() {
      this.showEditor = true;
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
              records: [
                {
                  id: "",
                  date: "",
                  complaints_diagnosis: "",
                  treatment: "",
                },
              ],
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
