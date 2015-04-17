  $(document).ready(function(){
	  	$('#name').spectrum();
});

var bio = {
 "name" : "Ryan Dymock",
 "role" : "Developer",
 "contacts" : {  
	 "mobile": "503-521-6869",
	 "email":  "Ryan.Dymock@escocorp.com",
	 "github": "RyanESCO",
	 "twitter": "@therealRyanDymock",
	 "location": "West Linn, Oregon, USA"
	 
 	},
 	"welcomeMessage" : "Welcome to my Interactive Online Resume.",
 "locations" : [
	 "Orem, UT, USA", "Scranton, PA, USA", "Altoona, PA, USA", "West Pittston, PA, USA", "West Linn, OR, USA"
	 
 ],
	
	 "skills" : [ 
 	"Programming", "JS", "Android", "Engineering", "CAD","Front End Web Development", "VBA"
	],
	"pictureURL" : "images/Dymock.JPG"
};

var education = {
	"schools" : [
	{
		"name": "Brigham Young University",
		"location" : "Provo, UT, US",
		"degree" : "BS",
		"majors" : ["Mechanical Engineering"],
		"dates" : "2009",
		"url": "http://www.byu.edu"
	}
	],
	"onlineCourses":[
	{	"title":"Javascript Basics",
		"school":"Udacity",
		"dates":"2015",
		"url":"http://www.udacity.com/course/ud804"
	},
	{	"title":"Developing Android Apps",
		"school":"Udacity",
		"dates":"2015",
		"url":"http://www.udacity.com/course/ud804"
	},
	{	"title":"Responsive Web Design Fundamentals",
		"school":"Udacity",
		"dates":"2015",
		"url":"http://www.udacity.com/course/ud804"
	},
	{	"title":"Software Development Process",
		"school":"Udacity",
		"dates":"2015",
		"url":"http://www.udacity.com/course/ud804"
	},
	{	"title":"Dreamweaver CC Essential Training",
		"school":"Lynda",
		"dates":"2015",
		"url":"http://www.lynda.com/Dreamweaver-tutorials/Dreamweaver-CC-Essential-Training/124084-2.html"
	},
		{	"title":"Web Design Fundamentals",
		"school":"Lynda",
		"dates":"2015",
		"url":"http://www.lynda.com/Web-Web-Design-tutorials/Web-Design-Fundamentals/177837-2.html"
	},
	{	"title":"CSS Fundamentals",
		"school":"Lynda",
		"dates":"2015",
		"url":"http://www.lynda.com/Web-Interactive-CSS-tutorials/CSS-Fundamentals/80436-2.html"
	},
	{	"title":"Fundamentals of Software Version Control",
		"school":"Lynda",
		"dates":"2015",
		"url":"http://www.lynda.com/Version-Control-tutorials/Fundamentals-Software-Version-Control/106788-2.html"
	}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "ESCO",
			"title" : "Design Engineer",
			"location" : "Portland, Oregon",
			"dates" : "2010-2014",
			"description" : "Design and Optimize Cable Shovel Dipper buckets, subassemblies, and parts."
		},
		{
			"employer" : "ESCO",
			"title" : "Application Developer",
			"location" : "Portland, Oregon",
			"dates" : "2014-Present",
			"description" : "Design, develop, mobile applications for Engineering Sales Support Team."
		}
	]
};


var projects = {
	"projects" : [
	{ 
		"title" : "Dipper Configurator",
		"dates" : "April 2014 - August 2014",
		"description" : "Developed Automation tools needed to reduce Dipper Bucket Engineering Time from 84 days to 5 days.",
		"images" : ["images/dipper_small.png","images/dragline.png","images/actual_dipper.png"]
	},
	{ 
		"title" : "ESCO RFQ demo app",
		"dates" : "December 2014 - January 2015",
		"description" : "Developed a prototype Android Application and updated workflow to streamline the Request For Quote process for ESCO Corporation.",
		"images" : ["images/RFQ_small.JPG","images/rfq.png"]
	},
	{ 
		"title" : "Mining Data Collection Prototype App",
		"dates" : "January 2015-February 2015",
		"description" : "Developed a prototype Android Application for mine site Data Collection.",
		"images" : ["images/truck_icon.png","images/cycle_time_app.png"]
	},
	{ 
		"title" : "Interative Product Catalog App",
		"dates" : "March 2015-April 2015",
		"description" : "Developed a web application to filter and display ESCO product information.",
		"images" : ["images/product_catalog.png","images/product_catalog_mreport.png","images/field_tablet.png"]
	}
	]
};

projects.display = function(){
	//encapsulation
	
	for(project in projects.projects){
		var projectToDisplay = projects.projects[project];
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%",projectToDisplay.title);
		var projectDates = HTMLprojectDates.replace("%data%",projectToDisplay.dates);
		var projectDescription = HTMLprojectDescription.replace("%data%",projectToDisplay.description);

		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDates);
		$(".project-entry:last").append(projectDescription);
		
		if(projectToDisplay.images.length > 0){
			$(".project-entry:last").append(HTMLbxSlider);
			for(image in projectToDisplay.images){
				$(".bxslider:last").append(HTMLbxSliderLi);	
				var projectImage = HTMLprojectImage.replace("%data%",projectToDisplay.images[image]);
				$("li:last").append(projectImage);			
			}
		}
		
		
	}
	
};

work.display = function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$("#workExperience").append(formattedDates);
		
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$("#workExperience").append(formattedLocation);
		
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$("#workExperience").append(formattedDescription);	
	}
};

bio.display = function(){
	for(var contact in bio.contacts){
	
		var formattedContact = HTMLcontactGeneric.replace("%data%",bio.contacts[contact]);
		formattedContact = formattedContact.replace("%contact%",contact);
		$("#topContacts").append(formattedContact);
	}
	
	HTMLbioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
	$("#header").append(HTMLbioPic);
	
	
	var welcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage); // = '<span class="welcome-message">%data%</span>';
	$("#header").append(welcomeMsg);
	
	if (bio.skills.length>0){
	
		$("#header").append(HTMLskillsStart);
		
		for(var i = 0; i < bio.skills.length; i++) {
		
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
		}
	}
	

	
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	
	var role = "Application Developer";
	var formattedRole = HTMLheaderRole = HTMLheaderRole.replace("%data%",role);
	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

};

education.display = function(){
	
	for(school in education.schools){
		
		var schoolToDisplay = education.schools[school];
		$("#education").append(HTMLschoolStart);
		
		var schoolName = HTMLschoolName.replace("%data%",schoolToDisplay.name);
		var schoolDegree = HTMLschoolDegree.replace("%data%",schoolToDisplay.degree);
		var schoolDates = HTMLschoolDates.replace("%data%",schoolToDisplay.dates);
		var schoolLocation = HTMLschoolLocation.replace("%data%",schoolToDisplay.location);
		
		$(".education-entry:last").append(schoolName + schoolDegree); //had to combine these because Chrome was closing the <a> after appending the first part
		$(".education-entry:last").append(schoolDates);
		$(".education-entry:last").append(schoolLocation);
		
		if(schoolToDisplay.majors.length > 0){
			for(major in schoolToDisplay.majors){
				console.log(schoolToDisplay.majors[major]);
				var schoolMajor = HTMLschoolMajor.replace("%data%",schoolToDisplay.majors[major]);
				$(".education-entry:last").append(schoolMajor);			
			}
		}
	}
	$("#education").append(HTMLonlineClasses);
	
	for(onlineCourse in education.onlineCourses){
		
		var courseToDisplay = education.onlineCourses[onlineCourse];		
		$("#education").append(HTMLschoolStart);
		
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",courseToDisplay.title);
		formattedOnlineTitle = formattedOnlineTitle.replace("%hrefdata%",courseToDisplay.url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",courseToDisplay.school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",courseToDisplay.dates);
		//var formattedOnlineURL = HTMLonlineURL.replace("%data%",courseToDisplay.url);
		
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);  //had to combine these because Chrome was closing the <a> after appending the first part
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append("<br>");
		//$(".education-entry:last").append(formattedOnlineURL);

	}
	
	
};

projects.display();
bio.display();
work.display();
education.display();


$(document).click(function(loc) { 

var x = loc.pageX;
var y = loc.pageY;

logClicks(x,y);

});


function locationizer(work_obj){
	var locationsArray = [];
	
	for(job in work_obj.jobs){
        locationsArray.push(work_obj.jobs[job].location);
    }
	
	return locationsArray;
}

function inName(){
	var oldName = document.getElementById("spectrumPlugin").innerText;
	console.log(oldName);
    var name = oldName.trim().split(" ");
	
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
	 name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
