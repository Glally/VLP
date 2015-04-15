//ContextFieldView Component Constructor for main context view (with the file)
function ContextFieldView() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var BoardView = require('ui/common/BoardView');
	var ScheduleView = require('ui/common/ScheduleView');
	var NarrativeView = require('ui/common/NarrativeView');
	var MapView = require('ui/common/MapView');
	var AnalysisView = require('ui/common/AnalysisView');
	var Tile = require('ui/common/Tile');
	var ContextField2View = require('ui/common/ContextField2');
	var ContextField3View = require('ui/common/ContextField3');

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
		backgroundImage:'ui/common/image/ContextField/contextFieldFileSelected.png',
		top:'19%', //'35',
		left:'0%', //'0',
		width:'100%', //'312',
		height:'76%', //'125',
	});
	masterView.add(contextFieldView);
	
	/************************** Default tile file *************************/
	
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
	//trying to go back
	/*goBackView.addEventListener('android:back', function(e){
		$.self.removeAllChildren();
	});*/
	
	
	/************************** END of Default tile file *************************/
	
	/************************** file folder *************************/
	//little folder on the left under the default file icon. I know this will changed from
	//page to pagebut this is an example until we have all the pages set up
		var folderView = Ti.UI.createView({
		backgroundImage:'ui/common/image/ContextField/fileFolder.png',
		top:'55%', //'68',
		left:'1%', //'3',
		width:'8%', //24',
		height:'22%', //'28',
	});
	contextFieldView.add(folderView);
	
	folderView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		//self.remove(tile);
		//self.remove(masterView);
		/*var firstView = new FirstView();
		self.add(firstView);

		return self;*/
		alert('This will have some functionality');
	});
	
	
	//save button on the left under the default file icon. I know this will changed from
	//page to pagebut this is an example until we have all the pages set up
		var fileSaveView = Ti.UI.createView({
		backgroundImage:'ui/common/image/ContextField/fileSave.png',
		top:'55%', //'68',
		left:'11%', //'34',
		width:'8%', //'24',
		height:'22%', //'28',
	});
	contextFieldView.add(fileSaveView);
	
	fileSaveView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		/*self.remove(tile);
		self.remove(masterView);
		var firstView = new FirstView();
		self.add(firstView);

		return self;*/
		alert('This will save the tiles we choose');
	});
	
	//profile icon on the left under the default file icon. I know this will changed from
	//page to pagebut this is an example until we have all the pages set up
		var profileView = Ti.UI.createView({
		backgroundImage:'ui/common/image/ContextField/fileProfile.png',
		top:'75%', //'93',
		left:'6%', //'18',
		width:'8%', //'24',
		height:'22%', //'28',
	});
	contextFieldView.add(profileView);
	
	profileView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)

		alert('This will take us to a profile or maybe add to a profile??');
	});
	
/******************************* Edit, photo, file tabs *************************************/	
	//to switch to edit on the context field. I know this will changed from
	//page to pagebut this is an example until we have all the pages set up
		var editView = Ti.UI.createView({
		top:'2.5%', //'3',
		left:'66%', //'205',
		width:'8%', //'26',
		height:'14%', //'18',
		/*borderColor: '#444',
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
		/*borderColor: '#444',
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
		/*borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',*/
	});
	contextFieldView.add(folderOptionView);
	
	folderOptionView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		self.remove(tile);
		self.remove(masterView);
		var firstView = new FirstView();
		self.add(firstView);

		return self;
	});
	self.add(masterView);
	
		/******************** animal file on context field **********************************/
	
		//file on the upper left of the context field that usually takes to default tiles r cd ..
	var animalsFileView = Ti.UI.createView({
		backgroundImage: 'ui/common/image/ContextField/animalsFile.png',
		layout: 'horizontal',
		top:'18%', //'23',
		left:'20.5%', //'65',
		width:'19%', //'60',
		height: '34%', //'44',
		
	});
	contextFieldView.add(animalsFileView);
	
	animalsFileView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('Will return a file with all is inside the animals folder');

		return self;
	});
	
/******************** school file on context field **********************************/
	
		//file on the upper left of the context field that usually takes to default tiles r cd ..
	var schoolFileView = Ti.UI.createView({
		backgroundImage: 'ui/common/image/ContextField/schoolFile.png',
		layout: 'horizontal',
		top:'58%', //'75',
		left:'20.5%', //'65',
		width:'19%', //'60',
		height: '34%', //'44',
		
	});
	contextFieldView.add(schoolFileView);
	
	schoolFileView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('Will return a file with all is inside the school folder');

		return self;
	});
	
/******************** food file on context field **********************************/
	
		//file on the upper left of the context field that usually takes to default tiles r cd ..
	var foodFileView = Ti.UI.createView({
		backgroundImage: 'ui/common/image/ContextField/foodFile.png',
		layout: 'horizontal',
		top:'18%', //'23',
		left:'40.5%', //'128',
		width:'19%', //'60',
		height: '34%', //'44',
		
	});
	contextFieldView.add(foodFileView);
	
	foodFileView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('Will return a file with all is inside the food folder');

		return self;
	});	

/******************** library file on context field **********************************/
	
		//file on the upper left of the context field that usually takes to default tiles r cd ..
	var libraryFileView = Ti.UI.createView({
		backgroundImage: 'ui/common/image/ContextField/libraryFile.png',
		layout: 'horizontal',
		top:'18%', //'23',
		left:'59.8%', //'189',
		width:'19%', //'60',
		height: '34%', //'44',
		
	});
	contextFieldView.add(libraryFileView);
	
	libraryFileView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('Will return a file with all is inside the library folder');

		return self;
	});
	
	/******************** playtime file on context field **********************************/
	
		//file on the upper left of the context field that usually takes to default tiles r cd ..
	var playtimeFileView = Ti.UI.createView({
		backgroundImage: 'ui/common/image/ContextField/playtimeFile.png',
		layout: 'horizontal',
		top:'18%', //'23',
		left:'79%', //'250',
		width:'19%', //'60',
		height: '34%', //'44',
		
	});
	contextFieldView.add(playtimeFileView);
	
	playtimeFileView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('Will return a file with all is inside the playtime folder');

		return self;
	});
	
/******************** unsorted tile on context field **********************************/
	
		//file on the upper left of the context field that usually takes to default tiles r cd ..
	var unsortedTileView = Ti.UI.createView({
		layout: 'horizontal',
		top:'54%', //'70',
		left:'40.5%', //'128',
		width:'19%', //'60',
		height:'43.2%', //'54',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		
	});
	contextFieldView.add(unsortedTileView);
	
	unsortedTileView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('Will return a file with all is inside the food folder');

		return self;
	});	
	
	var unsortedTileLabel = Ti.UI.createLabel({
		text: 'Unsorted Tile',
		top: '1',
		left: '1',
		width:Ti.UI.FILL,
		height: '100%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	
	unsortedTileView.add(unsortedTileLabel);		

/******************** unsorted tile on context field **********************************/
	
		//file on the upper left of the context field that usually takes to default tiles r cd ..
	var unsortedTileView = Ti.UI.createView({
		layout: 'horizontal',
		top:'54%', //'70',
		left:'60%', //'189',
		width:'19%', //'60',
		height:'43.2%', //'54',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		
	});
	contextFieldView.add(unsortedTileView);
	
	unsortedTileView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('Will return a file with all is inside the library folder');

		return self;
	});
	
	var unsortedTileLabel = Ti.UI.createLabel({
		text: 'Unsorted Tile',
		top: '1',
		left: '1',
		width:Ti.UI.FILL,
		height: '100%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	
	unsortedTileView.add(unsortedTileLabel);	
	
	/******************** unsorted tile on context field **********************************/
	
		//file on the upper left of the context field that usually takes to default tiles r cd ..
	var unsortedTileView = Ti.UI.createView({
		layout: 'horizontal',
		top:'54%', //'70',
		left:'79.4%',//'250',
		width:'19%', //'60',
		height:'43.2%', //'54',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		
	});
	contextFieldView.add(unsortedTileView);
	
	unsortedTileView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('Will return a file with all is inside the playtime folder');

		return self;
	});
	var unsortedTileLabel = Ti.UI.createLabel({
		text: 'Unsorted Tile',
		top: '1',
		left: '1',
		width:Ti.UI.FILL,
		height: '100%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	
	unsortedTileView.add(unsortedTileLabel);	
	

	return self;
}


module.exports = ContextFieldView;
