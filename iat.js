define(['pipAPI','pipScorer','underscore'], function(APIConstructor, Scorer, _) {

	function stiatExtension(options)
	{
		var API = new APIConstructor();
		var scorer = new Scorer();
		var piCurrent = API.getCurrent();

		var stiatObj = 
		{
			//Set the canvas of the task
			canvas : {
				maxWidth: 725,
				proportions : 0.7,
				background: '#ffffff',
				borderWidth: 5,
				canvasBackground: '#ffffff',
				borderColor: 'lightblue'
			}, 
			//Define the category.
			category :  
			{
				name : 'People', //Category name to be used for feedback and logging.
				title : {
					media : {word : 'People'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: 'people'},
					{word: 'humans'},
					{word: 'persons'},
					{word: 'mankind'},
					{word: 'individuals'}
				],
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},	
			attribute1 : 
			{
				name : 'nature', //Attribute name to be used for feedback and logging
				title : {
					media : {word : 'nature'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: 'animals'},
					{word: 'nature'},
					{word: 'instinct'},
					{word: 'physical'},
					{word: 'bodies'}
				], 
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},
			attribute2 : 
			{
				name : 'culture', //Attribute name to be used for feedback and logging
				title : {
					media : {word : 'culture'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: 'culture'},
					{word: 'society'},
					{word: 'mind'},
					{word: 'symbols'},
					{word: 'monuments'}
				], 
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},	
			trialsByBlock : 
			[//Each object in this array defines a block
				{
					instHTML : '', //Empty means we will create the inst from the instTemplate variable further below. 
					block : 1, //The block variable is not used later, but could help the user. 
					//In each block, we can include a number of mini-blocks, to reduce repetition of same group/response.
					miniBlocks : 1, //Set to 1 if don't need mini blocks. 0 will break the task.
					singleAttTrials : 10, //Number of trials of the attribute that does not share key with the category (in a mini block).
					sharedAttTrials : 10, //Number of trials of the attribute that shares key with the category (in a mini block).
					categoryTrials : 0 // Number of trials of the category (in a mini-block). If 0, the label does not appear.
					//Note: if no category trials, then attribute1, the one on the left, is considered the single attribute.
				}, 
				{ 
					instHTML : '', 
					block : 2, 
					miniBlocks : 2, 
					singleAttTrials : 10, 
					sharedAttTrials : 7, 
					categoryTrials : 7
				}, 
				{ 
					instHTML : '', 
					block : 3, 
					miniBlocks : 2, 
					singleAttTrials : 10, 
					sharedAttTrials : 7, 
					categoryTrials : 7
				}, 
				{ 
					instHTML : '', 
					block : 4, 
					miniBlocks : 2, 
					singleAttTrials : 10, 
					sharedAttTrials : 7, 
					categoryTrials : 7
				}, 
				{ 
					instHTML : '', 
					block : 5, 
					miniBlocks : 2, 
					singleAttTrials : 10, 
					sharedAttTrials : 7, 
					categoryTrials : 7
				}
			],
			//All blocks show attribute1 on the left and attribute2 on the right. 
			//blockOrder can be: 'startRight', 'startLeft', and 'random'
			blockOrder : 'random', 
			//Change to 'startRight' if you want to start with category on the right in the first block. 
			//Change to 'startLeft' if you want to start with category on the left in the first block. 
			//Change to 'random' if you want to randomize whether the category starts on the left or on the right.
			//NOTICE: to know what the block-order condition is, we save the pairing definition of the second block, 
			//into the explicit table, under the variable name block2Condition.

			//If the switch parameter is 0 or smaller, we switch the side of the category every block. 
			//If it is larger than 0, then we switch the category side only once, in the block specified in switchSideBlock.
			switchSideBlock : 4, //By default, we switch on block 4 (i.e., after blocks 2 and 3 showed the first pairing condition).

		//What to do at the end of the task.
		API.addSettings('hooks',{
			endTask: function(){
				//Compute score
				var DScoreObj = scorer.computeD();
				//Save for the task's session.
				piCurrent.feedback = DScoreObj.FBMsg;
				piCurrent.d = DScoreObj.DScore;
				//Save to server
				//API.save({block2Condition:block2Condition, feedback:DScoreObj.FBMsg, d: DScoreObj.DScore});
				window.minnoJS.onEnd();

			}
		});

		return API.script;
	}
	
	return stiatExtension;
});