<template>
  <section class="courses">
    <h1>courses</h1>
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
        >
      </v-text-field>
    </div>
    <section class="settings">
      <app-dialog-courses @upgradeCourses="changePagination">
      </app-dialog-courses>
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
          :items="itemsCode"
          label="Sort by Code"
          @change="sortCode"
          >
        </v-select>
      </div>
    </section>
    <section class="table">
      <div v-for="(course, index) in coursesPage" :key="course.code">
        <div class="course__row">
          <div class="course__cell">{{ course.name }}</div>
          <div class="course__cell">{{ course.code }}</div>
          <div class="course__buttons">
            <app-dialog-edit-courses :course="course">
            </app-dialog-edit-courses>
            <v-icon class="delete-icon" @click="deleteCourse(index)" color="green">fas fa-trash-alt</v-icon>
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
import DialogCourses from '../components/dialogs/DialogCourses.vue'
import DialogCoursesEdit from '../components/dialogs/DialogCoursesEdit.vue'
export default {
  components: {
    "app-dialog-courses": DialogCourses,
    "app-dialog-edit-courses": DialogCoursesEdit
  },
  data() {
    return {
      courses: [],
      coursesPage: [],
      perPage: 5,
      items: [5, 7, 20],
      itemsSort: ['A-Z', 'Z-A'],
      itemsCode: ['increase', 'decrease'],
      page: 1,
      firstItemOnPage: 0,
      lastItemOnPage: 4,
      totalPages: 1,
      coursesStorage: [],
      stateUsers: [],
      filterText: '',
      selectedStatus: '',
      selectedSort: ''
    }
  },
  computed: {
    changeAlphabet() {
      if (this.selectedSort === 'A-Z') {
        return this.coursesStorage.sort(function (d1, d2) {
          return (d1.name.toLowerCase() > d2.name.toLowerCase()) ? 1 : -1
        })
      } else if (this.selectedSort === 'Z-A') {
        return this.coursesStorage.sort(function (d1, d2) {
          return (d1.name.toLowerCase() < d2.name.toLowerCase()) ? 1 : -1
        })
      } else {
        return
      }
    },
    changeCode(){
      if (this.selectedStatus === 'increase') {
        return this.coursesStorage.sort(function (d1, d2) {
          return (d1.code > d2.code) ? 1 : -1
        })
      } else if (this.selectedStatus === 'decrease') {
        return this.coursesStorage.sort(function (d1, d2) {
          return (d1.code< d2.code) ? 1 : -1
        })
      } else {
        return
      }
    },
    getCourses() {
      return this.$store.getters.getCourses
    },
    searchUsers() {
      var text = this.filterText
      return this.coursesStorage.filter(function (elem) {
          if(text==='') return true
          else return elem.name.toLowerCase().indexOf(text.toLowerCase()) > -1
      })
      this.changePagination()
    }
  },
  methods: {
    sortAlphabet() {
      this.coursesPage = this.changeAlphabet
      this.changePagination()
    },
    sortCode() {
      this.coursesPage = this.changeCode
      this.changePagination()
    },
    searchResults(){
      this.coursesPage = this.searchUsers
    },
    // Universal pagination for any quantity of items and any number of pages
    countPages() {
      this.totalPages = Math.ceil(this.coursesStorage.length / this.perPage)
      this.page > this.totalPages ? this.page = this.totalPages : this.page
    },
    pageItems() {
      if(this.page === 1) {
        this.firstItemOnPage = 0
      } else {
        this.firstItemOnPage = (this.page - 1) * this.perPage
      };
      if(this.page == this.totalPages) {
        this.lastItemOnPage = this.coursesStorage.length - 1
      } else {
        this.lastItemOnPage = this.firstItemOnPage + this.perPage - 1
      }
    },
    listPerPage() {
      this.coursesPage = []
      for (let i=this.firstItemOnPage; i <= this.lastItemOnPage; i++) {
        this.coursesPage.push(this.coursesStorage[i])
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
    deleteCourse(index) {
      this.coursesStorage.splice(index, 1)
      localStorage.setItem('storage_courses', JSON.stringify(this.coursesStorage))
      this.changePagination()
    }
  },
  created () {
    this.$store.dispatch('initDataCourses')
    this.coursesStorage = this.getCourses
  },
  mounted () {
    this.changePagination()
  }
};
</script>
