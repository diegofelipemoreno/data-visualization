Flotr.draw(	document.getElementById('chart'), wins2,
	{	title: 'Premier League Wins (2011-2012)',
		colors: ['#89AFD2', '#1D1D1D', '#DF021D', '#0E204B', '#E67840'],
		bars: {
			show: true,
			barWidth: 0.5,
			shadowSize: 0,
			fillOpacity: 1,
			lineWidth: 0
		},
		yaxis: {
			min: 0,
			tickDecimals: 0
		},
		xaxis: {
			ticks: teams
		},
		grid: {
			horizontalLines: false,
			verticalLines: false
		}
	}
)

/*---------------------------------------------------------*/

Flotr.draw(	
	document.getElementById('line'), 
	[
		{ data: zero,
		  label: '20<sup>th</sup>-Century Baseline Temperature',
		   lines: {show:true, lineWidth: 1},
		  shadowSize: 1,
		   yaxis: 2,
		  color: '#545454'
		},
		{  data: temp,
		   yaxis: 2,	
		   label: 'Yearly Temperature Difference (°C)',
		   lines: { show: true },	
		},
		{ data: co2,
		  yaxis: 1,	
		  label: 'CO<sub>2</sub> Concentration (ppm)',
		  lines: { show: true }
		},
	], 
	{
		title: 'Global Temperature and CO<sub>2</sub> Concentration (NOAA Data)',
		grid: { horizontalLines: false,
				verticalLines: false },
		y2axis: { min: -0.15,
				  max: 0.69,
				  tickFormatter: function(val) {return val+" °C";}
				},
		yaxis: {min: 300, max: 400}
	}
)

/*---------------------------------------------------------*/

Flotr.draw(	document.getElementById('pie'), pieData,
	{	title: 'pie',
		pie: {
			show: true
		},
		yaxis: {
			showLabels: false
		},
		xaxis: {
			showLabels: false
		},
		grid: {
			horizontalLines: false, 
			verticalLines: false
		},
		HtmlText : false,
		legend : {
		  position : 'se',
		  backgroundColor : '#D2E8FF'
		}
	}
)

/*
  { data : d1, label : 'Comedy' },
  { data : d2, label : 'Action' },
  { data : d3, label : 'Romance',
    pie : {
      explode : 50
    }
  },
  { data : d4, label : 'Drama' }
], {
  HtmlText : false,
  grid : {
    verticalLines : false,
    horizontalLines : false
  },
  xaxis : { showLabels : false },
  yaxis : { showLabels : false },
  pie : {
    show : true, 
    explode : 6
  },
  mouse : { track : true },
  legend : {
    position : 'se',
    backgroundColor : '#D2E8FF'
  }
}
*/

/*---------------------------------------------------------*/

Flotr.draw(	document.getElementById('scatterChart'),
			[ 
				{ data: scatterData,
				  points: { show: true }
				}
			],
			{ 
			  title: 'Life Expectancy vs. Health-Care Spending',
			  subtitle: '(by country, 2010 OECD data)',
			  xaxis: { min: 0, max: 15, tickDecimals: 0, title: 'Spending as Percentage of GDP',  
			  		   tickFormatter: function(val) {
			  		      return val + '%';
			  		   }
			  		 },
			  yaxis: {min: 40, max: 100, tickDecimals: 0, title: 'Years'},
			  HtmlText : false,    
			} 
)

Flotr.draw(	document.getElementById('scatterChart2'),
			scatterDataByCountry,
			{ 
			  title: 'Life Expectancy vs. Health-Care Spending',
			  colors: ['blue', 'red', 'green', 'grey', 'pink'],
			  subtitle: '(by country, 2010 OECD data)',
			  xaxis: { min: 5, max: 25, tickDecimals: 0, title: 'Spending as Percentage of GDP',  
			  		   tickFormatter: function(val) {
			  		      return val + '%';
			  		   }
			  		 },
			  yaxis: {min: 70, max: 85, tickDecimals: 0, title: 'Years'},
			  HtmlText : false, 
			  legend : {
			    position : 'ne',
			    backgroundColor : '#D2E8FF'
			  }   
			} 
)


/*---------------------------------------------------------*/

function get_points(source_array, filter_function) {
	var result = [],
		i;

	for (i = 0; i< source_array.length; i++) {

	    if ( (typeof filter_function === "undefined") || (typeof filter_function !== "function") || filter_function(source_array[i]) ) {
	        result.push([ source_array[i].west * -1,
	                      source_array[i].north,
	                      source_array[i].wind
	                    ]);
	    }
	}
	return result;
}

var importantCities = get_points(katrina, function(obs) {
    return (obs.wind >= 74) && (obs.wind < 95); 
});
console.log(importantCities);

Flotr.draw( document.getElementById("bubbleChart"),
		    [
		    	{ data: get_points(katrina, function (obs) {
			    		return (obs.wind > 39);
			    	}),
			        color: 'yellow',
			        bubbles: {show:true, baseRadius: 0.3, lineWidth: 1, fillOpacity: 0.5}
		    	},
    	    	{ data: get_points(katrina, function (obs) {
    		    		return (obs.wind > 80);
    		    	}),
    		        color: 'orange',
    		        label: 'Category 5',
    		        bubbles: {show:true, baseRadius: 0.3, lineWidth: 1, fillOpacity: 0.5}
    	    	},
    	    	{ data: get_points(katrina, function (obs) {
    		    		return (obs.wind > 120);
    		    	}),
    		        color: 'red',
    		        label: 'Category 6',
    		        bubbles: {show:true, baseRadius: 0.3, lineWidth: 1, fillOpacity: 0.5}
    	    	},

    	    	{ data: importantCities,
    		        color: 'blue',
    		        label: 'Category 7',
    		        bubbles: {show:true, baseRadius: 0.3, lineWidth: 1, fillOpacity: 0.5}
    	    	}
		    ],
		    {	
		    	grid: {
		    		horizontalLines: false,
		    		verticalLines: false
		    	},
		    	yaxis: { showLabels: false, min: 23.607, max: 33.657},
		    	xaxis: { showLabels: false, min: -94.298, max: -77.586},
		    	legend: {position: 'sw'}
		  	}
		  );
