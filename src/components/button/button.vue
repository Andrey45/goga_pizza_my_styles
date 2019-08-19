<template>
  <div class="v-but-div">
    <button
      v-if="!router"
      @click="onClick"
      ref="myBut"
      :class="classes"
      @mouseenter="hover"
      @mouseleave="outHover"
      :style="StyleRender(to)"
    >
      <slot />
    </button>
    <router-link
      ref="rut"
      v-if="router"
      :class="classes"
      :to="to"
      tag="button"
      @mouseenter="hover"
      @mouseleave="outHover"
      :style="StyleRender(to)"
    >
      <slot />
    </router-link>
  </div>
</template>

<script>
import {hexInrgba} from '../../assets/js/HexInRgba'
export default {
	name: 'VButton',
	props:{
		onClick:{
			type: Function,
		},
		text: Boolean,
		outlined: Boolean,
		icon: Boolean,
		to: String,
		router:{
			type: Boolean,
			default: false
		},
		color: String
	},
	computed:{
	  classes(){
	    return{
	      'v-but': true,
				'v-but-font': true,
				'v-but--icon': this.icon,
				'v-but--router': this.router,
				...this.DroupClass()
			}
		}
	},
	methods:{
		// Функция определения стилей
		DroupClass(){
			if (this.outlined && this.text){
				return{
				  'v-but-text-outlined': true
				}
			}
			if (this.outlined && !this.text) {
				return {
					'v-but--outlined': true
				}
			}
			if (this.text && !this.outlined) {
				return {
					'v-but--text': true
				}
			}
		},
		StyleRender(to){
			if (this.outlined && this.text){
				return{
					color: this.color,
					border: '1px solid'+ this.color,
				}
			}
			if (this.outlined && !this.text) {
				return {
					color: this.color,
					border: '1px solid'+ this.color,
				}
			}
			if (this.text && !this.outlined) {
				return {
					color: this.color,
				}
			}
			if(this.icon){
				return {
					color: this.color,
					border: '1px solid'+ this.color,
				}
			}
			// if(this.outlined && this.text){
			// 	return {
			// 		color: this.color,
			// 		border: '1px solid'+ this.color,
			// 	}
			// }
			if(this.router){
				if (to === this.$route.path){
					return {
						backgroundColor: hexInrgba(this.color, 0.4),
						color: this.color,
					}
				} else {
					return{
						color: this.color,
					}
				}
			}
			else {
				// return {
				// 	color: '#FFFFFF',
				// 	backgroundColor: this.color,
				// }
			}
		},
		// Функция наведения на элемент
		hover(){
			if (!this.text && !this.outlined && !this.router && !this.icon) {
				this.$refs.myBut.style.boxShadow = '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
			}
			if (this.router) {
				this.$refs.rut.style.backgroundColor = hexInrgba(this.color, 0.3)
			}
			else {
				this.$refs.myBut.style.backgroundColor = hexInrgba(this.color, 0.3)
			}
		},
		// Функция выполняемая при условви что курсор находиться вне компонента
		outHover(){
			if (!this.text && !this.outlined && !this.router) {
				this.$refs.myBut.style.boxShadow = '0 0 0'
			}
			if (this.router) {
				this.$refs.rut.style.backgroundColor = 'transparent'
			}
			else {
				this.$refs.myBut.style.backgroundColor = 'transparent'
			}
		},
		rout(to){
			this.$router.push({path: to})
		}
	}
}
</script>

<style scoped lang="stylus">
  @import "../../assets/css/color.styl"
  @import "../../assets/css/font.slyl"

  .v-but-div
    display inline-flex
    width max-content

  .v-but
    justify-content: center
    outline none
    border: 0
    letter-spacing .08em
    cursor pointer
    display flex
    border-radius 4px
    padding 6px 16px
    text-transform uppercase

  .v-but-font
    font font, sans-serif
    font-weight 600

  .v-but--icon
    background-color transparent
    border-radius 50%
    padding 6px
    &:active
      -o-transform rotate(360grad)
      -ms-transform rotate(360grad)
      -moz-transform rotate(360grad)
      -webkit-transform rotate(360grad)
      transform: rotate(360grad)
      transition all .7s

  .v-but--text
    background-color transparent
    border 0

  .v-but--outlined
    background-color transparent
    border-radius 4px
  .v-but-text-outlined
    align-items center
    width 32px
    height 32px
    letter-spacing 0
    font-weight 500
    padding 6px
    background-color transparent
    border-radius 50%
  .v-but--router
    //text-decoration none
    border 0
    background-color transparent

</style>
