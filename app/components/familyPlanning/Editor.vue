<template>
  <v-dialog
    v-model="showDialog"
    max-width="800"
    scrollable
    transition="slide-x-reverse-transition"
    fullscreen
  >
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
        <v-form ref="form-family-planning" :readonly="readOnly">
          <v-row dense class="justify-center">
            <v-col cols="12" md="6">
              <v-row dense>
                <v-col cols="12" md="4">
                  <label class="label">Client ID</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.client_id"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <label class="label">PhilHealth No.</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.philhealth_no"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="d-flex align-center">
                  <v-checkbox class="mr-6 mt-4" dense v-model="form.nhts">
                    <template v-slot:label>
                      <div class="text-subtitle-2 mt-1">NHTS?</div>
                    </template>
                  </v-checkbox>

                  <v-checkbox class="mt-4" dense v-model="form.four_ps">
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
                    v-model="form.last_name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="11" md="5" class="mt-n2">
                  <label class="label">Given Name</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.given_name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col cols="1" md="1" class="mt-n2">
                  <label class="label">MI</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.middle_initial"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Date of Birth</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.dob"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Age</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.age"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Educational Attainment</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.educational_attainment"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Occupation</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.occupation"
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
                    v-model="form.contact_number"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Civil Status</label>
                  <v-select
                    :items="civilStatuses"
                    v-model="form.civil_status"
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
                    v-model="form.religion"
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
                    v-model="form.spouse.last_name"
                  ></v-text-field>
                </v-col>
                <v-col cols="11" md="5" class="mt-n2">
                  <label class="label">Given Name</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.spouse.first_name"
                  ></v-text-field>
                </v-col>

                <v-col cols="1" md="1" class="mt-n2">
                  <label class="label">MI</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.spouse.middle_initial"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Date of Birth</label>
                  <v-text-field
                    outlined
                    dense
                    type="date"
                    v-model="form.spouse.dob"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Age </label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.spouse.age"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" class="mt-n2">
                  <label class="label">Occupation</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.spouse.occupation"
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
                    v-model="form.living_children_no"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="mt-n2">
                  <label class="label">Plan to have more children</label>
                  <v-select
                    :items="yesOrNo"
                    v-model="form.plan_to_have_more_children"
                    item-text="name"
                    outlined
                    dense
                    :rules="[rules.required]"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="4" class="mt-n2">
                  <label class="label">Ave. monthly income</label>
                  <v-text-field
                    outlined
                    dense
                    v-model="form.average_monthly_income"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row dense class="d-flex align-end">
                <v-col cols="12" md="3">
                  <label class="label">Type of Client</label>
                  <v-select
                    :items="clientTypes"
                    v-model="form.selected_client_type"
                    item-text="name"
                    outlined
                    dense
                    :rules="[rules.required]"
                  ></v-select>
                </v-col>
                <template v-if="form.selected_client_type == 'New Acceptor'">
                  <v-col cols="12" md="3">
                    <label class="label">Reason for FP</label>
                    <v-select
                      :items="newAcceptorReason"
                      v-model="form.reason_for_fp"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    v-if="form.reason_for_fp === 'Others'"
                  >
                    <label class="label">Others</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.other_reason"
                    ></v-text-field>
                  </v-col>
                </template>
                <template v-if="form.selected_client_type == 'Current User'">
                  <v-col cols="12" md="3">
                    <v-select
                      :items="currentUserType"
                      v-model="form.selected_current_user"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="3">
                    <label class="label">Reason</label>
                    <v-select
                      :items="currentUserReason"
                      v-model="form.current_user_reason"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                    v-if="form.current_user_reason === 'Side Effects'"
                  >
                    <label class="label">Side effects</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.reason_side_effects"
                    ></v-text-field>
                  </v-col>
                </template>

                <v-row>
                  <template
                    v-if="form.selected_current_user === 'Changing Method'"
                  >
                    <v-col cols="12" md="3">
                      <label class="label">Method currently used</label>
                      <v-select
                        :items="methodCurrentlyUsedItems"
                        v-model="form.method_currently_used"
                        item-text="name"
                        outlined
                        dense
                      ></v-select>
                    </v-col>
                    <v-col
                      cols="12"
                      md="3"
                      v-if="form.method_currently_used === 'Others'"
                    >
                      <label class="label">Others(Specify)</label>
                      <v-text-field
                        outlined
                        dense
                        v-model="form.other_method_currently_used"
                      ></v-text-field>
                    </v-col>
                  </template>
                </v-row>
                <v-col cols="12">
                  <v-divider></v-divider>

                  <div class="mt-1">I. MEDICAL HISTORY</div>
                </v-col>
                <v-col cols="12">
                  <v-data-table
                    :headers="medicalHistoryHeaders"
                    :items="form.medical_history.items"
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
                        <v-text-field
                          outlined
                          dense
                          class="mx-2"
                          v-model="
                            form.medical_history.disability_specification
                          "
                        ></v-text-field
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
                        v-model="form.obstretical_history.pregnancy_no_g"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3" md="2">
                      <label> P</label>
                      <v-text-field
                        outlined
                        dense
                        v-model="form.obstretical_history.pregnancy_no_p"
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
                      v-model="form.obstretical_history.full_term"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Premature</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.obstretical_history.premature"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Abortion</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.obstretical_history.abortion"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Living children</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.obstretical_history.living_children"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row dense>
                  <v-col cols="12" md="3">
                    <label> Date of last delivery</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.obstretical_history.last_delivery_date"
                      type="date"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Type of last delivery</label>
                    <v-select
                      :items="lastDeliveryTypes"
                      v-model="form.obstretical_history.last_delivery_type"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Last menstrual period</label>
                    <v-text-field
                      outlined
                      dense
                      type="date"
                      v-model="form.obstretical_history.last_menstrual_period"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Previous menstrual period</label>
                    <v-text-field
                      outlined
                      dense
                      type="date"
                      v-model="
                        form.obstretical_history.previous_menstrual_period
                      "
                    ></v-text-field>
                  </v-col>

                  <v-row align="center">
                    <v-col cols="12" md="3">
                      <label> Menstrual flow</label>
                      <v-select
                        :items="menstrualFlows"
                        v-model="form.obstretical_history.menstrual_flow"
                        item-text="name"
                        outlined
                        dense
                      ></v-select>
                    </v-col>

                    <v-col cols="12" md="3">
                      <v-checkbox
                        v-model="form.obstretical_history.dysmenorrhea"
                      >
                        <template v-slot:label>
                          <div class="text-subtitle-2 mt-1">Dysmenorrhea</div>
                        </template></v-checkbox
                      >
                    </v-col>

                    <v-col cols="12" md="3">
                      <v-checkbox
                        v-model="form.obstretical_history.hydatidiform_mole"
                      >
                        <template v-slot:label>
                          <div class="text-subtitle-2 mt-1">
                            Hydatidiform mole (within the last 12 mons.)
                          </div>
                        </template>
                      </v-checkbox>
                    </v-col>

                    <v-col cols="12" md="3">
                      <v-checkbox
                        v-model="
                          form.obstretical_history.ectopic_pregnancy_history
                        "
                      >
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
                    :items="form.risks_for_sti.items"
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
                        <v-radio-group
                          row
                          dense
                          class="mt-n2 mb-n6 ml-2"
                          v-model="
                            form.risks_for_sti
                              .abnormal_discharge_from_genital_area
                          "
                        >
                          <v-radio value="vagina">
                            <template v-slot:label>
                              <div class="ml-n2">Vagina</div>
                            </template>
                          </v-radio>
                          <v-radio value="penis">
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
                    :items="form.risks_for_vaw.items"
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
                            v-model="form.risks_for_vaw.reffered_to"
                            item-text="name"
                            outlined
                            dense
                            style="max-width: 120px"
                          ></v-select>
                        </v-col>

                        <v-col
                          cols="12"
                          md="8"
                          v-if="form.risks_for_vaw.reffered_to === 'Others'"
                        >
                          <label> Specify:</label>
                          <v-text-field
                            outlined
                            dense
                            v-model="form.risks_for_vaw.others"
                          ></v-text-field>
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
                      v-model="form.physical_examination.weight"
                      suffix="kg"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Height </label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.physical_examination.height"
                      suffix="m"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Blood Pressure </label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.physical_examination.blood_pressure"
                      suffix="mmHg"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> Pulse rate </label>
                    <v-text-field
                      outlined
                      dense
                      v-model="form.physical_examination.pulse_rate"
                      suffix="/min"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> SKIN </label>
                    <v-select
                      :items="skin"
                      v-model="form.physical_examination.skin"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> CONJUNCTIVA </label>
                    <v-select
                      :items="conjunctiva"
                      v-model="form.physical_examination.conjunctiva"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> NECK </label>
                    <v-select
                      :items="neck"
                      v-model="form.physical_examination.neck"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> BREAST </label>
                    <v-select
                      :items="breast"
                      v-model="form.physical_examination.breast"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> ABDOMEN </label>
                    <v-select
                      :items="abdomen"
                      v-model="form.physical_examination.abdomen"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="3">
                    <label> EXTREMITIES </label>
                    <v-select
                      :items="extremities"
                      v-model="form.physical_examination.extremities"
                      item-text="name"
                      outlined
                      dense
                    ></v-select>
                  </v-col>

                  <v-col cols="12">
                    <label> PELVIC EXAMINATION (For IUD acceptors) </label>
                    <v-row align="center">
                      <v-col cols="12" md="4">
                        <v-radio-group
                          v-model="
                            form.physical_examination.pelvic_examination.pelvic
                          "
                        >
                          <v-radio
                            v-for="item in pelvicItems"
                            :key="item.id"
                            :label="item.name"
                            :value="item.name"
                          ></v-radio>
                        </v-radio-group>
                        <v-checkbox
                          dense
                          class="mt-n4"
                          v-model="
                            form.physical_examination.pelvic_examination
                              .cervical_tenderness
                          "
                        >
                          <template v-slot:label>
                            <div class="text-subtitle-2">
                              cervical tenderness
                            </div>
                          </template>
                        </v-checkbox>
                        <v-checkbox
                          dense
                          class="mt-n4"
                          v-model="
                            form.physical_examination.pelvic_examination
                              .adnexal_mass_tenderness
                          "
                        >
                          <template v-slot:label>
                            <div class="text-subtitle-2">
                              adnexal mass / tenderness
                            </div>
                          </template>
                        </v-checkbox>
                      </v-col>
                      <v-col cols="12" md="4">
                        <label> cervical abnormalities </label>
                        <v-select
                          :items="cervical_abnormalities"
                          v-model="
                            form.physical_examination.pelvic_examination
                              .cervical_abnormalities
                          "
                          item-text="name"
                          outlined
                          dense
                        ></v-select>

                        <label> cervical consistency </label>
                        <v-select
                          :items="cervical_consistency"
                          v-model="
                            form.physical_examination.pelvic_examination
                              .cervical_consistency
                          "
                          item-text="name"
                          outlined
                          dense
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="4">
                        <label> uterine position </label>
                        <v-select
                          :items="uterine_position"
                          v-model="
                            form.physical_examination.pelvic_examination
                              .uterine_position
                          "
                          item-text="name"
                          outlined
                          dense
                        ></v-select>

                        <label> uterine depth </label>
                        <v-text-field
                          outlined
                          dense
                          v-model="
                            form.physical_examination.pelvic_examination
                              .uterine_depth
                          "
                          suffix="cm"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-row>

              <v-col cols="12">
                <v-divider></v-divider>

                <div class="mt-1 text-center">
                  FAMILY PLANNING CLIENT ASSESSMENT RECORD
                </div>
              </v-col>

              <v-dialog
                v-model="showAssessmentDialog"
                max-width="800"
                scrollable
                transition="slide-x-reverse-transition"
              >
                <v-card>
                  <v-toolbar flat dark color="primary" height="60px">
                    <v-spacer></v-spacer>

                    <v-toolbar-title>
                      Family Planning Client Assessment Record
                    </v-toolbar-title>

                    <v-spacer></v-spacer>
                    <v-btn icon @click="showAssessmentDialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar>

                  <v-card-text class="px-md-16 py-8">
                    <label class="label">Date of visit</label>
                    <v-text-field
                      outlined
                      dense
                      type="date"
                      v-model="assessment_record.date_of_visit"
                    ></v-text-field>

                    <label class="label">Medical Findings</label>
                    <v-textarea
                      outlined
                      auto-grow
                      v-model="assessment_record.medical_findings"
                    ></v-textarea>

                    <label class="label">Method Accepted</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="assessment_record.method_accepted"
                    ></v-text-field>

                    <label class="label">Name of Service Provider</label>
                    <v-text-field
                      outlined
                      dense
                      v-model="assessment_record.service_provider_name"
                    ></v-text-field>

                    <label class="label">Date of follow-up visit</label>
                    <v-text-field
                      outlined
                      dense
                      type="date"
                      v-model="assessment_record.follow_up_visit_date"
                    ></v-text-field>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="addAssessmentRecord">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-data-table
                :headers="familyPlanningClientAssessmentRecordHeaders"
                :items="form.assessment_records"
                item-key="id"
                disable-pagination
                hide-default-footer
                mobile-breakpoint="0"
              >
                <template v-slot:top>
                  <div
                    class="d-inline-flex justify-space-between align-center"
                    style="width: 98%"
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      @click="onAddAssessmentClick"
                      :disabled="readOnly"
                    >
                      Add
                    </v-btn>
                  </div>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn icon :disabled="readOnly">
                    <v-icon color="red" @click="deleteRecord(item)"
                      >mdi-delete</v-icon
                    >
                  </v-btn>
                </template>
              </v-data-table>
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

  data() {
    return {
      valid: true,
      showAssessmentDialog: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      form: null,
      selected_client_type: "",
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
      selected_current_user: "",

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

      selectedDeliveryType: "",

      lastDeliveryTypes: [
        {
          id: 1,
          name: "Vaginal",
        },
        {
          id: 2,
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
          id: 2,
          name: "moderate (3-5 pads per day)",
        },

        {
          id: 3,
          name: "heavy (>5 pads per day)",
        },
      ],
      civilStatuses: [
        {
          id: 1,
          name: "Single",
        },
        {
          id: 2,
          name: "Married",
        },
      ],

      genders: ["Male", "Female"],
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

      newAcceptorReason: [
        {
          id: 1,
          name: "Spacing",
        },
        {
          id: 2,
          name: "Limiting",
        },
        {
          id: 3,
          name: "Others",
        },
      ],

      methodCurrentlyUsedItems: [
        {
          id: 1,
          name: "COC",
        },
        {
          id: 2,
          name: "POP",
        },
        {
          id: 3,
          name: "Injectable",
        },
        {
          id: 4,
          name: "Implant",
        },
        {
          id: 5,
          name: "IUD(Interval)",
        },
        {
          id: 6,
          name: "IUD(Post-Partum)",
        },
        {
          id: 7,
          name: "Condom",
        },
        {
          id: 8,
          name: "BOM/CMM",
        },
        {
          id: 9,
          name: "BBT",
        },
        {
          id: 10,
          name: "STM",
        },
        {
          id: 11,
          name: "SDM",
        },
        {
          id: 12,
          name: "LAM",
        },
        {
          id: 13,
          name: "Others",
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

      skin: [
        {
          id: 1,
          name: "normal",
        },
        {
          id: 2,
          name: "pale",
        },
        {
          id: 3,
          name: "yellowish",
        },
        {
          id: 4,
          name: "hematoma",
        },
      ],

      conjunctiva: [
        {
          id: 1,
          name: "normal",
        },
        {
          id: 2,
          name: "pale",
        },
        {
          id: 3,
          name: "yellowish",
        },
      ],

      neck: [
        {
          id: 1,
          name: "normal",
        },
        {
          id: 2,
          name: "neck mass",
        },
        {
          id: 3,
          name: "enlarge lymph node",
        },
      ],

      breast: [
        {
          id: 1,
          name: "normal",
        },
        {
          id: 2,
          name: "mass",
        },
        {
          id: 3,
          name: "nipple discharge",
        },
      ],

      abdomen: [
        {
          id: 1,
          name: "normal",
        },
        {
          id: 2,
          name: "abdominal mass",
        },
        {
          id: 3,
          name: "varicosities",
        },
      ],

      extremities: [
        {
          id: 1,
          name: "normal",
        },
        {
          id: 2,
          name: "edema",
        },
        {
          id: 3,
          name: "varicosities",
        },
      ],

      cervical_abnormalities: [
        {
          id: 1,
          name: "warts",
        },
        {
          id: 2,
          name: "polyp or cyst",
        },
        {
          id: 3,
          name: "inflammation or erosion",
        },
        {
          id: 4,
          name: "bloody discharge",
        },
      ],

      cervical_consistency: [
        {
          id: 1,
          name: "firm",
        },
        {
          id: 2,
          name: "soft",
        },
      ],

      uterine_position: [
        {
          id: 1,
          name: "mid",
        },
        {
          id: 2,
          name: "anteflexed",
        },
        {
          id: 3,
          name: "retroflexed",
        },
      ],

      pelvicItems: [
        {
          id: 1,
          name: "normal",
        },
        {
          id: 2,
          name: "mass",
        },
        {
          id: 3,
          name: "abdominal discharge",
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

      familyPlanningClientAssessmentRecordHeaders: [
        {
          text: "Date of Visit",
          value: "date_of_visit",
          sortable: false,
        },

        {
          text: "Medical Findings",
          value: "medical_findings",
          sortable: false,
          align: "center",
        },

        {
          text: "Method Accepted",
          value: "method_accepted",
          sortable: false,
          align: "center",
        },

        {
          text: "Name of Service Provider",
          value: "service_provider_name",
          sortable: false,
          align: "center",
        },

        {
          text: "Date of Follow-up visit",
          value: "follow_up_visit_date",
          sortable: false,
          align: "center",
        },

        {
          text: "Actions",
          value: "actions",
          sortable: false,
          align: "center",
        },
      ],

      assessment_record: {
        medical_findings: "",
        method_accepted: "",
        service_provider_name: "",
        follow_up_visit_date: "",
      },
    };
  },

  methods: {
    createRecord: call("familyPlanning/createItem"),
    updateRecord: call("familyPlanning/updateItem"),

    onAddAssessmentClick() {
      this.showAssessmentDialog = true;
    },
    addAssessmentRecord() {
      this.form.assessment_records.push({ ...this.assessment_record });
      this.showAssessmentDialog = false;
    },

    deleteRecord(item) {
      this.form.assessment_records.splice(item, 1);
    },

    add() {
      if (!this.$refs["form-family-planning"].validate()) return;

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
            id: "",
            client_id: "",
            philhealth_no: "",
            nhts: false,
            four_ps: false,
            last_name: "",
            given_name: "",
            middle_initial: "",
            dob: "",
            age: "",
            educational_attainment: "",
            occupation: "",
            address: "",
            contact_number: "",
            civil_status: this.civilStatuses[0],
            religion: "",
            spouse: {
              last_name: "",
              first_name: "",
              middle_initial: "",
              dob: "",
              age: "",
              occupation: "",
            },
            living_children_no: "",
            plan_to_have_more_children: this.yesOrNo[0],
            average_monthly_income: "",
            selected_client_type: this.clientTypes[0],
            reason_for_fp: this.newAcceptorReason[0],
            other_reason: "",
            selected_current_user: this.currentUserType[0],
            current_user_reason: this.currentUserReason[0],
            reason_side_effects: "",
            method_currently_used: this.methodCurrentlyUsedItems[0],
            other_method_currently_used: "",
            medical_history: {
              items: [
                {
                  id: 1,
                  text: "severe headaches / migraine",
                  value: "",
                },
                {
                  id: 2,
                  text: "history of stroke / heart attack / hypertension",
                  value: "",
                },
                {
                  id: 3,
                  text: "non-traumatic hematoma / frequent bruising or gum bleeding",
                  value: "",
                },
                {
                  id: 4,
                  text: "current or history of breast cancer / breat mass",
                  value: "",
                },
                {
                  id: 5,
                  text: "severe chest pain",
                  value: "",
                },
                {
                  id: 6,
                  text: "cough for more than 14 days",
                  value: "",
                },
                {
                  id: 7,
                  text: "jaundice",
                  value: "",
                },
                {
                  id: 8,
                  text: "unexpected vaginal bleeding",
                  value: "",
                },
                {
                  id: 9,
                  text: "abnormal vaginal discharge",
                  value: "",
                },
                {
                  id: 10,
                  text: "intake of phenobarbital (anti-seizure) or rifampicin(anti-TB)",
                  value: "",
                },
                {
                  id: 11,
                  text: "is client a SMOKER?",
                  value: "",
                },
                {
                  id: 12,
                  text: "with disability?",
                  value: "",
                },
              ],
              disability_specification: "",
            },

            obstretical_history: {
              pregnancy_no_p: "",
              pregnancy_no_g: "",
              full_term: "",
              premature: "",
              abortion: "",
              living_children: "",
              last_delivery_date: "",
              last_delivery_type: this.lastDeliveryTypes[0],
              last_menstrual_period: "",
              previous_menstrual_period: "",
              menstrual_flow: this.menstrualFlows[0],
              dysmenorrhea: "",
              hydatidiform_mole: "",
              ectopic_pregnancy_history: "",
            },
            risks_for_sti: {
              items: [
                {
                  id: 1,
                  text: "abnormal discharge from the genital area",
                  value: "",
                },
                {
                  id: 2,
                  text: "sores or ulcers in the genital area",
                  value: "",
                },
                {
                  id: 3,
                  text: "pain or burning sensation in the genital area",
                  value: "",
                },
                {
                  id: 4,
                  text: "history of treatment for sexually transmitted infections",
                  value: "",
                },
                {
                  id: 5,
                  text: "HIV / AIDS / Pelvic inflammatory disease",
                  value: "",
                },
              ],
              abnormal_discharge_from_genital_area: "",
            },

            risks_for_vaw: {
              items: [
                {
                  id: 1,
                  text: "unpleasant relationship with partner",
                  value: "",
                },
                {
                  id: 2,
                  text: "partner does not approve of the visit to FP clinic",
                  value: "",
                },
                {
                  id: 3,
                  text: "history of domestic violence or VAW",
                  value: "",
                },
              ],
              reffered_to: "",
              others: "",
            },
            physical_examination: {
              weight: "",
              height: "",
              blood_pressure: "",
              pulse_rate: "",
              skin: this.skin[0],
              conjunctiva: this.conjunctiva[0],
              neck: this.neck[0],
              breast: this.breast[0],
              abdomen: this.abdomen[0],
              extremities: this.extremities[0],
              pelvic_examination: {
                pelvic: "",
                cervical_tenderness: false,
                adnexal_mass_tenderness: false,
                cervical_abnormalities: "",
                cervical_consistency: "",
                uterine_position: "",
                uterine_depth: "",
              },
            },
            assessment_records: [],
          },
          ...val,
        };
      },
      immediate: true,
    },
  },
};
</script>
