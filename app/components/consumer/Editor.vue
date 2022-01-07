<template>
  <v-container>
    <v-card class="px-4 px-sm-8" outlined>
      <v-card-text>
        <div class="text-center mb-6">
          <v-file-input
            ref="imageInput"
            v-model="image"
            required
            :hide-input="true"
            style="display: none"
            @change="onImageInputChange"
          ></v-file-input>

          <v-hover>
            <template v-slot:default="{ hover }">
              <v-img
                @click="onAddImagesClick"
                max-height="180"
                max-width="180"
                :src="require('@/assets/images/user.svg')"
                class="mx-auto rounded-circle"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#000000">
                    <span class="text-body-1">
                      <v-icon dark> mdi-camera </v-icon>
                      <p>Upload Profile Picture</p>
                    </span>
                  </v-overlay>
                </v-fade-transition>
              </v-img>
            </template>
          </v-hover>
        </div>

        <label class="label"
          >Name as it is identified on ID and Vaccine Card</label
        >
        <v-text-field :rules="[rules.required]" outlined dense></v-text-field>

        <label class="label">Address</label>
        <v-text-field :rules="[rules.required]" outlined dense></v-text-field>

        <v-row dense>
          <v-col cols="12" md="6"
            ><label class="label">City</label>
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <label class="label">State</label>
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field
          ></v-col>

          <v-col cols="12" md="6">
            <label class="label">Zip</label>
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <label class="label">Date of Birth (DOB)</label>
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
              type="date"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-file-input
          ref="imageInput"
          v-model="image"
          required
          :hide-input="true"
          style="display: none"
          @change="onImageInputChange"
        ></v-file-input>
        <p class="mt-6">Upload Valid ID (required)</p>

        <v-card
          v-if="this.image === null"
          min-height="200"
          max-height="200"
          min-width="200"
          max-width="200"
          color="primary"
          class="d-flex justify-center align-center"
          @click="onAddImagesClick"
        >
          <v-overlay
            absolute
            color="white"
            style="border: 2px dashed #f4f4f4"
            opacity="0.8"
          >
            <div class="text-center">
              <v-icon large color="primary">mdi-plus</v-icon>
              <p class="mt-1 primary--text">Click to Add Image</p>
            </div>
          </v-overlay>
        </v-card>

        <v-hover v-if="this.image !== null">
          <template v-slot:default="{ hover }">
            <v-card @click="onAddImagesClick">
              <v-img
                :lazy-src="imagesDisplay"
                min-height="200"
                max-height="200"
                min-width="200"
                max-width="200"
                :src="imagesDisplay"
                class="mx-auto"
              ></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#000000">
                  <p class="text-h6">Click here to change Image</p>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-card-text>
    </v-card>

    <v-card class="px-4 px-sm-8 mt-8" outlined>
      <v-card-text>
        <b class="text-subtitle-1 text-sm-h6 font-weight-bold"
          >Primary Contact Information</b
        >
        <v-divider class="mb-4"></v-divider>

        <v-row dense>
          <v-col cols="12" md="6">
            <label class="label">Mobile Tel#</label>
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <label class="label">Home Tel#</label>
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="px-4 px-sm-8 mt-8 mb-12" outlined>
      <v-card-text>
        <b class="text-subtitle-1 text-sm-h6 font-weight-bold"
          >Primary Medical Doctor Information</b
        >
        <v-divider class="mb-4"></v-divider>

        <v-row dense>
          <v-col cols="12" md="6">
            <label class="label">Primary Doctor Name</label>
            <v-text-field outlined dense></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <label class="label">Primary Doctor Tel#</label>
            <v-text-field outlined dense></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="px-4 px-sm-8 mt-8" outlined>
      <v-card-text>
        <b class="text-subtitle-1 text-sm-h6 font-weight-bold"
          >User Account Information</b
        >
        <v-divider class="mb-4"></v-divider>

        <v-row dense>
          <v-col cols="12">
            <label class="label">Email Address</label>
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <label class="label">Password </label>
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <label class="label">Repeat Password </label>
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
      },
      image: null,
    };
  },

  methods: {
    onAddImagesClick() {
      this.$refs.imageInput.$refs.input.click();
    },

    onImageInputChange(file) {
      this.image = file;
    },

    imagesDisplay() {
      return this.image === null ? "" : URL.createObjectURL(this.image);
    },
  },
};
</script>
