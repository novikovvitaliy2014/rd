<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="350px">
      <template v-slot:activator="{ on }">
        <v-icon v-on="on" color="green" @click="clearFields" class="add-button">edit
        </v-icon>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Course</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Course name"
                  v-model="editedName">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Code"
                  v-model="editedCode">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="green darken-1" flat @click="onSaveEdit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    props: {
      course: {
        type: Object,
      }
    },
    data () {
      return {
        coursesStorage: [],
        dialog: false,
        editedName: this.course.name,
        editedCode: this.course.code
      }
    },
    methods: {
      checkField(){
        if (this.editedName.trim() === '' || this.editedCode.trim() === ''){
          return
        }
        this.dialog = false
      },
      editCourse(){
        this.course.name = this.editedName
        this.course.code = this.editedCode
      },
      ugradeStorage(){
        this.$store.dispatch("updateCoursesData", {
          name: this.editedName,
          code: this.editedCode
        })
      },
      async onSaveEdit() {
        try {
          await this.checkField();
          await this.editCourse();
          await this.ugradeStorage();
        } catch (e) {
            console.log(e);
        }
      }
    }
  };
</script>
