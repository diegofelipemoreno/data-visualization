/*------------------- GEOGRAPHIC ---------------------*/
(function middleAgeMap() {
	let model,
		view,
		controller;

	model = {
		modelCountries: function () {
			return countries;
		},

		modelAges: function () {
			return ages;
		}
	},

	controller = {
		getCountries: function () {
			return model.modelCountries();
		},

		getCountriesAges: function () {
			let modelCountries = this.getCountries(),
				modelAges =  model.modelAges(),
				dataRoleAge,
				countryDataMap = new Map();

			function _setDataAge (country) {
				let setDataRole = '';

				country = country || '';
				ages.forEach((elem) => {
					if (country === elem.country) {
						setDataRole = elem.age.toFixed();
					}
				});

				return setDataRole;
			}

			modelCountries.map((elem, index) => {
				dataRoleAge = _setDataAge (elem) || '';
				countryDataMap.set(elem, { age: dataRoleAge });
				return elem;
			});

			return countryDataMap;
		},

		getAverageAges: function () {
			let modelAges = model.modelAges(),
				agesData = new Set(),
				agesDataArray,
				averageValues = {},
				agesDataArrayLength,
				agesDataArrayMiddle,
				ageValue;

			modelAges.forEach((elem) => {
				ageValue = elem.age;
				agesData.add(parseInt(ageValue));
			});

			agesDataArray = Array.from(agesData);
			agesDataArray.sort();
			agesDataArrayLength = agesDataArray.length;
			agesDataArrayMiddle = agesDataArrayLength / 2 || 0;
			agesDataArrayMiddle = parseInt(agesDataArrayMiddle);

			averageValues[0] = Math.min.apply(null, agesDataArray) || 0;
			averageValues[2] = Math.max.apply(null, agesDataArray) || 0;
			averageValues[1] = agesDataArray[agesDataArrayMiddle] || 0;

			return averageValues;
		},

		init: function () {
			view.init();
			this.getAverageAges();
		}
	},

	view = {
		render: function () {
			const preffixClass = 'map-';
			let countriesAges = controller.getCountriesAges(),
				mapSelector = document.querySelector('#map'),
				spanElement,
				mapClass;

			countriesAges.forEach((value, key) => {
				mapClass = preffixClass + key;
				spanElement = document.createElement('span');
				spanElement.classList.add(mapClass);
				value.age && spanElement.setAttribute('data-age', value.age);
				mapSelector.appendChild(spanElement);
			});
		},

		renderLegend: function () {
			let legendSelector = document.querySelector('#map-legend'),
				spanElement = document.createElement('span'),
				divBarElement,
				averageValues = controller.getAverageAges(),
				averageAgeValue;

			spanElement.classList.add('keyValue');
			Object.keys(averageValues).forEach((objetKey) => {
				divBarElement = document.createElement('div');
				averageAgeValue = averageValues[objetKey] || 0;
				divBarElement.textContent = averageAgeValue;
				spanElement.appendChild(divBarElement);
				legendSelector.appendChild(spanElement);
			});
		},

		init: function () {
			this.render();
			this.renderLegend();
		}
	}

	controller.init();
})();



/*------------------- COUNTIES ---------------------*/
(function mapCounties() {
	let model,
		view,
		controller;

	model = {
		modelCounties: function () {
			return counties;
		}
	},

	controller = {

		getCounties: function () {
			return model.modelCounties();
		},

		getCountiesScaleData: function () {
			let counties =  model.modelCounties(),
				outcomes,
				scale,
				scaleData = {};

			outcomes = counties.map(elem => elem.outcomes_z)
			maxZ = Math.max.apply(null, outcomes);
			minZ = Math.min.apply(null, outcomes);
			// for scake color purposes: z-scores ranged from -2 to 1.5, this code would extend the range to [-2, 2]
			Math.abs(minZ) > Math.abs(maxZ) ? maxZ = -minZ : minZ = -maxZ; 
			scale = chroma.scale('BrBG').domain([maxZ, minZ]).out('hex');
			scaleData['scale'] = scale;
			scaleData['maxZ'] = maxZ;
			scaleData['minZ'] = minZ;
			return scaleData;
		},

		init: function () {
			view.init();
		}
	},

	view = {
		dictionary: {
			scaleData: controller.getCountiesScaleData(),
			loaderSelector: document.querySelector('.donutContainer'),
			mapCountiesContainer: document.querySelector('.mapContainer'),
			countiesData: controller.getCounties()
		},

		render: function () {
			let scale = this.dictionary.scaleData.scale,
				pathSelector = this.dictionary.mapCountiesContainer.querySelectorAll('path'),
				arrayPathSelector = Array.from(pathSelector);

			this.dictionary.countiesData.forEach((county, index) => {
				arrayPathSelector[index] && arrayPathSelector[index].setAttribute('id', county.name);
				arrayPathSelector[index] && arrayPathSelector[index].setAttribute('fill', scale(county.outcomes_z));
			});

			this.renderLoading();
		},

		renderLegend: function () {
			let scale = this.dictionary.scaleData.scale,
				minZ = this.dictionary.scaleData.minZ,
				maxZ = this.dictionary.scaleData.maxZ,
				legendSelector = document.querySelector('#legend'),
				cells = legendSelector.querySelectorAll('.scale td'),
				cellsArray = Array.from(cells);

			cellsArray.forEach((row, index) => {
				row.style.backgroundColor = scale(maxZ - ((index + 0.5) / cellsArray.length) * (maxZ - minZ));
			});
		},

		interactions: function () {
			let self = this,
				georgiaMapSelector = document.querySelector('#georgiaMap'),
				mapPathsSelector = georgiaMapSelector.querySelectorAll('path'),
				mapPathsArray = Array.from(mapPathsSelector),
				detailsSelector = document.querySelector('#details'),
				countyLabel = document.querySelector('.js-county'),
				countyRank = document.querySelector('.js-countyRank'),
				healthBehaviors = document.querySelector('.js-healthBehaviors'),
				clinicalCare = document.querySelector('.js-clinicalCare'),
				socialEconomic = document.querySelector('.js-socialEconomic'),
				physicalEnv = document.querySelector('.js-physicalEnv'),
				currentTarget,
				currentTargetId,
				currentCountyObj,
				outcomeZTextData;

			function _getCurrentCountyData (idName) {
				let currentCounty;

				currentCounty = self.dictionary.countiesData.filter((elem) => {
					elem.name === idName ? currentCounty = elem : currentCounty = null;
					if (elem.name === idName) {
						return elem;
					}
				});
				currentCounty[0] = currentCounty[0] || '';
				return currentCounty[0];
			}		

			function _getOutcomeTextData (countyObj) {
				let outcomeZData = countyObj.outcomes_z;

				if (outcomeZData > 0.25) { return 'Far Below Average'; }
				if (outcomeZData > 0.1) { return 'Below Average'; }
				if (outcomeZData > -0.1) { return 'Average'; }
				if (outcomeZData > -0.25) { return 'Above Average'; }
			}			

			mapPathsArray.forEach((path, index) => {
				path.addEventListener('mouseleave', (event) => {
					currentTarget = event.target;
					detailsSelector.classList.remove('active');
					currentTarget.classList.remove('active');
					currentTarget.setAttribute('stroke', 'none');

				});

				path.addEventListener('mouseenter', (event) => {
					detailsSelector.classList.add('active');
					currentTarget = event.target;
					currentTargetId = currentTarget.getAttribute('id') || '';
					currentTargetId ? currentCountyObj = _getCurrentCountyData(currentTargetId) : currentCountyObj = '';
					outcomeZTextData = _getOutcomeTextData(currentCountyObj) || '';
					currentTarget.classList.add('active');
					currentTarget.setAttribute('stroke', '#444444');

					if (currentCountyObj) {
						countyLabel.textContent = currentCountyObj.name;
						healthBehaviors.textContent = outcomeZTextData;
						countyRank.textContent = `${index + 1} of ${mapPathsArray.length}`;
						//console.log(currentCountyObj);
					}
				});
			})
		},

		renderLoading : function () {
			new Promise(resolve => { 
				setTimeout(() => {
					this.dictionary.loaderSelector.classList.add('hide');
					resolve();
				}, 1000)
			  }).then(() => {
					this.dictionary.mapCountiesContainer.classList.add('active');
			  });	
		},

		init: function () {
			this.render();
			this.renderLegend();
			this.interactions();
		}
	}

	controller.init();
})();


/*------------------- GEOGRAPHIC CONTENT ---------------------*/

(function geographicContent () {
	let model,
		controller,
		view;

	model = {
		getUfos: function() {
			return ufos;
		}
	},

	controller = {

		getUfosData: function () {
			return model.getUfos();
		},

		init: function() {
			view.init();
		}
	},

	view = {

		render: function () {
			let tiles = new MM.StamenTileLayer('toner'),
				map = new MM.Map('mapContent', tiles),
				layer = new SpotlightLayer(),
				ufosData = controller.getUfosData();

			map.setCenterZoom(new MM.Location(37.840278, -96.611389), 4);
			layer.spotlight.radius = 15;
			map.addLayer(layer);

			ufosData.forEach((ufo) => {
			 layer.addLocation(new MM.Location(ufo.location[0], ufo.location[1]));
			});
		},

		init: function() {
			this.render();
		}
	}

	controller.init();	
})();


/*------------------- GEOGRAPHIC RACE CONTENT ---------------------*/

(function geographicRace () {
	let model,
		controller,
		view;

	model = {
		modelSeaboard: function() {
			return seaboard;
		},

		modelSouthern: function() {
			return southern;
		}
	},

	controller = {

		getSeaboardData: function () {
			return model.modelSeaboard();
		},

		getSouthernData: function () {
			return model.modelSouthern();
		},

		getSeaboardDataLatLong: function () {
			let seaboardData = this.getSeaboardData(),
				latLongData,
				pointArray;

			latLongData = seaboardData.map((elem) => {
				pointArray = [];
				pointArray.push(elem.latitude, elem.longitude);
				return pointArray;
			})

			return latLongData;
		},

		getSouthernDataLatLong: function () {
			let southernData = this.getSouthernData(),
				latLongData,
				pointArray;

			latLongData = southernData.map((elem) => {
				pointArray = [];
				pointArray.push(elem.latitude, elem.longitude);
				return pointArray;
			})

			return latLongData;
		},

		init: function() {
			view.init();
		}
	},

	view = {

		render: function () {
			let map,
				seaboardDataLatLong = controller.getSeaboardDataLatLong(),
				southernDataLatLong = controller.getSouthernDataLatLong();

			/*----------------------*/
            /** Leaflet Extensions **/
            /*----------------------*/
            L.Control.Animate = L.Control.extend({
                options: {
                    position: 'bottomleft',
                    animateStartText: '▶︎',
                    animateStartTitle: 'Start animation',
                    animatePauseText: '◼︎',
                    animatePauseTitle: 'Pause animation',
                    animateResumeText: '▶︎',
                    animateResumeTitle: 'Resume animation',
                    animateStartFn: null,
                    animateStopFn: null
                },
                onAdd: function () {
                    var animateName = 'leaflet-control-animate',
                        container = L.DomUtil.create('div', animateName + ' leaflet-bar'),
                        options = this.options;
                    this._button  = this._createButton(options.animateStartText, options.animateStartTitle,
                            animateName,  container, this._clicked);
                    return container;
                },
                _createButton: function (html, title, className, container, fn) {
                    var link = L.DomUtil.create('a', className, container);
                    link.innerHTML = html;
                    link.href = '#';
                    link.title = title;
                    L.DomEvent
                        .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
                        .on(link, 'click', L.DomEvent.stop)
                        .on(link, 'click', fn, this);
                    return link;
                },
                _running: false,
                _clicked: function() {
                    if (this._running) {
                        this._button.innerHTML = this.options.animateResumeText;
                        this._button.title = this.options.animateResumeTitle;
                        if (this.options.animateStopFn) {
                            this.options.animateStopFn();
                        }
                    } else {
                        this._button.innerHTML = this.options.animatePauseText;
                        this._button.title = this.options.animatePauseTitle;
                        if (this.options.animateStartFn) {
                            this.options.animateStartFn();
                        }
                    }
                    this._running = !this._running;
                },
                reset: function() {
                    this._running = false;
                    this._button.innerHTML = this.options.animateStartText;
                    this._button.title = this.options.animateStartTitle;
                }
            });
            L.control.animate = function(options) {
                return new L.Control.Animate(options);
            };
            L.Label = L.Class.extend({
                initialize: function(latLng, label, options) {
                    this._latlng = latLng;
                    this._label = label;
                    L.Util.setOptions(this, options);
                    this._status = "hidden";
                },
                options: {
                    offset: new L.Point(0, 0)
                },
                onAdd: function(map) {
                    this._container = L.DomUtil.create('div', 'leaflet-label');
                    this._container.style.lineHeight = "0";
                    this._container.style.opacity = "0";
                    map.getPanes().markerPane.appendChild(this._container);
                    this._container.innerHTML = this._label;
                    var pos = map.latLngToLayerPoint(this._latlng);
                    var op = new L.Point(pos.x + this.options.offset.x, pos.y + this.options.offset.y);
                    L.DomUtil.setPosition(this._container, op);
                },
                getStatus: function() {
                    return this._status;
                },
                setStatus: function(status) {
                    switch (status) {
                        case "hidden":
                            this._status = "hidden";
                            this._container.style.opacity = "0";
                            break;
                        case "shown":
                            this._status = "shown";
                            this._container.style.opacity = "1";
                            break;
                        case "dimmed":
                            this._status = "dimmed";
                            this._container.style.opacity = "0.5";
                            break;
                    }
                }
            });
            L.Control.Title = L.Control.extend({
                options: {
                    position: "topleft"
                },
                initialize: function (title, options) {
                    L.setOptions(this, options);
                    this._title = title;
                },
                onAdd: function (map) {
                    var container = L.DomUtil.create('div', 'leaflet-control-title');
                    container.innerHTML = this._title;
                    return container;
                }
            });
            L.control.title = function(title, options) {
                return new L.Control.Title(title, options);
            };
            /*----------------*/
            /** Map Creation **/
            /*----------------*/
            map = L.map('mapRace',{
                center: [36.3, -80.6],
                maxBounds: [ [33.32134852669881, -85.20996093749999], [39.16414104768742, -75.9814453125] ],
                zoom: 7,
                minZoom: 7,
                maxZoom: 7,
                dragging: false,
                zoomControl: false,
                touchZoom: false,
                scrollWheelZoom: false,
                doubleClickZoom: false,
                boxZoom: false,
                keyboard: false
            });
            L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
                 attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
                 maxZoom: 16
            }).addTo(map);
            L.polyline(
                seaboard.map(function(stop) {return [stop.latitude, stop.longitude]}),
                {clickable: false, color: "#88020B", weight: 1}
            ).addTo(map);
            L.polyline(
                southern.map(function(stop) {return [stop.latitude, stop.longitude]}),
                {clickable: false, color: "#106634", weight: 1}
            ).addTo(map);
            L.control.title(
                "<h1>Geography as a Competitive Advantage</h1>" +
                "<p>In the 1940s, the route of Southern Railways’ <i>Southerner</i> " +
                "(<span class='southern'>━━━</span>) " +
                "was shorter than the rival " +
                "<i>Silver Comet</i> of the Seaboard Air Line " +
                "(<span class='seaboard'>━━━</span>)." +
                "Passengers traveling on the <i>Southerner</i> " +
                "could expect to arrive more than 90 minutes sooner " +
                "than those on the <i>Silver Comet</i>.</p>" +
                "<p>Click the play button below to trace the journeys " +
                "of both trains between Washington, DC and Atlanta, GA.</p>"
            ).addTo(map);
            var start = seaboard[0];
            var label = new L.Label(
                [start.latitude,start.longitude],
                start.stop,
                {offset: new L.Point(start.offset[0], start.offset[1])}
            );
            map.addLayer(label);
            label.setStatus("shown");
            var finish = seaboard[seaboard.length-1];
            label = new L.Label(
                [finish.latitude,finish.longitude],
                finish.stop,
                {offset: new L.Point(finish.offset[0], finish.offset[1])}
            );
            map.addLayer(label);
            label.setStatus("shown");
            /*-------------------*/
            /** Animation Setup **/
            /*-------------------*/
            var buildPathAnimation = function(route, options) {
                var animation = [];
                for (var stopIdx=0, prevStops=[]; stopIdx < route.length-1; stopIdx++) {
                    var stop = route[stopIdx];
                    var nextStop = route[stopIdx+1]
                    prevStops.push([stop.latitude, stop.longitude]);
                    for (var minutes = 1; minutes <= stop.duration; minutes++) {
                        var position = [
                            stop.latitude +  (nextStop.latitude  - stop.latitude)  * (minutes/stop.duration),
                            stop.longitude + (nextStop.longitude - stop.longitude) * (minutes/stop.duration)
                        ];
                        animation.push(L.polyline(prevStops.concat([position]),options));
                    }
                }
                return animation;
            }
            var buildLabelAnimation = function() {
                var args = Array.prototype.slice.call(arguments),
                    labels = [];
                args.forEach(function(route) {
                    var minutes = 0;
                    route.forEach(function(stop,idx) {
                        if (idx !== 0 && idx < route.length-1) {
                            var label = new L.Label(
                                [stop.latitude,stop.longitude],
                                stop.stop,
                                {offset: new L.Point(stop.offset[0], stop.offset[1])}
                            );
                            map.addLayer(label);
                            labels.push({minutes: minutes, label: label, status: "shown"});
                            labels.push({minutes: minutes+50, label: label, status: "dimmed"});
                        }
                        minutes += stop.duration;
                    });
                });
                labels.sort(function(a,b) {return a.minutes - b.minutes;})
                return labels;
            }
            var labels = buildLabelAnimation(seaboard, southern);
            var labelAnimation = labels.slice(0);
            var routeAnimations = [
                buildPathAnimation(seaboard, {clickable: false, color: "#88020B", weight: 8, opacity: 1.0}),
                buildPathAnimation(southern, {clickable: false, color: "#106634", weight: 8, opacity: 1.0})
            ];
            var maxPathSteps = Math.min.apply(null,routeAnimations.map(function(animation) {return animation.length}));
            var maxLabelSteps = labels[labels.length-1].minutes;
            var maxSteps = Math.max(maxPathSteps, maxLabelSteps);
            var step = 0;
            var animateStep = function() {
                if (step > 0 && step < maxPathSteps) {
                    routeAnimations.forEach(function(animation) {
                        map.removeLayer(animation[step-1]);
                    });
                }
                if (step === maxSteps) {
                    routeAnimations.forEach(function(animation) {
                        map.removeLayer(animation[maxPathSteps-1]);
                    });
                    step = 0;
                    labelAnimation = labels.slice(0);
                    labelAnimation.forEach(function(label) {
                        label.label.setStatus("hidden");
                    });
                }
                while (labelAnimation.length && step === labelAnimation[0].minutes) {
                    var label = labelAnimation[0].label;
                    if (label.getStatus() === "shown" || step < maxPathSteps) {
                        label.setStatus(labelAnimation[0].status);
                    }
                    labelAnimation.shift();
                }
                if (step < maxPathSteps) {
                    routeAnimations.forEach(function(animation) {
                        map.addLayer(animation[step]);
                    });
                }
                return ++step === maxSteps;
            }
            var interval = null;
            var animate = function() {
                interval = window.setInterval(function() {
                    if (animateStep()) {
                        window.clearInterval(interval);
                        control.reset();
                    }
                }, 30);
            }
            var pause = function() {
                window.clearInterval(interval);
            }
            var control = L.control.animate({
                animateStartFn: animate,
                animateStopFn:  pause
            });
            control.addTo(map);
		},

		init: function() {
			this.render();
		}
	}

	controller.init();	
})();