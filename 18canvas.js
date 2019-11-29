/*global document*/
var myCanvas = document.getElementById('c'),
    myContext = myCanvas.getContext('2d');

myContext.font = '40px Arial';

myContext.fillStyle = '#A52A2A';

//myContext.fillText('laith', x, y, max-Width);
// يعني اختياري انو الخط مايتعدى الحد الي رح ادخله optinal max-Width هي
myContext.fillText('laith', 110, 40);

myContext.font = '60px Arial';

myContext.fillStyle = '#00BFFF';
myContext.fillText('L', 20, 90);

myContext.fillStyle = '#7FFF00';
myContext.fillText('A', 40, 110);

myContext.fillStyle = '	#FF7F50';
myContext.fillText('I', 60, 130);

myContext.fillStyle = '#00FFFF';
myContext.fillText('T', 80, 150);

myContext.fillStyle = '#FF1493';
myContext.fillText('H', 100, 170);


myContext.strokeStyle = '#4B0082';
myContext.strokeText("ASP.Net", 50, 250);










