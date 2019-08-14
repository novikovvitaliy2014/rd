<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="350px">
      <template v-slot:activator="{ on }">
        <v-icon v-on="on" color="green" @click="clearFields" class="add-button">edit
        </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Full name"
                  v-model="editedName">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email"
                  v-model="editedEmail">
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Active', 'inActive']"
                  label="Activation"
                  v-model="editedStatus"
                ></v-select>
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
      user: {
        type: Object,
      }
    },
    data () {
      return {
        usersStorage: [],
        dialog: false,
        editedName: this.user.name,
        editedEmail: this.user.email,
        editedStatus: this.user.status,
      }
    },
    methods: {
      checkField(){
        if (this.editedName.trim() === '' || this.editedEmail.trim() === '' || this.editedStatus === ''){
          return
        }
        this.dialog = false
      },
      editUser(){
        this.user.name = this.editedName
        this.user.email = this.editedEmail
        this.user.status = this.editedStatus
      },
      ugradeStorage(){
        this.$store.dispatch("updateUsersData", {
          name: this.editedName,
          email: this.editedEmail,
          status: this.editedStatus
        })
      },
      async onSaveEdit() {
        try {
          await this.checkField();
          await this.editUser();
          await this.ugradeStorage();
        } catch (e) {
            console.log(e);
        }
      }
    }
  };
</script>
