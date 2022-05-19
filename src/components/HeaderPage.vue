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
		<h3 class="titbg">主要领域<span>/main areas</span></h3>
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
	}
	}
}
</script>
<style scoped>
 * {
	margin: 0;
    padding: 0;
}
header {
    display: block; 
	height:3rem;
	padding:3px;   
}
header img{
	height: 80%;
	width:80%;
	display: flex;
}
h3.titbg {  
  padding: 1rem;
  margin: 0;
  font-size: 1.3rem;
  text-align: center;
  color:#006ebf;
  font-weight: bold;
}
h3.titbg span {
  line-height: 2rem;
  color:#484848;
  font-weight: bold;
}
img{
	width: 100%;
	height:18rem;
}
</style>
