// عن طريق الجافا سكريبت بالكامل canvas نريد ان نعمل

/*global document*/

var myPageCanvas = document.createElement('canvas');
    
//create id
myPageCanvas.id = 'c';

myPageCanvas.width = 300;
myPageCanvas.height = 300;

myPageCanvas.style.display = 'block';
myPageCanvas.style.margin = '150px';
myPageCanvas.style.border = '1px solid #333';

document.body.appendChild(myPageCanvas);

var myCanvas = document.getElementById('c'),
    myContext = myCanvas.getContext('2d');

myContext.font = '80px Corbel';
myContext.fillStyle = '#00BFFF';
myContext.fillText("ASP.Net", 16, 150);


myContext.lineWidth = 3;
myContext.strokeStyle = '#FFD700';
myContext.strokeText('ASP.Net', 16, 150);


myContext.lineWidth = 1.5;
myContext.strokeStyle = '#FF1493';
myContext.strokeText('ASP.Net', 16, 150);
































