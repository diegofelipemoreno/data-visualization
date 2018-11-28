var wins = [
				[
					[0,13],
					[1,11],
					[2,15],
					[3,15],
					[4,18],
					[5,21],
					[6,28]
				]
			];

var wins2 = [
				[ [0,28] ],
				[ [1,28] ],
				[ [2,21] ],
				[ [3,20] ],
				[ [4,19] ]
			];

var teams = [
				[0, "MCI"],
				[1, "MUN"],
				[2, "ARS"],
				[3, "TOT"],
				[4, "NEW"]
			];

/*-----------------------------------*/

var co2 = [
			[ 1959, 315.97 ],
			[ 1960, 316.91 ],
			[ 1961, 317.64 ],
			[ 1962, 318.45 ],
			[ 1963, 312.97 ],
			[ 1964, 311.91 ],
			[ 1965, 318.64 ],
			[ 1966, 313.45 ]
		  ]
var temp = [
		   		[ 1959,  0.0776 ],
		   		[ 1960,  0.0280 ],
		   		[ 1961,  0.1028 ],
		   		[ 1962,  0.1289 ],
		   		[ 1963,  0.0455 ],
		   		[ 1964,  0.0566 ],
		   		[ 1965,  0.1548 ],
		   		[ 1966,  0.2089 ] 
		   ]

var zero = [],
	yr;
for (yr = 1959; yr < 2012; yr ++) {
	zero.push([yr, 0]); 
};

/*-----------------------------------*/

var pieData = [
		      		{ data: [[0,22.4]], label: "Extreme Poverty",  pie: { explode : 50 } },
		      		{ data: [[1,77.6]] } 
		   	  ];
 
/*-----------------------------------*/

// Data en bruto
var scatterDataBrute = [
				    {  country: "Australia",
				       spending:  9.1,
				       life: 81.8  },
				    {  country: "Austria",
				       spending: 11.0,
				       life: 80.7  },
				    {  country: "Belgium",
				       spending: 5.5,
				       life: 60.3  },
				    {  country: "USA",
				       spending: 10.5,
				       life: 50.3  },
				    {  country: "Colombia",
				       spending: 3.5,
				       life: 45.3  },
				    {  country: "UK",
				       spending: 8.5,
				       life: 78.3  },
				  ] 
// Data formateada para q sea compatible con Flot;
var scatterData = [],
	i;
		
for (i = 0; i < scatterDataBrute.length; i++) {
	scatterData.push([
					  scatterDataBrute[i].spending,
					  scatterDataBrute[i].life	
					 ])
}


/* PROCESING DATA AND LOGIC FOR COUNTRIES BY CONTINENT */

var pacific_data = [
						{  country: "Australia",
						   spending: 9.1,
						   life: 81.8
						},
						{  country: "New Zealand",
						   spending: 10.1,
						   life: 81.0
						},
					];

var europe_data = [		
					{  country: "Austria",
					   spending: 11.0,
					   life: 80.7
					},
					{  country: "Belgium",
					   spending: 10.5,
					   life: 80.3 
					},
					{  country: "Czech Republic",
					   spending:  7.5,
					   life: 77.7
					},
				  ];

var us_data = [
				{  country: "United States",
				   spending: 17.6,
				   life: 78.7
				}
			  ];

var atlantis = [
						{  country: "capitalmal",
						   spending: undefined
						},
						{  country: undefined,
						   spending: 18.1,
						   life: 81.0
						},
					];

var africa = [];

var indefinidos = [undefined, undefined]

var vacio = [null];

var otro = [34];

var soyString = 'my string';

var indefinido = undefined;

var nulo = null;

var objeto = {};

var oceania = [ { id:0} ]

var ur = [ {  country: undefined,
				   spending: undefined,
				   life: undefined
				} ]

var worldData = { atlantis: atlantis,
				  pacific_data: pacific_data,
				  europe_data: europe_data,
				  us_data: us_data,
				  africa: africa,
				  vacio: vacio,
				  ur: ur,
				  otro: otro,
				  soyString: soyString,
				  indefinido: indefinido,
				  nulo: nulo,
				  objeto: objeto,
				  oceania: oceania,
				  indefinidos: indefinidos
			    };


var worldValidData = (function (worldData) {
	var DATA_MODEL = ['country', 'spending', 'life'],
		continent,
		currentContinent,
		oso;

	for(continent in worldData) {
		currentContinent = worldData[continent] || '';

		if ('Array' === currentContinent.constructor.name && currentContinent.length) {
			currentContinent.forEach(function (elem, index) {

				if (elem && Object.keys(elem).length) {
		
					if (Object.keys(elem).toString() !== DATA_MODEL.toString()) {

						if (currentContinent[index] === elem) {
							currentContinent.splice(index, 1);
						} else {
							delete worldData[continent];
						}

						if (!Object.keys(currentContinent).toString()) {
							delete worldData[continent];
						}
					}
				} else {
					delete worldData[continent];
				}	 
			});
		} else {
			delete worldData[continent];
		}
	}	

	(function _setDataValuesDefault(worldData) {
		
		Object.keys(worldData).forEach(function (propElem, index) {
			
			if (worldData[propElem].length) {
				_setDataValuesDefault(worldData[propElem]);
			} else {	

				if (Object.keys(worldData[propElem]).toString() === DATA_MODEL.toString()) {
					worldData[propElem]['spending'] = worldData[propElem]['spending'] || 0;
					worldData[propElem]['life'] = worldData[propElem]['life'] || 0;
					worldData[propElem]['country'] = worldData[propElem]['country'] || '';
				} 
			}
		})
	})(worldData);

	return worldData;
})(worldData);


var scatterDataByCountry = (function (worldValidData) {
	var currentContinent,
		outputObj,
	    continent,
	    arrayContinent,
	    outputArray = [];

	for(continent in worldValidData) {
		arrayContinent = worldValidData[continent];
		currentContinent = [];

		arrayContinent.forEach(function (elem) {
			currentContinent.push([elem.spending, elem.life]);
			outputObj = {
				data: currentContinent, 
				label: continent,
				points: {show: true}
			}
		});
		outputArray.push(outputObj);
	}

	return outputArray;
})(worldValidData);


//  BUBBLE CHART WITH X/Y DATA

var katrina = [
		{ north: 23.2, west: 75.5, wind:  35 },

	    { north: 24.0, west: 76.4, wind:  35 },

	    { north: 25.2, west: 77.0, wind:  45 },

	    { north: 26.0, west: 77.6, wind:  45 },

	    { north: 26.2, west: 78.7, wind:  50 },

	    { north: 26.1, west: 79.9, wind:  75 },

	    { north: 25.5, west: 80.7, wind:  75 },

	    { north: 25.1, west: 82.2, wind: 100 },

	    { north: 24.8, west: 82.9, wind: 100 },

	    { north: 24.4, west: 84.0, wind: 110 },

	    { north: 24.4, west: 84.6, wind: 115 },

	    { north: 25.1, west: 86.8, wind: 145 },

	    { north: 25.7, west: 87.7, wind: 160 },

	    { north: 26.5, west: 88.6, wind: 175 },

	    { north: 27.9, west: 89.5, wind: 160 },

	    { north: 29.7, west: 89.6, wind: 135 },

	    { north: 30.8, west: 89.6, wind: 105 },

	    { north: 31.9, west: 89.6, wind:  75 },

	    { north: 32.9, west: 88.9, wind:  65 },

	    { north: 34.7, west: 88.4, wind:  50 },
	]
