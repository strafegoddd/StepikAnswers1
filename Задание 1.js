let index = 0;
let last, last2;
let isGood = true;
let chain ='';
let point = 0;
while (isGood == true){
	let x = prompt('Введите число: ');
	if (isNaN(parseFloat(x)) || !isFinite(x)){
		isGood = false;
	}
	else{
		chain += x + ', ';
		x = Number(x);
		if (index == 0){
			last = x;
			index++;
		}
		else if (index == 1){
			if (last > x){
				point++;
			}
			last2 = last;
			last = x;
			index++;
		}
		else{
			if (last > x && last > last2){
				point++;
			}
			last2 = last;
			last = x;
			index++;
		}
	}
}
document.write('Последовательность чисел: ' + chain + '<br>');
document.write('число таких чисел: ' + point);