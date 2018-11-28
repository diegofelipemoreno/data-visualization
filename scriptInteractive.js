/************************* Interactive DATA CHART CHART CONTENT *******************************/

(function (source) {
	var	arrayInput,
		chartSelector = document.querySelector('#chartDynamic'),
		filterData,
		filteredData,
		init,
		inputsSelectors,
		plotObj,
		render,
		setIdSelectors,
		toogleInputs;

	inputsSelectors = document.querySelectorAll('#controls input');
	arrayInput = Array.prototype.slice.call(inputsSelectors);

	filterData = function (source) {
		var filteredObj,
			reformattedArray,
			currentObj;

		reformattedArray = source.reduce(function (previous, current) {
			   currentObj = {};

	           if (current.show) {
	           	    currentObj['data'] = current.data;
	           	    currentObj['color'] = current.color;
	           		previous.push(currentObj);
	           }
	           return previous;
	     },[]);
		
		return reformattedArray;
	},

	setIdSelectors = function () {
		arrayInput.forEach(function (elem, index) {
			elem.setAttribute('id', index);
		});
	},

	toogleInputs = function () {
		var currentTarget,
			currentId;

		arrayInput.forEach(function (elem, index) {

			elem.addEventListener('click', function (event) {
			   currentTarget = event.target;
			   currentId = currentTarget.getAttribute('id');
			   source[currentId].show = !source[currentId].show;
			   render();
			});
		}); 
	},

	render = function () {
		filteredData = filterData(source);
		plotObj = $.plot(chartSelector, filteredData); 
		plotObj.setData(filteredData);
		plotObj.draw();
	},

	init = function () {
		setIdSelectors();
		render();
		toogleInputs();
	}

	init();

})(source);


/************************* Interactive DATA CHART COMPARE *******************************/
(function (modelChartDataCompare) {
	var render,
		chartCompareSelector = document.querySelector('#chartCompare'),
		marker = document.querySelector('#marker'),
		interactions,
		mainPlot;

	render = function () {
		var _renderCharts,
			_createChartContainers,
			_renderDynamicDataHtml,
			lastChart,

		_renderCharts = function (div, arrayData, index) {
			var yInfoChart = function(val) {return ''; };
				
			if (modelChartDataCompare.length -1 === index) {
				yInfoChart = '';
			}

			mainPlot = $.plot(div, arrayData, { 
				series: {lines: {fill: true, lineWidth: 1}, shadowSize: 0},
				 xaxis: {show: true, labelHeight: 0, min:1960, max: 2011, tickFormatter: yInfoChart},
				 yaxis: {show: false, min: 0, max: 60},
				 grid:  {show: true, margin: 0, borderWidth: 0, borderColor: null, labelMargin: 0, axisMargin: 0, minBorderMargin: 0, hoverable: true, autoHighlight: false},
			}); 
		},

		_renderLegendCharts = function (div, regionLabel) {
			var divElement,
				textNode;

			divElement = document.createElement('div');
			divElement.classList.value = 'legendContainer';
			paragraphElement = document.createElement('p');
			paragraphElement.classList.value = 'legendRegion';
			textNode = document.createTextNode(regionLabel);
			paragraphElement.appendChild(textNode);
			div.appendChild(paragraphElement);
		},

		_renderDynamicDataHtml = function (arrayRegion) {
			var divElement = document.createElement('div'),
				spanElement,
				textNodeYear;

			arrayRegion.forEach(function (elem) {
				divElement.classList.value = 'markerDataContainer';
				spanElement = document.createElement('span');
				spanElement.classList.value = 'js-yearData';
				textNodeYear = document.createTextNode(elem[0][0]);
				spanElement.appendChild(textNodeYear);
				divElement.appendChild(spanElement);
				marker.appendChild(divElement);
			});			
		}

		_createChartContainers = (function () {
			var divElement,
				regionLabel,
				regionData,
				divContainerElement;

			if (modelChartDataCompare.length) {
				modelChartDataCompare.forEach(function (region, index) {
					divElement = document.createElement('div');
					divContainerElement = document.createElement('div');
					divContainerElement.classList.value = 'chartContainer';
					divElement.classList.value = 'chart';
					regionLabel = region.label;
					regionData = region.data;
					divElement.style.height = '60px';
					divElement.style.width = '600px';
					divContainerElement.appendChild(divElement);
					chartCompareSelector.appendChild(divContainerElement);

					_renderCharts(divElement, [regionData], index);
					_renderLegendCharts(divContainerElement, regionLabel);
					_renderDynamicDataHtml([regionData]);
				});
			}
		})();
	},

	interactions = function () {
		var _mousemoveMarkerAction,
			_setValueDynamicData;

		_mousemoveMarkerAction = (function () {
			var chartDiv = document.querySelector('.chart'),
				chartWidth = chartDiv.getBoundingClientRect().width,
				chartX = chartDiv.getBoundingClientRect().x,
				chartSelector =  document.querySelector('#chartCompare'),
				markerWidth = marker.offsetWidth,
				currentXposition,
				xLimit;

			chartSelector.addEventListener('mousemove', function (event) {
				currentXposition = event.screenX;
				xLimit = chartWidth + chartX;	

				if (currentXposition >= chartX) {
					marker.style.visibility = 'visible';
					marker.style.left = currentXposition - chartX - markerWidth + 'px';
				}

				if (currentXposition <= xLimit) {
					marker.style.visibility = 'visible';
				} else {
					marker.style.left = chartWidth + 'px';
				}
				_setValueDynamicData();
			});

			chartSelector.addEventListener('mouseout', function (event) {
				marker.style.visibility = 'hidden';
			});	
		})();

		_setValueDynamicData = function () {
			var yearDataSeletor = document.querySelectorAll('.js-yearData'),
				arrayYearData = Array.prototype.slice.call(yearDataSeletor),
				yearValue,
				currentYearScale,
				currentYearValue,
				makerLeftPosition,
				makerLeftPositionNumber,
				scaleXChart = mainPlot.getAxes().xaxis.scale,
				plotDataMin = mainPlot.getAxes().xaxis.datamin,
				modelChart,
				modelChartYear,
				modelChartPercent,
				eachModelChart;

			if (arrayYearData.length) {

				arrayYearData.forEach(function(elem, index) {
					makerLeftPosition = marker.style.left.split('px')[0] || 0,
					makerLeftPositionNumber = parseInt(makerLeftPosition);	
					yearValue = Math.round(plotDataMin);
					currentYearScale = Math.round(makerLeftPositionNumber / scaleXChart);
					currentYearValue = yearValue + currentYearScale;
					modelChart = modelChartDataCompare[index];
					eachModelChart = modelChart.data;

					eachModelChart.forEach(function(subElem){
					  modelChartYear = subElem[0];
					  modelChartPercent = subElem[1];

					  if (modelChartYear === currentYearValue) {
					  		elem.textContent = currentYearValue + ' ' +  Math.round(modelChartPercent) + '%';
					  }
					});

				});
			}
		}
	},

	init = function () {
		render();
		interactions();
	},

	init();

})(modelChartDataCompare);


/************************* Interactive AJAX DATA *******************************/

(function () {
	var	controller,
		model,
		view;

	model = function () {
		var publicReturn = {},
			getAllCountries,
			getAllAvailableRegions;

		getAllCountries = function () {
			return new Promise((resolve, reject) => {
			  var URL_REQUEST = 'http://api.worldbank.org/regions/?prefix=?',
			  	  deferredRegionsRequest;

			  deferredRegionsRequest = $.getJSON( URL_REQUEST,
			  								    {format: 'jsonp'}
			  								  );

			  deferredRegionsRequest.done(function(response) {
			  	resolve(response);
			  });

			  deferredRegionsRequest.fail(function() {
			  	reject(false);
			  });
			});
		},

		getAllAvailableRegions = function (validCountries) {
			return new Promise((resolve, reject) => {
			  var URL_REQUEST_PREFIX = 'http://api.worldbank.org/countries/',
			  	  URL_REQUEST_SUFFIX = '/indicators/NY.GDP.MKTP.CD',
			  	  URL_REQUEST_SUFFIX_X = '?prefix=?',
			  	  fullUrlRequest,
			  	  deferredRegionsRequestm
			  	  arrayRegions = [];

			  validCountries.forEach(function (elem, index) {
			  		fullUrlRequest = URL_REQUEST_PREFIX + elem.code + URL_REQUEST_SUFFIX + URL_REQUEST_SUFFIX_X;
			  		deferredRegionsRequest = $.getJSON( fullUrlRequest,
			  										    { format: 'jsonp',
			  										      per_page: 9999 
			  											}
			  										  );

			  		deferredRegionsRequest.done(function(response) {
			  			var flotDataDate,
			  				flotDataValue,
			  				flotDataArray = [],
			  				rawDataArray;

			  			elem['rawData'] = response[1] || [];
			  			rawDataArray = elem['rawData'];

			  			if (rawDataArray) {			
			  				rawDataArray.forEach(function (elemRaw) {
			  					flotDataDate = elemRaw['date'] || '';
			  					flotDataValue = elemRaw['value']/1e12 || '';
			  					flotDataArray.push([flotDataDate, flotDataValue]);
			  				});
			  				elem['flotData'] = flotDataArray;
			  			}
			  			arrayRegions.push(elem);

			  			if (validCountries.length === arrayRegions.length) {
			  				resolve(arrayRegions);
			  			}
			  		});

			  		deferredRegionsRequest.fail(function() {
			  			reject(false);
			  		});
			  });	  
			});
		};

		publicReturn = {
			getAllCountries: getAllCountries,
			getAllAvailableRegions: getAllAvailableRegions
		}

		return publicReturn;
	},

	controller = function () {
		var _filterValidCountries,
			_getAvailableRegions,
			init;

		_filterValidCountries = function () {
			var getAllCountries = model().getAllCountries,
				validCountries;

			getAllCountries().then(function(allCountries) {
				var arrayCountries = allCountries[1] || '',
					countryObject = [];

				if (arrayCountries) {
					validCountries = arrayCountries.reduce(function (previous, current) {
						if (current['id']) {
							previous.push(current);
						}

						return previous;
					}, []);
				}

				return _filterAvailableRegions(validCountries);
			});
		},

		_filterAvailableRegions = function (validCountries) {
			var getAllAvailableRegions = model().getAllAvailableRegions(validCountries);

			getAllAvailableRegions.then(function(regions) {
				view().render(regions);
			});
		},

		init = function() {
			_filterValidCountries();
		}

		init();
	},

	view = function () {
		var render,
			publicReturn;

		render = function (regions) {

			$.plot($('#chartAjax'),
                regions.map(function(regionObj) {
                    return {
                        label: regionObj.name,
                        data:  regionObj.flotData
                    };
                }),
                { legend: { position: 'nw'} }
			);
		}

		publicReturn = {
			render: render
		}

		return publicReturn;
	};

	controller();
})();