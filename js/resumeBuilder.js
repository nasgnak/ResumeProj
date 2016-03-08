

var bio = {
  "name": "Kangsan Kim",
  "role": "Front-End Padawan",
  "contacts": {
    "mobile": "000-000-0000",
    "email": "kangsankim@gmail.com",
    "github": "nasgnak",
    "githubLink": "https://github.com/nasgnak",
    "twitter": "@thekangsan",
    "twitterHandle": "https://twitter.com/thekangsan",
    "location": "Gardena, CA"
    },
  "welcomeMessage": "Hey! Welcome to my site. Thanks for checking it out!",
  "skills": ["Jedi mind tricks", "lip sync", "jumping jacks", "karate chop"],
  "biopic": "images/headshot.jpg"
};

var work = {
  "jobs" : [
    {
    "title":"Contract Finance Employee",
    "employer":"Accountemps",
    "dates": "2016-Current",
    "description": "Ensure all timesheets are documented properly and assist in the preparation of budget reports.",
    "url": "https://www.roberthalf.com/accountemps",
    "location": "Torrance, CA"
    },
		
    {
    "title": "Certified Personal Trainer",
    "employer": "Self-Employed",
    "dates": "2014-2015",
    "description": "Teach classes and provide semi-private and private personal training through Groundwork Fitness in Long Beach, CA",
    "url": "https://groundworkfitness.com/",
    "location":"Long Beach, CA"
    },
		
    {
    "title": "Regional Case Manager",
    "employer": "American Honda Motor Co. Inc.",
    "dates": "2013-2014",
    "description": "Assist in making goodwill decisions while working with dealerships in SC, MN, and MD.",
    "url":"http://www.honda.com/",
    "location":"Torrance, CA"
    },
		
    {
    "title": "Regional Case Manager",
    "employer": "Alorica",
    "dates": "2012-2013",
    "description": "Assist in making goodwill decisions while working with dealerships in NY.",
    "url": "http://www.alorica.com/",
    "location":"Torrance,CA"
    }
  ]
};
	
	
var education = {
  "schools" : [
    {
    "name" : "San Diego State University",
    "dates" : "2007-2010",
    "degree" : "Finance",
    "url": "http://sdsu.edu/",
    "location":"San Diego, CA"
    },
		
    {
    "name" : "National Academy of Sports Medicine",
    "dates" : "2014",
    "degree" : "Certified Personal Trainer",
    "url": "https://www.nasm.org/",
    "location":"Gardena, CA" 
    },
		
    {
    "name" : "Permaculture Institute of North America",
    "dates" : "2015",
    "degree" : "Permaculture",
    "url": "http://pina.in/",
    "location":"Seattle, WA"
    },
		
    {
    "name":"Udacity",
    "dates": "2016",
    "degree" : "Front-End Web Development",
    "url": "https://www.udacity.com/",
    "location":"Gardena,CA"
    }
  ]
};

var projects = {
  "projects" : [
  {
  "title": "Udacious Udacity Undertaking",
  "dates": "Infinity - Beyond",
  "description":"Distinct portfolio detailing space adventures in foreign region of Planet Andy.",
  "images":"images/cityview.jpg"
  },
  {
  "title": "Front-End Frontiers",
  "dates": "1900-1912",
  "description": "Head west towards the Trail of Oregon while avoiding bodies of water.",
  "images": "images/fry.JPG"
  }
  
  
  ]

};

//function inName (name) {
  //name = name.trim().split(" ");
  //console.log(name);
  //name[1] = name[1].toUpperCase();
  //name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

  //return name[0]+" "+name[1];
//}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

var formattedheaderName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedheaderName);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(formattedPic);
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedwelcomeMessage);


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace ("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace ("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace ("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace ("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
	
}

bio.display = function() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitterHandle).replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.githubLink).replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
};

bio.display();


work.display = function() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").prepend(formattedTitle);
    var formattedEmployerURL = HTMLworkURL.replace("%data%", work.jobs[job].url).replace("%data%", work.jobs[job].employer);
    $(".work-entry:last").prepend(formattedEmployerURL);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
	}
};

work.display();

projects.display = function() {
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(formattedImage);
      
    
    
  }
}

projects.display();


education.display = function() {
  for(places in education.schools) {
    $("#education").append(HTMLschoolStart);
    
	var formattedName = HTMLonlineURL.replace("%data%", education.schools[places].url).replace("%data%", education.schools[places].name);
	$(".education-entry:last").append(formattedName);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[places].dates);
    $(".education-entry:last").append(formattedDates);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[places].degree);
    $(".education-entry:last").append(formattedDegree);
      
  }
}

education.display();