<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')

const { header } = useAppConfig()
</script>

<template>
  <UHeader :links="header.links">
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        Formation <UBadge label="Valentin FOURNY" variant="subtle" class="mb-0.5" />
      </template>
    </template>

    <template #right>
      <UContentSearchButton v-if="header?.search" :label="null" class="lg:hidden" />

      <template v-if="header?.externalLinks">
        <UButton
          v-for="(externalLink, index) of header.externalLinks"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...externalLink }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
