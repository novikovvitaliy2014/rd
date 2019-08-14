<template>
  <section class="users">
    <h1>Users</h1>
    <div class="search">
      <v-text-field
        class='lightgrey'
        label="Case unsensitive search"
        prepend-icon="search"
        v-model="filterText"
        @input="searchResults"
        light
        flat
        solo-inverted
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
        >
      </v-text-field>
    </div>
    <section class="settings">
      <app-dialog-users @upgradeUsers="changePagination">
      </app-dialog-users>
      <div class="select-pages">
        <v-select
          v-model="perPage"
          :items="items"
          label="Select the items quantity"
          @input="changePagination"
          >
        </v-select>
      </div>
    </section>
    <section class="settings">
      <div class="settings__select">
        <v-select
          v-model="selectedSort"
          :items="itemsSort"
          label="Sort by alphabet"
          @change="sortAlphabet"
          >
        </v-select>
      </div>
      <div class="settings__select">
        <v-select
          v-model="selectedStatus"
          :items="itemsActivity"
          label="Sort by activity"
          @change="sortStatus"
          >
        </v-select>
      </div>
    </section>
    <section class="table">
      <div v-for="(user, index) in usersPage" :key="user.email">
        <div class="user__row">
          <div class="user__cell">{{ user.name }}</div>
          <div class="user__cell">{{ user.email }}</div>
          <div class="user__cell">{{ user.status }}</div>
          <div class="user__buttons">
            <app-dialog-edit-users :user="user">
            </app-dialog-edit-users>
            <v-icon class="delete-icon" @click="deleteUser(index)" color="green">fas fa-trash-alt</v-icon>
          </div>
          </div>
        </div>
      </div>
    </section>
    <v-pagination
      class="pagination"
      v-model="page"
      :length="totalPages"
      circle
      :total-visible="5"
      @input="changePagination"
      >
    </v-pagination>
  </section>
</template>

<script>
import DialogUsers from '../components/dialogs/DialogUsers.vue'
import DialogUsersEdit from '../components/dialogs/DialogUsersEdit.vue'
export default {
  components: {
    "app-dialog-users": DialogUsers,
    "app-dialog-edit-users": DialogUsersEdit
  },
  data() {
    return {
      users: [],
      usersPage: [],
      perPage: 5,
      items: [5, 7, 20],
      itemsActivity: ['Active first', 'inActive first'],
      itemsSort: ['A-Z', 'Z-A'],
      page: 1,
      firstItemOnPage: 0,
      lastItemOnPage: 4,
      totalPages: 1,
      usersStorage: [],
      stateUsers: [],
      filterText: '',
      selectedStatus: '',
      selectedSort: ''
    }
  },
  computed: {
    changeAlphabet() {
      if (this.selectedSort === 'A-Z') {
        return this.usersStorage.sort(function (d1, d2) {
          return (d1.name.toLowerCase() > d2.name.toLowerCase()) ? 1 : -1
        })
      } else if (this.selectedSort === 'Z-A') {
        return this.usersStorage.sort(function (d1, d2) {
          return (d1.name.toLowerCase() < d2.name.toLowerCase()) ? 1 : -1
        })
      } else {
        return
      }
    },
    changeStatus(){
      if (this.selectedStatus === 'Active first') {
        return this.usersStorage.sort(function (d1, d2) {
          return (d1.status.toLowerCase() > d2.status.toLowerCase()) ? 1 : -1
        })
      } else if (this.selectedStatus === 'inActive first') {
        return this.usersStorage.sort(function (d1, d2) {
          return (d1.status.toLowerCase() < d2.status.toLowerCase()) ? 1 : -1
        })
      } else {
        return
      }
    },
    getUsers() {
      return this.$store.getters.getUsers
    },
    searchUsers() {
      let text = this.filterText
      return this.usersStorage.filter(function (elem) {
          if(text==='') return true
          else return elem.name.toLowerCase().indexOf(text.toLowerCase()) > -1
      })
      this.changePagination()
    }
  },
  methods: {
    sortAlphabet() {
      this.usersPage = this.changeAlphabet
      this.changePagination()
    },
    sortStatus() {
      this.usersPage = this.changeStatus
      this.changePagination()
    },
    searchResults(){
      this.usersPage = this.searchUsers
    },
    // Universal pagination for any quantity of items and any number of pages
    countPages() {
      this.totalPages = Math.ceil(this.usersStorage.length / this.perPage)
      this.page > this.totalPages ? this.page = this.totalPages : this.page
    },
    pageItems() {
      if(this.page === 1) {
        this.firstItemOnPage = 0
      } else {
        this.firstItemOnPage = (this.page - 1) * this.perPage
      };
      if(this.page == this.totalPages) {
        this.lastItemOnPage = this.usersStorage.length - 1
      } else {
        this.lastItemOnPage = this.firstItemOnPage + this.perPage - 1
      }
    },
    listPerPage() {
      this.usersPage = []
      for (let i=this.firstItemOnPage; i <= this.lastItemOnPage; i++) {
        this.usersPage.push(this.usersStorage[i])
      }
    },
    async changePagination() {
      try {
        await this.countPages()
        await this.pageItems()
        await this.listPerPage()
      } catch(e) {
        console.log(e)
      }
    },
    deleteUser(index) {
      this.usersStorage.splice(index, 1)
      localStorage.setItem('storage_update', JSON.stringify(this.usersStorage))
      this.changePagination()
    }
  },
  created () {
    this.$store.dispatch('initData')
    this.usersStorage = this.getUsers
  },
  mounted () {
    this.changePagination()
  }
};
</script>
