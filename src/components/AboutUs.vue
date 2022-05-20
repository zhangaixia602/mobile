<template>
	<section>
		<div class="aboutUs">
			<h2 class="titbg">关于达英和</h2>
			<p>成立于1996年，集工程研究、产品和软件开发、系统集成、产品销售和技术服务于一体的高新技术企业，始终致力于用最新的工艺、最新的技术为社会和企业发展提供及时、高效的服务和保障。</p>

			<p>公司荟萃了一批年富力强的高技术人才、锤炼成有一支勇于进取的实干队伍，建立了完整的管理体系和质量保证体系，始终以诚信、热情、双赢、创新而负责任的理念服务各行业用户。</p>

			<p>公司与西北工业大学、华南理工大学、深圳职业技术学院等高校建立了紧密的技术协作关系；与SIEMENS、ROCKWELL
				AUTOMATION、ABB、HONEYWELL、EMERSON等国外著名公司达成了系统集成商、技术合作伙伴或战略合作伙伴的业务联系。</p>
		</div>
		<div class='culture'>
			<div class='cultureItem' v-for='(culture,index) in cultures' :key='index'>
				<span><i class="icon iconfont" :class="culture.icon"></i></span>
				<h3>{{culture.title}}</h3>
				<p>{{culture.content}}</p>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'AboutUs',
		data(){
			return {
				cultures:[
					{
						title:'企业愿景',
						icon: 'icon-zhihuiyuanqu',
						content:'成为国内著名、受人尊敬的智能化领域的实干型企业'
					},
					{
						title:'企业使命',
						icon: 'icon-zhihuiyuanqu',
						content:'为客户提供高效的、智能化的成套设备和解决方案'
					},
					{
						title:'企业精神',
						icon: 'icon-zhihuiyuanqu',
						content:'崇德尚礼、诚信重义、专注务实'
					},
					{
						title:'核心价值',
						icon: 'icon-zhihuiyuanqu',
						content:'坚持创新、精益求精、以人为本'
					},
					{
						title:'经营理念',
						icon: 'icon-zhihuiyuanqu',
						content:'为客户创造价值、为员工创造机会、为社会创造财富'
					},
					{
						title:'企业口号',
						icon: 'icon-zhihuiyuanqu',
						content:'创新、诚信、激情、协作'
					}
				]
			}
		}
	}
</script>

<style scoped>
	section {
		color: #484848;
		padding: 1rem;
	}

	.aboutUs {
		box-shadow: 1px -1px 1px 4px #f5f2f2;
		border-radius: 0.5rem;
		padding: 1rem;
	}

	p {
		text-indent: 1.4rem;
		font-size: 0.7rem;
		padding-top: 0.5rem;
	}
	.culture{
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.cultureItem{
		width:30%;
		font-size:0.6rem;
		text-align: center;
	}
	.cultureItem span{
		display:flex;
		align-items: center;
		justify-content: center;
		width:2.5rem;
		height:2.5rem;
		background-color: #484848;
		border-radius: 50%;
		margin: 0 auto;
	}
	.cultureItem .icon{
		color:white;
		font-size: 1.2rem;
	}
	.cultureItem h3{
		color:  #ffcd02;
		font-size: 0.8rem;
		font-weight: bold;
		padding-top:0.5rem;
	}
	.cultureItem p{
		text-indent: 0;
	}
</style>
