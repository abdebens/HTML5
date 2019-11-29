/*global document*/

var myCanvas1 = document.getElementById('c1'),
    myCanvas2 = document.getElementById('c2'),
    myCanvas3 = document.getElementById('c3'),
    myCanvas4 = document.getElementById('c4'),
    
    myContext1 = myCanvas1.getContext('2d'),
    myContext2 = myCanvas2.getContext('2d'),
    myContext3 = myCanvas3.getContext('2d'),
    myContext4 = myCanvas4.getContext('2d'),
    
    //هي طريقة مختصرة بدل وضع الطول والعرض في الكود الرباعي
    myCanvasWidth1 = myCanvas1.width,
    myCanvasWidth2 = myCanvas2.width,
    myCanvasWidth3 = myCanvas3.width,
    myCanvasWidth4 = myCanvas4.width,
    
    myCanvasHeight1 = myCanvas1.height,
    myCanvasHeight2 = myCanvas2.height,
    myCanvasHeight3 = myCanvas3.height,
    myCanvasHeight4 = myCanvas4.height;
    
myContext1.fillStyle = '#FFF8DC';
myContext2.fillStyle = '#FFF8DC';
myContext3.fillStyle = '#FFF8DC';
myContext4.fillStyle = '#FFF8DC';

//هنا الابعاد صفار لانو عينتهم بالستايل
myContext1.fillRect(0, 0, myCanvasWidth1, myCanvasHeight1);
myContext2.fillRect(0, 0, myCanvasWidth2, myCanvasHeight2);
myContext3.fillRect(0, 0, myCanvasWidth3, myCanvasHeight3);
myContext4.fillRect(0, 0, myCanvasWidth4, myCanvasHeight4);

myContext1.strokeStyle = '#F08080';
myContext2.strokeStyle = '#F08080';
myContext3.strokeStyle = '#F08080';
myContext4.strokeStyle = '#F08080';

myContext1.lineWidth = 5;
myContext2.lineWidth = 5;
myContext3.lineWidth = 5;
myContext4.lineWidth = 5;

//نريد ان نرسم خط
//يمشي من نقطة معينة الى نقطة اخرى pass لرسم خط الخط بيتعامل ب 
//move(x, y)
//وضعنا القيم صفار يعني ببلش من الزاوية الشمال من فوق
myContext1.moveTo(0, 0);

//هيك مشي بشكل محاذي مسافة 100 
myContext1.lineTo(100, 0);

myContext2.moveTo(0, 0);
//myContext2.lineTo(300, 300);
myContext2.lineTo(myCanvasWidth2, myCanvasHeight2); 

//هنا سوف ينزل الخط لحد 10 
myContext3.moveTo(10, 10);
//هنا عملت عملية حسابية ونقصت 10 لكس يصبح في المنتصف
myContext3.lineTo(myCanvasWidth3 - 10, myCanvasHeight3 - 10);

//top left line
//بدي طولو 130 ومخصوم 10 قبله و 10 بعده المجموع 150
myContext4.moveTo(10, 10);
myContext4.lineTo(130, 130);

//top right line
myContext4.moveTo(290, 10);
//الطول بدي اياه 130 لكن العرض لايعد من اليمين يعد من الشمال حتى
//خصم 10 قبل وبعد للخط الأول و 10 قبل وبعد لخطه الناتج 170 move لو نقلنا ال  
myContext4.lineTo(170, 130);

myContext4.moveTo(10, 290);
myContext4.lineTo(130, 170);

myContext4.moveTo(290, 290);
myContext4.lineTo(170, 170);

//هذا الكود ليرسم الخط ويظهره
myContext1.stroke();
myContext2.stroke();
myContext3.stroke();
myContext4.stroke();








