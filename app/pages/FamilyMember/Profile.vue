<template>
  <div>
    <TitleHeader title="Family Member Profile" />

    <FamilyMemberEditor
      :isDialogOpen="isEditorDialogOpen"
      @close="isEditorDialogOpen = false"
    />
    <v-container fill-height fluid>
      <div class="mx-auto mt-12 profile-card">
        <v-card class="px-4 px-sm-8" outlined>
          <v-card-text>
            <div class="text-right">
              <v-btn color="primary" @click="editorClick">Edit</v-btn>
            </div>

            <v-container>
              <label class="label">Name</label>
              <v-text-field
                :rules="[rules.required]"
                outlined
                dense
                readonly
              ></v-text-field>

              <label class="label">Relationship</label>
              <v-select
                :items="relationship"
                v-model="selectedRelationship"
                outlined
                dense
                readonly
              ></v-select>

              <label class="label">Date of Birth</label>
              <v-text-field
                :rules="[rules.required]"
                outlined
                dense
                readonly
                type="date"
              ></v-text-field>

              <label class="label">Vaccine Manufacturer</label>
              <v-select
                :items="vaccines"
                v-model="selectedVaccine"
                outlined
                dense
                readonly
              ></v-select>

              <div v-if="selectedVaccine === 'Johnson & Johnson'">
                <label class="label">Dose</label>
                <v-text-field
                  :rules="[rules.required]"
                  outlined
                  dense
                  readonly
                  type="date"
                ></v-text-field>
              </div>

              <div v-else>
                <v-row dense>
                  <v-col cols="12" md="6">
                    <label class="label">Dose 1</label>
                    <v-text-field
                      :rules="[rules.required]"
                      outlined
                      dense
                      readonly
                      type="date"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <label class="label">Dose 2</label>
                    <v-text-field
                      :rules="[rules.required]"
                      outlined
                      dense
                      readonly
                      type="date"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>

              <v-row dense>
                <v-col cols="12" md="6">
                  <label class="label">Vaccine Lot #</label>
                  <v-text-field
                    :rules="[rules.required]"
                    outlined
                    dense
                    readonly
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <label class="label">Expiration Date</label>
                  <v-text-field outlined dense type="date"></v-text-field>
                </v-col>
              </v-row>

              <label class="label">Location</label>
              <v-text-field outlined dense></v-text-field>

              <v-row>
                <v-col cols="12" md="6">
                  <label class="label">ID Image </label>
                  <v-img
                    :lazy-src="imagesDisplay"
                    min-height="250"
                    max-height="250"
                    min-width="250"
                    max-width="250"
                    :src="imagesDisplay"
                    class="mx-auto"
                  ></v-img>
                </v-col>

                <v-col cols="12" md="6">
                  <label class="label">Vaccine Card Image</label>
                  <v-img
                    :lazy-src="imagesDisplay"
                    min-height="250"
                    max-height="250"
                    min-width="250"
                    max-width="250"
                    :src="imagesDisplay"
                    class="mx-auto"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<router lang="yaml">
    path: /family-member-profile
    name: family-members-profile
</router>


<script>
export default {
  data() {
    return {
      isEditorDialogOpen: false,
      tab: null,
      rules: {
        required: (value) => !!value || "Required.",
      },
      e1: 1,

      image: null,
    };
  },

  methods: {
    editorClick() {
      this.isEditorDialogOpen = true;
    },
  },
};
</script>

<style scoped>
.profile-card {
  width: 80%;
}

@media screen and (max-width: 600px) {
  .profile-card {
    width: 100%;
  }
}
</style>
