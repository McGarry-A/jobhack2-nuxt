<template>
  <navbar-menu></navbar-menu>
  <content-wrapper>
    <form @submit.prevent="handleSearch">
      <input type="text" placeholder="Search for a role here" v-model="searchQuery" />
      <button type="submit">Submit</button>
    </form>
    <main>
      <div v-if="loading">
        <p>Loading..</p>
      </div>
      <job-card v-for="job in jobs" :job="job" />
    </main>
  </content-wrapper>
</template>

<script setup>
// PAGE DATA
const jobs = ref(null)
const loading = ref(true)

// QUERY DATA
const searchQuery = ref('')
const page = ref(1)
const location = ref('Manchester')
const sort = ref(null)

// FUNCTIONS
const handleNextPage = () => page.value += 1
const handlePrevPage = () => page.value -= 1

const handleSearch = async () => {
  const options = {
    method: "GET",
    url: "https://jobhack2.herokuapp.com/api/reed",
    params: { title: searchQuery, page, location, sort },
    headers: {
      "ContentType": "application/json"
    }
  }

  const { data, pending } = await useFetch('https://jobhack2.herokuapp.com/api/reed', options)

  jobs.value = data.value.jobs
  loading.value = pending.value
}
</script>
<style lang="scss"></style>
