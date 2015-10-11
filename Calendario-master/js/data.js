//var ss = '<img src="img/service.jpg" height="100%" width="100%" style="left:20%"><a href="ss.html" target="_blank">click here!</a>';


var ss = '<span class="popup-title">SUNDAY SERVICE</span><img src="img/calendarimg/KT - Church.png" class="event-img"><img src="img/calendarimg/KT - Church.png" class="popup-img"><p class="popup-text"><span>2885 Pinole Valley Rd, Pinole, CA<br><br>Every Sunday at 2:15.</p></span>';

var cg = '<span class="popup-title">CAREGROUP</span><img src="img/calendarimg/KT - Caregroup.png" class="event-img"><img src="img/calendarimg/KT - Caregroup.png" class="popup-img"><p class="popup-text"><span>Food. Worship. Fellowship.<br><br>Every Friday at 6 in various locations.</p></span>';

var pm = '<span class="popup-title">PRAYER MEETING</span><img src="img/calendarimg/KT - Prayer Meeting.png" class="event-img"><img src="img/calendarimg/KT - Prayer Meeting.png" class="popup-img"><p class="popup-text"><span>A safe place to connect and open up.<br><br>Connect with your Care Group for more information.</p></span>';

var worshipNight = '<span class="popup-title">WORSHIP NIGHT</span><img src="img/calendarimg/KT - Worship Night.png" class="event-img"><img src="img/calendarimg/KT - Worship Night.png" class="popup-img"><p class="popup-text"><span>Our church is teaming up with Bethel Church California for a night of praise and worship. We invite all Indonesian students and young professionals in the Bay Area. You don\'t want to miss this!<br><br>Venue: 120 Old Country Rd, Brisbane, CA<br><br>Connect with your Care Group for more information.</p></span>';

var ifgfAnn = '<span class="popup-title">IFGF PINOLE ANNIVERSARY DINNER</span><img src="img/calendarimg/KT - Anniversary Dinner.png" class="event-img"><img src="img/calendarimg/KT - Anniversary Dinner.png" class="popup-img"><p class="popup-text"><span>Celebrate our church\'s anniversary with us!<br><br>Connect with your Care Group for more information.</p></span>';

var ifgfConf = '<span class="popup-title">IFGF CONFERENCE 2015 - WEST COAST</span><img src="img/calendarimg/KT - IFGF Conference.png" class="event-img"><img src="img/calendarimg/KT - IFGF Conference.png" class="popup-img"><p class="popup-text"><span>Experience breakthroughs with fellow IFGF churches this Thanksgiving<br><br>Speakers: Joey Bonifacio, Joseph Bonifacio, Jimmy Oentoro<br><br><a href="http://ifgfla.org/tgr">Click here for more information</a></p></span>';


var codropsEvents = {
	// '11-21-2013' : '<a href="http://www.wincalendar.com/Great-American-Smokeout">Great American Smokeout</a>',
	// '11-13-2013' : '<span>Ashura [An example of an complete date event (11-13-2013)]</span>',
	// '11-11-2013' : '<a href="http://www.wincalendar.com/Remembrance-Day">Remembrance Day (Canada)</a>',
	// '11-04-2013' : '<span>Islamic New Year</span>',
	// '11-03-2013' : '<a href="http://www.wincalendar.com/Daylight-Saving-Time-Ends">Daylight Saving Time Ends</a>',
	// '11-01-2013' : '<span>All Saints Day</span>',
	// '12-25-YYYY' : '<span>Christmas Day [Date : 12-25-YYYY]</span>',
	// '01-01-YYYY' : '<span>New Year\'s Eve (Event repeats every YEAR)</span>',
	// 'MM-02-2013' : '<span>Yeah, Monthly [MM-02-2013]</span>',
	// 'MM-07-YYYY' : '<span>[MM-07-YYYY], Monthly and Yearly</span>',
	// '11-DD-2014' : {content : '<span>Ex: {\'11-DD-2014\' : {content : \'Something\', endDate : 20}}</span>', endDate : 20},
	// '02-DD-2014' : {content : '<span>Ex: {\'02-DD-2014\' : {content : \'Something\', startDate : 10, endDate : 20}}</span>', startDate : 10, endDate : 20},
	// '12-DD-YYYY' : '<span>[12-DD-YYYY] Whole month and Year</span>',
	// '10-16-2014': ['<a href="">event one</a>', '<span>event two</span>'],
	// '10-DD-YYYY' : [
	// 	{content : '<span>Ex: {\'10-DD-2014\' : {content : \'Something\', startDate : 10, endDate : 20}}</span>', startDate : 10, endDate : 20},
	// 	{content : '<span>Ex: {\'10-DD-2014\' : {content : \'Something\', endDate : 20}}</span>', endDate: 20},
	// ],

	//ss
	// '08-02-2015':  {content: ss},
	// '08-09-2015':  {content: ss},
	// '08-16-2015':  {content: ss},
	// '08-23-2015':  {content: ss},
	// '08-30-2015':  {content: ss},

	'10-04-2015':  {content: ss},
	'10-11-2015':  {content: ss},
	'10-18-2015':  {content: ss},
	'10-25-2015':  {content: ss},
	'11-01-2015': {content: ss},
	'11-08-2015': {content: ss},
	'11-15-2015': {content: ss},
	'11-22-2015': {content: ss},
	'11-29-2015': {content: ss},
	'12-06-2015': {content: ss},
	'12-13-2015': {content: ss},
	'12-20-2015': {content: ss},
	'12-27-2015': {content: ss},


	//cg
	// '08-07-2015':  {content: cg},
	// '08-14-2015':  {content: cg},
	// '08-21-2015':  {content: cg},
	// '08-28-2015':  {content: cg},

	'10-02-2015':  {content: cg},
	'10-09-2015':  {content: cg},
	'10-16-2015':  {content: cg},
	'10-23-2015':  {content: cg},
	'10-30-2015':  {content: cg},
	'11-13-2015':  {content: cg},
	'11-20-2015':  {content: cg},
	'12-04-2015':  {content: cg},

	//pm
	// '08-06-2015':  {content: pm},
	// '08-13-2015':  {content: pm},
	// '08-20-2015':  {content: pm},
	// '08-27-2015':  {content: pm},

	// '09-03-2015':  {content: pm},
	// '09-10-2015':  {content: pm},
	// '09-17-2015':  {content: pm},
	// '09-24-2015':  {content: pm}	

	'11-06-2015': {content: worshipNight},
	'11-14-2015': {content: ifgfAnn},
	'11-26-2015': {content: ifgfConf},
	'11-27-2015': {content: ifgfConf},
	'11-28-2015': {content: ifgfConf},

};


//NOTE: setting height and width to 100% is important! for now, use js to replace 100% to 60px for popover
