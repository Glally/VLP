//TileView Component Constructor
function Tile(_args) {
		//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var BoardView = require('ui/common/BoardView');
	var Board = require('ui/common/Board');
	var ScheduleView = require('ui/common/ScheduleView');
	var NarrativeView = require('ui/common/NarrativeView');
	var MapView = require('ui/common/MapView');
	var AnalysisView = require('ui/common/AnalysisView');
	var ContextFieldView = require('ui/common/ContextField');
	var ContextField2View = require('ui/common/ContextField2');
	var ContextField3View = require('ui/common/ContextField3');

	
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
	
//var count;
var leftsize ='0.6%';	//2
	//create a view for tile 1
	var self = Ti.UI.createImageView({
		
		//borderRadius:80,
		layout: 'vertical',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		//image: 'ui/common/image/Tile/deleteT.png',
		top:'0.6%', //'2',
		left: leftsize,
		width:'100', //'75',
		height:'100', //'75',
				
	});
	function image(){
		var imgArray = new Array();
		imgArray[0] = new Image();
		imgArray[0].src = 'ui/common/image/Board/printB.png';
		imgArray[1] = new Image();
		imgArray[1].src = 'ui/common/image/Schedule/deleteS.png';
		imgArray[2] = new Image();
		imgArray[2].src = 'ui/common/image/Narrative/audioN.png';
		imgArray[3] = new Image();
		imgArray[3].src = 'ui/common/image/Map/deleteM.png';

		var left = 0;
		
		for(var i=0; i < imgArray.length; ++i){
			var picture = Ti.UI.createImageView({
				layout: 'vertical',
				top: '0',
				left: left,//'0%',
				width:'75',
				height:'75',
				image: imgArray[i].src,
			});
			pictureLabel.add(picture);
			self.add(picture);

			//change position of tile picturres so we can see them		
			left = left +10;
		}return self;
		}
	module.exports = image;
	
		self.addEventListener('click', function(e) {
		//creates a picture from a array variable created on the function defined as image()
		//var pictureFunction = new image();
		
	});
	

	//container to put the labels (text) inside the little square
	var pictureLabel = Ti.UI.createLabel({
		text: 'Tap to add pictures',
		width: Ti.UI.FILL,
		height: '60%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER	
	});
	
	self.add(pictureLabel);
	

	pictureLabel.addEventListener('click', function(e) {
		//add an array of pictures to the tile. This is missing some functionality because 
		//we will have to get the picture from the file system and add it. Not just by clicking
		var pictureFunction = new image();

	});
	
	
	var textLabel = Ti.UI.createTextField({
		hintText: 'add text',
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		borderColor: 'clear',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
	});
	
	self.add(textLabel);

	masterView.add(self);	
		


	return masterView;
}


module.exports = Tile;


/***************************** Example for create and write to a file*****************************

var Settings = Titanium.Filesystem.getFile(Titanium.Filesystem.tempDirectory,'Settings');
Ti.API.info("Created Settings: " + Settings.createDirectory());
Ti.API.info('Settings ' + Settings);
var newFile = Titanium.Filesystem.getFile(Settings.nativePath,'Settings.txt');

newFile.createFile();

if (newFile.exists()){
    newFile.write('line 1\n');
    Ti.API.info('newfile: '+newFile.read());
}


Using newFile.createFile(); will throw error. It seems depricated in 3.0 as I did not find it woking with me. 
I tried newfile.write('Some data'); and it worked.

*********************************************************************************************/

