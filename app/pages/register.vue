<template>
 <div>
    <agreement-dialog
      :isDialogOpen="isAgreementDialogOpen"
      @close="isAgreementDialogOpen = false"
      @onAgreement="(value) => onConsumerAgreeSubmit(value)"
    />

    <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <p class="text-center text-h5 mt-8" @click="onTestClick">Registration</p>
        <v-card class="px-4 px-sm-8" outlined>
          <v-card-text>
            <div class="text-center mb-6">
              <v-file-input
                ref="profileImageInput"
                v-model="image"
                required
                :hide-input="true"
                style="display: none"
                @change="(file) => {
                  onImageInputChange('profile', file)
                }"
              ></v-file-input>

              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-img
                    @click="onAddImageClick('profile')"
                    max-height="180"
                    max-width="180"
                    min-height="180"
                    :lazy-src="profileDisplay"
                    :src="profileDisplay"
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
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
              v-model="consumer.name"
            ></v-text-field>

            <label class="label">Address</label>
            <v-text-field
              :rules="[rules.required]"
              outlined
              dense
              v-model="consumer.address"
            ></v-text-field>

            <v-row dense>
              <v-col cols="12" md="6"
                ><label class="label">City</label>
                <v-text-field
                  :rules="[rules.required]"
                  outlined
                  dense
                  v-model="consumer.city"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <label class="label">State</label>
                <v-text-field
                  :rules="[rules.required]"
                  outlined
                  dense
                  v-model="consumer.state"
                ></v-text-field
              ></v-col>

              <v-col cols="12" md="6">
                <label class="label">Zip</label>
                <v-text-field
                  :rules="[rules.required]"
                  outlined
                  dense
                  v-model="consumer.zip"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <label class="label">Date of Birth (DOB)</label>
                <v-text-field
                  :rules="[rules.required]"
                  outlined
                  dense
                  type="date"
                  v-model="consumer.dob"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-file-input
              ref="validIdImageInput"
              v-model="consumer.valid_id.raw"
              required
              :hide-input="true"
              style="display: none"
              @change="(file) => {
                onImageInputChange('validId', file)
              }"
            ></v-file-input>
            <p class="mt-6">Upload Valid ID (required)</p>

            <v-card
              v-if="consumer.valid_id.raw === null"
              min-height="200"
              max-height="200"
              min-width="200"
              max-width="200"
              color="primary"
              class="d-flex justify-center align-center"
              @click="onAddImageClick('validId')"
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

            <v-hover v-if="consumer.valid_id.raw !== null">
              <template v-slot:default="{ hover }">
                <v-card @click="onAddImageClick('validId')">
                  <v-img
                    contain
                    :lazy-src="validIdImageDisplay"
                    min-height="300"
                    max-height="300"
                    min-width="300"
                    max-width="300"
                    :src="validIdImageDisplay"
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
                  v-model="consumer.mobile_number"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <label class="label">Home Tel#</label>
                <v-text-field
                  :rules="[rules.required]"
                  outlined
                  dense
                  v-model="consumer.home_tel_number"
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
                <v-text-field 
                  outlined dense
                  v-model="consumer.primary_doctor_name"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <label class="label">Primary Doctor Tel#</label>
                <v-text-field outlined dense
                  v-model="consumer.primary_doctor_tel"
                ></v-text-field>
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
                  v-model="consumer.email"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <label class="label">Password </label>
                <v-text-field
                  :rules="[rules.required]"
                  outlined
                  dense
                  v-model="consumer.password"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <label class="label">Repeat Password </label>
                <v-text-field
                  :rules="[rules.required]"
                  outlined
                  dense
                  v-model="consumer.retype_password"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="px-4 px-sm-8 mt-8" outlined>
          <v-card-text>
            <b class="text-subtitle-1 text-sm-h6 font-weight-bold"
              >Vaccine Information</b
            >
            <v-divider class="mb-4"></v-divider>
            <label class="label">Vaccine Manufacturer</label>
            <v-select
              :items="vaccines"
              item-text="type"
              item-value="id"
              outlined
              dense
              v-model="consumer.vaccine"
              @change="onSelectedVaccineChange"
            ></v-select>

           <v-row dense>
                <v-col cols="12" md="6">
                  <label class="label">Dose 1</label>
                  <v-text-field
                    :rules="[rules.required]"
                    outlined
                    dense
                    type="date"
                    v-model="consumer.vaccine_first_dose_date"
                  ></v-text-field>
                </v-col>
                <v-col v-if="consumer.vaccine_dose_count > 1" cols="12" md="6">
                  <label class="label">Dose 2</label>
                  <v-text-field
                    :rules="[rules.required]"
                    outlined
                    dense
                    type="date"
                    v-model="consumer.vaccine_second_dose_date"
                  ></v-text-field>
                </v-col>
              </v-row>

            <v-row dense>
              <v-col cols="12" md="6">
                <label class="label">Vaccine Lot #</label>
                <v-text-field
                  :rules="[rules.required]"
                  outlined
                  dense
                  v-model="consumer.vaccine_lot_number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <label class="label">Expiration Date</label>
                <v-text-field outlined dense
                  v-model="consumer.vaccine_expiration_date"
                ></v-text-field>
              </v-col>
            </v-row>

            <label class="label">Location</label>
            <v-text-field outlined dense
              v-model="consumer.vaccine_received_location"
            >
            </v-text-field>

            <v-file-input
              multiple
              ref="vaccineCardImageInput"
              required
              :hide-input="true"
              style="display: none"
              @change="(file) => {
                onImageInputChange('vaccineCard', file)
              }"
            ></v-file-input>
            <p class="mt-3">Upload Vaccine Image (required)</p>

            <v-card
              v-if="consumer.vaccine_card_images.length < 1"
              min-height="200"
              max-height="200"
              min-width="200"
              max-width="200"
              color="primary"
              class="d-flex justify-center align-center"
              @click="onAddImageClick('vaccineCard')"
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

            <v-hover v-if="consumer.vaccine_card_images.length">
              <template v-slot:default="{ hover }">
                <v-card @click="onAddImageClick('vaccineCard')">
                  <v-img v-for="images in vaccineCardImageDisplay" :key="images.index"
                    contain
                    :lazy-src="images"
                    min-height="300"
                    max-height="300"
                    min-width="300"
                    max-width="300"
                    :src="images"
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

        <v-row class="my-4">
          <v-col cols="6">
            <v-btn block @click="onCancelClick"> Cancel </v-btn>
          </v-col>

          <v-col cols="6">
            <v-btn color="primary" class="ml-auto" block @click="onSubmitClick"> Submit </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
 </div>
</template>

<script>

import { call, get } from "vuex-pathify";

export default {
  name: "register",
  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
      },
      image: null,

      isAgreementDialogOpen: false,

      consumer: {
        profile: {
          raw: null,
          base64: '',
          extension: ''
        },
        name: '',
        address: '',
        dob: '',
        city: '',
        state: '',
        zip: '',
        mobile_number: '',
        home_tel_number: '',

        valid_id: {
          raw: null,
          base64: '',
          extension: ''
        },

        primary_doctor_name: '',
        primary_doctor_tel: '',

        email: '',
        password: '',
        retype_password: '',

        vaccine: '',
        vaccine_lot_number: '',
        vaccine_dose_count: '',
        vaccine_id: '',
        vaccine_first_dose_date: '',
        vaccine_second_dose_date: '',
        vaccine_expiration_date: '',
        vaccine_received_location: '',

        vaccine_card_images: [],
      }
    };
  },

  computed: {
    vaccines: get("vaccine/items"),

    profileDisplay() {
      return this.consumer.profile.raw === null ? require('~/assets/images/user.svg') : URL.createObjectURL(this.consumer.profile.raw);
    },

    validIdImageDisplay() {
      return this.consumer.valid_id.raw === null ? require('~/assets/images/user.svg') : URL.createObjectURL(this.consumer.valid_id.raw);
    },

    vaccineCardImageDisplay() {
      let images = []
      if(!_.isEmpty(this.consumer.vaccine_card_images)){
        this.consumer.vaccine_card_images.forEach((item) => {
          images.push(URL.createObjectURL(item.raw))
        })
      }
      return images
    },
    
  },

  methods: {
    fetchConsumers: call("consumer/fetchItems"),
    fetchVaccines: call("vaccine/fetchItems"),
    storeConsumerAccount: call("consumer/account/createItem"),
    storeConsumer: call("consumer/createItem"),
    storeConsumerVaccine: call("consumer/vaccine/createItem"),

    onSelectedVaccineChange(){
      this.consumer.vaccine_dose_count = _.find(this.vaccines, ["id", this.consumer.vaccine]).dose_count
    },

    onAddImageClick(tag) {
      switch(tag){
        case "profile" : 
          this.$refs.profileImageInput.$refs.input.click();
          break
        case "validId" : 
          this.$refs.validIdImageInput.$refs.input.click();
          break
        case "vaccineCard" : 
          this.$refs.vaccineCardImageInput.$refs.input.click();
          break
      }
    },

    async onImageInputChange(tag, file) {
      switch(tag){
        case "profile" : 
          this.consumer.profile = {
            raw: file,
            base64: await this.getBase64Image(file),
            extension: file.type.split("/")[1]
          }
          break
        case "validId" : 
          this.consumer.valid_id = {
            raw: file,
            base64: await this.getBase64Image(file),
            extension: file.type.split("/")[1]
          }
          break
        case "vaccineCard" :
          this.consumer.vaccine_card_images = [] 
          if(!_.isEmpty(file)){
            file.forEach( async(item) => {
              this.consumer.vaccine_card_images.push({
                raw: item,
                base64: await this.getBase64Image(item),
                extension: item.type.split("/")[1]
              })
            })
          }
          break
      }
    },

    getBase64Image(file){
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result.split("base64,")[1])
        reader.readAsDataURL(file)
      })
    },

    onSubmitClick(){
      this.isAgreementDialogOpen = true
    },

    async onConsumerAgreeSubmit(isConsumerAgree){
      if(!isConsumerAgree) return

      try {
        this.$nuxt.$loading.start();

        let consumerAccount = await this.storeConsumerAccount({
          item: {
            email: this.consumer.email,
            password: this.consumer.password,
          }
        })

        if(consumerAccount.data.success){
          let consumerInfo = await this.storeConsumer({
            item: {
              ...this.consumer,
              ...{consumer_account_id: consumerAccount.data.consumer_account.id}
            }
          })

          if(consumerInfo.data.success){
            let consumerVaccine = await this.storeConsumerVaccine({
              item: {
                ...this.consumer,
                ...{consumer_id: consumerInfo.data.consumer.id}
              }
            })

            if(consumerVaccine.data.success){

              this.$auth.$storage.setUniversal("login", true)
              this.$auth.$storage.setUniversal("consumer_id", consumerInfo.data.consumer.id)
              this.$auth.$storage.setUniversal("consumer_name", consumerInfo.data.consumer.name)

              this.$toast({
                icon: "success",
                title: "Registration completed.",
              });

              this.$router.push({
                name: "profile",
                query: {
                  id: consumerInfo.data.consumer.id
                }
              });
            }
          }
        }

      } catch (error) {
        console.error(error)
        this.$toast({
          icon: "error",
          title: "Something went wrong.",
        });
      }
      finally{
        this.$nuxt.$loading.finish();
      }
      
    },

    onCancelClick(){
      this.$router.go(-1);
    },

    onTestClick(){
      this.consumer.name = "Juan pabz"
      this.consumer.address = "abc street"
      this.consumer.dob = "09/13/2021"
      this.consumer.city = "gsc"
      this.consumer.state = "usa"
      this.consumer.zip = "9500"
      this.consumer.mobile_number = "1234567890"
      this.consumer.home_tel_number = "12144"

      this.consumer.primary_doctor_name = "Mario"
      this.consumer.primary_doctor_tel = "234234"

      this.consumer.email = "Juanpabz@gmail.com"
      this.consumer.password = "abcpass123"

      this.consumer.retype_password = "abcpass123"

      this.consumer.vaccine = 1
      this.consumer.vaccine_lot_number = "lot 213"
      this.consumer.vaccine_dose_count = 2
      this.consumer.vaccine_id = 1
      this.consumer.vaccine_first_dose_date = "01/13/2021"
      this.consumer.vaccine_second_dose_date = "02/13/2021"
      this.consumer.vaccine_expiration_date = "02/13/2050"
      this.consumer.vaccine_received_location = "receive somewhere"
    }

  },

  async fetch() {
    // await this.fetchConsumers()
    await this.fetchVaccines()
  },

};
</script>