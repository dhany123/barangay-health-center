<template>
  <v-app>
    <v-navigation-drawer
      v-model="sidebarMenu"
      app
      :mini-variant.sync="mini"
      class="elevation-1"
      color="#077af6"
      ref="drawer"
      dark
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <!-- <v-img
              :src="require('@/assets/images/logo.png')"
              max-height="120px"
              max-width="200px"
              class="mx-auto"
            ></v-img> -->

            <p class="text-center">Barangay Health Center</p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-divider></v-divider> -->
      <v-list class="mx-3">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.href"
          active-class="active-list"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- <v-list-group
        class="mx-3"
        :value="true"
        prepend-icon="mdi-cog"
        active-class="settings-menu"
      >
        <template v-slot:activator>
          <v-list-item-title>Settings</v-list-item-title>
        </template>
        <v-list>
          <v-list-item
            class="pl-8"
            v-for="(menu, i) in settingsMenu"
            :key="i"
            link
            :to="menu.href"
            active-class="active-list"
          >
            <v-list-item-title v-text="menu.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list-group> -->
    </v-navigation-drawer>

    <v-app-bar app color="#fff" elevation="1">
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-spacer></v-spacer>

      <v-menu offset-y rounded="lg" class="mt-6">
        <template v-slot:activator="{ on, attrs }">
          <v-badge bordered color="red accent-4" dot overlap>
            <v-avatar
              color="primary"
              class="white--text"
              v-bind="attrs"
              v-on="on"
              size="40"
            >
              A
            </v-avatar>
          </v-badge>
        </template>
        <v-list nav dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in account" :key="i">
              <v-list-item-content>
                <v-list-item-title @click="onLogoutClick"
                  >Logout</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main style="background-color: #e3e9fe">
      <v-container>
        <client-only>
          <nuxt />
        </client-only>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sidebarMenu: true,
      selectedItem: "",
      mini: false,
      dialog: false,
      items: [
        // { title: "Dashboard", href: "", icon: "mdi-view-dashboard" },
        {
          title: "Residents",
          href: `/residents`,

          icon: "mdi-account-group",
        },

        {
          title: "Medicine Stocks",
          href: `/medicine`,

          icon: "mdi-medical-bag",
        },

        {
          title: "Reports",
          href: `/services`,

          icon: "mdi-file-chart",
        },
      ],

      // settingsMenu: [
      //   { title: "Services", href: "/services" },
      //   { title: "Service Category", href: "/categories" },
      // ],

      account: [
        {
          text: "Logout",
        },
      ],
    };
  },

  computed: {},

  methods: {
    // fetchSettings: call("setting/findItem"),

    async onLogoutClick() {
      this.$auth.$storage.removeUniversal("user");
      // await this.$auth.logout();
      this.$router.push({
        path: "/",
      });
    },

    handleDrawerCollapse() {
      this.mini = !this.mini;
    },

    toggleDrawer() {
      this.sidebarMenu = !this.sidebarMenu;
    },
  },

  async fetch() {
    // await this.fetchSettings({
    //   query: {
    //     id: 1,
    //   },
    // });
  },
};
</script>

<style>
.active-list {
  border-left: 2px solid white;

  background-image: linear-gradient(
    to right,
    rgba(237, 237, 237, 0.885) -180%,
    rgba(255, 255, 255, 0) 30%
  );
  position: relative;
}

.active-list:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-top: 3px solid transparent;

  border-bottom: 3px solid transparent;
  width: 0;
  border-left: 3px solid white;
}

.settings-menu {
  color: white;
}
</style>