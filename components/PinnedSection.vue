<template>
  <section 
    ref="stackSection"
    class="stack-section lg:h-screen max-lg:py-16 lg:py-24 bg-white"
  >
    <div class="container">
      <h2 class="text-2xl text-center">
        Payment Orchestration as It Should Be
      </h2>

      <div 
        ref="stackContainer"
        class="stack-container mt-10 max-lg:flex max-lg:flex-col max-lg:gap-7"
      >
        <div
          v-for="(item, inx) in items"
          :key="inx"
          class="stack-item bg-[#E9EEF5] p-5 rounded-lg flex max-lg:flex-col gap-7 items-center justify-between lg:h-[40vh]"
        >
          <div class="bg-[#ffffff]/40 p-3 rounded-lg w-full h-full">
            <img 
              class="w-full h-full object-contain" 
              :src="item.image" 
              :alt="item.title" 
            />
          </div>
          <div class="w-full">
            <h4 class="text-xl font-bold">{{ item.title }}</h4>
            <p class="mt-2">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stackSection   = ref(null)
const stackContainer = ref(null)

const items = [
    {
        image: '/everything-in-one-place.webp',
        title: 'Everything in One Place',
        description: 'No more hopping around! Manage all payments across gateways, currencies, and methods on a single platform.'
    },
    {
        image: '/smarter-transactions.webp',
        title: 'Smarter Transactions',
        description: 'Our intelligent routing sends payments through the best-performing gateways,reducing failures and keeping customers happy.'
    },
    {
        image: '/unified-solution.webp',
        title: 'Unified Solution',
        description: 'A single integration connects your business to our extensive network of payment methods. Simplify your operations, minimize technical challenges, and focus on your growth.'
    },
    {
        image: '/security-you-can-count-on.webp',
        title: 'Security You Can Count On',
        description: 'Advanced fraud detection tools safeguard every transaction, so you can focus on growing your business without worrying about risks.'
    },
    {
        image: '/real-time-insights.webp',
        title: 'Real Time Insights',
        description: 'Get clear, actionable data on your transactions and performance from analytics and advanced reporting tools to make smarter decisions and drive growth.'
    },
    {
        image: '/central-point-of-contact.webp',
        title: 'Central Point of Contact',
        description: 'With MontyPay as your single point of contact, you can leave behind the hassle of managing multiple payment providers. Enjoy a streamlined interface to oversee all your payment operations effortlessly.'
    }
]

onMounted(() => {
  const cards    = stackContainer.value.querySelectorAll('.stack-item')
  const margin   = 30    // px between stacked cards
  const duration = 1     // each animation lasts 1s

  ScrollTrigger.matchMedia({
    // DESKTOP: enable pin + stack animation
    "(min-width: 1024px)": () => {
      // absolutely stack & offset
      cards.forEach((card, i) => {
        gsap.set(card, {
          position: 'absolute',
          top:      i * margin,
          left:     0,
          width:    '100%'
        })
      })

      // grow container to allow full scroll
      stackContainer.value.style.height =
        `${window.innerHeight + margin * (cards.length - 1)}px`

      // timeline with smooth scrub and sequential entries
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackSection.value,
          start:   'top top',
          end:     () => `+=${window.innerHeight * cards.length}`,
          scrub:   1,
          pin:     true
        }
      })

      cards.forEach((card, i) => {
        tl.from(card, {
          yPercent: 100,
          ease:     'linear',
          duration
        }, i * duration)
      })
    },

    // MOBILE: kill any triggers & reset
    "(max-width: 1023px)": () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      cards.forEach(card => gsap.set(card, { clearProps: 'all' }))
      stackContainer.value.style.height = 'auto'
    }
  })
})
</script>

<style scoped>
.stack-container {
  position: relative;
  overflow: hidden;
}
</style>