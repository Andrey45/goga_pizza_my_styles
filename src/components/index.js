import vue from 'vue'
import VButton from './button/button'
import drop from './button/DropMenuSettings'
import logo from './iconSvg/logo-text'
import navbar from './navbar'
import footer from './footer'
vue.component('navbar', navbar)
vue.component('v-button', VButton)
vue.component('v-logo', logo)
vue.component('v-drop', drop)
vue.component('v-footer', footer)

