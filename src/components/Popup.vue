<template>
  <div class="popup">
    <div class="text-center">
      <v-dialog width="600px" v-model="addmodal">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="success" dark v-bind="attrs" v-on="on">Add New Project</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline grey lighten-2">Add New Project</v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                label="Author"
                v-model="person"
                prepend-icon="person"
                :rules="InputRules"
              ></v-text-field>
              <v-text-field label="title" v-model="title" prepend-icon="folder" :rules="InputRules"></v-text-field>
              <v-textarea
                label="Infromation"
                v-model="content"
                prepend-icon="text_snippet"
                :rules="InputRules1"
              ></v-textarea>
              <!-- <Due v-on:step="dueChange" :due="duedate" /> -->
              <Due v-on:fromDue="onDue" />
              <!-- <v-file-input v-model="file"></v-file-input> -->
              <v-btn class="success mr-5" @click="submit" :loading="loading">Add Project</v-btn>
              <v-btn class="error" @click="addmodal=false">Close</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import Due from "./Duedate";
import db from "../fb";
// import moment from "moment";
export default {
  name: "Popup",
  // props: ["due"],
  components: {
    Due,
  },
  data() {
    return {
      selectedStatus: [
        { text: "On-going" },
        { text: "Completed" },
        { text: "Hold" },
      ],
      title: "",
      content: "",
      duedate: "",
      person: "",
      status: "",
      // file: "",
      form: [],
      loading: false,
      addmodal: false,

      InputRules: [
        (a) =>
          a.length >= 3 || "Please input atleast 3 characters for the Title",
      ],
      InputRules1: [
        (a) => a.length >= 5 || "Please indicate an Information of the Project",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: this.duedate,
          person: this.person,
          // file: this.file,
          status: "Completed",
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            // console.log("added to db", this.duedate);
            this.loading = false;
            this.addmodal = false;
            // console.log(file);
          });
      }
    },
    // console.log(this.title, this.content, this.duedate);

    onDue(value) {
      this.duedate = value;
    },

    // dueChange(due) {
    //   console.log(due);
    //   // this.duedate = due;
    // },
  },
};
</script>
