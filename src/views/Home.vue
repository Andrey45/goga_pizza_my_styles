<template>
  <div class="home">
    <img
      id="fon"
      :src="require('../assets/img/fon-2.jpg')"

    >
    <img
      class="pizzfon"
      id="pizzfon"
      :src="require('../assets/img/pizz1.png')"
    >
    <div class="cont">

    </div>
  </div>
</template>

<script>
import {TimelineLite} from 'gsap'
const twinlite = new TimelineLite()
export default {
	name: 'Home',
	methods:{
	  // hover(){
		// 	twinlite.to('#pizzfon', 0.55, { x: 0})
		// }
	}
}
</script>
<style scoped lang="stylus">
  @keyframes pizza
    from
      transform translate(-400%, 5%)
    to
      transform translate(-260%, 5%)
  .home
    width 100%
  #fon
    display  inline-flex
    width 100%
    max-height 800px
  .pizzfon
    position absolute
    margin 0
    display inline-flex
    max-width 50%
    max-height 700px
    transform translate(-260%, 5%)
    animation pizza 2s
  .cont
    width 100%
    height 1000px
</style>
