<template>
	<footer>
		<section>
			<p class="textCenter">
				<i class="icon iconfont icon-dianhua"></i>
				<span>0755-8326-9919</span>
			</p>
			<p class="textCenter">
				<i class="icon iconfont icon-youxiang"></i>
				<span>abc@meshox.com</span>
			</p>
			<p class="textCenter">
				<i class="icon iconfont icon-dizhi"></i>
				<span>深圳市龙华新区清祥路1号宝能科技园7栋A座11楼</span>
			</p>
		</section>
		<section class="copyRight">
			<p>Copyright ©2019深圳市达英和自动化工程有限公司.版权所有</p>
			<p><a href="http://beian.miit.gov.cn/">粤ICP备2022047319号</a></p>
		</section>
	</footer>
</template>
<script>
	export default {
		name: 'FooterPage'
	}
</script>
<style scoped>
	footer {
		text-align: center;
		font-size: 0.6rem;
		color: white;
		background-color: #333;
		padding-top: 0.5rem;
	}

	footer .icon {
		font-size: 1rem;
	}

	span {
		display: inline-block;
		width: calc(100% - 4rem);
		padding-left: 1rem;
		text-align: left;
	}

	footer p {
		padding-bottom: 0.5rem;
	}

	.copyRight {
		padding-top: 0.5rem;
		background-color: #242424;
	}
</style>
