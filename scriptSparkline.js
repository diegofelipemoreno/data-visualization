/************************* SPARKLINE *******************************/
(function () {
	var sparklineSelector = $('.js-sparkline');

	  sparklineSelector.sparkline('html',{
	      lineColor: 'dimgray',
	      fillColor: false,
	      defaultPixelsPerValue: 3,
	      spotColor: 'red',
	      minSpotColor: 'red',
	      maxSpotColor: 'red',
	      normalRangeMin: 82,
	      normalRangeMax: 180,
	  });
})();

/************************* MULTIPLE SPARKLINE *******************************/
(function () {
	var sparkline_default,
		sparkline_barclays,
		notBarclaysSelector = $('tr:not(.barclays) .sparkline'),
		barclaysSelector = $('tr.barclays .sparkline');

	sparkline_default = {
	    lineColor: '#fca44e',
	    fillColor: '#fcdea2',
	    spotColor: false,
	    minSpotColor: false,
	    maxSpotColor: false,
	    enableTagOptions: true,
	    tagOptionsPrefix: 'data-'
	};

	sparkline_barclays = Object.assign({}, sparkline_default, {
	    lineColor: '#745eb7',
	     fillColor: '#95a7e8',
	});

	notBarclaysSelector.sparkline('html',sparkline_default);
	barclaysSelector.sparkline('html',sparkline_barclays);
})();


/************************* ANNOTATION SPARKLINE *******************************/
(function (stock) {
	var CHART_MARKUP = '<div style="float:left"><div class="chart"></div><div class="info"></div></div><div style="float:left"><div class="details"></div></div> <br><hr><br><br><br><br>',
		sparkOptionsGeneral,
		closeArray,
		volumeArray,
		containerSelector = document.querySelector('#stockContainers'),
		stockChartSelector,
		stockInfoSelector,
		sparkOptionsForMix,
		stockDetails;

	sparkOptionsGeneral = {
		height: 49,
		width: 210,
		lineColor: '#006363',
    	fillColor: '#2D9999',
    	spotColor: false,
    	minSpotColor: '#CA0000',
    	maxSpotColor: '#CA0000',
    	disableTooltips: true,
    	defaultPixelsPerValue: 5,
    }

	sparkOptionsVolume = {
		height: 49,
		width: 210,
		type: 'bar'
    }

    sparkOptionsForMix = {
    	composite: true,
        lineColor: '#006363',
        fillColor: 'rgba(45, 153, 153, 0.3)',
        disableTooltips: true 
    }

	closeArray = stock.map(function (obj) {
			return obj.adj_close;
	});

	volumeArray = stock.map(function (obj) {
		return obj.volume;
	});

    function GeneralSparkline (idValue) {
    	var divElement = document.createElement('div'),
    		stockChartSelectorGraph;

    	divElement.setAttribute('id', idValue);
    	divElement.innerHTML = CHART_MARKUP;
		containerSelector.appendChild(divElement);
		stockChartSelector = $('#' + idValue + ' .chart');

		stockChartSelectorGraph = stockChartSelector.sparkline(closeArray, sparkOptionsGeneral);

		stockChartSelectorGraph.on('sparklineRegionChange', function(event) {
	        var idx = event.sparklines[0].getCurrentRegionFields().offset;

	        stockInfoSelector =  $('#' + idValue + ' .info');
	        stockDetails = $('#' + idValue + ' .details');

	        if (idx) {
	            stockInfoSelector.html(  'Week of ' +
	            						 stock[idx].date +
	            						 '&nbsp;&nbsp;&nbsp; Close: $' +
	            						 stock[idx].adj_close
	            					  );

	            stockDetails.html( 'Open: $' +
	            				   stock[idx].open + 
	            				   '<br/>'+
	            				   'High: $' +
	            				    stock[idx].high +
	            				    '<br/>' + 
	            				    'Low: $' +
	            				    stock[idx].low +
	            				    '<br/>' +
	            				    'Volume: ' +
	            				    stock[idx].volume
	            				);
	        }
	    });

	    stockChartSelectorGraph.on('mouseout', function(event) {
	    		stockInfoSelector.html('');
	    		stockDetails.html('');
	    });

	    stockChartSelectorGraph.on('sparklineClick', function(event) {
	    	var IFRAME_MARKUP = '<div id="dashboard"> Dashboard:    <div id="value" style="float:left"></div> </div><div id="widget" style="display:none"><iframe  width="100%" frameborder="0" style="background-color: transparent; width: 500px; height: 600px; background-position: initial initial; background-repeat: initial initial; "  src="http://www.wolframalpha.com/widget/input/?input=%5B%2F%2Fstock%3Aaapl%2F%2F%5D&id=a80a2e4562755353141f214b5ad28081"></iframe></div> <button class="widget-control" style="float:right">&times;</button> </div> ',
	    		divElement =  document.createElement('div'),
	    		sparkline = event.sparklines[0],
	    	    region = sparkline.getCurrentRegionFields(),
	    	    widgetSelector,
	    	    currentSparkline = event.currentTarget,
	    	    parentDivSparkline = currentSparkline.parentElement,
	    	    dashValue;

	    	if (null === parentDivSparkline.querySelector('#widget')) {
				divElement.innerHTML = IFRAME_MARKUP;
				parentDivSparkline.appendChild(divElement);
				widgetSelector = $('body #widget');
				widgetControlSelector = $('body .widget-control');
	    		widgetSelector.slideDown();
	    		widgetControlSelector.slideDown();
	    		dashValue = $('body #value');

	    		getData(stockChartSelector, dashValue);
	    	} else {
	    		widgetSelector = $('body #widget');

	    		if ('block' === widgetSelector.css('display')) {
	    			widgetSelector.slideDown();
	    			widgetControlSelector.slideUp();
	    		} else {
	    			widgetSelector.slideDown();
	    			widgetControlSelector.slideDown();
	    		}
	    	}

	    	widgetControlSelector.on('click', function () {
	    		widgetSelector.slideUp();
	    		widgetControlSelector.slideUp();
	    	})
	    });	

	    return stockChartSelector;
    };

    function VolumeSparkline (idValue) {
    	var divElement = document.createElement('div'),
    		stockChartSelectorVolume;

    	divElement.setAttribute('id', idValue);
    	divElement.innerHTML = CHART_MARKUP;
		containerSelector.appendChild(divElement);
		stockChartSelector = $('#' + idValue + ' .chart');
		stockInfoSelector =  $('#' + idValue + ' .info');
		stockDetails = $('#' + idValue + ' .details');

	    stockChartSelectorVolume = stockChartSelector.sparkline( volumeArray, sparkOptionsVolume );

	    return stockChartSelector;
    };

    function getData (chart, dashValue) {
    	var randomId = Math.floor(Math.random() * 9) + 1;

    	dashValue = dashValue ||  $('body #value');

    	setTimeout(function () {

    		$.ajax({ url: 'https://jsonplaceholder.typicode.com/posts/' + randomId, 
    				 success: function(data) {
    				 			//chart.sparkline(data);
    				 			dashValue.text(data.title);
								//console.log(data, randomId);
								//console.log(dashValue);
    							getData();
    						 },
                     dataType: 'json'
    			   });
    	}, 1000)
    }

    var general = new GeneralSparkline('general'); 
	var volume = new VolumeSparkline('volume'); 
	var mixSparkline = new VolumeSparkline('mix').sparkline(closeArray, sparkOptionsForMix);
 

})(stock);