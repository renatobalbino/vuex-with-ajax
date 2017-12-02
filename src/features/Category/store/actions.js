import axios from 'axios'

const setList = async ({ commit }, object) => {
  const list = (await axios.get('https://jsonplaceholder.typicode.com/posts/')).data
  commit('SET_LIST', { list })
}

export default {
  setList
}
