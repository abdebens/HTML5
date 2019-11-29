/*global document*/

var myCanvas = document.getElementById('c'),

// يعني السياق كأني جايب قماشة وبدي ارسم عليها  context
// تبعت الجافا سكريبت function يعني بالعامية حطلي اللوحة هنا الي بدي ارسم عليها بالدوال وال 
 myContext = myCanvas.getContext('2d');
 
//يعني عبئ الستايل في الشغلة الي بدك ترسمها
 // بيكون اسود defult لو ماحطينا اللون ال
myContext.fillStyle = '#080';

// انا بدي ارسم مستطيل ونضع بين القوسين حدوده rec=rectangle 
//myContext.fillRect(x, y, width, heigh);
myContext.fillRect(100, 10, 200, 50);


myContext.fillStyle = '#F00';
myContext.fillRect(20, 20, 100, 50);

myContext.fillStyle = '#00F';
myContext.fillRect(30, 30, 100, 50);

// اي الحواف  border هو ال stroke ال 
myContext.strokeStyle = '#FF0';

//اذا بدي اسمك حجم الحواف
myContext.lineWidth = 5 ;

//fillRect لا يملئ المحتوى بعمل بس الحواف ومن جوا فاضي على عكس ال strokeRect ال
myContext.strokeRect(100, 100, 100, 50);


myContext.fillRect(200, 20, 100, 100);

//بصعوبة بتنعمل css هنا محا اللون من جزء معين بالمستطيل بال
myContext.clearRect(236, 55, 20, 20);
















