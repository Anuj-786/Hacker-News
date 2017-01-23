function gettingJSON(){
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

	window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
	window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

	if (!window.indexedDB) {
		console.log("Your browser doesn't support a stable version of IndexedDB.")
	}

	$.getJSON("http://starlord.hackerearth.com/cleartrip/hackernews",function(json){
          		//console.log(JSON.stringify(json));
          		// Put the object into storage
          		
          		var setObject = localStorage.setItem('jsonObject', JSON.stringify(json));

				// Retrieve the object from storage
				var retrievedObject = localStorage.getItem('jsonObject', setObject);
				var count = 1;

				retrievedObject.count = count;
				//console.log(retrievedObject.id)
				var parseJsaon = JSON.parse(retrievedObject);
				for (var i=1; i<parseJsaon.length; i++ ) {
					var loop = parseJsaon[i];
					
					
					
					//var test = document.createElement('p').innerHTML = loop.id;
					//console.log(test)

					var br = document.createElement("br");	

					// Create a <li> node
					var node_num = document.createElement("span"); 
					node_num.setAttribute("id", "number");
					node_num.appendChild(br); 			
					// Create a text node
					var textnode = document.createTextNode(count++);         

					// Append the text to <li>
					node_num.appendChild(textnode);                              
					document.getElementById("numbers").appendChild(node_num).innerHTML; 


					var title_node = document.createElement("a");
					title_node.setAttribute("id", "test");
					title_node.href = loop.url;
					var br = document.createElement("br");	
					title_node.appendChild(br)
					var titleText = document.createTextNode(loop.title);
					title_node.appendChild(titleText);
					document.getElementById("title").appendChild(title_node).innerHTML;

					
				}


			});
}
gettingJSON();