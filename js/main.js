  var config = {
    apiKey: "AIzaSyBbV2f2rTZA-zZ9ZqmqbgeeOsK_xHfusCY",
    authDomain: "n7eb-telifoun.firebaseapp.com",
    databaseURL: "https://n7eb-telifoun.firebaseio.com",
    projectId: "n7eb-telifoun",
    storageBucket: "n7eb-telifoun.appspot.com",
    messagingSenderId: "832985210635"
  };
  firebase.initializeApp(config);
  	var i=0;
  	var j = 0;
  	console.log(j);

var database = firebase.database();
var ref = database.ref().child("personne");
ref.on('value',function(snapshot){
	console.log('snapshot : '+ JSON.stringify(snapshot.key));
	//console.log('snapshot : '+ JSON.stringify(snapshot.key));
	snapshot.forEach(function(item){
		var type = JSON.stringify(item.val().type);
		console.log(type);		
		var sc = JSON.stringify(item.val().scoreclient);
		console.log(sc);
		var name = JSON.stringify(item.val().name);
		document.getElementById("type").innerHTML=type.split('\"').join('');
		document.getElementById("name").innerHTML=name.split('\"').join('');
		document.getElementById("score").innerHTML=sc.split('\"').join('')+"%";
	    var scoreGlobal = JSON.stringify(item.val().scoreGlobal);
		var datetrans = JSON.stringify(item.val().transaction.dateT);
		var feedback = JSON.stringify(item.val().transaction.feedback);
		var score = JSON.stringify(item.val().transaction.score);
		var nameprod = JSON.stringify(item.val().transaction.product.name); 
		var state = JSON.stringify(item.val().transaction.product.state); 
		var productowner = JSON.stringify(item.val().transaction.product.productowner); 
		console.log(feedback);
		var node = document.createElement("li");                 // Create a <li> node
		var textnode = document.createTextNode(nameprod);         // Create a text node
		node.appendChild(textnode);                              // Append the text to <li>
		document.getElementById('produits').appendChild(node); 
	});

});

     
