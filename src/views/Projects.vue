<template>
  <div class="projects mx-4">
    <div>Projects</div>
    <v-container class="my-3">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title" class="mb-2">
          <v-expansion-panel-header class="font-weight-bold">{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat class="px-4 grey--text">
              <v-card-text>
                <div class="font-weight-bold">due by {{project.due}}</div>
                <div class="grey--text">{{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
<script>
import db from "@/fb";
export default {
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "The Net Ninja";
      });
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
};
</script>
