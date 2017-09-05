/*
This is empty on purpose! Your code to build the resume will go here.
 */
var data = '%data%';
var bio = {
    name: "Zeke Farioli",
    role: "Front-end Web Developer",
    contacts: {
        mobile: "07777 55 55 44",
        email: "zekefarioli@gmail.com",
        github: "https://github.com/efarioli",
        twitter: "https://twitter.com/fariolie",
        location: "Stoke on Trent- UK"
    },
    welcomeMessage: "Hello there. I am Zeke. I build responsive, optimized, beautiful, handcrafted websites. I'd love to do it for you.",
    skills: [
        "HTML",
        "CSS",
        "Vanilla JavaScript",
        "jQuery",
        "Twitter Bootstrap",
        "Git and Github"
    ],
    biopic: "images/zeke.png",
    display: function() {
        console.log("displaying Bio");
        HTMLheaderRole = HTMLheaderRole.replace(data, this.role);
        $("#header").prepend(HTMLheaderRole);
        HTMLheaderName = HTMLheaderName.replace(data, this.name);
        $("#header").prepend(HTMLheaderName);
        HTMLmobile = HTMLmobile.replace(data, this.contacts.mobile);
        $("#topContacts , #footerContacts").append(HTMLmobile);
        HTMLemail = HTMLemail.replace(data, this.contacts.email);
        $("#topContacts , #footerContacts").append(HTMLemail);
        HTMLgithub = HTMLgithub.replace(data, this.contacts.github);
        $("#topContacts , #footerContacts").append(HTMLgithub);
        HTMLtwitter = HTMLtwitter.replace(data, this.contacts.twitter);
        $("#topContacts , #footerContacts").append(HTMLtwitter);
        HTMLlocation = HTMLlocation.replace(data, this.contacts.location);
        $("#topContacts , #footerContacts").append(HTMLlocation);
        HTMLbioPic = HTMLbioPic.replace(data, this.biopic);
        $("#header").append(HTMLbioPic);
        HTMLwelcomeMsg = HTMLwelcomeMsg.replace(data, this.welcomeMessage);
        $("#header").append(HTMLwelcomeMsg);
        $("#header").append(HTMLskillsStart);
        this.skills.forEach(function(el) {
            var HTMLskillsFormatted = HTMLskills.replace(data, el);
            $("#skills").append(HTMLskillsFormatted);
        });
    }
};

var education = {
    schools: [{
            name: "ICOP Santa Fe",
            location: "Argentina",
            degree: "foundation degree in Computer Science",
            majors: [],
            dates: "1998-2001",
            url: "http://www.icop.edu.ar/"
        }

    ],
    onlineCourses: [{
            title: "Learning React.js",
            school: "lynda.com",
            dates: "May-2017",
            url: "https://www.lynda.com/React-js-tutorials/Learn-React-js-Basics/519668-2.html?certificate=8ED9A41FC8BA49099F7C6F18027CD5B8"

        },
        {
            title: "Front end web developer",
            school: "Free Code Camp",
            dates: "2016-2017",
            url: "https://www.freecodecamp.org"

        },
        {
            title: "Adventures in web animations",
            school: "Code School",
            dates: "April-2017",
            url: "https://www.codeschool.com/courses/adventures-in-web-animations"

        },
        {
            title: "Blasting Off With Bootstrap",
            school: "Code School",
            dates: "April-2017",
            url: "https://www.codeschool.com/courses/blasting-off-with-bootstrap"

        },
        {
            title: "CSS cross country",
            school: "Code School",
            dates: "April-2017",
            url: "https://www.codeschool.com/courses/css-cross-country"

        },
        {
            title: "Cracking the case with Flexbox",
            school: "Code School",
            dates: "April-2017",
            url: "https://www.codeschool.com/courses/cracking-the-case-with-flexbox"

        },
        {
            title: "Front-end Formations",
            school: "Code School",
            dates: "April-2017",
            url: "https://www.codeschool.com/courses/front-end-formations"

        }
    ],
    display: function() {
        console.log("displaying online courses");

        this.schools.forEach(function(el) {
            $("#education").append(HTMLschoolStart);
            var schoolNameFormatted = HTMLschoolName.replace(data, el.name);
            $(".education-entry:last").append(schoolNameFormatted);
            var schoolDegreeFormatted = HTMLschoolDegree.replace(data, el.degree);
            $(".education-entry:last").append(schoolDegreeFormatted);
            var schoolDatesFormatted = HTMLschoolDates.replace(data, el.dates);
            $(".education-entry:last").append(schoolDatesFormatted);
            var schoolLocationFormatted = HTMLschoolLocation.replace(data, el.location);
            $(".education-entry:last").append(schoolLocationFormatted);
            var schoolMajorFormatted = HTMLschoolMajor.replace(data, el.majors);
            $(".education-entry:last").append(schoolMajorFormatted);
            $(".education-entry:last").find("a").attr("href", el.url);

        });
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        this.onlineCourses.forEach(function(el) {
            $("#education").append(HTMLschoolStart);
            var onlineTitleFormatted = HTMLonlineTitle.replace(data, el.title);
            var onlineSchoolFormatted = HTMLonlineSchool.replace(data, el.school);
            $(".education-entry:last").append(onlineTitleFormatted + onlineSchoolFormatted);
            var onlineDates = HTMLonlineDates.replace(data, el.dates);
            $(".education-entry:last").append(onlineDates);
            var onlineUrl1 = HTMLonlineURL1.replace(data, el.url);
            var onlineUrl2 = HTMLonlineURL2.replace(data, el.url);
            $(".education-entry:last").append(onlineUrl1+onlineUrl2 + "<hr>");

        });
    }
};

var work = {
    jobs: [{
            employer: "Asda logistics",
            title: "Warehouse Colleague",
            location: "Newcastle Under Lyme- UK",
            dates: "since february 2015",
            description: "Taking delivery of goods and storing them -checking for damaged or missing items - moving stock by hand or with machines- packing and wrapping goods - loading goods for sending - keeping stock records -cleaning the warehouse"
        },
        {
            employer: "New Look",
            title: "Warehouse Colleague",
            location: "Newcastle Under Lyme- UK",
            dates: "From August 2012 february 2015.",
            description: "Taking delivery of goods and storing them -checking for damaged or missing items - moving stock by hand or with machines- packing and wrapping goods - loading goods for sending - keeping stock records -cleaning the warehouse"
        },
        {
            employer: "Self Employed",
            title: "Cyber Cafe Attendant",
            location: "Malaga - Spain",
            dates: "From february 2009 August 2015.",
            description: "Use the cash register, attend the phone, check in and checkout customer, assist customer, sell sweets, send and receive faxes, maintenance of hardware and software, deal with suppliers, et cetera."
        }
    ],
    display: function() {
        console.log("displaying jobs..");
        this.jobs.forEach(function(el) {
            $("#workExperience").append(HTMLworkStart);
            var employerFormatted = HTMLworkEmployer.replace(data, el.employer);
            var titleFormatted = HTMLworkTitle.replace(data, el.title);
            $(".work-entry:last").append(employerFormatted + titleFormatted);
            var dateFormatted = HTMLworkDates.replace(data, el.dates);
            $(".work-entry:last").append(dateFormatted);
            var locationFormatted = HTMLworkLocation.replace(data, el.location);
            $(".work-entry:last").append(locationFormatted);
            var descriptionFormatted = HTMLworkDescription.replace(data, el.description);
            $(".work-entry:last").append(descriptionFormatted);
        });
    }
};

var projects = {
    projects: [{
            title: "Badges display app",
            dates: "March 2017",
            description: "Badges display app: using Jquery to make AJAX request to the CodeSchool API, and manipulating Json objects to display all the certification I have by completing the courses.",
            images: [
                "http://i.imgur.com/Ag7gGA6.png"
            ],
            url: "https://efarioli.github.io/jQueryBadgesProject/"
        },
        {
            title: "Classifieds Single Page Application",
            dates: "March 2017",
            description: "Classifieds Single Page Application (SPA) using AngularJs, Angular Material design for rapid prototype and look. Connected to Firebase Cloud database, allowing to persist data and make CRUD operations.",
            images: [
                "http://i.imgur.com/sMrn1oo.png"
            ],
            url: "https://efarioli.github.io/AngularJs-Project02/#!/classifieds"
        },
        {
            title: "Content Slider",
            dates: "March 2017",
            description: "Content Slider: using jQuery and styling with CSS, show a new background image with the corresponding description automatically after 5 seconds, or by clicking the previous or next arrows. See project Content Slider",
            images: [
                "http://i.imgur.com/3MtKAE8.png"
            ],
            url: "https://efarioli.github.io/contentSlider/"
        },
        {
            title: "Jquery Apple Style ThumbSlider",
            dates: "March 2017",
            description: "Jquery Apple Style ThumbSlider, displaying an image with the possibility of select the thumb image to show , with an auto slider function, displaying the next image after 4 seconds. I have used Html5, CSS, Javascript and Jquery. See project Jquery Apple Style ThumbSlider",
            images: [
                "http://i.imgur.com/sV83ute.png"
            ],
            url: "https://efarioli.github.io/appleSlider/"
        },
        {
            title: "RGB color game",
            dates: "April 2017",
            description: "RGB color game: 6 color are generated randomly, one of this is the color to looking based in the RGB system color. The game finish when the user choose the right color. The objective of this project is to use plain Javascript to Manipulating the DOM and handle events. This is achieved without using jQuery.",
            images: [
                "http://i.imgur.com/X066JIo.png"
            ],
            url: "https://efarioli.github.io/colorGame/"
        },
        {
            title: "Template Store app",
            dates: "February 2017",
            description: "Template Store app: simple AngularJs app that simulate a online shop that sell templates.",
            images: [
                "http://i.imgur.com/dBjaX9t.png"
            ],
            url: "https://efarioli.github.io/templateStore/#/templates"
        },
        {
            title: "Todo list app",
            dates: "May 2017",
            description: "Todo list app: using AngularJS and Twitter-boostrap for styling.",
            images: [
                "http://i.imgur.com/MQNURWX.png"
            ],
            url: "https://efarioli.github.io/todoListApp/"
        },
        {
            title: "Video Searcher",
            dates: "June 2017",
            description: "Video Searcher implementing youtube V3 API. The video are shown in the same web page using fancybox library. Technology applied: Html5, CSS, Javascript, Jquery, AJAX and use of 3rd party APIs.",
            images: [
                "http://i.imgur.com/XbbFCqx.png",
                "http://i.imgur.com/XbbFCqx.png"
            ],
            url: "https://efarioli.github.io/searchVidz/"
        }
    ],
    display: function() {
        console.log("dsiplaying projects");
        $("#projects").append(HTMLprojectStart);
        this.projects.forEach(function(el) {
            $("#projects").append(HTMLprojectStart);
            var titleFormatted = HTMLprojectTitle.replace(data, el.title);
          
             titleFormatted = titleFormatted.replace('#', el.url);
           
            //titleFormatted.attr("href", el.url);
            $(".project-entry:last").append(titleFormatted);
            var datesFormatted = HTMLprojectDates.replace(data, el.dates);
            $(".project-entry:last").append(datesFormatted);
            var descriptionFormatted = HTMLprojectDescription.replace(data, el.description);
            $(".project-entry:last").append(descriptionFormatted);
            el.images.forEach(function(e) {
                var imagesFormatted = HTMLprojectImage.replace(data, e);
                $(".project-entry:last").append(imagesFormatted);
            });
        });
    }
};
work.display();
bio.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

