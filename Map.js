function Map(_args) {
		//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var BoardView = require('ui/common/BoardView');
	var ScheduleView = require('ui/common/ScheduleView');
	var NarrativeView = require('ui/common/NarrativeView');
	var MapView = require('ui/common/MapView');
	var AnalysisView = require('ui/common/AnalysisView');

	
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
	
	//create object instance, a parasitic subclass of Observable
	var FirstHalf = Ti.UI.createView({
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		top:'0.3%',//'1',
		left:'0.3%',//'1',
		width:'99.3%', //'309',
		height:'49.3%', //'156',
		
	});	
	
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
		top: '31%', //'48',
		left: leftsize +'%',
		width:'60',
		height:'60',
			
	});
	leftsize = leftsize + 26;
	
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
	FirstHalf.add(self);
	
	}
	masterView.add(FirstHalf);
	/********************************************************************************/
	
		//create object instance, a parasitic subclass of Observable
	var SecondHalf = Ti.UI.createView({
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		top:'50%', //'157',
		left:'0.3%', //'1',
		width:'99.3%', //'309',
		height:'49.3%', //'156',
		
	});	
	leftsize = 1;
	for(count = 4; count < 8; count++){

	 //create a view for tile 1
	var self = Ti.UI.createView({
		
		//borderRadius:80,
		layout: 'vertical',
		borderColor: '#444',
		borderWidth: '2',
		borderRadius: '2',
		backgroundColor:'grey', 
		top:'31%', //'48',
		left: leftsize + '%',
		width:'60',
		height:'60',
				
	});
	leftsize = leftsize + 26;
	//container to put the labels (text) inside the little square
	var pictureLabel = Ti.UI.createLabel({
		text: 'Tap to add tile',
		width: Ti.UI.FILL,
		height: '100%',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER	
	});
	
	self.add(pictureLabel);
	
		//Add behavior for UI
	pictureLabel.addEventListener('click', function(e) {
		alert('This will take us to a context field so we can add tiles');
		
	});
	SecondHalf.add(self);
				
}
	masterView.add(SecondHalf);	
	return masterView;
}


module.exports = Map;
