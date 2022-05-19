<template>
  <HeaderPage/>
	<PartnersPage/>
	<FooterPage />
</template>
<script>
  import HeaderPage from './components/HeaderPage.vue';
	import FooterPage from '@/components/FooterPage';
	import PartnersPage from '@/components/PartnersPage';
	export default {
		name: 'App',
		components: {
    HeaderPage,
    FooterPage,
    PartnersPage,
   
}
	}
</script>
 
