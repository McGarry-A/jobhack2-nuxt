<template>
  <navbar-menu></navbar-menu>
  <content-wrapper>
    <form @submit.prevent="handleSearch">
      <input type="text" placeholder="Search for a role here" v-model="searchQuery" />
      <button type="submit">Submit</button>
    </form>
  </content-wrapper>
</template>

<script setup>
import axios from 'axios'

const searchQuery = ref('')
const page = ref(1)
const location = ref('Manchester')
const sort = ref(null)

const handleSearch = async () => {
  const options = {
    method: "GET",
    url: "https://jobhack2.herokuapp.com/api/reed",
    params: { title: searchQuery, page, location, sort },
    headers: {
      "ContentType": "application/json"
    }
  }

  const response = await axios.request(options)
  console.log(response.data)
}


</script>

<style lang="scss"></style>