//ContextField2View Component Constructor for main context view edit (with the pen picture)
function ContextField2View() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var BoardView = require('ui/common/BoardView');
	var ScheduleView = require('ui/common/ScheduleView');
	var NarrativeView = require('ui/common/NarrativeView');
	var MapView = require('ui/common/MapView');
	var AnalysisView = require('ui/common/AnalysisView');
	var Tile = require('ui/common/Tile');
	var ContextFieldView = require('ui/common/ContextField');
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
		backgroundImage:'ui/common/image/ContextField/contextFieldEditSelected.png',
		top:'19%', //'35',
		left:'0%', //'0',
		width:'100%', //'312',
		height:'76%', //'125',
	});
	masterView.add(contextFieldView);
	
/********************************** Default tile **************************************/
	//file on the upper left of the context field that usually takes to default tiles r cd ..
	var goBackView = Ti.UI.createView({
		backgroundImage:'ui/common/image/ContextField/defaultTilesFile.png',
		top:'18%', //'23',
		left:'0.6%', //'2', but actually was '4'
		width:'19%', //'60',
		height: '34%', //'44',
	});
	contextFieldView.add(goBackView);
		
	/*var goBackLabel = Ti.UI.createLabel({
		text: 'default tiles',
		top: '10',
		width:'50',
		height: '30',
		//font:'arial',
		//size:'2', //not working. I want to change size but I can't
		color: 'orange',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	
	goBackView.add(goBackLabel);*/
	
	goBackView.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		self.remove(tile);
		self.remove(masterView);
		var firstView = new FirstView();
		self.add(firstView);

		return self;
	});
	
	
	/******************** Edit page image + and - **********************************/
	
		//file on the upper left of the context field that usually takes to default tiles r cd ..
	var imagePlusMinusView = Ti.UI.createView({
		layout: 'horizontal',
		top:'28%', //'35',
		left:'28.5%', //'90',
		width:'28.5%', //'90',
		height:'16%', //'20',
		/*borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',*/
	});
	contextFieldView.add(imagePlusMinusView);
		
	var imagePlusMinusLabel = Ti.UI.createLabel({
		text: 'image',
		top: '2.8%', //'1',
		left: '16.6%', //'15',
		width:'55.5%', //'50',
		height: '100%', //'20',
		//font:'arial',
		//size:'2', //not working. I want to change size but I can't
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	
	imagePlusMinusView.add(imagePlusMinusLabel);
	
	//plus sign to add number of pictures
		var plusSignLabel = Ti.UI.createLabel({
		text: '+',
		top: '2.8%', //'1',
		left: '0%', //'0',
		width:'15.5%', //'14',
		height: '100%', //'20',
		//font:'arial',
		//size:'2', //not working. I want to change size but I can't
		//textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	
	imagePlusMinusView.add(plusSignLabel);
	
	plusSignLabel.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('This will add pictures');
	});
	
	//minus sign to delete number of pictures
		var minusSignLabel = Ti.UI.createLabel({
		text: '-',
		top: '0%',//'0',
		left: '-77.7%', //'-70',
		width:'15.5%',//'14',
		height: '100%', //'20',
		//font:'arial',
		//size:'2', //not working. I want to change size but I can't
		//textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	
	imagePlusMinusView.add(minusSignLabel);
	
	minusSignLabel.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('This will remove pictures');
	});

	
	/***********************end of Edit page image + and - ***********************************/
	
	
	/******************** Edit page text on/off **********************************/
	
		//file on the upper left of the context field that usually takes to default tiles r cd ..
	var textOnOffView = Ti.UI.createView({
		layout: 'horizontal',
		top:'60%', //'75',
		left:'28.5%', //'90',
		width:'28.5%', //'90',
		height:'16%', //'20',


	});
	contextFieldView.add(textOnOffView);
		
	var textOnOffLabel = Ti.UI.createLabel({
		text: 'text',
		top: '2.8%', //'1',
		left: '16.6%', //'15',
		width:'55.5%', //'50',
		height: '100%', //'20',
		//font:'arial',
		//size:'2', //not working. I want to change size but I can't
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	
	textOnOffView.add(textOnOffLabel);
	
	textOnOffLabel.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('Turn on/off text');
	});

	
	/****************************end of Edit page text on/off ******************************/
	
	/******************** Tap to add image and text **********************************/
	
	//square to add image and text
	var addImageTextView = Ti.UI.createView({
		layout: 'horizontal',
		top:'20%', //'25',
		left:'63.5%', //'200',
		width:'31.7%', //'100',
		height:'80%', //'100',
		
		//backgroundColor: 'black',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
	});
	contextFieldView.add(addImageTextView);
	
		//first half of the square to add image
		var addImageView = Ti.UI.createView({
		layout: 'horizontal',
		top:'1%', //'26',
		left:'1%', //'201',
		width:'100%', //'98',
		height:'50%',//'48',
		
	});
	addImageTextView.add(addImageView);
	//label to add image
	var addImageLabel = Ti.UI.createLabel({
		text: 'Tap to add image',
		top: '0%', //'1',
		left: '0%', //'2',
		width:'100%', //'95',
		height: '100%', //'45',
		//font:'arial',
		//size:'2', //not working. I want to change size but I can't
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	addImageView.add(addImageLabel);
		
	//event to add image
		addImageLabel.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('This will add image');
	});
	
		//first half of the square to add image
		var addTextView = Ti.UI.createView({
		layout: 'horizontal',
		top:'5%', //'74',
		left:'1%', //'201',
		width:'100%', //'98',
		height:'50%',//'48',	
		
	});
	addImageTextView.add(addTextView);	

	//label to add text
	var addTextLabel = Ti.UI.createLabel({
		text: 'To add text',
		top: '0%', //'1',
		left: '8%', //'2',
		width:Ti.UI.SIZE,
		height: '100%',
		//font:'arial',
		//size:'2', //not working. I want to change size but I can't
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		
	});
	addTextView.add(addTextLabel);
	
	//event to add text
	addTextLabel.addEventListener('click', function(e) {
		//right now all the files from when ever page will take me to tiles. That will change when
		//I create context field for different functionalities (save, delete, etc, etc)
		alert('This will add text');
	});
	
	
	/***********************end of Tap to add image and text ***********************************/
		
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
		/*self.remove(tile);
		self.remove(masterView);
		var firstView = new FirstView();
		self.add(firstView);

		return self;*/
		alert('This will take us to a profile or maybe add to a profile??');
	});

	
	//to switch to edit on the context field. I know this will changed from
	//page to pagebut this is an example until we have all the pages set up
		var editView = Ti.UI.createView({
		title: 'test',
		top:'2.5%', //'3',
		left:'66%', //'205',
		width:'8%', //'26',
		height:'14%', //'18',
		/*
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


module.exports = ContextField2View;
