
$(function () {
    var counter = document.getElementById('counter').getContext('2d');
    var no = 0; // Starting Point
    var pointToFill = 4.72;  //Point from where you want to fill the circle
    var cw = counter.canvas.width;  //Return canvas width
    var ch = counter.canvas.height; //Return canvas height
    var diff;   // find the different between current value (no) and trageted value (100)

    function fillCounter(){
        diff = ((no/100) * Math.PI*2*10);

        counter.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call

        counter.lineWidth = 15;     // size of stroke

        counter.fillStyle = '#fff';     // color that you want to fill in counter/circle

        counter.strokeStyle = '#93268f';    // Stroke Color

        counter.textAlign = 'center';
        counter.fillStyle= "#93268f"

        counter.font = "bold 40px UTM-Duepuntozero";    //set font size and face

        counter.fillText(no+'%',75,90);       //fillText(text,x,y);

        counter.beginPath();
        counter.arc(75,75,65,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)

        counter.stroke();   // to fill stroke

        // now add condition

        if(no >= 99)
        {
            clearTimeout(fill);     //fill is a variable that call the function fillcounter()
        }
        no++;
    }

    //now call the function

    var fill = setInterval(fillCounter,20);     //call the fillCounter function after every 50MS
})
$(function () {
    var counter = document.getElementById('counter1').getContext('2d');
    var no = 0; // Starting Point
    var pointToFill = 4.72;  //Point from where you want to fill the circle
    var cw = counter.canvas.width;  //Return canvas width
    var ch = counter.canvas.height; //Return canvas height
    var diff;   // find the different between current value (no) and trageted value (100)

    function fillCounter(){
        diff = ((no/100) * Math.PI*2*10);

        counter.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call

        counter.lineWidth = 15;     // size of stroke

        counter.fillStyle = '#fff';     // color that you want to fill in counter/circle

        counter.strokeStyle = '#93268f';    // Stroke Color

        counter.textAlign = 'center';
        counter.fillStyle= "#93268f"

        counter.font = "bold 40px UTM-Duepuntozero";    //set font size and face

        counter.fillText(no+'%',75,90);       //fillText(text,x,y);

        counter.beginPath();
        counter.arc(75,75,65,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)

        counter.stroke();   // to fill stroke

        // now add condition

        if(no >=97)
        {
            clearTimeout(fill);     //fill is a variable that call the function fillcounter()
        }
        no++;
    }

    //now call the function

    var fill = setInterval(fillCounter,20);     //call the fillCounter function after every 50MS
})
$(function () {
    var counter = document.getElementById('counter2').getContext('2d');
    var no = 0; // Starting Point
    var pointToFill = 4.72;  //Point from where you want to fill the circle
    var cw = counter.canvas.width;  //Return canvas width
    var ch = counter.canvas.height; //Return canvas height
    var diff;   // find the different between current value (no) and trageted value (100)

    function fillCounter(){
        diff = ((no/100) * Math.PI*2*10);

        counter.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call

        counter.lineWidth = 15;     // size of stroke

        counter.fillStyle = '#fff';     // color that you want to fill in counter/circle

        counter.strokeStyle = '#93268f';    // Stroke Color

        counter.textAlign = 'center';
        counter.fillStyle= "#93268f"

        counter.font = "bold 40px UTM-Duepuntozero";    //set font size and face

        counter.fillText(no+'%',75,90);       //fillText(text,x,y);

        counter.beginPath();
        counter.arc(75,75,65,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)

        counter.stroke();   // to fill stroke

        // now add condition

        if(no >= 98)
        {
            clearTimeout(fill);     //fill is a variable that call the function fillcounter()
        }
        no++;
    }

    //now call the function

    var fill = setInterval(fillCounter,20);     //call the fillCounter function after every 50MS
})
$('.progress-item').find('.inner').css('height', $('canvas').outerHeight());

