function TriangleArea(num1, num2, num3){

	let semiPerimeter = (num1 + num2 + num3) / 2;
	let area = Math.floor(Math.sqrt(semiPerimeter * (semiPerimeter - num1) * (semiPerimeter - num2) * (semiPerimeter - num3)));
	return  area ;
}

console.log(TriangleArea(3,4,5));
