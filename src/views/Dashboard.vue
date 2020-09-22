<template>
  <div class="dashboard mx-4">
    <div>Dashboard</div>
    <v-container class="my-3">
      <v-layout row class="pb-3 pt-5">
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn v-on="on" small class="grey--text mr-2" @click="sortBy('title')">
              <v-icon class="mr-3">folder</v-icon>
              <span class="text-lowercase">By Folder name</span>
            </v-btn>
          </template>
          <span>Sort by folder name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn v-on="on" small class="grey--text mr-2" @click="sortBy('person')">
              <v-icon class="mr-3">folder</v-icon>
              <span class="text-lowercase">By person name</span>
            </v-btn>
          </template>
          <span>Sort by person name</span>
        </v-tooltip>
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div>
              <v-chip small :class="`${project.status}`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import Due from "../components/Duedate";
import db from "@/fb";
export default {
  name: "Dashboard",
  components: {
    // Due,
  },
  data() {
    return {
      projects: [
        // {
        //   title: "design a new website",
        //   person: "gomeone",
        //   due: "January 20 , 2020",
        //   status: "on-going",
        // },
        // {
        //   title: "areate Website using Vuetify",
        //   person: "romeone",
        //   due: "January 20 , 2020",
        //   status: "hold",
        // },
        // {
        //   title: "Customize the way you want",
        //   person: "nomeone",
        //   due: "January 20 , 2020",
        //   status: "completed",
        // },
      ],
    };
  },
  methods: {
    sortBy(c) {
      this.projects.sort((a, b) => (a[c] < b[c] ? -1 : 1));
    },
  },
  created() {
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        const datas = querySnapshot.docs.map((doc) => doc.data());
        this.projects = datas;
        console.log(datas);
        // do something with projects
        // this.projects = projects;
      });
  },
  // created() {
  //   db.collection("projects").onSnapshot((res) => {
  //     const changes = res.docChanges();
  //     changes.foreach((change) => {
  //       if (change.type === "added") {
  //         this.projects.push({
  //           ...changes.doc.data(),
  //           id: change.doc.id,
  //         });
  //       }
  //     });
  //   });
  // },
};
</script>
<style scoped>
.hold {
  border-left: 5px solid sienna;
}
.completed {
  border-left: 5px solid turquoise;
}
.on-going {
  border-left: 5px solid tomato;
}
.v-chip.v-chip.v-chip.completed {
  background-color: turquoise !important;
}
.v-chip.v-chip.v-chip.hold {
  background-color: sienna !important;
}
.v-chip.v-chip.v-chip.on-going {
  background-color: tomato !important;
}
</style>
