<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

const { seo } = useAppConfig();

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);

const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false,
});

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
  },
});

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image',
});

provide('navigation', navigation);
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <Header />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        hide-color-mode
      />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
