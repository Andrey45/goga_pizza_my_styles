export default {
	state:{
		device: 'Large'
	},
	mutations:{
		deviceDef(state, width){
			let lal = ''
			if(width < 600){
				lal = 'ExtraSmall'
			} else if (width > 600 && width < 960) {
				lal = 'Small'
			} else if(width > 960 && width < 1264){
				lal = 'Medium'
			} else if (width > 1264 && width < 1904 ) {
				lal = 'Large'
			} else if (width > 1904) {
				lal = 'ExtraLarge'
			}
			if (state.device !== lal) state.device = lal
		}
	},
	getters:{
		device(state){
			return state.device
		}
	}
}
