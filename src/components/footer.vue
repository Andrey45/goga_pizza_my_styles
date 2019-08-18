<template>
  <footer>
    <div
      v-if="device==='ExtraSmall'"
      class="container"
    >
      <router-link
        tag="button"
        class="v-but--nav"
        ref="navRou"
        v-for="(link, index) in links"
        :style="StyleRender(link.url)"
        @mouseenter="hover"
        @mouseleave="outhover"
        :key="index"
        :to="link.url"
      >
        <component :is="link.component"/>
        <div>
          {{ $t('button.'+link.title) }}
        </div>
      </router-link>
    </div>
    <div
      v-else
      class="container"
    />
  </footer>
</template>

<script>
import {mapGetters} from 'vuex'
import {hexInrgba} from '../assets/js/HexInRgba'
import SvgSnacks from "./iconSvg/svgSnacks";
import SvgHome from './iconSvg/svgHome'
import SvgPizza from "./iconSvg/svgPizza";
import SvgDrinks from "./iconSvg/svgDrinks";
import SvgDesserts from "./iconSvg/svgDesserts";
export default {
	components: {SvgDesserts, SvgHome, SvgDrinks, SvgPizza, SvgSnacks},
	computed: mapGetters(['Colors', 'device']),
	name: "Footer",
	data:()=>({
		links: [
			{url: '/', component: 'svgHome', title: 'button_home'},
			{url: '/Pizza', component: 'svgPizza', title: 'button_pizz'},
			{url: '/Snacks', component: 'svgSnacks', title: 'button_snacks'},
			{url: '/Dessert', component: 'SvgDesserts', title: 'button_dessert'},
			{url: '/Drinks', component: 'svgDrinks', title: 'button_drinks'}
		],
	}),
	methods:{
	  StyleRender(to){
			if (to === this.$route.path){
				return {
					backgroundColor: hexInrgba(this.Colors, 0.2),
					color: this.Colors,
				}
			} else {
				return{
					color: this.Colors,
				}
			}
		},
		hover(){
	    this.$refs.navRou.style.backgroundColor = hexInrgba(this.color, 0.3)
		},
		outhover(){
			this.$refs.navRou.style.backgroundColor = 'transparent'
		}
	}
}
</script>

<style scoped lang="stylus">
  @import "../assets/css/color.styl"

footer
  display flex
  width 100%
  height 60px
  background-color dark-colot
  box-shadow 0 0 10px 5px rgba(0, 0, 0, .2)
  @media (max-width 600px)
    position fixed
    left 0
    bottom:0
    height 60px
    width 100%
  .container
    width max-content
    margin 0 auto
    @media (max-width 600px)
      width 100%
  .v-but--nav
    padding 0
    border 0
    outline none
    width 20%
    height 100%
    text-align center
    background-color transparent
</style>
