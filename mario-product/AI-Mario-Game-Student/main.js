function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}


function draw() {
	game()
}
function gotPoses(results)
{
if(results.length > 0)
{
	console.log(results);
	noseX = results    text("lives",gameConfig.screenX/2,gameConfig.screenY/2);
	[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
}
}

if(keyDown(control.up) | keyDown(control.left) | keyDown(control.right) | keyDown(control.right) && gameConfig.status==="start"
if(GameStatus=="start"&& noseX !="" gameConfig.status==="start"){
	world_start.play();

}



