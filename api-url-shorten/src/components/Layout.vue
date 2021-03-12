<template>
  <div >

    <app-header></app-header>
    <presentation-section></presentation-section>
    <bottom-section></bottom-section>
    <call-to-action></call-to-action>
    <app-footer></app-footer>
    
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import Presentation from './Presentation'
import BottomSection from './bottomSection'
import CallToAction from './CallToAction'


export default {
    components:{
        "app-header": Header,
        "app-footer": Footer,
        "presentation-section": Presentation,
        "bottom-section": BottomSection,
        "call-to-action": CallToAction
    },
  data () {
    return {
     
    }
  }
}
</script>


<style>

</style>
