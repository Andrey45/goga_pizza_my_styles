<template>
  <header>
    <v-logo />
    <div
      class="conteiner"
    >
      <nav
        id="nav"
        class="nav"
      >
        <v-button
          class="rout"
          v-for="(link, index) in links"
          :key="index"
          router
          :to="link.url"
          :id="link.id"
          :color="Colors"
        >
          {{ $t('button.'+link.title) }}
        </v-button>
      </nav>
      <v-dropsettings
        id="drop"
        class="icon-btn-group"
      />
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
import {TimelineLite} from "gsap"
const timeline = new TimelineLite()
import DropMenuSettings from "./button/DropMenuSettings";

export default {
	computed: mapGetters(['Colors', 'device']),
	components: { 'v-dropsettings': DropMenuSettings},
	data: () => ({
		isOpen: false,
		links: [
			{url: '/', id: 'Home', title: 'button_home'},
			{url: '/Pizza', id: 'Pizza', title: 'button_pizz'},
			{url: '/Snacks', id: 'Snacks', title: 'button_snacks'},
			{url: '/Dessert', id: 'Dessert', title: 'button_dessert'},
			{url: '/Drinks', id: 'Drinks', title: 'button_drinks'}
		],
		menu: false,
		color: '',
		bol: true
	}),
	mounted(){
		this.openLogo()
		this.openRout(this.device, this.links)
		this.openDraw()
	},
	methods:{
	  openRout(device, arr){
			if (device === 'ExtraSmall') {
				arr.forEach((items) => {
					timeline.to('#' + items.id, .001, {y: -42, display: 'none'})
				})
			} else {
				arr.forEach((items)=>{
					timeline.to('#'+items.id, .53, {y: 0, letterSpacing:'.09em', display: 'flex'})
				})
			}
		},
		openLogo() {
			timeline.to('#ts1', .33,{y:0, opacity: 1})
				.to('#ts2', .33,{y:-0, opacity: 1})
				.to('#ts3', .33,{y:0, opacity: 1})
				.to('#ts4', .33,{y:-0, opacity: 1})
				.to('#ts5', .33,{y:0, opacity: 1})
				.to('#ts6', .33,{y:-0,opacity: 1})
				.to('#ts7', .33,{y:0, opacity: 1})
				.to('#ts8', .33,{y:-0, opacity: 1})
		},
		openDraw() {
			timeline.to('#drop', .53, {x: -15})
		}
	}
}
</script>

<style scoped lang="stylus">
  @import "../assets/css/color.styl"
  header
    z-index 1
    position fixed
    align-items center
    display flex
    width 100%
    height 60px
    justify-content space-between
    background-color dark-colot
    box-shadow 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)

    .conteiner
      display -webkit-inline-flex
      display inline-flex
      flex-grow 1
      justify-content space-between
      .nav
        padding-left 20px
        display inline-flex
        .rout
          transform translateY(-45px)
      .icon-btn-group
        /*display flex*/
        transform translateX(40px)
        /*@media (max-width 1024px)*/
        /*  display none*/
</style>
