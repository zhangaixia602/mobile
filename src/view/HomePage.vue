<template>
	<HeaderPage />
	<MiddlePage />
	<CasePage />
	<AboutUs />
	<PartnersPage />
	<FooterPage />
</template>
<script>
	import HeaderPage from '@/components/HeaderPage';
	import MiddlePage from '@/components/MiddlePage';
	import FooterPage from '@/components/FooterPage';
	import PartnersPage from '@/components/PartnersPage';
	import CasePage from '@/components/CasePage';
	import AboutUs from '@/components/AboutUs'
	export default {
		name: 'HomePage',
		components: {
			HeaderPage,
			MiddlePage,
			FooterPage,
			PartnersPage,
			CasePage,
			MiddlePage,
			AboutUs
		}
	}
</script>
