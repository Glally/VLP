//ContextField3View Component Constructor for main context view (with the camera picture)
function ContextField3View() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var BoardView = require('ui/common/BoardView');
	var ScheduleView = require('ui/common/ScheduleView');
	var NarrativeView = require('ui/common/NarrativeView');
	var MapView = require('ui/common/MapView');
	var AnalysisView = require('ui/common/AnalysisView');
	var Tile = require('ui/common/Tile');
	var ContextFieldView = require('ui/common/ContextField');
	var ContextField2View = require('ui/common/ContextField2');

	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		//backgroundImage:'ui/common/image/background.png'
		
	});

var tile = new Tile();
	self.add(tile);
	
		//create object instance, a parasitic subclass of Observable
	var masterView = Ti.UI.createView({
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		top:'68%', //'330',
		left:'0', //'15',
		width:'100%',//'315',
		height:'34%', //'165',
		
	});
	
	
	var contextFieldView = Ti.UI.createView({
		backgroundImage:'ui/common/image/ContextField/contextFieldCameraSelected.png',
		top:'19%', //'35',
		left:'0%', //'0',
		width:'100%', //'312',
		height:'76%', //'125',
	});
	masterView.add(contextFieldView);
	
	//file on the upper left of the context field that usually takes to default tiles r cd ..
	var goBackView = Ti.UI.createView({
		backgroundImage:'ui/common/image/ContextField/defaultTilesFile.png',
		top:'18%', //'23',
		left:'0.6%', //'2',
		width:'19%', //'60',
		height: '34%', //'44',
		
	});
	contextFieldView.add(goBackView);

	
	goBackView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		self.remove(tile);
		self.remove(masterView);
		var firstView = new FirstView();
		self.add(firstView);

		return self;
	});

/******************************** Camera icon ******************************************/
		var cameraView = Ti.UI.createView({
		backgroundImage:'ui/common/image/ContextField/fileCamera.png',
		top:'64%', //'80',
		left:'6.3%', //'20',
		width:'8%', //24',
		height:'22%', //'28',
	});
	contextFieldView.add(cameraView);
	
	cameraView.addEventListener('click', function(e) {
		alert('This will take user to camera on device to take a picture');
	});
	
	

/******************************* Edit, photo, file tabs *************************************/	
	//to switch to edit on the context field. I know this will changed from
	//page to pagebut this is an example until we have all the pages set up
		var editView = Ti.UI.createView({
		top:'2.5%', //'3',
		left:'66%', //'205',
		width:'8%', //'26',
		height:'14%', //'18',
		/*backgroundColor: 'black',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',*/
	});
	contextFieldView.add(editView);
	
	editView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		self.remove(tile);
		self.remove(masterView);		
		var editTileView = new ContextField2View();
		self.add(editTileView);

		return self;
	});
	
	//to switch to camera on the context field. I know this will changed from
	//page to pagebut this is an example until we have all the pages set up
		var cameraView = Ti.UI.createView({
		top:'2.5%', //'3',
		left:'77%', //'240',
		width:'8%', //'26',
		height:'14%', //'18',
		/*backgroundColor: 'black',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',*/
	});
	contextFieldView.add(cameraView);
	
	cameraView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		self.remove(tile);
		self.remove(masterView);		
		var cameraOptionView = new ContextField3View();
		self.add(cameraOptionView);

		return self;
	});
	
	//to switch to folder on the context field. I know this will changed from
	//page to pagebut this is an example until we have all the pages set up
		var folderOptionView = Ti.UI.createView({
		top:'2.5%', //'3',
		left:'89%', //'275',
		width:'8%', //'26',
		height:'14%', //'18',
		/*backgroundColor: 'black',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',*/
	});
	contextFieldView.add(folderOptionView);
	
	folderOptionView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		self.remove(tile);
		self.remove(masterView);	
		var folderView = new ContextFieldView();
		self.add(folderView);

		return self;
	});
	self.add(masterView);

	return self;
}


module.exports = ContextField3View;
