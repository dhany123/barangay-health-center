<template>
  <v-container fill-height fluid style="background-color: #f5f5f5">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="7" md="4">
        <v-card class="pa-4">
          <v-img
            style="margin-bottom: 30px"
            max-height="120"
            max-width="120"
            :src="require('@/assets/images/user.svg')"
            class="mx-auto"
          ></v-img>
          <div class="text-center mt-n3">Juan Pablo</div>
          <div class="green--text text-center mb-4 mt-1">
            <v-icon color="green" large>mdi-check-decagram</v-icon>
            <span class="text-h6">Verified</span>
          </div>

          <p class="font-weight-bold">Vaccine Information</p>
          <v-divider class="mt-n4 mb-3"></v-divider>

          <QrCodeListItem fieldTitle="Location" fieldOutput="Greenhills" />

          <QrCodeListItem class="mt-2" fieldTitle="Lot #" fieldOutput="123" />

          <QrCodeListItem
            class="mt-2"
            fieldTitle="Manufacturer"
            fieldOutput="Pfizer"
          />

          <QrCodeListItem
            class="mt-2"
            fieldTitle="1st Dose Date"
            fieldOutput="1/12/21"
          />

          <QrCodeListItem
            class="mt-2"
            fieldTitle="2nd Dose Date"
            fieldOutput="2/12/21"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
