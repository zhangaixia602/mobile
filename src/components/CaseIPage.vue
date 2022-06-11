<template>
	<section>
		<h3 class="titbg">案例<span> / cases</span></h3>
		<div class='nav'>
			<div class='navItem' v-for='(nav,index) in navs' :key='index' @click="showNav(nav,index)"
				:class="{active: this.currentIndex===index}">
				<i class="icon iconfont" :class="nav.icon"></i>
				<p>{{nav.title}}</p>
			</div>
		</div>
		<div class='product'>
			<div class='wrapper'>
				<a v-for='(product,index) in products' :key='index' @click="showPage(product)" class='productItem'
					:class="{isShow: this.currentgroup===product.group || this.currentgroup===''}">
					<img :src="require('../' + product.src)" />
					<h3>{{product.title}}</h3>
				</a>
			</div>
		</div>
	</section>
	<a-modal wrapClassName='propup' :footer="null" v-model:visible="visible" title="视频展示" @ok="handleOk">
		<video id="video" muted autoplay="true" preload loop webkit-playsinline="true" controls x5-video-player-type="h5" playsinline="true" x-webkit-airplay="true" >
			<source :src="require('../assets/'+videoSrc)" type="video/mp4" />当前浏览器不能支持视频播放，请采用chrome或IE9以上浏览器
		</video>
	</a-modal>
</template>

<script>	
	import {
		defineComponent
	} from "vue";  
	export default defineComponent({
		name: 'CaseIPage',       
		data() {
			return {				
				currentIndex: 0,
				currentgroup: '',
				videoSrc:'',
				visible:false,
				navs: [{
						title: '全部',
						icon: 'icon-zhihuiyuanqu',
						group: ''
					},
					{
						title: '园区',
						icon: 'icon-zhihuiyuanqu',
						group: 'park'
					},
					{
						title: '水利',
						icon: 'icon-shuiliqiye',
						group: 'draulic'
					},
					{
						title: '能源',
						icon: 'icon-zhihuiyuanqu',
						group: 'energy'
					}
				],
				products: [{
						group: 'park',
						title: '智慧工厂',
						src: 'assets/yq2.png',
						id: '01',
						video: 'minwater.mp4'
					},
					{
						group: 'energy',
						title: '智慧能源',
						src: 'assets/ny.png',
						id: '02',
						video: 'minwater.mp4'
					},
					{
						group: 'park',
						title: '智慧粮仓',
						src: 'assets/lc.png',
						id: '03',
						video: 'minwater.mp4'
					},
					{
						group: 'draulic',
						title: '智慧水利',
						src: 'assets/water.png',
						id: '05',
						path: '/model/water'
					},
					{
						group: 'park',
						title: '智慧厂区',
						src: 'assets/cyq.png',
						id: '05',
						video: 'minwater.mp4'
					}

				]
			}
		},		
		methods: {			
			handleOk(){
				this.visible=false;
			},
			showNav(nav, index) {
				this.currentgroup = nav.group
				this.currentIndex = index
			},
			showPage(product) {
				 
				if(product.path){
					this.$router.push(product.path)
				}
				if(product.video){
					this.videoSrc=product.video;
					this.visible=true;
				}
				
			},	
			
		}
	})
</script>
<style scoped>
	.nav {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 1.5rem 1rem;
	}

	.navItem {
		display: inline-block;
		font-size: 0.7rem;
		color: #484848;
		border: 0.1rem solid #484848;
		width: 3rem;
		height: 3rem;
		border-radius: 0.5rem;
		text-align: center;
	}

	.navItem .icon {
		font-size: 1.1rem;
		font-weight: bold;
	}

	.navItem.active {
		color: #006ebf;
		border-color: #006ebf;
	}

	.product {
		padding: 1rem;
		background: white;
	}

	.product .wrapper {
		display: flex;
		flex-direction: column;
        align-items: center;
        justify-content: center;
		cursor: pointer;
	}

	.productItem {
		width: 16rem;
		display: none;
		border: 1px solid #edf1f7;
		box-shadow: 0 0.2rem 0.3rem 0 #edf1f7;
		border-radius: 0.3rem;
		margin-bottom: 1rem;
		position: relative;
	}

	.productItem.isShow {
		display: block;
	}

	.productItem img {
		width: 100%;
		height: 10rem;
		filter: blur(0);
	}

	.productItem h3 {
		font-size: 0.7rem;
		color: #0d0e0f;
		padding: 0.5rem;
		margin: 0;
	}
	video{
		width:100%;
	}
</style>
