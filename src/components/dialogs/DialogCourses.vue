<template>
  <v-layout row justify-start class="dialog" >
    <v-dialog v-model="dialog" max-width="350px">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" small dark color="green" @click="clearFields" class="add-button">Add Course
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Course Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                   label="Course name"
                   v-model="addName"
                   :rules="nameRules">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                   label="Course code"
                   v-model="addCode"
                   :rules="nameRules">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="green darken-1" flat @click="onSaveAdd">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        addName: '',
        addCode: '',
         nameRules: [
          v => !!v || 'Enter your name',
          v => (v && v.length >= 3) || 'Name must be at least 3 characters'
        ],
      }
    },
    methods: {
      onSaveAdd() {
        if (this.addName.trim() === '' || this.addCode.trim() === ''){
          return
        }
        this.dialog = false
        this.$store.dispatch("addCoursesData", {
          name: this.addName,
          code: this.addCode
        })
        this.$emit('upgradeCourses');
      },
      clearFields(){
        this.addName = '',
        this.addCode = ''
      }
    }
  };
</script>
