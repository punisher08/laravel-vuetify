<template>
  <div class="duedate">
    <v-dialog width="290">
      <template v-slot:activator="{ on }">
        <v-text-field
          :value="formattedDate"
          slot="activator"
          label="Due date"
          prepend-icon="calendar_today"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="due" @change="dueIsChanged()" :rules="InputRules2"></v-date-picker>
    </v-dialog>
  </div>
</template>
<script>
import moment from "moment";

export default {
  // props: ["due"],
  data() {
    return {
      date: false,
      due: null,
      InputRules2: [(a) => a.length >= 1 || "Please indicate the date"],
    };
  },
  name: "Due",
  methods: {
    dueIsChanged() {
      this.$emit("fromDue", this.formattedDate);
    },
  },

  computed: {
    formattedDate() {
      return this.due ? moment(this.due).format("MMM Do YYYY") : "";
    },
    // newDue() {
    //   return this.due;
    // },
  },
};
</script>