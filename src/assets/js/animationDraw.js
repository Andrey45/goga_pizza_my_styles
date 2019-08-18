import {TimelineMax} from 'gsap'
const timeline = new TimelineMax()
function open() {
	timeline.to('#but', .55, {rotation: 360})
}
function close() {
	timeline.to('#but', .55, {rotation: -360})
}
export {open, close}
