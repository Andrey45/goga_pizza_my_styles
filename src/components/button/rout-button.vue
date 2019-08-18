<template>
  <router-link
    ref="rou"
    class="router router-font router-style router_animation"
    tag="button"
    :to="to"
    @click="animation"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
	props:['to'],
	methods:{
		animation(){
			this.$refs.rou.style.backgroundColor = "#FC8E21"
		}
	}
}
</script>

<style scoped lang="stylus">
  @import "../../assets/css/color.styl"
  @import "../../assets/css/font.slyl"

  .router-font
    font font, sans-serif
    font-weight 600

  .router
    display flex
    flex 1 0 auto
    border-radius 4px
    padding 6px 16px
    margin 0 6px
    border 2px

  .router-style
    letter-spacing .08em
    cursor pointer
    text-transform uppercase
    background-color transparent
    color colors

  .router_animation
    outline: none
    &:hover
      background-color color-but-hover

  .router-link-exact-active
    background-color color-but-active
</style>
