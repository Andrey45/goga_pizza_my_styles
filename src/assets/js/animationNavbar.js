import {TimelineLite} from 'gsap'
const timeline = new TimelineLite()
function openRout(device){
	const arr = ['Home', 'Pizza', 'Snacks', 'Dessert','Drinks']
	if (device === 'ExtraSmall') {
		arr.forEach((items) => {
			timeline.to('#' + items, .001, {y: -42, display: 'none'})
		})
	} else {
		arr.forEach((items)=>{
			timeline.to('#'+items, .53, {y: 0, letterSpacing:'.09em', display: 'flex'})
		})
	}
}
export {openRout}
