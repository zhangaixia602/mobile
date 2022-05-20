<template>
	<div id='insertBox'>
		<header>智慧工厂</header>
		<section class='left'>
			<div class='category borderBg'>
				<PiePage :options="{
		    domSelector: 'pie1',
		    title:this.categoryTitle,
		    data:this.categoryData
		  }" />
			</div>
			<div class='bottomborderBg'>
				<BarPage :options="{
		    domSelector: 'vehicle',
		    viewData: this.vehicle,
		    smooth:true,
		    data:this.vehicleData,
		
		  }" />
			</div>
			<div class='bottomborderBg'>
				<BarPage :options="{
		    domSelector: 'dayStatis',
		    viewData: this.dayStatis,
		    smooth:true,
		    data:this.dayStatisData
		  }" />
			</div>
		</section>
		<section class='bottom'>
			<div class="borderBg">
				<h2 class='titleBg'>视频监控</h2>
				<div class="jkbox">
					<div class="imgbox"></div>
					<div class="r-gifbox">
						<img :src="require('../assets/gc.gif')" />
						<img :src="require('../assets/jq.gif')" />
					</div>
				</div>
			</div>
		</section>
		<section class='right'>
			<div class='alarmborder'>
				<div class='borderBg'>
					<PanelPage :options="{
		    title:this.panelTitle,
		    data:this.panelData
		  }" />
				</div>
			</div>
			<div class='borderBg'>
				<CarouselTable :options="{
		      title:this.carouselTitle,
		      viewData: this.columns,
		      data:this.dataSource,
		  }" />

			</div>
			<div class='borderBg'>
				<BarPage :options="{
		    domSelector: 'temDity',
		    viewData: this.temDity,
		    smooth:true,
		    data:this.temDityData,
		    config:this.echartsConfig
		  }" />
			</div>
		</section>
		<div id="WebGL-output">
		</div>
	</div>
</template>

<script>
	import * as echarts from "echarts";
	import BarPage from '@/components/BarPage';
	import PiePage from '@/components/PiePage';
	import PanelPage from '@/components/PanelPage';
	import CarouselTable from '@/components/CarouselTable';
	import * as THREE from "three";
	import {
		GLTFLoader
	} from "three/examples/jsm/loaders/GLTFLoader";
	import {
		OrbitControls
	} from "three/examples/jsm/controls/OrbitControls";
	import {
		DRACOLoader
	} from "three/examples/jsm/loaders/DRACOLoader";
	import {
		RGBELoader
	} from "three/examples/jsm/loaders/RGBELoader";
	import {
		CSS3DRenderer,
		CSS3DObject
	} from "three/examples/jsm/renderers/CSS3DRenderer"

	var scene, orbitControls, labelRenderer;
	let css3DObject;
	let sources = [{
			text: '室内温度:26℃ <br/> 报警信息: 无异常',
			x: -400,
			y: 40,
			z: -300
		},
		{
			text: '室内温度:27℃',
			des: '报警信息: 无异常',
			x: -350,
			y: 40,
			z: 100
		},
		{
			text: '室内温度:25℃',
			des: '报警信息: 无异常',
			x: 0,
			y: 50,
			z: -300
		}
	]

	export default {
		name: 'InsertPage',
		components: {
			'BarPage': BarPage,
			'PiePage': PiePage,
			'PanelPage': PanelPage,
			'CarouselTable': CarouselTable
		},
		data() {
			return {
				carouselTitle: 'SEO报警情况',
				dataSource: Array(24).fill(1).map(function(item, index) {
					return {
						key: "id" + index,
						name: '2022-4-14',
						age: 'co7' + index,
						remark: '未解决'
					}
				}),

				columns: [{
						title: '报警时间',
						width: 60,
						dataIndex: 'name',
						key: 'name'
					},
					{
						title: '变量',
						width: 40,
						dataIndex: 'age',
						key: 'age'
					},
					{
						title: '报警描述',
						width: 50,
						dataIndex: 'remark',
						key: 'remark'
					}
				],
				categoryTitle: "大型设备开机率",
				categoryData: [{
						name: "开机率",
						value: parseInt(Math.random() * 10 + 10)
					},
					{
						name: "待机率",
						value: parseInt(Math.random() * 10 + 8)
					}
				],
				temDity: {
					title: "综合能效",
					xAxis: Array(24).fill(1).map(function(item, index) {
						return index + ':00'
					}),
					legend: [{
						name: "空压机cop",
						key: "tempe"
					}, {
						name: "冰水机cop",
						key: "dity"
					}]
				},
				temDityData: [{
						key: "tempe",
						type: "line",
						data: Array(24).fill(1).map(function() {
							return parseInt(Math.random() * 20 + 20)
						})
					},
					{
						key: "dity",
						type: "line",
						data: Array(24).fill(1).map(function() {
							return parseInt(Math.random() * 30 + 30)
						})
					}
				],
				vehicle: {
					title: "开机率",
					xAxis: [],
					legend: [{
						name: "冰水机",
						key: "b"
					}, {
						name: "空压机",
						key: "k"
					}, {
						name: "锅炉房",
						key: "g"
					}]
				},
				vehicleData: [{
						key: "b",
						type: "bar",
						data: [10]
					},
					{
						key: "k",
						type: "bar",
						data: [11]
					},
					{
						key: "g",
						type: "bar",
						data: [8]
					}
				],
				dayStatis: {
					title: '工单统计',
					xAxis: Array(7).fill(1).map(function(item, index) {
						index++
						return index
					}),
					legend: [{
						name: "巡检工单",
						key: "inlet"
					}, {
						name: "维保工单",
						key: "effluent"
					}]
				},
				dayStatisData: [{
						key: "inlet",
						type: "line",
						data: Array(7).fill(1).map(function() {
							return parseInt(Math.random() * 20 + 40)
						})
					},
					{
						key: "effluent",
						type: "line",
						data: Array(7).fill(1).map(function() {
							return parseInt(Math.random() * 30 + 20)
						})
					}
				],
				panelTitle: '设备状况统计',
				panelData: [{
						icon: 'icon-zhihuiyuanqu',
						label: '健康',
						value: parseInt(Math.random() * 1000)
					},
					{
						icon: 'icon-zhihuiyuanqu',
						label: '异常',
						value: parseInt(Math.random() * 1000)
					},
					{
						icon: 'icon-zhihuiyuanqu',
						label: '维护中',
						value: parseInt(Math.random() * 1000)
					}
				]
			}
		},

		methods: {
			initThree() {
				let $insertBox = document.getElementById("insertBox");
				let width = window.innerWidth //窗口宽
				let height =window.innerHeight
				this.renderer = new THREE.WebGL1Renderer({
					antialias: true
				})
				this.renderer.setSize(width, height)
				$insertBox.appendChild(this.renderer.domElement)

				scene = new THREE.Scene()
				let cubeTextureLoader = new THREE.CubeTextureLoader();
				cubeTextureLoader.setPath('/static/models/lc/');

				let textureCube = cubeTextureLoader.load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg',
					'nz.jpg'
				]);
				textureCube.encoding = THREE.sRGBEncoding;
				scene.background = textureCube;
				this.setEnvMap("004");

				this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000)
				this.camera.position.set(0, 0, 400)
				this.camera.lookAt(scene.position)
				let light = new THREE.HemisphereLight(0xbbbbff, 0x444422, 1.5)
				light.position.set(0, 50, 0)
				scene.add(light)
				this.controls = new OrbitControls(this.camera, this.renderer.domElement);
				this.controls.maxDistance = 1700;
				this.controls.maxPolarAngle = Math.PI * 0.48;
				labelRenderer = new CSS3DRenderer();
				labelRenderer.setSize(width, height);
				labelRenderer.domElement.style.position = 'absolute';
				labelRenderer.domElement.style.top = '0px';
				$insertBox.appendChild(labelRenderer.domElement);
				this.addCSS3DLabelToScene();
				let objLoader = new GLTFLoader();
				let dracoLoader = new DRACOLoader();


				dracoLoader.setDecoderPath('/draco/');
				dracoLoader.preload();
				objLoader.setDRACOLoader(dracoLoader);
				objLoader.load('/static/models/smartfactory-processed.glb', function(glb) {
					// glb.scene.position.set(-1000, -600,-1200);
					glb.scene.scale.set(9, 8, 10);
					glb.scene.rotateY(-80); //绕y轴旋转π/4        
					scene.add(glb.scene);
					css3DObject.position.x = 180;
					css3DObject.position.y = 0;
					css3DObject.position.z = 0;
				})
				orbitControls = new OrbitControls(this.camera, labelRenderer.domElement);
				orbitControls.maxDistance = 1700;
				orbitControls.maxPolarAngle = Math.PI * 0.48;
				orbitControls.update();
				css3DObject.visible = true;
				window.addEventListener( 'resize', this.onWindowResize, false );
			},
			setEnvMap(hdr) {
				new RGBELoader().setPath("/static/gltf/").load(hdr + ".hdr", (texture) => {
					texture.mapping = THREE.EquirectangularReflectionMapping;
					scene.environment = texture;
				})
			},
			modifyDocument(id, color, value) {
				var dom = document.getElementById(id);
				dom.style.color = color;
				dom.textContent = value;
			},
			addCSS3DLabelToScene() {
				var element = document.getElementById("WebGL-output");
				//把生成的CSSDOM对象处理成three的节点对象
				css3DObject = new CSS3DObject(element);
				sources.map((item, index) => {
					let cardContainer = document.createElement('div');
					cardContainer.style =
						" background-color: MidnightBlue;background-color: rgba(0, 10, 40); border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;opacity: 0.5;font-size: 1px;color: aqua; padding: 10px 10px 10px;white-space: nowrap;"
					cardContainer.className = "style1";
					document.styleSheets[0].insertRule(
						'.style1::after { content: "";border-style: solid;border-top: 18px solid rgba(0, 10, 40);border-right: 8px solid transparent;border-bottom: 18px solid transparent;border-left: 8px solid transparent;position: absolute;top: 100%;left:50%;top:80%;}',
						0);
					cardContainer.innerHTML = item.text;
					let cardCSS3DObject = new CSS3DObject(cardContainer);
					cardCSS3DObject.position.x = item.x;
					cardCSS3DObject.position.y = item.y;
					cardCSS3DObject.position.z = item.z;
					cardCSS3DObject.visible = true;
					css3DObject.add(cardCSS3DObject);
				})

				//设置CSS3DObject对象
				css3DObject.position.x = 0;
				css3DObject.position.y = 0;
				css3DObject.position.z = 0;
				//在第二个场景中添加这个对象
				scene.add(css3DObject);
				// 默认不显示
				css3DObject.visible = false;
			},
			animate() {
				requestAnimationFrame(this.animate)
				orbitControls.update();
				labelRenderer.render(scene, this.camera);
				this.renderer.render(scene, this.camera)
			},
			onWindowResize(){
				this.camera.aspect = window.innerWidth / window.innerHeight;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize( window.innerWidth, window.innerHeight );
				labelRenderer.setSize( window.innerWidth, window.innerHeight );
			},
			echartsConfig(options) {
				options.color = ['#e7717b', '#80FFA5'];
				options.series[0].lineStyle = {
					width: 0
				};
				options.series[0].showSymbol = false;
				options.series[0].areaStyle = {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							//rgb(104, 186, 252)
							color: 'rgb(104, 186, 252)'
						},
						{
							offset: 1,
							color: 'rgb(224, 62, 76)'
						}
					])
				};
				return options;
			}
		},
		mounted() {
			this.initThree()
			this.animate()
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#insertBox {
		width: 100%;
		height: 100vh;
		position: relative;
	}

	header {
		position: absolute;
		top:0;
		left:0;
		width:100%;
		background: url(../assets/tb1.png) no-repeat center center;
		background-size: cover;
		text-align: center;
		color: white;
		font-size: 0.8rem;
		line-height: 1.5rem;
	}

	.left,
	.right {
		width: 8.5rem;
		height: calc(100% - 1.5rem);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		position: absolute !important;
		top: 1.5rem;
	}

	.left {
		margin-left: 0.2rem;
		left: 0;
	}

	.right {
		margin-right: 0.2rem;
		right: 0;
	}

	.bottom {
		position: absolute !important;
		bottom: 1px;
		left: 50%;
		transform: translateX(-50%);
	}

	.borderBg {
		width: 8.5rem;
		height: 5rem;
		background: url(../assets/border.png) no-repeat center center;
		overflow: hidden;
		background-size: 8.5rem 5rem;
	}

	.bottomborderBg {
		width: 8.5rem;
		height: 5rem;
		margin-top: 0.5rem;
		background: url(../assets/border.png) no-repeat center center;
		background-size: 8.5rem 5rem;
		overflow: hidden;
	}

	.bottom .borderBg {
		width: 14rem;
		height: 6rem;
		background-size: 14rem 6rem;
	}

	.jkbox {
		display: flex;
		justify-content: center;

	}

	.imgbox {
		width: 7rem;
		height: 4rem;
		background: url(../assets/jk.png) no-repeat center center;
		overflow: hidden;

	}


	.r-gifbox {
		display: flex;
		flex-direction: column;
		height: 5rem;
		padding: 0.5rem;
	}

	.r-gifbox img {
		background-size: 300px 300px;
		overflow: hidden;
		width: 4rem;
		height: 3rem;
	}

	/* .alarmborder .borderBg {
		width: 15rem;
		height: 5rem;
		background-size: 15rem 5rem;
	} */

	#category,
	#temDity,
	#pie1,
	#vehicle,
	#dayStatis {
		width: 8.5rem;
		height: 5rem;
	}
</style>
