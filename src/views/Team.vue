<template>
  <div class="team mx-4">
    <div>Team</div>
    <v-container class="my-3">
      <v-layout row wrap class="justify-space-between">
        <v-flex xs12 sm6 md3 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-sm-center ma-1 pt-5">
            <v-responsive>
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey justify-center">
                <v-icon smal color="primary">message</v-icon>
                <span class="primary--text">message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web Developer",
          avatar: "/avatar-1.png",
        },
        { name: "Vue Js", role: "Web Developer", avatar: "/avatar-3.png" },
        { name: "Laravel", role: "Web Developer", avatar: "/avatar-1.png" },
        { name: "React", role: "Web Developer", avatar: "/avatar-3.png" },
      ],
    };
  },
};
</script>