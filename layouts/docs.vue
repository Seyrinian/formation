<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types';

const navigation = inject<Ref<NavItem[]>>('navigation');
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <template #top>
            <UContentSearchButton class="rounded-md" size="sm" />
          </template>
          <UNavigationTree
            :links="mapContentNavigation(navigation)"
            :multiple="false"
            default-open
          />
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
