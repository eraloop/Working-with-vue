<template>
  <div id="bottom-section">

    <app-form-section></app-form-section> 
    <app-stats></app-stats>

  </div>
</template>

<script>

import FormSection from './FormSection'
import AddStats from './AddStats'


export default {
    components:{
        "app-form-section": FormSection,
        "app-stats": AddStats
    },
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>

#bottom-section{
    background: hsl(0, 0%, 75%);
    padding: 1.5em 0;
    position: relative;
}

</style>
