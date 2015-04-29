ar win = Ti.UI.createWindow({
  backgroundColor: 'white',
    fullscreen: true,
    width: Ti.Platform.displayCaps.platformWidth,
    height: Ti.Platform.displayCaps.platformHeight
});
//Variable to hold the spritesheet data
var spriteRunn = {spritePos:1,
  spriteWidth: 160,
   spriteHeight: 145,
   spriteLength: 10,
   sheetHeight: 145,
   sheetLength: 1600,
   spriteX: 0,
   spriteY: 150,
   spriteImage: 'tile.png'
};
//Image to show the sheet
var IspriteRunn = Ti.UI.createImageView({
 top: 0,
  left: 0,
  height: spriteRunn.sheetHeight,
  width: spriteRunn.sheetLength,
  image: spriteRunn.spriteImage
});
//View to show image
var Wsprite  = Ti.UI.createView({
 left: spriteRunn.spriteX,
 top: spriteRunn.spriteY,
 height: spriteRunn.spriteHeight,
 width: spriteRunn.spriteWidth
});
//Variable to reset the timer
var timer = null;

//function to change image and start over
function animateSprite(){
       if(spriteRunn.spritePos >= 10){
                spriteRunn.spritePos =  1;
                IspriteRunn.left = 0;
                Ti.API.info(spriteRunn.spritePos);
            }
        else{           
                IspriteRunn.left -= spriteRunn.spriteWidth;
                spriteRunn.spritePos++;
            } 
};

var textfieldP = Titanium.UI.createTextField({
    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_LINE,
    hintText : '100',
    keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
   top:350,
   left:10,   
   value:50,
    width : 90, height : 110
});
var stopButton = Ti.UI.createButton({
    width:70,
    height:45,
    title:'stop',
    top:300,
    left:30   
});

var startButton = Ti.UI.createButton({
    width:70,
    height:45,
    title:'start',
    top:300,
    left:120
  
});
var jumpButton = Ti.UI.createButton({
    width:70,
    height:45,
    title:'jump',
    top:300,
    left:210
  
});

startButton.addEventListener('click', function(e){   
    if (timer !== null) return;
var pval =parseInt(textfieldP.value);   
timer = setInterval(function(){animateSprite();}, pval);//
});

stopButton.addEventListener('click', function(e){
clearInterval(timer);
timer=null;
textfieldP.value = '';
});

jumpButton.addEventListener('click', function(e){
jumping = true;   
});
Wsprite.add(IspriteRunn);
win.add(textfieldP);
win.add(startButton);
win.add(stopButton);
win.add(jumpButton);
win.add(Wsprite);
win.open();
