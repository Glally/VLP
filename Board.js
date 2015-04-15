//BoardView Component Constructor
function Board(_args) {
		//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var BoardView = require('ui/common/BoardView');
	var ScheduleView = require('ui/common/ScheduleView');
	var NarrativeView = require('ui/common/NarrativeView');
	var MapView = require('ui/common/MapView');
	var AnalysisView = require('ui/common/AnalysisView');
	var ContextFieldView = require('ui/common/ContextField');
	var ContextField2View = require('ui/common/ContextField2');
	var ContextField3View = require('ui/common/ContextField3');
	var TilePage = require('ui/common/Tile');

	
	//create object instance, a parasitic subclass of Observable
	var masterView = Ti.UI.createView({
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		top:'0%', //'17',
		left:'0%', //'15',
		width:'100%',//'315',
		height:'68%',//'315',
		
	});
/************************************ Creating an array of tiles* NOT WORKING YET*****************************************/	
//function createTile(){
var tileArray = new Array();
//new Tile();
//tileArray[0] = new Tile();
//imgArray[0].src = 'ui/common/image/Board/printB.png';
//tileArray[1] = new Tile();
//tileArray[2] = new Tile();
/*
var left = 0;
		
for(var i=0; i < tileArray.length; ++i){
	var tileList = Ti.UI.createListView({
		layout: 'vertical',
		top: '0',
		left: left,//'0%',
		width:'75',
		height:'75',
		children: tileArray[i],	
	});
	
	//pictureLabel.add(picture);
	self.add(tileList);

	//change position of tile picturres so we can see them		
	//left = left +10;
}return self;


	*/
	
/*************************Array of tiles to create a single board**************************************/
/*var tileArray = [{tile: 'ui/common/image/Schedule/deleteS.png', text:'delete icon'},
				{tile: 'a picture of schedule icon', text:'home icon'},
				{tile: 'a picture of schedule icon', text:'profile icon'},
				{tile: 'a picture of schedule icon', text:'save icon'}];

//to add a new record
tileArray.push({tile: 'a picture of schedule icon', text: 'timer icon' });
				
for(var p in tileArray){
	alert('tile: ' + tileArray[p].tile);
	alert('text: ' + tileArray[p].text);
		*/
		//this alerts well when it is not an object with multiple key:value pairs
		//alert(p)
		//alert(tileArray[p]);
//}

/*for (var i=0; i < tileArray.length; ++i){
	alert(tileArray[i]);
}	*/							

/* //worked
var myObj = {prop1 : 1};
myObj.newProp = true;
myObj['oneMoreProp']='Test';

for(var p in myObj){
	alert(p);
	alert(myObj[p]);
}*/


/* //worked
var arr = [];
arr.push(1);
alert(arr[0]);
arr.push(2);
alert(arr[1]);
arr.push(3);
alert(arr[2]); //or aler(arr[arr.length -1]);

for (var i = 0; i < arr.length; ++i){
	alert(arr[i]);
}
*/



/*****************************end of array*********************************/	


/*****************************trying an image array*********************************/	
/*var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'ui/common/image/Schedule/deleteS.png';
alert('tile image: ' + imgArray[0].src);


imgArray[1] = new Image();
imgArray[1].src = 'ui/common/image/Schedule/homeS.png';

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}

*/
/*****************************end of image array*********************************/
	
var count;
var leftsize = 1;
for(count = 0; count < 4; count++){	
	
	//create a view for tile 1
	var self = Ti.UI.createView({
		
		//borderRadius:80,
		layout: 'vertical',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		top:'1%', //'2',
		left: leftsize + '%',
		width:'75',
		height:'75',
				
	});
	leftsize = leftsize + 25;
	//container to put the labels (text) inside the little square
	var pictureLabel = Ti.UI.createLabel({
		text: 'Tap to load tile',
		width: Ti.UI.FILL,
		height: '100%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER	
	});
	
	self.add(pictureLabel);
	
		//Add behavior for UI
	pictureLabel.addEventListener('click', function(e) {
		alert('This will take us to a context field so we can load tiles');
		
	});

	masterView.add(self);
	}

	leftsize = 1;
	for(count = 4; count < 8; count++){

	 //create a view for tile 1
	var self = Ti.UI.createView({
		
		//borderRadius:80,
		layout: 'vertical',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		top:'26%', //'79',
		left: leftsize + '%',
		width:'75',
		height:'75',
				
	});
	leftsize = leftsize + 25;
	//container to put the labels (text) inside the little square
	var pictureLabel = Ti.UI.createLabel({
		text: 'Tap to load tile',
		width: Ti.UI.FILL,
		height: '100%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER	
	});
	
	self.add(pictureLabel);
	
		//Add behavior for UI
	pictureLabel.addEventListener('click', function(e) {
		alert('This will take us to a context field so we can load tiles');
		
	});
	
	masterView.add(self);				
}

leftsize = 1;
	for(count = 8; count < 12; count++){

	 //create a view for tile 1
	var self = Ti.UI.createView({
		
		//borderRadius:80,
		layout: 'vertical',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		top:'51%', //'156',
		left: leftsize + '%',
		width:'75',
		height:'75',
				
	});
	leftsize = leftsize + 25;
	//container to put the labels (text) inside the little square
	var pictureLabel = Ti.UI.createLabel({
		text: 'Tap to load tile',
		width: Ti.UI.FILL,
		height: '100%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER	
	});
	
	self.add(pictureLabel);
	
		//Add behavior for UI
	pictureLabel.addEventListener('click', function(e) {
		alert('This will take us to a context field so we can load tiles');
		
	});

	masterView.add(self);				
}

leftsize = 1;
	for(count = 12; count < 16; count++){

	 //create a view for tile 1
	var self = Ti.UI.createView({
		
		//borderRadius:80,
		layout: 'vertical',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		top:'76%', //'233',
		left: leftsize + '%',
		width:'75',
		height:'75',
				
	});
	leftsize = leftsize + 25;
	//container to put the labels (text) inside the little square
	var pictureLabel = Ti.UI.createLabel({
		text: 'Tap to load tile',
		width: Ti.UI.FILL,
		height: '100%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER	
	});
	
	self.add(pictureLabel);
	
		//Add behavior for UI
	pictureLabel.addEventListener('click', function(e) {
		alert('This will take us to a context field so we can load tiles');
		
	});
	
	masterView.add(self);				
}

	return masterView;
}


module.exports = Board;
