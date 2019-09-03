<template>
  <section class="data">
    <el-progress v-if="loading" :percentage="50" status="success"></el-progress>
    <p class="data__loading" v-if="loading">Loading...</p>
    <h1>Line-chart</h1>
    <section class="settings">
      <span>Select year</span>
      <el-select
         v-model="selectedYear"
         placeholder="Select"
         class="select"
         @change="fillData">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
        </el-option>
      </el-select>
    </section>

    <line-chart :chart-data="datacollection" :height="200" :options="{responsive: true, maintainAspectRation: true}"></line-chart>

    <h2>Repays Data</h2>
    <el-progress v-if="loading" :percentage="50" status="success"></el-progress>
    <p class="data__loading" v-if="loading">Loading...</p>
    <section class="settings">
      <span>Date Picker</span>
      <el-date-picker
        class="settings__date-picker"
        @change="updateRepays"
        v-model="range"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date">
      </el-date-picker>
      <p>Found <strong>{{ ObjectsQuantity }}</strong> objects in array </p>
    </section>

    <section class="settings">
      <span>Select the items quantity per page</span>
      <el-select
         v-model="perPage"
         placeholder="Select"
         class="select"
         @change="changePagination"
         label="Select the items quantity">
        <el-option
          v-for="item in pages"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
        </el-option>
      </el-select>
    </section>
    <section class="table">
      <div class="data__row">
        <p class="data__cell data__cell--heading">Repaydate</p>
        <p class="data__cell data__cell--heading">Attraction</p>
        <p class="data__cell data__cell--heading">Amount</p>
      </div>
      <div v-for="repay in repaysPage">
        <div class="data__row">
          <div class="data__cell">{{ repay.repaydate }}</div>
          <div class="data__cell">{{ repay.attraction }}</div>
          <div class="data__cell">{{ repay.amount }}</div>
        </div>
      </div>
    </section>
    <el-pagination
      layout="prev, pager, next"
      class="pagination"
      :current-page.sync="page"
      :page-count="totalPages"
      circle
      :total-visible="totalPages"
      @current-change="changePagination">
    </el-pagination>
  </section>
</template>

<script>
import LineChart from '@/components/charts/LineChart.js'
import axios from 'axios'
import staticData from '@/data/nbu.json'
export default {
  components: {
    LineChart
  },
  data() {
    return {
      pages: [{
        value: 5,
        label: '5'
        },
        {
        value: 10,
        label: '10'
        },
        {
        value: 30,
        label: '30'
      }],
      options: [{
        value: 2010,
        label: '2010'
        },
        {
        value: 2011,
        label: '2011'
        },
        {
        value: 2012,
        label: '2012'
        },
        {
        value: 2013,
        label: '2013'
        },
        {
        value: 2014,
        label: '2014'
        },
        {
        value: 2015,
        label: '2015'
        },
        {
        value: 2016,
        label: '2016'
        },
        {
        value: 2017,
        label: '2017'
        },
        {
        value: 2018,
        label: '2018'
        },
        {
        value: 2019,
        label: '2019'
      }],
      ObjectsQuantity: null,
      originArray: [],
      datacollection: {},
      range: [new Date(), new Date() ],
      sumArray: [],
      newDatesArray: [],
      sortArrayByYear: [],
      sortArrayByRange: [],
      repays: [],
      selectedYear: 2019,
      repaysPage: [],
      perPage: 5,
      page: 1,
      firstItemOnPage: 0,
      lastItemOnPage: 4,
      totalPages: 1,
      loading: false
    }
  },
  methods: {
    // newDatesArray was made in created hook by this method from origin JSON for correction dates forms
    transformDateInData(){
      this.newDatesArray = []
      this.originArray = staticData
      for(let item of this.originArray){
        let monthNumber = item.auctiondate.toString().slice(3, -5)
        let correctMonthNumber = Number(monthNumber) - 1
        let dayNumber = item.auctiondate.toString().slice(0, 2)
        let yearNumber = item.auctiondate.toString().slice(6, 10)
        let auctionDate = yearNumber + "." + correctMonthNumber + "." + dayNumber

        let monthRepay = item.repaydate.toString().slice(3, -5)
        let correctMonthRepay = Number(monthRepay) - 1
        let dayRepay = item.repaydate.toString().slice(0, 2)
        let yearRepay = item.repaydate.toString().slice(6, 10)
        let repayDate = yearRepay + "." + correctMonthRepay + "." + dayRepay

        item.auctiondate = new Date(auctionDate)
        item.repaydate = new Date(repayDate)
        this.newDatesArray.push(item)
      }
    },

    // Methods for making line-chart
    async fillData () {
      try {
        await this.sortByYear()
        // For the component Line-chart.js
        this.datacollection = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Attractions',
              backgroundColor: '#f87979',
              data: this.sumAttractionsForMonths()
            }
          ]
        }
        localStorage.setItem('storageYear', JSON.stringify(this.selectedYear))
      } catch(e) {
        console.log(e)
      }
    },
    sortByYear(){
      // this.sortArrayByYear = []
      this.sortArrayByYear = this.newDatesArray.filter(
        item => item.auctiondate.getFullYear() == this.selectedYear)
    },
    // Array with sum of attractions for each month from selected dates range
    sumAttractionsForMonths () {
      const monthQuantity = 12
      let sumArray = [0,0,0,0,0,0,0,0,0,0,0,0]
      for(let month = 0; month < monthQuantity; month++ ){
        for(let item of this.sortArrayByYear) {
          if(item.auctiondate.getMonth() === month){
            sumArray[month] = Number(sumArray[month]) + item.attraction
          }
        }
      }
      return sumArray
    },
    // Making Array for repays table
    async updateRepays(){
      try {
        await this.chooseDates()
        await this.sortDates()
        await this.changeDatesForm()
        await this.changePagination()

        localStorage.setItem('storageValue', JSON.stringify(this.range))
      } catch(e) {
        console.log(e)
      }
    },
    chooseDates(){
      this.sortArrayByRange = []
      // newDatesArray was made in created hook in method transformDateInData() from origin JSON
      for(let item of this.newDatesArray){
        item.repaydate = new Date(item.repaydate)
        let date = item.repaydate
        // let date = new Date(item.repaydate)
        if (date >= this.range[0] && date <= this.range[1]) {
          this.sortArrayByRange.push(item)
        }
      }
      // For selected object quantity visualization
      this.ObjectsQuantity = this.sortArrayByRange.length
    },
    sortDates(){
      this.sortArrayByRange.sort(function (d1, d2) {
        return (d1.repaydate > d2.repaydate) ? 1 : -1
      })
    },
    // For better dates visualization in table
    changeDatesForm(){
      this.repays = []
      for(let item of this.sortArrayByRange){
        let date = item.repaydate
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let dt = date.getDate()
        if (dt < 10) {
          dt = '0' + dt
        }
        if (month < 10) {
          month = '0' + month
        }
        item.repaydate = year + '-' + month + '-' + dt
        this.repays.push(item)
      }
    },

    // Universal pagination for any quantity of items and any number of pages
    countPages() {
      let page = this.page
      this.totalPages = Math.ceil(this.repays.length / this.perPage)
      page > this.totalPages ? page = this.totalPages : page
    },
    pageItems() {
      let page = this.page
      let perPage = this.perPage
      if(page === 1) {
        this.firstItemOnPage = 0
      } else {
        this.firstItemOnPage = (page - 1) * perPage
      }
      if(page == this.totalPages) {
        this.lastItemOnPage = this.repays.length - 1
      } else {
        this.lastItemOnPage = this.firstItemOnPage + perPage - 1
      }
    },
    listPerPage() {
      this.repaysPage = []
      for (let i=this.firstItemOnPage; i <= this.lastItemOnPage; i++) {
        this.repaysPage.push(this.repays[i])
      }
    },
    async changePagination() {
      try {
        await this.countPages()
        await this.pageItems()
        await this.listPerPage()

        localStorage.setItem('storagePerPage', JSON.stringify(this.perPage))
      } catch(e) {
        console.log(e)
      }
    },
    async changePagination() {
      try {
        await this.countPages()
        await this.pageItems()
        await this.listPerPage()

        localStorage.setItem('storagePerPage', JSON.stringify(this.perPage))
      } catch(e) {
        console.log(e)
      }
    },
  },
  created () {
    this.loading = true
    let storageYear = JSON.parse(localStorage.getItem('storageYear'))
    let storageValue = JSON.parse(localStorage.getItem('storageValue'))
    let storagePerPage = JSON.parse(localStorage.getItem('storagePerPage'))
    if(storageYear){
      this.selectedYear = storageYear
    }
    if(storageValue){
      this.range[0] = new Date(storageValue[0])
      this.range[1] = new Date(storageValue[1])
    } else {
      this.range[0] = new Date().setDate(1)
    }
    if(storagePerPage){
      this.perPage = storagePerPage
    }
    //FOR DATA FROM API
    // axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/ovdp?json')
    //   .then(response => {
    //     this.originArray = response.data
    //   })
    //   .then(() => {
    //     this.transformDateInData()
    //   })
    //   .then(() => {
    //     this.fillData()
    //     this.updateRepays()
    //     this.loading = false
    //   })
    //   .catch(error => console.log(error))
    this.transformDateInData()
  },
  mounted(){
    this.fillData()
    this.updateRepays()
    this.loading = false
  }
};
</script>

