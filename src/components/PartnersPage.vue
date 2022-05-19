<template>
	<section>
		<h3 class="titbg">合作伙伴<span> / partners</span></h3>
		<div class="partnerBox">
			<span v-for="(partner, index) in partners" :key="index">
				<img :src="require('../assets/partner/'+partner)" />
			</span>
		</div>
	</section>
</template>
<script>
	import {
		defineComponent
	} from "vue";
	export default defineComponent({
		name: 'PartnersPage',
		data() {
			return {
				partners: [
					"1.png",
					"2.png",
					"3.jpg",
					"4.png",
					"5.png",
					"6.png",
					"7.jpg",
					"8.png",
					"9.png",
					"10.png",
					"11.png",
					"12.png",
					"13.png",
					"14.png",
					"15.png",
					"16.png",
					"k1.png",
					"k2.png",
					"k3.png",
					"k4.png",
					"k5.png",
					"k6.png",
					"k7.png",
					"k8.png",
					"k9.png",
					"k10.png",
					"k11.png",
					"k12.png",
					"k13.png",
					"k14.png",
					"k15.png",
					"k16.png",
					"k17.png",
					"k18.png",
					"k19.png",
					"k20.png",
					"k21.png",
					"k22.png",
					"k23.png",
				],
			};
		}
	})
</script>
<style scoped>
	section{
		width:100%;
		overflow: hidden;
	}
	.partnerBox {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		padding: 1.5rem 0;
	}

	.partnerBox span {
		display: inline-block;
		width: 3.2rem;
		height: 1.8rem;
		padding: 0.2rem;
	}

	.partnerBox span img {
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
</style>
