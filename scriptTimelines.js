/*------------------- TIMELINES ---------------------*/
(function timeline () {
	let controller,
		model,
		view;

	model = function () {
		return plays;
	}
	
	controller = function () {
		let init,
			modelDates = model(),
			viewDates = view();

		getEventDate = function () {
		  let eventsData;

		  eventsData = modelDates.map((elem, index) => {
		  	let events = {},
		  		initialDate,
		  		finalDate;

		  	events['title'] = elem.play;

		  	if (elem.date.indexOf('-') !== -1) {
		  		initialDate = elem.date.split('-')[0] || '';
		  		finalDate = elem.date.split('-')[1] || '';
		  		events['dates'] = [new Date(initialDate, 0, 1), new Date(finalDate, 11, 31)];
		  	} else {
		  		events['dates'] = [new Date(elem.date, 0, 1), new Date(elem.date, 11, 31)];
		  	}
		  	return events;
		  }); 
		  //console.log(eventsData);
		  viewDates.render(eventsData);
		}

		init = function () {
			getEventDate();
		} 
 		
 		init();
	}

	view = function() {
		let render,
			publicRetun;

		render = function (dateData) {
			let timeLineSelector = $('#timeline'),
				timeline = new Chronoline(timeLineSelector.get(0), dateData, {
					defaultStartDate: new Date(1589, 0, 1),
					markToday: false,
					hashInterval: function(date) { return date.getDate() === 1; },
					labelInterval: function(date) { return date.getMonth() === 0 && date.getDate() === 1; },
					labelFormat: "%Y",
					subLabel: null, 
					subSubLabel: null,
					timelinePadding: DAY_IN_MILLISECONDS * 366 / 4,
					tooltips: true,
					visibleSpan: DAY_IN_MILLISECONDS * 366 * 5,
					scrollLeft: function(date) { return new Date(date.getFullYear() - 1, date.getMonth(), date.getDate()); },
					scrollRight: function(date) {    return new Date(date.getFullYear() + 1, date.getMonth(), date.getDate()); },
					animated: true,
					draggable: true,
					tooltips: true,
					eventAttrs: {  // attrs for the bars and circles of the events
					    fill: "#ffa44f",
					    stroke: "#ffa44f",
					    "stroke-width": 1 },
					eventHeight: 15
				}); 
		}

		publicRetun = {
			render: render
		}

		return publicRetun;
	}
	
	controller();
})();

/*------------------- TIMELINE CUSTOM ---------------------*/

(function timelineCustom () {
	let controller,
		model,
		view;

	model = {
		descTerms: {'record': 'First official record',
					 'published': 'First published',
					 'performance': 'First recorded performance',
					 'evidence': 'Evidence' 
					}, 
		plays: plays
	},
	
	controller = {

		getPlaysModel: function () {
		  return model.plays;
		},

		getDescriptionsModel: function (play) {
			let modelDescriptions = model.descTerms,
				descriptionData = new Map(),
				descriptionLabel;

			Object.keys(play).forEach((item, index) => {

				if (modelDescriptions[item]) {
					descriptionLabel = modelDescriptions[item];
					descriptionData.set(descriptionLabel, play[item]);
				}
			})

			return descriptionData;
		},

		init: function () {
			view.init();
		} 
	}

	view = {

		render: function () {
			let timeLineSelector = document.querySelector('#timelineCustom'),
				list,
				timeInitial,
				timeFinal,
				quote,
				initialDate,
				finalDate,
				descriptionsData,
				descripList,
				descripTitle,
				descripContent,
				playData = controller.getPlaysModel();

			playData.forEach((elem) => {
				descriptionsData = controller.getDescriptionsModel(elem);
				descripList = document.createElement('dl');
				list = document.createElement('li');
				quote = document.createElement('cite');
				timeInitial = document.createElement('time');
				list.className = 'timeline';
				initialDate = elem.date.split('-')[0] || '';
				timeInitial.textContent = initialDate;
				quote.textContent = elem.play;
				list.appendChild(timeInitial);
				
				descriptionsData && descriptionsData.forEach((value, key) => {
					descripTitle = document.createElement('dt');
					descripContent = document.createElement('dd');
					descripTitle.textContent = key;
					descripContent.textContent = value;
					descripList.appendChild(descripTitle);
					descripList.appendChild(descripContent);
				});

				if (elem.date.indexOf('-') !== -1) {
					finalDate = elem.date.split('-')[1] || '';
					timeFinal = document.createElement('time');
					timeFinal.textContent = finalDate;
					list.appendChild(timeFinal);
				}
				list.appendChild(quote);
				list.appendChild(descripList);
				timeLineSelector.appendChild(list);	
			});	
		},

		triggers: function () {
			let timelineListSelector = document.querySelectorAll('.timeline'),
				timelineListArray = Array.from(timelineListSelector),
				currentList;

			function _resetTimelineLists () {
				timelineListArray.forEach((elem) => { elem.classList.remove('expanded')});
			}	

			timelineListArray.forEach((elem, index) => {
				elem.addEventListener('click', (event) => {
					currentList = event.currentTarget;
					if (currentList.classList.contains('expanded')) {
						_resetTimelineLists();
					} else {
						_resetTimelineLists();
						currentList.classList.add('expanded');
					}
				});
			});
		},

		init() {
			this.render();
			this.triggers();
		}
	}
	
	controller.init();
})();


/*------------------- TIMELINE TIMELINE.JS ---------------------*/

(function timelineJs() {
	let controller,
		model,
		view;

	model = { 
		playsTwo: playsTwo,
		timelineData: {
			headline: "Chronology of Shakespeare's Plays",
			type: "default",
			date: []
		}
	},
	
	controller = {

		getTimelineData: function () {
			let plays = this.getPlaysModel(),
				timeLineData = model.timelineData,
				date,
				start = '',
				end = '';

			plays.forEach((play) => {
				date = play.date;
				start = date.split('-')[0] || '';

				if (date.indexOf('-') !== -1) {
				   end = date.split('-')[1] || '';
				} 

				timeLineData.date.push({
					startDate: start,
					endDate: end,
					headline: play.play,
					text: play.evidence,
					tag: play.genre,
					asset: { media: play.media,
					         credit: play.credit,
					         caption: play.caption
					       }
				});
			});
		  return timeLineData;
		},

		getPlaysModel: function () {
		  return model.playsTwo;
		},

		init: function () {
			view.init();
		} 
	}

	view = {

		render: function () {
			let timeLineData = controller.getTimelineData(),
				timelineConfig = {	type: 'timeline',
									width: '100%',
									height: '600', 
									end:new Date(1589,0,1),
									hash_bookmark: true,
									source: { timeline: timeLineData},
									embed_id: 'timelineJs' ,
									track_events: ['back_to_start', 'nav_next', 'nav_previous', 'zoom_in', 'zoom_out']
				},
			
			timelinejs = new VMM.Timeline(timelineConfig.embed_id,'100%','600px');
			timelinejs.init(timelineConfig);
	
		},

		init: function() {
			this.render();
		}
	}
	
	controller.init();
})();
