define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'people', //Will appear in the data.
		    title : {
		      media : {word : 'people'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli
				{word: 'people'},
				{word: 'humans'},
				{word: 'mankind'},
				{word: 'individuals'},
				{word: 'persons'},
		    ], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},	

  		attribute1 : 
			{
			name : 'nature', //Attribute label
			title : {
				media : {word : 'nature'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'animals'},
				{word: 'nature'},
				{word: 'instinct'},
				{word: 'physical'},
				{word: 'bodies'},
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'cultrue', //Attribute label
			title : {
				media : {word : 'culture'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'cultrue'},
				{word: 'society'},
				{word: 'mind'},
				{word: 'symbols'},
				{word: 'monuments'},
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
