<script setup>
    defineProps({
        services: Array
    })

    import ServiceComponent from './ServiceComponent.vue';
</script>

<template>
    <div v-for="service of services" :key="service.name" class="service__item-wrapper">
        <ServiceComponent :tabindex="service.index" :name="service.name" :description="service.description" :image-path="service.imagePath" />
    </div>
</template>