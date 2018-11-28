/*------------------- TREE MAP ---------------------*/
(function (census) {
	
	(function filterModel (census) {
		var color,
			dataArray = [],
			valueArray = [],
			dataArraySouth = [],
			labelArraySouth = [],
			westDataArray = [],
			westLabelArray = [],
			northeastDataArray = [],
			northeastLabelArray = [],
			midwestDataArray = [],
			midwestLabelArray = [];


		census.forEach(function (elem) {

			switch(elem.region) {
			    case 'South': 
					dataArraySouth.push(elem.pop2012);
					labelArraySouth.push(elem.state);
					color = 'yellow';
			        break;
			    case 'West':
			    	westDataArray.push(elem.pop2012);
			    	westLabelArray.push(elem.state);
			        color = 'blue';
			        break;
			    case 'Northeast':
			    	northeastDataArray.push(elem.pop2012);
			    	northeastLabelArray.push(elem.state);
			        color = 'red';
			        break;
			    case 'Midwest':
			    elem.state = elem.state + '%';
			    	midwestDataArray.push(elem.pop2012);
			    	midwestLabelArray.push(elem.state);
			        color = 'green';
			        break;
			}
		});

		dataArray.push(dataArraySouth, westDataArray, northeastDataArray, midwestDataArray);
		valueArray.push(labelArraySouth, westLabelArray, northeastLabelArray, midwestLabelArray);

		render(dataArray, valueArray);	
	})(census);

	function render(dataArray, valueArray, color) {

		Treemap.draw('treemap', 600, 450, dataArray, valueArray, { 'label' : {'fill' : 'black'}, 
        														   'box': {'fill' : 'white', 'stroke' : 'black', 'stroke-width' : '3px'}
        														 });

	}

})(census);


/*-------------------HEAT MAP ---------------------*/

(function (game) {
	var docNode = document.getElementById('heatmap'),
		height = docNode.clientHeight,
		width = docNode.clientWidth,
		dataset = {},
		heatmap;

	dataset.max = 3;
	dataset.data = [];
	game.forEach(function(elem, index) {
		var x,
			y;

		if ((elem.x !== -1) && (elem.y !== -1)) {
			x = Math.round(width  * elem.x/10);
			y = height - Math.round(height * elem.y/10);
			dataset.data.push({'x': x, 'y': y, 'count': elem.points});    
		} 
	});

	heatmap = h337.create({ element: 'heatmap',
							radius: 30,
							opacity: 50 
						  });
	heatmap.store.setDataSet(dataset);


})(game);


/*--------------------- GRAPHS  ----------------------------*/
(function () {
/*


	var s = new sigma('graph');

	albums.forEach(function(elem, index) {
		var theta = index * 2 * Math.PI / albums.length,
			currentAlbum,
			currentMusicians;

		s.graph.addNode({
			id: '' + index, // Note: 'id' must be a string
			label: albums[index].album,
			x: Math.sin(theta),
			y: Math.cos(theta),
			size: 1	
		});
	});

	s.refresh();

*/

	let artistsAlbumMap = new Map(),
		artistAlbumsRepeated = new Map(),
		albumsMap = new Map(),
		artistsArray = [],
		salida = {};

	function ValuePair (element, next) {
		this.element = element;
		this.next = this.next || null;
	}

	(function artistDictionary () {
		let eachAlbumArtists,
			eachAlbum,
			valuePair,
			currentArtist,
			firstCurrentArtist,
			valuePairElement;

		albums.map(function(obj) {
			eachAlbumArtists = obj.musicians;
			album = obj.album;
			albumsMap.set(eachAlbum, 0);

			eachAlbumArtists.forEach((artist) => {
				valuePairElement = {artist, album};
				valuePairObject = new ValuePair( valuePairElement );
				artistsArray.push(artist);

					if (!artistsAlbumMap.has(artist)) {
						artistsAlbumMap.set(artist, new ValuePair( valuePairObject ));
					} else {
						currentArtist = artistsAlbumMap.get(artist);
						firstCurrentArtist = artistsAlbumMap.get(artist);
						firstCurrentArtist['totalAbums'] = 1;
		
						(function _looper(currentArtist) {
							var currentArtistNext;

							firstCurrentArtist.totalAbums = firstCurrentArtist.totalAbums + 1;
		
							if(null === currentArtist.next) {
								currentArtist.next = new ValuePair( valuePairObject );
							} else {
								currentArtistNext = currentArtist.next;
								_looper(currentArtistNext);
							}
						})(currentArtist);
					}
			});
		});
	})();

		//console.log(artistsAlbumMap);
	let filterArtistRepeated = new Map([...artistsAlbumMap].filter(function (obj) {
			let hasTotalAbums = obj[1].totalAbums;

			if (hasTotalAbums > 1) {
				return obj;
			}
	}));

	(function getAlbumsRepeatedArtists () {
		let results = {},
			artistRepeated;

		filterArtistRepeated.forEach((artist) => {

			(function _looper(artist) {
				let currentArtist,
					artistObject,
					titleAlbum,
					nameArtist,
					arrayArtists = [];
				
				artistObject = artist.element;
				titleAlbum = artistObject.element.album;
				nameArtist = artistObject.element.artist;

				function _setResultObject () {
					arrayArtists.push(titleAlbum);

					if (undefined === results[titleAlbum]) {
						results[titleAlbum] = [nameArtist];
					} else {
						results[titleAlbum].push(nameArtist);
					}
				}

				if (null !== artist.next) {
					_setResultObject();
					currentArtist = artist.next;
					_looper(currentArtist);
				} else {
					_setResultObject();
				}	
			})(artist);
		});

		Object.keys(results).forEach((key) => {
			let artistRepeated;

			results[key].forEach((subelem) => {

				artistRepeated = artistsArray.filter((elem) => {
					
					if (elem === subelem) {
						return elem;
					}
				});

				if (undefined === salida[key]) {
					salida[key] = artistRepeated.length -1;
				} else {
					salida[key] = salida[key] + (artistRepeated.length -1);
				}
			});
		});

		console.log(salida);
		console.log(results);
	})(); 
})();

/*--------------------- CLOUD WORDS  ----------------------------*/

(function () {
	var detailsSelector = document.querySelector('#details'),
		wordSelector = document.querySelector('#cloud'),
		model,
		controller,
		view;

	model = function  () {
		return tags;
	},

	controller = function () {
		var tags = model(),
			publicRetun,
			hasTable = setHashTable();

		function setHashTable () {
			var hash = new HashTable();

			tags.forEach(function (elem) {
				hash.put(elem[0], elem[1]);
			});
			return hash;
		}

		function setList () {
			var list;

			list = tags.map(function(word) {
				return [word[0], Math.round(word[1]/5500)];
			});

			view(list);
		};

		function getWordNumber (tagContent) {
			var tagFound = hasTable.get(tagContent).print(),
				numberTag;

			(function _looper (tagFound) {
				var currentElement;

				if (tagFound.element.key === tagContent) {
					numberTag = tagFound.element.value;
				} else {

					if (tagFound.next) {
						currentElement = tagFound.next;
						_looper(currentElement);
					}
				}
				return numberTag;
			})(tagFound);

			return numberTag;
		}

		function init () {
			setList();
		}

		publicRetun = {
			getWordNumber: getWordNumber,
			init: init
		}

		return publicRetun;
	},

	view = function (list) {
		var promise;

		(function render () {
			promise = new Promise((resolve, reject) => {
				WordCloud(document.getElementById('cloud'), {list: list});
				resolve(true);
				reject(false);
			});

			promise.then(function(response) {

				if (response) {
					actions();
				}	
			});	
		})();

		function actions () {
			var currentTarget,
				getWordNumber = controller().getWordNumber,
				wordContentNumber;

			wordSelector.addEventListener('click', function(event) {
				currentTarget = event.target;

				if (currentTarget.constructor.name === 'HTMLSpanElement') {
					wordContent = currentTarget.textContent;
					wordContentNumber = getWordNumber(wordContent);
					detailsSelector.textContent = wordContent + '-->' + wordContentNumber;
				}
			});
		}
	};

	controller().init();	
})();