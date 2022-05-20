<template>
	<section>
		<h3 class="titbg">多场景<span> / Multi-Scenarios</span></h3>
		<div class='nav'>
		<a-carousel autoplay>
		<div v-for="(banner, index) in banners" :key="index">
			<h2 class="ztbg">
				{{ banner.title }}
			</h2>
			<p style="line-height:25px;font-size: 12px;">{{ banner.text }}</p>
		</div>
	    </a-carousel>
		</div>		
	</section>
</template>
<script>
	import {
		defineComponent
	} from "vue";
	export default defineComponent({
		name: 'MiddlePage',
		data() {
            return {
               		
				banners: [{						
						title: "智慧能源解决方案",
						text: "智慧能源管理系统基于云计算、移动互联网、大数据等先进技术，通过采集各类能耗监测点的用能数据,经过专业的数据分析处理形成对能耗的分类、分项、分时、分区域的统计分析,并通过三维可视化技术,让企业实现对能源使用的全面数字化和可视化,直观发现用能改进优化点,进而帮助企业优化能源使用,降低企业综合能耗,达到节能增效的目的。",
					},
					{						
						title: "智慧工厂解决方案",
						text: "通过大量物联网设备数据采集、清洗、加工、存储等基本数据治理后,基于业务规则、数据标准将非同源的数据横向拉通构建完整统一的园区管理数字挛生系统。为园区各类应用提供数据支持和业务创新，减少各业务部门信息资源协调难度，让管理者所见即所得辅助管理者对园区的管理和运营。",
					},
					{						
						title: "智慧水利解决方案",
						text: "通过大量物联网设备数据采集、清洗、加工、存储等基本数据治理后,基于业务规则、数据标准将非同源的数据横向拉通构建完整统一智慧水利方案，利用了IPV6、云计算、大数据等互联网数据，",
					},
					{						
						title: "智慧粮仓解决方案",
						text: "通过大量物联网设备数据采集、清洗、加工、存储等基本数据治理后,基于业务规则、数据标准将非同源的数据横向拉通构建完整统一智慧粮仓系统利用三维视图结合虚拟现实技术，将包括站坪、建筑物、粮仓。",
					}
				],
			}
			
		},
		
	})
</script>
<style scoped>
.nav {
	  padding: 0.5rem;
      margin: 0 4px 0 4px;
      background-color:#f5f7fa;
      border-radius: 10px;
	}


</style>
