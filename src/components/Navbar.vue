<template>
  <div class="nav">
    <v-snackbar v-model="snackbar" color="success" :timeout="3000" top>
      <span>Successfully added to the database</span>
      <v-btn text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-toolbar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase success--text">
        <span class="font-weight-bold primary--text">File</span>_Management System
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{on}">
          <v-btn small text v-on="on" class="mr-5">
            <v-icon>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn class="primary" small>
        Sign Out
        <span>
          <v-icon>exit_to_app</v-icon>
        </span>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" dark>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="profile" src="/avatar-1.png" />
          </v-avatar>
          <p class="white--text pt-2 text-center">Vuetify</p>
        </v-flex>
        <v-flex>
          <Popup class="pb-4 pt-4" @message="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <!-- <v-list-action> -->
          <v-list-item-icon>
            <v-icon dark>{{link.icon}}</v-icon>
          </v-list-item-icon>
          <!-- </v-list-action> -->
          <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import Popup from "./Popup";
export default {
  name: "Navbar",
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My projects", route: "/projects" },
        { icon: "groups", text: "Team", route: "/team" },
        { icon: "folder_shared", text: "About", route: "/about" },
      ],
      snackbar: false,
    };
  },
};
</script>
<style scoped>
.profile {
  border: 2px solid grey;
}
</style>