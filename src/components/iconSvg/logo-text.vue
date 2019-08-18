<template>
  <div
    id="title"
    class="text"
    :style="{color: Colors}"
  >
    <div
      class="text-1"
      id="ts1"
    >
      G
    </div>
    <div
      class="text-2"
      id="ts2"
    >
      o
    </div>
    <div
      class="text-1"
      id="ts3"
    >
      G
    </div>
    <div
      class="text-2"
      id="ts4"
    >
      a
    </div>
    <div
      class="text-1"
      id="ts5"
    >
      P
    </div>
    <div
      class="text-2"
      id="ts6"
    >
      i
    </div>
    <div
      class="text-1"
      id="ts7"
    >
      zz
    </div>
    <div
      class="text-2"
      id="ts8"
    >
      a
    </div>
  </div>
</template>
#FF2D0A
<script>
import {mapGetters} from 'vuex'
export default {
	name: 'v-logo',
	computed: mapGetters(['Colors']),
}
</script>

<style scoped lang="stylus">
  .text
    letter-spacing: .09em
    font 34px "Comic Sans MS"
    display inline-flex
    padding-left 20px
    font-style italic
    @media(max-width 325 px)
      font-size 25 px
    @media(min-width 325 px)
      font-size 30 px
    @media(min-width 381 px)
      font-size 35 px
    .text-1
      transform translateY(-40px)
      opacity 0
    .text-2
      color #FF2D0A
      transform translateY(40px)
      opacity 0
</style>
