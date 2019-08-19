<template>
  <div v-click-outside="close">
    <v-button
      text
      outlined
      :color="Colors"
      :on-click="()=>{isOpen = !isOpen}"
    >
      {{ $t('translations') }}
    </v-button>
    <div
      id="dr"
      :class="{ isOpen }"
      class="drop"
    >
      <div
        v-for="(but, index) in lang"
        :key="index"
        :style="but"
        class="lang-but"
        @click="lan(but.locale)"
      >
        {{ but.title }}
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "./button";
import { mapGetters, mapMutations } from 'vuex'
export default {
	name: "DropMemuTranslation",
	computed: mapGetters(['Colors']),
	components: {VButton},
	data:()=>({
		isOpen: false,
		lang:[
			{title: 'EN',locale: 'en'},
			{title: 'RU',locale: 'ru'},
			{title: 'DE',locale: 'de'},
			{title: 'IT',locale: 'it'}
		]
	}),
	methods:{
	  ...mapMutations(['setlang']),
	  close(){
			this.isOpen = false
		},
		Open(){
			this.isOpen = true
		},
		lan(locale){
			this.isOpen = false
			this.setlang(locale)
	    this.$i18n.locale = locale
		}
	}
}
</script>

<style scoped lang="stylus">
  @import "../../assets/css/color.styl"
  .but-lang
    font-size 12px
  .drop
    color white
    width 40px
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
        width 40px
        margin-top 15px
        right -1%
      .lang-but
        cursor pointer
        width 40px
        height 40px
        text-align center

</style>
