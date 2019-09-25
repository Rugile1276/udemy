function average (list) {
	var sum =0;
	for (var i = 0; i < list.length; i++) {
		sum = sum + list[i];
	}
	console.log(Math.round(sum / list.length));
}

average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]);