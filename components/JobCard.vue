<template>
    <article class="JobCard-Container">
        <p>{{ props.job.title }}</p>
        <p>{{ props.job.description }}</p>
        <p>{{ props.job.company }}</p>
    </article>
</template>

<script setup>
const props = defineProps({
    job: {
        title: String,
        description: String,
        company: String,
    }
})
</script>

<style lang="scss">
.JobCard-Container {
    border: 1px solid #f5f5f5;
    padding: .4rem auto;
}
</style>