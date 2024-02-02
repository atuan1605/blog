<template>
    <p class="tw-text-bold mb-4 tw-uppercase tw-text-gray-900">
        {{ props.title }}
    </p>
</template>

<script setup lang="ts">

interface Props {
    title: string
}

const props = defineProps<Props>()

</script>