//JavaScript Level-Zero-Coding-Challenges Task 0.5

function TriangleArea(num1, num2, num3){

	var semiPerimeter = (num1 + num2 + num3) / 2;
	var area = Math.floor(Math.sqrt(semiPerimeter * (semiPerimeter - num1) * (semiPerimeter - num2) * (semiPerimeter - num3)));
	return area;
}

console.log("Triangle area is " + TriangleArea(3,4,5) + " sq.units");
