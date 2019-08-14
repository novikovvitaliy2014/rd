import coursesData from "./../../data/coursesData.js"

const state = {
  courses: []
};
const mutations = {
  setDataCourses(state) {
    const storageCourses = JSON.parse(localStorage.getItem('storage_courses'))
    if(storageCourses){
      state.courses = storageCourses
    } else {
      state.courses = coursesData
    }
  },
  updateCourse(state, payload) {
    const course = state.courses.find(course => {
      return course.code === payload.code
     })
    if(payload.name) {
      course.name = payload.name
    }
    if(payload.email) {
      course.code = payload.code
    }
    localStorage.setItem('storage_courses', JSON.stringify(state.courses))
  },
  addCoursesData(state, payload) {
    state.courses.splice(0, 0, payload)
    localStorage.setItem('storage_courses', JSON.stringify(state.courses))
  }
};
const actions = {
  initDataCourses ({commit}) {
    commit('setDataCourses', coursesData)
  },
  updateCoursesData({commit}, payload ) {
    commit('updateCourse', payload)
  },
  addCoursesData({commit}, payload ) {
    commit('addCoursesData', payload)
  }
};
const getters = {
  getCourses (state) {
    return state.courses
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};

