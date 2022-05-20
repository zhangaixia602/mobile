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
		<h3 class="titbg">可视化制作流程</h3>	
		<a-tabs tabPosition="top" v-model:activeKey="activeKey" centered >
        <a-tab-pane v-for="(tab, index) in tabs" :key="index">
          <template #tab>
            <div class="tItem">
              {{ tab.title }}
              <i class="icon iconfont" :class="tab.icon"></i>
            </div>
          </template>
          <div class="tabItem">
            <img :src="require('../' + tab.src)" />
            <p>{{ tab.content }}</p>
          </div>
        </a-tab-pane>
      </a-tabs>
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
				tabs: [
        {
          title: "数据模型采集",
        //   icon: "icon-gengduo",
          src: "assets/cj.png",
          content:
            "现如今园区、景区、工厂涉及的信息要素很多，对数据模型采集我们根据不同方式方法对模型进行真实性数据采集，达到可支持1:1还原建筑设备的制作基础。真实照片采集+CAD图纸，SCARDA采集数据。",
        },
        {
          title: "模型制作",
        //   icon: "icon-gengduo",
          src: "assets/model.png",
          content:
            "我们通过三维建模工具，例如：3DMAX、Blender等，对模型的点、线、面、 贴图位置进行构建。模型构建基础形状设备设施,模型细节精度提升建设,模型贴图纹理还原真实,模型材质粗糙反射还原真实,模型效果渲染调试。",
        },
        {
          title: "三维可视化功能",
        //   icon: "icon-gengduo",
          src: "assets/3D.png",
          content:
            "基于WebGL标准自主封装框架KT 3D-SDK进行系统三维可视化功能编程，实现所看即所得。实现与真实设备的交互反控,实现与真实场景无缝衔接切换,实现数据高速统计分析。",
        },
        {
          title: "大数据集成",
        //   icon: "icon-jiantou_xiangxia",
          src: "assets/dsj.png",
          content:
            "采用新一代HTML5+WebGL构架和Canvas布局的B/S 架构，电脑不 用安装任何插件软件即可运行。大数据图表可视化,图形分析化能力,交互式观察数据改变,一键集成方便部署。",
        },
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
.tItem{
	font-size: 12px;
}
.tabItem {
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-around; */
  height: 16rem;
  background-color: #f5f7fa;
  border-radius: 10px;
}
.tabItem img{
    width: 90%;
    height: 10rem;
    padding-left: 20;
    padding: 0.3rem 0;
}
.tabItem p{   
    padding: 0rem 1rem;
    font-size: 12px;
    color: #2d2e33;
    text-indent: 2em;
    line-height: 1.5rem;
}


</style>
