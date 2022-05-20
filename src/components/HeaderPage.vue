<template>
	<header>
		<img src="../assets/logo.png">
	</header>
	<a-carousel autoplay>
		<div v-for="(banner, index) in banners" :key="index">
			<img :src="require('../' + banner)" />
		</div>
	</a-carousel>
	<div class="wrapper">
		<h3 class="titbg">主要领域<span> / main areas</span></h3>
		<div v-for="(menu, index) in menus" :key="index" class="caseItem clear">
			<img :src="require('../' + menu.src)" />
			<h2>
				{{ menu.title }}
			</h2>
			<p>{{ menu.text }}</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HeaderPage',
		data() {
			return {
				banners: [
					"assets/banner1.png",
					"assets/banner2.png",
					"assets/banner3.png",
				],
				menus: [{
						src: "assets/yq1.png",
						title: "智慧能源",
						text: "运用大数据、物联网、信息管理等技术，打造智慧互联的园区.",
					},
					{
						src: "assets/yq1.png",
						title: "智慧工厂",
						text: "实现在同一平台管理及掌握工厂全面状况，形象的在现厂区内的多样化资产",
					},
					{
						src: "assets/yq1.png",
						title: "智慧水利",
						text: "利用了IPV6、云计算、大数据等互联网数据，",
					},
					{
						src: "assets/yq1.png",
						title: "智慧粮仓",
						text: "系统利用三维视图结合虚拟现实技术，将包括站坪、建筑物、粮仓。",
					}
				],
			}
		}
	}
</script>
<style scoped>
	header {
		display: block;
		height: 3rem;
		padding: 3px;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
	}

	header img {
		height: 80%;
		width: 80%;
		display: flex;
	}


	img {
		width: 100%;
		height: 18rem;
	}

	.caseItem {
		width: 184px;
		height: 131px;
		box-shadow: 0px 0px 10px #f0f0f0;
		display: inline-block;
		overflow: hidden;

	}

	.caseItem img {
		width: 50%;
		height: 50%;
		margin: 5px 0px 3px 0px;
	}

	.caseItem h2 {
		font-size: 18px;
		margin: -45px 0px 16px 100px;
		color: #000000;

	}

	.caseItem p {
		margin: 0 0 0 5px;
		font-size: 12px;
		color: #afabab;
		text-overflow: ellipsis;
	}
</style>
