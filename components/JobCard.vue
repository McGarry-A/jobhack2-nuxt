<template>
    <article class="JobCard-Container">
        <h3>{{ props.job.title }}</h3>
        <p>{{ props.job.company }}</p>
        <p>{{ props.job.description }}</p>
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
    margin: 1rem 0;
    border: 1px solid #f5f5f5;
    padding: .4rem .8rem;
}
</style>