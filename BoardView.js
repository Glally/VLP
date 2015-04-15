//BoardView Component Constructor
function BoardView() {
			//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var ScheduleView = require('ui/common/ScheduleView');
	var NarrativeView = require('ui/common/NarrativeView');
	var MapView = require('ui/common/MapView');
	var AnalysisView = require('ui/common/AnalysisView');
	var Board = require('ui/common/Board');
	var ContextFieldView = require('ui/common/ContextField');
	var ContextField2View = require('ui/common/ContextField2');
	var ContextField3View = require('ui/common/ContextField3');

	
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		//backgroundImage:'ui/common/image/background.png',
	});

	var board = new Board();
	self.add(board);
	
/************************ Bottom view*******************************/
	var bottomPartScreen = Ti.UI.createView({
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		top:'68%', //'333',
		left:'0%', //'15',
		width:'100%', //'315',
		height:'32%', //'150',
		
});	
self.add(bottomPartScreen);

/*********************page navegation icons **********************/		
	//create tile button
	var button1 = Ti.UI.createButton({
		backgroundImage:'ui/common/image/VLA_Icons/tileT.png',
		backgroundSelectedImage:'ui/common/image/VLA_Icons/tileT.png',
		top:'72%', //'440',
		left:'4%', //'31',
		width:'29',
		height:'32'
	});
	bottomPartScreen.add(button1);
	
	//Add behavior for UI
	button1.addEventListener('click', function(e) {
		//remove the previous view and create a new one of the required page
		self.remove(board);
		self.remove(bottomPartScreen);
		var firstView = new FirstView();
		self.add(firstView);
		return self;
		
		
	});

//create board button
	var button2 = Ti.UI.createButton({
		backgroundImage:'ui/common/image/VLA_Icons/boardB.png',
		backgroundSelectedImage:'ui/common/image/VLA_Icons/boardB.png',
		top:'72%', //'440',
		left:'20%', //'81',
		width:'29',
		height:'32'
	});
	bottomPartScreen.add(button2);
	
	//Add behavior for UI
	button2.addEventListener('click', function(e) {
		//remove the previous view and create a new one of the required page
		self.remove(board);
		self.remove(bottomPartScreen);
		var boardView = new BoardView();
		self.add(boardView);

		return self;
		});
	
	//create schedule button
	var button3 = Ti.UI.createButton({
		backgroundImage:'ui/common/image/VLA_Icons/scheduleS.png',
		backgroundSelectedImage:'ui/common/image/VLA_Icons/scheduleS.png',
		top:'72%', //'440',
		left:'37%', //'131',
		width:'29',
		height:'32'
	});
	bottomPartScreen.add(button3);
	
	//Add behavior for UI
	button3.addEventListener('click', function(e) {
		//remove the previous view and create a new one of the required page
		self.remove(board);
		self.remove(bottomPartScreen);
		var scheduleView = new ScheduleView();
		self.add(scheduleView);

		return self;
	});
	
		//create map button
	var button4 = Ti.UI.createButton({
		backgroundImage:'ui/common/image/VLA_Icons/mapM.png',
		backgroundSelectedImage:'ui/common/image/VLA_Icons/mapM.png',
		top:'72%', //'440',
		left:'53%', //'181',
		width:'29',
		height:'32'
	});
	bottomPartScreen.add(button4);
	
	//Add behavior for UI
	button4.addEventListener('click', function(e) {
		//remove the previous view and create a new one of the required page
		self.remove(board);
		self.remove(bottomPartScreen);
		var mapView = new MapView();
		self.add(mapView);

		return self;
	});
	
	//create narrative button
	var button5 = Ti.UI.createButton({
		backgroundImage:'ui/common/image/VLA_Icons/narrativeN.png',
		backgroundSelectedImage:'ui/common/image/VLA_Icons/narrativeN.png',
		top:'72%', //'440',
		left:'69%', //'231',
		width:'29',
		height:'32'
	});
	bottomPartScreen.add(button5);
	
	//Add behavior for UI
	button5.addEventListener('click', function(e) {
		//remove the previous view and create a new one of the required page
		self.remove(board);
		self.remove(bottomPartScreen);
		var narrativeView = new NarrativeView();
		self.add(narrativeView);

		return self;
	});
//create analysis button
	var button6 = Ti.UI.createButton({
		backgroundImage:'ui/common/image/VLA_Icons/analysisA.png',
		backgroundSelectedImage:'ui/common/image/VLA_Icons/analysisA.png',
		top:'72%', //'440',
		left:'85%', //'281',
		width:'29',
		height:'32'
	});
	bottomPartScreen.add(button6);
	
	//Add behavior for UI
	button6.addEventListener('click', function(e) {
		//remove the previous view and create a new one of the required page
		self.remove(board);
		self.remove(bottomPartScreen);
		var analysisView = new AnalysisView();
		self.add(analysisView);

		return self;
	});
	
	/*********************** Functionalilty buttons *************************/
	
	
	//create home button
	var button7 = Ti.UI.createButton({
		backgroundImage:'ui/common/image/Board/homeB.png',
		backgroundSelectedImage:'ui/common/image/Board/homeB.png',
		top:'30%', //'382',
		left:'45%', //'156',
		width:'29',
		height:'32'
	});
	bottomPartScreen.add(button7);
	
	//Add behavior for UI
	button7.addEventListener('click', function(e) {
		//remove the previous view and create a new one of the required page
		self.remove(board);
		self.remove(bottomPartScreen);
		var firstView = new FirstView();
		self.add(firstView);

		return self;
	});
	
	//create delete button
	var button8 = Ti.UI.createButton({
		backgroundImage:'ui/common/image/Board/deleteB.png',
		backgroundSelectedImage:'ui/common/image/Board/deleteB.png',
		top:'52%', //'410',
		left:'40%', //'141',
		width:'29',
		height:'32'
	});
	bottomPartScreen.add(button8);
	
	//Add behavior for UI
	button8.addEventListener('click', function(e) {
		//remove the previous view and create a new one of the required page
		self.remove(board);
		self.remove(bottomPartScreen);
		var contextView = new ContextFieldView();
		self.add(contextView);

		return self;
	});
	
//create delete button
	var button9 = Ti.UI.createButton({
		backgroundImage:'ui/common/image/Board/saveB.png',
		backgroundSelectedImage:'ui/common/image/Board/saveB.png',
		top:'52%', //'410',
		left:'50%', //'173',
		width:'29',
		height:'32'
	});
	bottomPartScreen.add(button9);
	
	//Add behavior for UI
	button9.addEventListener('click', function(e) {
		//remove the previous view and create a new one of the required page
		self.remove(board);
		self.remove(bottomPartScreen);
		var contextView = new ContextFieldView();
		self.add(contextView);

		return self;
	});

	
	//create print button
	var button10 = Ti.UI.createButton({
		backgroundImage:'ui/common/image/Board/printB.png',
		backgroundSelectedImage:'ui/common/image/Board/printB.png',
		top:'30%', //'382',
		left:'55%', //'188',
		width:'29',
		height:'32'
	});
	bottomPartScreen.add(button10);
	
	//Add behavior for UI
	button10.addEventListener('click', function(e) {
		//remove the previous view and create a new one of the required page
		self.remove(board);
		self.remove(bottomPartScreen);
		var contextView = new ContextFieldView();
		self.add(contextView);

		return self;
	});
		
	return self;
}


module.exports = BoardView;
