<template>
	<HeaderPage />
	<CasePage />
	<PartnersPage />
	<FooterPage />
</template>
<script>
	import HeaderPage from './components/HeaderPage.vue';
	import FooterPage from '@/components/FooterPage';
	import PartnersPage from '@/components/PartnersPage';
	import CasePage from '@/components/CasePage';
	export default {
		name: 'App',
		components: {
			HeaderPage,
			FooterPage,
			PartnersPage,
			CasePage
		}
	}
</script>
