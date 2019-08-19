<template>
  <div id="app">
    <navbar />
    <main>
      <router-view />
    </main>
    <v-footer />
  </div>
</template>

<style lang="stylus">
  @import "assets/css/font.slyl"
  @import "assets/css/color.styl"
#app
  background-color backgroundColor
  font font , sans-serif
  display flex
  flex-direction column
  color #2c3e50
  width 100%
  min-height 90vh
  main
    padding-top 60px
    min-height 90vh
    display flex
    flex-direction row


/*.conteiner*/
/*  width max-content*/
/*  margin 0 auto*/
/*#nav*/
/*  padding 30px*/
/*  a*/
/*    font-weight bold*/
/*    color #2c3e50*/
/*    &.router-link-exact-active*/
/*      color #42b983*/
</style>

<script>
import {mapMutations}from 'vuex'
import { openRout } from './assets/js/animationNavbar'
export default {
	computed:{
		doneTodosCount(){
			if (this.$store.getters.device){
				return openRout(this.$store.getters.device)
			}
		}
	},
	data:()=>({
		arr: ['Home', 'Pizza', 'Snacks', 'Dessert','Drinks'],
		dive: ''
	}),
	created() {
		window.addEventListener('resize', this.getWindowWidth)
		this.getWindowWidth()
	},
	methods:{
		...mapMutations(['deviceDef']),
		getWindowWidth(){
			this.deviceDef(window.innerWidth)
			this.doneTodosCount
		},
	},
	mounted(){
  	//localStorage.removeItem('color_site')
  }
}
</script>
