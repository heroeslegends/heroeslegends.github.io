//var ss = '<img src="img/service.jpg" height="100%" width="100%" style="left:20%"><a href="ss.html" target="_blank">click here!</a>';


var ss = '<span class="popup-title">SUNDAY SERVICE</span><img src="img/service.jpg" style="width:90px; height:60px; margin-bottom:5px;"><p class="popup-text">Didn’t you enjoy our Friday gatherings? Want more? Let’s celebrate the Sabbath Day with an even bigger, awesome-r group at IFGF Pinole!</p></a>';

var cg = '<span class="popup-title">CAREGROUP</span><img src="img/cg.jpg" height="60px" width:"60px"><p class="popup-text">You wouldn’t want to miss this one! A gathering with not only delicious food, exciting games, spirit-lifting music but also your beloved brothers and sisters! Come on and join us!</p></a>';

var pm = '<span class="popup-title">PRAYER MEETING</span><img src="img/pm.jpg" height="60px" width:"60px"><p class="popup-text">There is no better way to connect with God than through prayer. Even better, connecting with him together with your friends! Come join us on our weekly prayer meeting!</p></a>';


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
	'08-02-2015':  {content: ss},
	'08-09-2015':  {content: ss},
	'08-16-2015':  {content: ss},
	'08-23-2015':  {content: ss},
	'08-30-2015':  {content: ss},

	'09-06-2015':  {content: ss},
	'09-13-2015':  {content: ss},
	'09-20-2015':  {content: ss},
	'09-27-2015':  {content: ss},

	//cg
	'08-07-2015':  {content: cg},
	'08-14-2015':  {content: cg},
	'08-21-2015':  {content: cg},
	'08-28-2015':  {content: cg},

	'09-04-2015':  {content: cg},
	'09-11-2015':  {content: cg},
	'09-18-2015':  {content: cg},
	'09-25-2015':  {content: cg},

	//pm
	'08-06-2015':  {content: pm},
	'08-13-2015':  {content: pm},
	'08-20-2015':  {content: pm},
	'08-27-2015':  {content: pm},

	'09-03-2015':  {content: pm},
	'09-10-2015':  {content: pm},
	'09-17-2015':  {content: pm},
	'09-24-2015':  {content: pm}	



};


//NOTE: setting height and width to 100% is important! for now, use js to replace 100% to 60px for popover
