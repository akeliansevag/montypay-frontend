<template lang="">
	<div class="circular-progress text-center text-base lg:text-base 2xl:text-xl mx-auto">
		<div class="circular-progress-circle lg:w-[40vw] lg:h-[40vw]">
			<!-- 51.42deg -->
			<div class="white-circle"></div>
			<div class="segment"></div>

		</div>
		<div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center rounded-full lg:w-[170px] lg:h-[170px] xl:w-[250px] xl:h-[250px] bg-[#F4F4F4]">
			<img src="/images/logo-small.svg" alt="Logo" width="150" />
		</div>

		<div class="segment-item absolute top-[17%] left-[18%] z-10 flex flex-col items-center justify-center gap-4" count="4">
			<img src="/images/lending-services.svg" alt="Agencies" width="35" height="35" />
			<span>Lending Services</span>
		</div>
		<div class="segment-item absolute top-[12%] left-[47%] z-10 flex flex-col items-center justify-center gap-4" count="5">
			<img src="/images/all-in-one-solution.svg" alt="Agencies" width="35" height="35" />
			<span>All in one solution</span>
		</div>
		<div class="segment-item absolute top-[30%] left-[68%] z-10 flex flex-col items-center justify-center gap-4" count="6">
			<img src="/images/higher-acceptance.svg" alt="Agencies" width="35" height="35" />
			<span>Higher acceptance</span>
		</div>
		<div class="segment-item absolute top-[56%] left-[68%] z-10 flex flex-col items-center justify-center gap-4" count="0">
			<img src="/images/global-coverage.svg" alt="Agencies" width="35" height="35" />
			<span>Global coverage</span>
		</div>
		<div class="segment-item absolute top-[75%] left-[46%] z-10 flex flex-col items-center justify-center gap-4" count="1">
			<img src="/images/risk-management.svg" alt="Agencies" width="35" height="35" />
			<span>Risk management</span>
		</div>
		<div class="segment-item absolute top-[70%] left-[20%] z-10 flex flex-col items-center justify-center gap-4" count="2">
			<img src="/images/24-7-support.svg" alt="Agencies" width="35" height="35" />
			<span>24/7 support</span>
		</div>
		<div class="segment-item absolute top-[43%] left-[6%] z-10 flex flex-col items-center justify-center gap-4" count="3">
			<img src="/images/loyalty-program-1.svg" alt="Agencies" width="35" height="35" />
			<span>Loyalty program</span>
		</div>
	</div>
</template>

<script setup>
	onMounted(() => {
		document.querySelectorAll('.segment-item').forEach(item => {
			item.addEventListener('mouseover', () => {
				let count = item.getAttribute('count')
				console.log(count)
				document.querySelector('.segment').style.transform = 'rotate(' + count * 51.42 + 'deg) skew(38deg)'
			});
		});
	})
</script>

<style lang="sass">
	.circular-progress 
		position: relative
		display: inline-block
		box-shadow: 0px 4px 24px 0px #0000001A
		border-radius: 99999px
		padding: 20px

	.circular-progress-circle 
		border: 1px solid #ECECEC
		position: relative
		border-radius: 50%
		overflow: hidden
		display: flex
		align-items: center
		justify-content: center

	.white-circle
		background-color: white
		// width: 99.5%
		// height: 99.5%
		border-radius: 50%
		z-index: 1
		border: 1px solid #ECECEC

	.segment 
		position: absolute
		top: 50%
		left: 50%
		width: 100vw
		height: 100vw
		background-color: #00DFDF
		transform-origin: 0 0
		transition: transform 0.4s linear
		transform: rotate(0deg) skew(38deg)
</style>