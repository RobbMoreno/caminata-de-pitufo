let sprite
const size = 128
let speedX = 0
let speedY = 0
let x = 0
let cont = 0
let cont2=0
function preload() {
	sprite = loadImage('image/sprite.jpg')
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60)
}

function draw() {
	background('#60a433')
	fill('#e6c077')
	noStroke()
	rect(0, 100, width, 60)
	rect(0, 200, width, 60)
	rect(0, 300, width, 60)
	rect(0, 400, width, 60)
	rect(0, 500, width, 60)
	rect(0, 600, width, 60)
	
	idaYVuelta()
}

function idaYVuelta(){
	

	if (x <= width) {
		translate(cont, cont2)
		copy(sprite, speedX, speedY, 128, 128, x, 0,128, 128)
		speedX += size
		if (speedX == 512) {
			speedX = 0
			speedY += size
		}
		if (speedY == 512) {
			speedY = 0
			speedX = 0
		}
		x++
		cont =x
		//cont++
		
		
	}else{

		translate(cont, cont2)
		scale(-1,1)
		copy(sprite, speedX, speedY, 128, 128, 0, 0,128, 128)
		speedX += size
		if (speedX == 512) {
			speedX = 0
			speedY += size
		}
		if (speedY == 512) {
			speedY = 0
			speedX = 0
		}
		cont--

	}

	if (cont == 0) {
		x=0
		cont2+=100

	}else if (x == width) 
		cont2+=100

	console.log(cont2)
}