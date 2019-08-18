<template>
  <div v-click-outside="close">
    <v-button
      id="but"
      :on-click="Open"
      icon
      :color="Colors"
    >
      <svgicon />
    </v-button>
    <div
      id="dr"
      :class="{ isOpen }"
      class="drop"
    >
      <div
        :style="{color: Colors}"
        class="title"
      >
        Colors
      </div>
      <hr>
      <div
        v-for="(but, index) in divColor"
        :key="index"
        :style="but"
        class="color-but"
        @click="put(but.backgroundColor)"
      />
      <div
        :style="{color: Colors}"
        class="title"
      >
        Fon
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import svgicon from '../iconSvg/settings'
export default {
	computed: mapGetters(['Colors']),
	components: {svgicon},
	data:()=>({
		isOpen: false,
		divColor:[
			{
				backgroundColor: '#4CAF50'
			},
			{
				backgroundColor: '#03A9F4'
			},
			{
				backgroundColor: '#FF9800'
			},
			{
				backgroundColor: '#FF5722'
			},
			{
				backgroundColor: '#E0E0E0'
			},
			{
				backgroundColor: '#B2EBF2'
			},
			{
				backgroundColor: '#E53935'
			},
			{
				backgroundColor: '#00897B'
			}
		]
	}),
	methods:{
		...mapMutations(['setcolor']),
		put(color){
			this.setcolor(color)
		},
		close(){
			//close()
			this.isOpen = false
		},
		Open(){
			//open()
			this.isOpen = !this.isOpen
		},
	}
}
</script>

<style scoped lang="stylus">
  @import "../../assets/css/color.styl"

  .drop
    width 200px
    height auto
    right .1%
    position absolute
    border-radius: 0.35em
    visibility: hidden
    opacity: 0
    padding 6px
    &.isOpen
      background-color dark-colot
      margin-top 40px
      visibility: visible;
      opacity: 1;
      @media (max-width 600px)
        width 150px
        margin-top 15px
        right -1%
    .color-but
      cursor pointer
      display inline-flex
      margin 5px 5px
      padding 5px
      border-radius 2px
      width 30px
      height 10px
      &:hover
        box-shadow 0 0 0 2px white, 0 0 0 4px
      @media (max-width 600px)
        margin-top 15px
        width 15px
        height 5px
    .title
      text-align center
</style>
