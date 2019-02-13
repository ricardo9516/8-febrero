var num;

function setup() {
	createCanvas(400, 400);
	background(125);
	fill(255);
	rect(100, 100, 200, 200);
	fill(0);
	ellipse(200, 200, 20, 20);
  //Para mostrar una cara del dado al inicio
}

function draw() {
	num = int(random(1, 7));
	if (mouseIsPressed) {
		if (num == 1) {
			uno();
		}
		if (num == 2) {
			dos();
		}
		if (num == 3) {
			tres();
		}
		if (num == 4) {
			cuatro();
		}
		if (num == 5) {
			cinco();
		}
		if (num == 6) {
			seis();
		}
	}
}



function uno() {
	background(125);
	fill(255);
	rect(100, 100, 200, 200);
	fill(0);
	ellipse(200, 200, 20, 20);
}

function dos() {
	background(125);
	fill(255);
	rect(100, 100, 200, 200);
	fill(0);
	ellipse(150, 150, 20, 20);
	ellipse(250, 250, 20, 20);

}

function tres() {
	background(125);
	fill(255);
	rect(100, 100, 200, 200);
	fill(0);
	ellipse(140, 140, 20, 20);
	ellipse(200, 200, 20, 20);
	ellipse(260, 260, 20, 20);

}

function cuatro() {
	background(125);
	fill(255);
	rect(100, 100, 200, 200);
	fill(0);
	ellipse(150, 150, 20, 20);
	ellipse(250, 150, 20, 20);
	ellipse(250, 250, 20, 20);
	ellipse(150, 250, 20, 20);

}

function cinco() {
	background(125);
	fill(255);
	rect(100, 100, 200, 200);
	fill(0);
	ellipse(140, 140, 20, 20);
	ellipse(140, 260, 20, 20);
	ellipse(200, 200, 20, 20);
	ellipse(260, 260, 20, 20);
	ellipse(260, 140, 20, 20);

}

function seis() {
	background(125);
	fill(255);
	rect(100, 100, 200, 200);
	fill(0);
	ellipse(140, 140, 20, 20);
	ellipse(200, 140, 20, 20);
	ellipse(140, 260, 20, 20);
	ellipse(260, 260, 20, 20);
	ellipse(260, 140, 20, 20);
	ellipse(200, 260, 20, 20);

}
