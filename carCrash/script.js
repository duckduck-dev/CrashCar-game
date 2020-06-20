$('#redCar').hide();
$('#redCar2').hide();
$('#redCar3').hide();
$('#blueCar').hide();
$('#blueCar2').hide();
$('#blueCar3').hide();

//Lane
$('#Lane').click(()=> {
    $('#redCar').fadeIn();
    var windowHeight = $(window).height();
    var lineHeight = $('#redCar').height();
    var desiredTop = -70;
    
    var newPosition = windowHeight - (lineHeight + desiredTop);
    $('#redCar').animate({bottom:newPosition},{
        duration: 3000, 
        complete : () => {
        //$('#redCar').hide();
        $('#redCar').css({
            bottom: '0',
            top: 'unset'
        }).hide();
    }, 
    step: () => {
        if(crash('#blueCar','#redCar')){
            alert('--------------\nCrashed!!!!!\n--------------');
            $('#redCar').css({
                bottom: '0',
                top: 'unset'
            }).hide();
            $('#blueCar').css({
                top: '0'
                }).hide().stop();
          } 
    }
    }); 
  });
    

//Lane1
  $('#Lane1').click(()=> {
    $('#redCar2').fadeIn();
    var windowHeight = $(window).height();
    var lineHeight = $('#redCar2').height();
    var desiredTop = -70;
    
    var newPosition = windowHeight - (lineHeight + desiredTop);
    $('#redCar2').animate({bottom:newPosition},{
        duration: 3000, 
        complete : () => {
        //$('#redCar').hide();
        $('#redCar2').css({
            bottom: '0',
            top: 'unset'
        }).hide();
    }, 
    step: () => {
        if(crash('#blueCar2','#redCar2')){
            alert('--------------\nCrashed!!!!!\n--------------');
            $('#redCar2').css({
                bottom: '0',
                top: 'unset'
            }).hide();
            $('#blueCar2').css({
                top: '0'
                }).hide().stop();
          } 
    }
    }); 
  });

//Lane2
$('#Lane2').click(()=> {
    $('#redCar3').fadeIn();
    var windowHeight = $(window).height();
    var lineHeight = $('#redCar3').height();
    var desiredTop = -70;
    
    var newPosition = windowHeight - (lineHeight + desiredTop);
    $('#redCar3').animate({bottom:newPosition},{
        duration: 3000, 
        complete : () => {
        $('#redCar3').css({
            bottom: '0',
            top: 'unset'
        }).hide();
    }, 
    step: () => {
        if(crash('#blueCar3','#redCar3')){
            alert('--------------\nCrashed!!!!!\n--------------');
            $('#redCar3').css({
                bottom: '0',
                top: 'unset'
            }).hide();
            $('#blueCar3').css({
                top: '0'
                }).hide().stop();
          } 
    }
    }); 
  });


//onload function
let repeat = () => {
      let doSomething = () => {
        $('#blueCar').show();
        var windowHeight = $(window).height();
        var lineHeight = $('#blueCar').height();
        var desiredBottom = -60;
    
        var newPosition = windowHeight - (lineHeight + desiredBottom);
    
        $('#blueCar').animate({top:newPosition},3000, () => {
        $('#blueCar').css({
            bottom: desiredBottom,
            top: 'auto'
            });
        });
        setTimeout(()=> {
            $('#blueCar').hide();
            $('#blueCar').css({
                top: '0'
                });
        }, 3100);
           
    }
    let doSomething1 = () => {
        $('#blueCar2').show();
        var windowHeight = $(window).height();
        var lineHeight = $('#blueCar').height();
        var desiredBottom = -60;
    
        var newPosition = windowHeight - (lineHeight + desiredBottom);
    
        $('#blueCar2').animate({top:newPosition},3000, () => {
        $('#blueCar2').css({
            bottom: desiredBottom,
            top: 'auto'
            });
        });
        setTimeout(()=> {
            $('#blueCar2').hide();
            $('#blueCar2').css({
                top: '0'
                });
        }, 3100);    
    }

    let doSomething2 = () => {
        $('#blueCar3').show();
        var windowHeight = $(window).height();
        var lineHeight = $('#blueCar').height();
        var desiredBottom = -60;
    
        var newPosition = windowHeight - (lineHeight + desiredBottom);
    
        $('#blueCar3').animate({top:newPosition},3000, () => {
        $('#blueCar3').css({
            bottom: desiredBottom,
            top: 'auto'
            });
        });
        setTimeout(()=> {
            $('#blueCar3').hide();
            $('#blueCar3').css({
                top: '0'
             });
        }, 3100);
    }
    
    (function loop() {
        var rand = Math.round(Math.random() * (10 * 1000)+3100);
        setTimeout(function() {
                doSomething();
                loop();  
        }, rand);
    }());

    (function loop1() {
        var rand = Math.round(Math.random() * (10 * 1000)+3100);
        setTimeout(function() {
                doSomething1();
                loop1();  
        }, rand);
    }());

    (function loop2() {
        var rand = Math.round(Math.random() * (10 * 1000)+3100);
        setTimeout(function() {
                doSomething2();
                loop2();  
        }, rand);
    }());
}


var crash = (x, y) => {
    var blue = $(x);
    var red = $(y);
    
    var blueLeft = blue.offset().left;
    var blueWidth = blue.width();
    var blueTop = blue.offset().top;
    var blueHeight = blue.height();
    
    var redLeft = red.offset().left;
    var redWidth = red.width();
    var redTop = red.offset().top;
    var redHeight = red.height();
    
    if( blueTop > 0 && redTop > 0 && (redTop < (blueTop + blueHeight))){
        return true;
    }
    else{
        return false;   
    }
};



