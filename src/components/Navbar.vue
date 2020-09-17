<template>
  <div class="nav">
    <v-toolbar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>Ninja
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="primary" small>
        Sign Out
        <span>
          <v-icon>exit_to_app</v-icon>
        </span>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="primary">
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
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My projects", route: "/projects" },
        { icon: "groups", text: "Team", route: "/team" },
        { icon: "folder_shared", text: "About", route: "/about" },
      ],
    };
  },
};
</script>