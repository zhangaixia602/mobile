<template>
	<HeaderPage />
	<CasePage />
	<PartnersPage />
	<FooterPage />
</template>
<script>
	import HeaderPage from '@/components/HeaderPage';
	import FooterPage from '@/components/FooterPage';
	import PartnersPage from '@/components/PartnersPage';
	import CasePage from '@/components/CasePage';
	export default {
		name: 'HomePage',
		components: {
			HeaderPage,
			FooterPage,
			PartnersPage,
			CasePage
		}
	}
</script>
