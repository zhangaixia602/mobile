<template>
  <component :is="currentComponent"></component>
</template>
<script>
import InsertPage from '@/view/InsertPage'
export default {
  name: 'ModelPage',
  components: {
    'InsertPage': InsertPage
  },
  data () {
    return {
      currentComponent:'',
      Allcomps: [
        {
          id: 'water',
          component: 'InsertPage'
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
