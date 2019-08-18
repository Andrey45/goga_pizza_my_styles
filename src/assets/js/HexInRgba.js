function hexInrgba(hex, opacity) {
	let bigint = parseInt(hex.split('#')[1], 16);
	let r = (bigint >> 16) & 255;
	let g = (bigint >> 8) & 255;
	let b = bigint & 255;

	return 'rgb(' + r + ',' + g + ',' + b + ', '+opacity+')'
}
export {hexInrgba}
