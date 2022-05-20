<template>
  <component :is="currentComponent"></component>
</template>
<script>
import WaterPage from '@/view/WaterPage'
export default {
  name: 'ModelPage',
  components: {
    'WaterPage': WaterPage
  },
  data () {
    return {
      currentComponent:'',
      Allcomps: [
        {
          id: 'water',
          component: 'WaterPage'
        }
      ]
    }
  },
  methods: {
    upData () { 
      this.Allcomps.map((item)=>{
        if(item.id==this.$route.params.id){
          this.currentComponent=item.component
        }
      })
    }
  },
  mounted () {
    this.upData();
  }
}
</script>
