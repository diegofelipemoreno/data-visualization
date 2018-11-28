function ValuePair (key, value) {
	this.key = key;
	this.value = value;

	this.toString = function () {
		return '[' + this.key + ' - ' + this.value + ']';
	}
}

function LinkedList() {
   var length = 0,
       head = null,
       Node = function(element) {
       		this.element = element;
      		this.next = null;  
   		};

   this.append = function(element){
       var node =  new Node(element),
           current;

      if (head === null) {
        head = node;
      } else {

        current = head;

        while (current.next) {
			current = current.next;
        }

         current.next = node;
      }
      length++;
   };

   this.insert = function(position, element){
   		var current,
   			flag = false,
   			counter = 0,
   			nodeElement = {},
   			newNode = new Node(element),
   			positionBefore,
   			lastNode = this.getNodeByIndex(length-1);

   		if (position <= 0) {
   			position = 0;
   		}

   		positionBefore = position -1;

   		if (positionBefore <= 0) {
   			positionBefore = 0;
   		}

   		nodeAfter = this.getNodeByIndex(position);

   		if (position === 0) {
   			newNode.next = nodeAfter;
   			head = newNode;
   		} else if (position === length - 1) {
   			lastNode.next = newNode;
   		} else {
   			(function _looper (head) {

   				if (counter === positionBefore) {
   					flag = true;
   					nodeElement = head;
   					nodeElement.next = newNode;
   					newNode.next = nodeAfter;
   				} else {
   					current = head;

   					if (current.next) {
   						counter++;
   						_looper(current.next);
   					} 
   				}

   				if (false === flag) {
   					nodeElement = -1;
   				}
   			})(head);
   		}

   		length++;
   		return head;
   };

   this.removeAt = function(position) {
   		var nodeToRemove = this.getNodeByIndex(position) || '',
   			nodeToRemoveElement = nodeToRemove['element'] || '',
   			newHead = this.remove(nodeToRemoveElement) || head;

   		if (position < length) {
   			length--;
   		}
   		return newHead;
   };
   this.remove = function(element) {
   		var nodeIndex = this.indexOf(element),
   			nodeBeforeIndex = nodeIndex - 1,
   			nodeToRemove = this.getNodeByIndex(nodeIndex),
   			counter = 0,
   			counterHead = 0,
   			nodeElement,
   			flag = false,
   			newHead = head;

   		if (nodeIndex === 0) {
   			nodeBeforeIndex = 0;	
   		}

		if (nodeBeforeIndex < 0) {
			nodeBeforeIndex = -1;
		}

		(function _updateHead (head) {
			var current;

			if (!nodeIndex) {
				head = head['next'];
				newHead = head;
			} else if (counterHead === nodeBeforeIndex) {
				head['next'] = nodeToRemove['next'];
				return;
			} else {
				current = head;

				if (null !== current && current.next) {
					counterHead++;
					_updateHead(current.next);
				} else {
					return;
				}
			}

		})(head);

		head = newHead;

		if (nodeIndex < length) {
			length--;
		}
		return newHead;
   };

   this.indexOf = function(element) {
   		var position = 0,
   			flag = false;

		(function _searcherValue (head) {
		  head = head || '';
	      var current,
	      	  headElement = head.element;

	      if (headElement === element) {
	      	flag = true;
	      	return;
	      } else {
	        current = head;

	        if (current.next) {
	        	position++;
				_searcherValue(current.next);
	        } else {
	        	return;
	        }
	      }
		})(head);

		if (false === flag) {
			position = -1;
		}

		return position;
   };

   this.getNodeByIndex = function(nodeIndex) {
   		var current,
   			counter = 0,
   			flag = false,
   			nodeElement = {};

   	(function _looper (head) {
   		if (counter === nodeIndex) {
   			flag = true;
   			nodeElement = head;
   		} else {
   			current = head;

   			if (null !== current && current.next) {
   				counter++;
   				_looper(current.next);
   			} 
   		}

   		if (false === flag) {
   			nodeElement = -1;
   		}
   	})(head);

   	return nodeElement;
   };

   this.isEmpty = function() {
   	if (length > 0) {
   		return false;
   	} else {
   		return true;
   	}
   };
   this.size = function() {
   	 return length;
   };
   this.toString = function() {
   		var counter = 0,
   			current,
   			returnData = '',
   			prop;

   		(function _looper (head) {
   			current = head || {};

				if (current.next) {
					counter++;
					returnData += current.element + ' - ' || '';
					_looper(current.next);
				} else {
					returnData += current.element || '';
				}
   		})(head);

   		return returnData;
   };
   this.print = function() {
      return head;
   };
}


// HASH TABLE //
function HashTable () {
	let table = [],
		i,
		loseloseHashCode,
		sdbmCode,
		hashCode,
		djb2HashCode;

	loseloseHashCode = function (key) {
		let hash = 0,
			j;

		for (j = 0; j < key.length; j++) {
			hash +=	key.charCodeAt(j);
		}
		return hash % 37;
	}

	sdbmCode = function(str){
	    var hash = 0;
	    for (i = 0; i < str.length; i++) {
	        char = str.charCodeAt(i);
	        hash = char + (hash << 6) + (hash << 16) - hash;
	    }
	    return hash;
	}

	hashCode = function(str){
	    var hash = 0,
	    	i,
	    	char;

	    if (str.length === 0) {
	    	return hash;
	    }

	    for (i = 0; i < str.length; i++) {
	        char = str.charCodeAt(i);
	        hash = ((hash << 5)- hash) + char;
	        hash = hash & hash; // Convert to 32bit integer
	    }

	    return hash;
	}

	djb2HashCode = function (key) {
		let hash = 5381,
			i;

		for (i = 0; i < key.length; i++) {
			hash = hash * 33 + key.charCodeAt(i);
		}

		return hash % 1013;
	}	

	this.put = function (key, value) {
		let position = djb2HashCode(key);

		if (table[position] === undefined) {
			table[position] = new LinkedList();
		}

		// has tables adding charcode number position
		/* else {
			while(table[position] !== undefined) {
				position ++;
			}
			table[position] = new LinkedList();
		}*/

		// has tables adding linked list

		table[position].append(new ValuePair(key, value));
	}

	this.get = function (key) {
		let position = djb2HashCode(key),
			elementgotten;

		(function _looper (position) {

				let	current;

			if (table[position] !== undefined) {
				current = table[position].print();

				while(current.next) {

					if (current.element.key === key) {
						elementgotten = table[position];

						return elementgotten;
					}

					current = current.next;
				}

				if (current.element.key === key) {
					elementgotten = table[position];
				} else {
					position ++;
					_looper(position);
				}
			}
		})(position);

		return elementgotten;

	}

	this.remove = function (key) {
		let position = djb2HashCode(key);

		(function _looper(position) {
			let	current,
				toRemove,
				counterNode = 0,
				nextPosition = position + 1;

			if (table[position] !== undefined) {
				current = table[position].print();

				/*
				while(current.next) {

					if (current.element.key === key) {
						toRemove = current.element;
					}
					current = current.next;
					counterNode = counterNode + 1;
				}


				// if is the last node	with no next
				if (null === current.next && current.element.key === key) {
					toRemove = current.element;
				}
				*/

				if (current.element.key === key) {
					table[position] = undefined;
				}
/*
				if (counterNode) {
					table[position].remove(toRemove);
				} else {
					table[position] = undefined;
				}
*/
			}

			if (table[nextPosition]) {
				_looper(nextPosition);
			}

		})(position);
	}

	this.print = function () {
		for	(let i = 0; i < table.length; ++i)	{							
			
			if	(table[i] !== undefined) {
				console.log(i +	":	" +	table[i]);
				//console.log(table);
			}
		} 
	}

	this.size = function () {
		return table.length;
	}
} 