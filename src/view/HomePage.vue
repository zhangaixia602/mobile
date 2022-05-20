<template>
	<HeaderPage />
	<MiddlePage/>
	<CasePage />
	<PartnersPage />
	<FooterPage />
</template>
<script>
	import HeaderPage from '@/components/HeaderPage';
	import MiddlePage from '@/components/MiddlePage';
	import FooterPage from '@/components/FooterPage';
	import PartnersPage from '@/components/PartnersPage';
	import CasePage from '@/components/CasePage';
    
	export default {
		name: 'HomePage',
		components: {
    HeaderPage,
	MiddlePage,
    FooterPage,
    PartnersPage,
    CasePage,
    MiddlePage
}
	}
</script>
