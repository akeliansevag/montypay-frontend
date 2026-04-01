<template>
  <!-- Google Tag Manager (noscript) -->
  <ClientOnly>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-M75G7JM7"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe>
    </noscript>
  </ClientOnly>
  <!-- End Google Tag Manager (noscript) -->

  <div
    class="min-h-screen flex flex-col bg-white text-[#0E1B3D] overflow-hidden"
  >
    <AppHeader />

    <main
      class="relative flex-1 flex items-center justify-center px-4 py-16 lg:px-8"
    >
      <!-- Background glow -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute top-[-120px] left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-[#2A4187]/10 blur-3xl"
        ></div>
        <div
          class="absolute bottom-[-100px] right-[-50px] h-[260px] w-[260px] rounded-full bg-[#00AEEF]/10 blur-3xl"
        ></div>
        <div
          class="absolute top-1/2 left-[-80px] h-[220px] w-[220px] rounded-full bg-[#6C63FF]/10 blur-3xl"
        ></div>
      </div>

      <div class="relative z-10 w-full max-w-3xl text-center">
        <!-- Badge -->
        <div
          class="mb-6 inline-flex items-center rounded-full bg-[#EEF4FF] px-4 py-2 text-sm font-semibold text-[#2A4187]"
        >
          Error {{ statusCode }}
        </div>

        <!-- Title -->
        <h1 class="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>

        <!-- Description -->
        <p class="mt-6 text-base leading-7 text-[#4B587C] sm:text-lg">
          {{ description }}
        </p>

        <!-- Buttons -->
        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            class="inline-flex items-center justify-center rounded-full bg-[#2A4187] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            @click="goHome"
          >
            Go to Homepage
          </button>
        </div>

        <!-- Details -->
        <div
          class="mt-10 rounded-2xl border border-[#E6ECF5] bg-[#F8FAFD] p-5 text-sm text-[#5C6785] text-left"
        >
          <span class="font-semibold text-[#0E1B3D]">Details:</span>
          <br />
          {{ error?.message || "An unexpected error occurred." }}
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
});

const statusCode = computed(() => props.error?.statusCode || 500);

const title = computed(() => {
  if (statusCode.value === 404) return "Page not found";
  if (statusCode.value === 403) return "Access denied";
  if (statusCode.value === 500) return "Something went wrong";
  return "Unexpected error";
});

const description = computed(() => {
  if (statusCode.value === 404) {
    return "The page you’re looking for doesn’t exist or may have been moved.";
  }
  if (statusCode.value === 403) {
    return "You don’t have permission to access this page.";
  }
  if (statusCode.value === 500) {
    return "We encountered an issue on our side. Please try again shortly.";
  }
  return "An unexpected issue occurred. Please try again.";
});

const goHome = () => clearError({ redirect: "/" });
const handleError = () => clearError({ redirect: useRoute().fullPath });

useSeoMeta({
  title: "404",
  ogTitle: "404",
  description:
    "MontyPay provides secure, scalable solutions for online payments, in-store payments, and multi-channel commerce with global coverage.",
  ogDescription:
    "MontyPay provides secure, scalable solutions for online payments, in-store payments, and multi-channel commerce with global coverage.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
