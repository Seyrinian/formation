<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryContent('/').findOne()
);

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<template>
  <ULandingHero v-if="page.landing" v-bind="page.landing">
    <template #headline>
      <UBadge
        v-if="page.landing.headline"
        variant="subtle"
        size="lg"
        class="relative rounded-full font-semibold"
      >
        {{ page.landing.headline.label }}

        <UIcon
          v-if="page.landing.headline.icon"
          :name="page.landing.headline.icon"
          class="ml-1 w-4 h-4 pointer-events-none"
        />
      </UBadge>
    </template>

    <template #title>
      <MDC :value="page.landing.title" />
    </template>

    <ULandingGrid>
      <ULandingCard
        v-for="(module, index) of page.modules"
        :key="index"
        v-bind="module"
        class="col-span-6 row-span-2"
      />
    </ULandingGrid>
  </ULandingHero>
</template>
