<template>
  <div>
    <v-card class="mt-4">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <div>
              <div>Name</div>
              <p class="font-weight-bold black--text text-uppercase">
                {{ item.firstName }}
              </p>
            </div>

            <div>
              <div>Birthday</div>
              <p class="font-weight-bold black--text text-uppercase">
                {{ item.dob }}
              </p>
            </div>

            <div>
              <div>Address</div>
              <p class="font-weight-bold black--text text-uppercase">
                {{ item.address }}
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div>
              <div>City</div>
              <p class="font-weight-bold black--text text-uppercase">
                {{ item.city }}
              </p>
            </div>

            <div>
              <div>State</div>
              <p class="font-weight-bold black--text text-uppercase">
                {{ item.state }}
              </p>
            </div>

            <div>
              <div>Zip</div>
              <p class="font-weight-bold black--text text-uppercase">
                {{ item.zip }}
              </p>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <h6 class="text-body-1 mt-6 black--text">Contact Information</h6>
            <div>
              <div>Mobile Number</div>
              <p class="font-weight-bold black--text text-uppercase">
                {{ item.mobileNumber }}
              </p>
            </div>

            <div>
              <div>Home Tel Number</div>
              <p class="font-weight-bold black--text text-uppercase">
                {{ item.homeNumber }}
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <h6 class="text-body-1 mt-6 black--text">Doctor's Information</h6>
            <div>
              <div>Name</div>
              <p class="font-weight-bold black--text text-uppercase">
                {{ item.doctorName }}
              </p>
            </div>

            <div>
              <div>Mobile Number</div>
              <p class="font-weight-bold black--text text-uppercase">
                {{ item.doctorNumber }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- <h6 class="text-h6 mt-6">Contact Information</h6>
    <v-card>
      <v-card-text>
        <InlineListItem
          fieldTitle="Mobile Number"
          :fieldOutput="item.mobileNumber"
        />

        <InlineListItem
          fieldTitle="Home Tel Number"
          :fieldOutput="item.homeNumber"
        />
      </v-card-text>
    </v-card>

    <h6 class="text-h6 mt-6">Doctor's Information</h6>
    <v-card>
      <v-card-text>
        <InlineListItem fieldTitle="Name" :fieldOutput="item.doctorName" />

        <InlineListItem
          fieldTitle="Mobile Number"
          :fieldOutput="item.doctorNumber"
        />
      </v-card-text>
    </v-card> -->

    <v-card class="my-6">
      <v-card-title>
        <h6 class="text-body-1">Uploaded Valid ID(Front)</h6>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-img
          max-width="300"
          max-height="300"
          :src="`https://api.vaxrec.com:3005/public/${item.ValidID}`"
          class="mx-auto"
          alt="Img"
          contain
        >
        </v-img>
      </v-card-text>
    </v-card>

    <v-card class="my-6">
      <v-card-title>
        <h6 class="text-body-1">Uploaded Valid ID(Back)</h6>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-img
          max-width="300"
          max-height="300"
          :src="`https://api.vaxrec.com:3005/public/${item.ValidID}`"
          class="mx-auto"
          alt="Img"
          contain
        >
        </v-img>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>