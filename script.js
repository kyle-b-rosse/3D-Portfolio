// Astronomy.
var G = 6.67384e-11; // m3 kg-1 s-2
var SEC_PER_STEP = 8;
var STEPS_PER_FRAME = 2000;
var METERS_PER_UNIT = 1000000000;
var MAX_TRAIL_VERTICES = 4000;
var MIN_GHOST_DISTANCE = 100;
var GHOST_DISTANCE_SCALE = 80;
var MAX_GHOST_OPACITY = 0.15;

var sun; 
var planets=[];
var loadCube;

// projects
var table = [
    "Web Developement", "toolkit:", "CSS, HTML, Javascript, Bootstrap, Web Audio", 1, 1,
    "Wordpress Development", "toolkit:", "Wordpress, Mobile, Javascript, Node.js", 2, 1,
    "React", "toolkit:", "React, JavaScript, Redux", 3, 1,
    "Virtual Reality", "toolkit:", "Canvas, Javascript, React, Three.js, Redux", 4, 1,
    "Three.js", "toolkit:", "Javascript, Canvas, WebGL", 1, 2,
    "Interactive", "toolkit:", "React, Redux, Three.js, Unity, tone.js, p5.js", 2, 2,
    "About", "toolkit:", "", 3, 2,
    "Github", "toolkit:", "React, Redux, THREE.js, WebGL, ReactVR, Tone.js, HTML, CSS", 4, 2
];

var concepts = [
    "I try to create websites that will stand the test of time. One of the issues with how quickly we develop technology on the web is that a website that might look state of the art when it is built can look painfully out dated only 18 months later. This creates a problem for the brand, as they have to constantly waver between the expense of a redesign or risk losing business. My framework is to keep things simple, and have the functionality stand out. Minimalist design assures that what is on the page matters.",
    "Wordpress is a great tool for creating websites and especially for managing them. I recommend anyone that wants a more hands on role with their site from an administrative angle look hard into wordpress, as it’s user friendly UI makes simple updates, blog posts, and changes simple even for people who have little coding skill. I have been working for the last year as a wordpress developer for Northwest Media Collective, creating innovative and unique wordpress sites with our team. I'll do the hard work to wrangle the site to the client’s specific standards, and then set the client up for success with simple walkthrough tutorials and quick responses to any questions.", 
    "React is a phenomenal tool for tackling the issues of the modern web. It’s component based logic makes organizing and editing the site with a large team simple and efficient. Component loading can cut down on load time by keeping everything on a single webpage layout, as well as dynamically manipulating DOM elements to create the kind of responsive website for modern clients.",
    "As VR tech becomes more available to modern consumers, so does the tech that brings VR to the web. The ability to allow the user to really explore a space within the 3D world rendered in browser will open up whole new uses for the web. ReactVR utilizes Three.js and WebGl technology to bring stunning VR experiences to people with and without VR tech readily available. It’s simple to see that this is the direction web design is heading.",
    "Three.js is a simple way to bring 3D objects and animations to browser. In much the same way that 3D video games swept into prominence in the mid 1990’s, 3D web browsing is set to take over. Display places, products, people and ideas with the depth only available on this modern 3D web language.",
    "Interactivity is at the core of the modern web. It’s not just about reaching your clients, it’s about engaging them. Unlike older sites, modern web development has simple and numerous tools to engage your audience. From fully rendered 3D games, to interactive musical instruments, to being able to control colors and shapes on the screen, I can help you keep your visitors on the page and in your reach.",
    "My name is Kyle Rosse and I want to build a better internet. I grew up in a world where technology was video games and dial up access to the world wide web. My love of the internet comes from my curiosity towards it. At it’s core, it is a means to exchange information. But with the countless contributions by millions of people pouring their hearts, minds, and passion into the internet, it became something modern society couldn’t imagine being without. As the internet and I have matured, I worry that the sense of possibility within the digital world is taking a back seat to what is essentially a very large mechanism to get people to fill out forms. I learned web design as a means of contributing back to the endless possibility that the web promises.",
    "Please feel free to go through my GitHub Portfolio and check through some of my projects. I love building things that interest me and update regularly. If your interested in collaborating, feel free to reach out in the contact form, or simply fork a project and have fun with it."
]
var imagePath = [
    'img/i0.png',
    'img/i1.png',
    'img/i5.png',
    'img/vr.png',
    'img/Three.png',
    'img/i2.png',
    'img/i7.png',
    'img/bolder.png'
]


var camera, scene, raycaster, renderer;
var scene2, renderer2;

var mouse = new THREE.Vector2();
var INTERSECTED;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

var element;

var project = [];
var project_default = new THREE.Object3D();
var project_one = new THREE.Object3D();
var project_two = new THREE.Object3D();
var project_three = new THREE.Object3D();
var project_four = new THREE.Object3D();
var project_five = new THREE.Object3D();
var project_six = new THREE.Object3D();
var project_seven = new THREE.Object3D();
var project_eight = new THREE.Object3D();
var intro = new THREE.Object3D();
var end = new THREE.Object3D();

var about_intro;






function init() {

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 2600;
    // camera.position.set(0, 200, 450);

    scene = new THREE.Scene();
    scene2 = new THREE.Scene();
    


    $ = document.getElementById.bind(document);
    $("container").innerHTML = "";
    // table


    { // projects-start
        // ===================================== project targets ========================================
        // projects 目的地
        var intro_Ypos = 200;
        var intro_Zpos = -9000;
        intro.position.x =0;
        intro.position.y =intro_Ypos;
        intro.position.z =intro_Zpos;

        project_default.position.x = 0;
        project_default.position.y = 0
        project_default.position.z = 2600;
        project_one.position.x = -5000;
        project_one.position.y =0;
        project_one.position.z =3100;
        project.push(project_one);
        project_two.position.x = -5000;
        project_two.position.y = 3000;
        project_two.position.z = 3100;
        project.push(project_two);
        project_three.position.x = 0;
        project_three.position.y =3000;
        project_three.position.z =3100;
        project.push(project_three);
        project_four.position.x = 5000;
        project_four.position.y = 3000;
        project_four.position.z =3100;
        project.push(project_four);
        project_five.position.x = -5000;
        project_five.position.y = -3000;
        project_five.position.z =3100;
        project.push(project_five);
        project_six.position.x = 0;
        project_six.position.y = -3000;
        project_six.position.z = 3100;
        project.push(project_six);
        project_seven.position.x = 5000;
        project_seven.position.y = -3000;
        project_seven.position.z = 3100;
        project.push(project_seven);
        project_eight.position.x = 5000;
        project_eight.position.y = 0;
        project_eight.position.z = 3100;
        project.push(project_eight);


        // go back
        




        // intro
        var about = document.createElement('div');
        about.id = 'about';
        about.className = 'about';
        var about_info = document.createElement('div');
        about_info.id = 'about_info';
        about_info.className = 'about_info';
        about_info.textContent = "Hello, my name is Kyle and I want to thank you for checking out my website. I make quality modern web projects, specializing in Javascript, React and Three.js. I want to make unique websites that show off the clients sense of innovation and possibility. For inquiries about my work, if you would like to work together, or any general questions, please scroll down to fill out my contact form or check out my portfolio. Thank you, and I hope to speak to you soon.";        
        var contactForm = document.createElement('FORM');
        contactForm.id = 'contactForm';
        about.appendChild(contactForm);

        // var fieldset = document.createElement('fieldset');
        // fieldset.id = 'fieldset';
        // contactForm.appendChild(fieldset);

        var goback_i = document.createElement('div');
        goback_i.className = 'cross_about';
        goback_i.id = 'cross_about';
        goback_i.textContent = "X";
        goback_i.onclick = function(event) {
            moveToProject(project_default, 1000);
            about.removeChild(about_info);
            event.preventDefault();
        };
        about.appendChild(goback_i);
        about_intro = new THREE.CSS3DObject(about);
        about_intro.position.x = intro.position.x;
        about_intro.position.y = intro.position.y;
        about_intro.position.z = -10000;
        scene.add(about_intro);
        
       
        //1 << Every Other World >>
        var project1 = document.createElement('div');
        project1.className = 'project1';
        project1.id = 'project1';

        var goback = document.createElement('div');
        goback.className = 'cross';
        goback.id = 'cross';
        goback.textContent = "x";
        goback.onclick = function(event) {
            moveToProject(project_default, 1000);
            event.preventDefault();
        };
        project1.appendChild(goback);


        var image01 = document.createElement('img');
        image01.id = 'image1';
        image01.className = 'image01';  
        image01.src = 'img/projects/Gif_2.gif';
          

        var image01_1 = document.createElement('img');
        image01_1.id = 'image01_1-1';
        image01_1.className = 'image01_1';  
        image01_1.src = 'img/projects/Gif_1.gif';
        
        
        var image01_3 = document.createElement('img');
        image01_3.id = 'image01_3';
        image01_3.className = 'image01_3';  
        image01_3.src = 'img/projects/musicSelect.gif';
        
        
        var image01_4 = document.createElement('img');
        image01_4.id = 'image01_4';
        image01_4.className = 'image01_4';  
        image01_4.src = 'img/projects/wkpp.png';       

        var concept1 = document.createElement('div');
        concept1.className = 'concept';
        concept1.textContent = concepts[0];
        project1.appendChild(concept1); 
 
        var golink1 = document.createElement('div');
        golink1.className = 'golink';
        golink1.textContent = "smilingstrange.com";
        golink1.onclick = function(event) {
            window.open("http://smilingstrange.com");
            event.preventDefault();
        }
        project1.appendChild(golink1);

        var tool1 = document.createElement('div');
        tool1.className = 'tool';
        tool1.textContent = 'toolkit: ' + table[2];
        project1.appendChild(tool1);

        var projectOne = new THREE.CSS3DObject(project1);
        projectOne.position.x = -5000;
        projectOne.position.y = 0;
        projectOne.position.z = 0;
        scene.add( projectOne );



        //2 << Jenga >>
        var project2 = document.createElement('div');
        project2.className = 'project2';
        project2.id = 'project2';

        var goback2 = document.createElement('cross');
        goback2.className = 'cross';
        goback2.id = 'cross';
        goback2.textContent = "x";
        goback2.onclick = function(event) {
            moveToProject(project_default, 1000);
            event.preventDefault();
            
        };
        project2.appendChild(goback2);

        // var image2 = document.createElement('img');
        // image2.id = 'image2';
        // image2.className = "image2";
        // image2.src = 'img/projects/LiqLib.gif';

        // var image2_2 = document.createElement('img');
        // image2_2.id = 'image2_2';
        // image2_2.className = "image2_2";
        // image2_2.src = 'img/projects/LiqLibPic.png';

        var image02 = document.createElement('img');
        image02.id = 'image02';
        image02.className = 'image02';  
        image02.src = 'img/projects/LiqLib.gif';
          

        var image02_1 = document.createElement('img');
        image02_1.id = 'image02_1-1';
        image02_1.className = 'image02_1';  
        image02_1.src = 'img/projects/dog.gif';
        
        
        var image02_3 = document.createElement('img');
        image02_3.id = 'image02_3';
        image02_3.className = 'image02_3';  
        image02_3.src = 'img/projects/comfortAir.gif';
        
        
        var image02_4 = document.createElement('img');
        image02_4.id = 'image02_4';
        image02_4.className = 'image02_4';  
        image02_4.src = 'img/projects/kylePort.gif';

        var golink0 = document.createElement('div');
        golink0.className = 'golink';
        golink0.textContent = "Northwest Media Collective";
        golink0.onclick = function(event) {
            window.open("https://northwestmediacollective.com/");
            event.preventDefault();
        }
        project2.appendChild(golink0);


        var tool2 = document.createElement('div');
        tool2.id = 'tool2';
        tool2.className = 'tool';
        tool2.textContent = 'toolkit: ' + table[7];
        project2.appendChild(tool2);

        var concept2 = document.createElement('div');
        concept2.className = 'concept';
        concept2.textContent = concepts[1];
        project2.appendChild(concept2);


        var projectTwo = new THREE.CSS3DObject(project2);
        projectTwo.position.x = -5000;
        projectTwo.position.y = 3000;
        projectTwo.position.z = 0;

        scene.add( projectTwo );

        //3 dance dance
        var project3 = document.createElement('div');
        project3.className = 'project3';
        project3.id = 'project3';

        var goback3 = document.createElement('cross');
        goback3.className = 'cross';
        goback3.id = 'cross';
        goback3.textContent = "x";
        goback3.onclick = function(event) {
            moveToProject(project_default, 1000);
            event.preventDefault();
        };
        project3.appendChild(goback3);

        var concept3 = document.createElement('div');
        concept3.className = 'concept';
        concept3.textContent = concepts[2];
        project3.appendChild(concept3);

        // var image02 = document.createElement('img');
        // image02.id = 'image02';
        // image02.className = "image02";
        // image02.src = 'img/projects/BandPage.gif';

        // var video3 = document.createElement('iframe')
        // video3.src = "http://player.vimeo.com/video/95708916"
        // video3.width = '1595px';
        // video3.height = '900px';

        // var video3_1 = document.createElement('iframe')
        // video3_1.className = 'video3_1';
        // video3_1.src = "http://player.vimeo.com/video/249878646"
        // video3_1.width = '1595px';
        // video3_1.height = '900px';

        var image03 = document.createElement('img');
        image03.id = 'image03';
        image03.className = 'image03';  
        image03.src = 'img/projects/rsvp2.gif';
          

        var image03_1 = document.createElement('img');
        image03_1.id = 'image03_1-1';
        image03_1.className = 'image03_1';  
        image03_1.src = 'img/projects/scoreboard.gif';
        
        
        var image03_3 = document.createElement('img');
        image03_3.id = 'image03_3';
        image03_3.className = 'image03_3';  
        image03_3.src = 'img/projects/giph2.gif';
        
        
        var image03_4 = document.createElement('img');
        image03_4.id = 'image03_4';
        image03_4.className = 'image03_4';  
        image03_4.src = 'img/projects/directory.gif';

        var golink01 = document.createElement('div');
        golink01.className = 'golink';
        golink01.textContent = "Github";
        golink01.onclick = function(event) {
            window.open("https://github.com/kyle-b-rosse");
            event.preventDefault();
        }
        project3.appendChild(golink01);

        var tool3 = document.createElement('div');
        tool3.id = 'tool3';
        tool3.className = 'tool';
        tool3.textContent = 'toolkit: ' + table[12];
        project3.appendChild(tool3);

        var projectThree = new THREE.CSS3DObject(project3);
        projectThree.position.x = 0;
        projectThree.position.y = 3000;
        projectThree.position.z = 0;
        scene.add( projectThree );

        //4 invisible cities
        var project4 = document.createElement('div');
        project4.className = 'project4';
        project4.id = 'project4';

        var goback4 = document.createElement('cross');
        goback4.className = 'cross';
        goback4.id = 'cross';
        goback4.textContent = "x";
        goback4.onclick = function(event) {
            moveToProject(project_default, 1000);
            event.preventDefault();
        };
        project4.appendChild(goback4);

        var concept4 = document.createElement('div');
        concept4.className = 'concept4';
        concept4.textContent = concepts[3];
        project4.appendChild(concept4);

        // var image04 = document.createElement('img');
        // image04.id = 'image04';
        // image04.className = "image04";
        // image04.src = 'img/projects/slug1.gif';

        // var image04_2 = document.createElement('img');
        // image04_2.id = 'image04_2';
        // image04_2.className = "image04_2";
        // image04_2.src = 'img/projects/slug2.gif';

        var image04 = document.createElement('img');
        image04.id = 'image04';
        image04.className = 'image04';  
        image04.src = 'img/projects/roadtrip.gif';
          

        var image04_1 = document.createElement('img');
        image04_1.id = 'image04_1-1';
        image04_1.className = 'image04_1';  
        image04_1.src = 'img/projects/space.gif';
        
        
        var image04_3 = document.createElement('img');
        image04_3.id = 'image04_3';
        image04_3.className = 'image04_3';  
        image04_3.src = 'img/projects/movie.gif';
        
        
        // var image04_4 = document.createElement('img');
        // image04_4.id = 'image04_4';
        // image04_4.className = 'image04_4';  
        // image04_4.src = 'img/projects/space.gif';

        
        var tool4 = document.createElement('div');
        tool4.id = 'tool4';
        tool4.className = 'tool';
        tool4.textContent = 'toolkit: ' + table[17];
        project4.appendChild(tool4);

        var golink4 = document.createElement('div');
        golink4.className = 'golink';
        golink4.textContent = "Github";
        golink4.onclick = function(event){
            window.open("https://github.com/kyle-b-rosse");
            event.preventDefault();
        }
        project4.appendChild(golink4);

        var projectFour = new THREE.CSS3DObject(project4);
        projectFour.position.x = 5000;
        projectFour.position.y = 3000;
        projectFour.position.z = 0;
        scene.add( projectFour );


        //5
        var project5 = document.createElement('div');
        project5.className = 'project5';
        project5.id = 'project5';

        var goback5 = document.createElement('div');
        goback5.className = 'cross';
        goback5.id = 'cross';
        goback5.textContent = "x";
        goback5.onclick = function(event) {
            moveToProject(project_default, 1000);
            event.preventDefault();
        };
        project5.appendChild(goback5);

        var concept5 = document.createElement('div');
        concept5.className = 'concept';
        concept5.textContent = concepts[4];
        project5.appendChild(concept5);

        // var video5 = document.createElement('iframe');
        // video5.src = "http://player.vimeo.com/video/90512956";
        // video5.width = '1600px';
        // video5.height = '900px';

        // var image05 = document.createElement('img');
        // image05.id = 'image05';
        // image05.className = "image05";
        // image05.src = 'img/projects/rsvp.gif';

        // var image05_2 = document.createElement('img');
        // image05_2.id = 'image05_2';
        // image05_2.className = "image05_2";
        // image05_2.src = 'img/projects/rsvp2.gif';

        var image05 = document.createElement('img');
        image05.id = 'image05';
        image05.className = 'image05';  
        image05.src = 'img/projects/plane.gif';
          

        var image05_1 = document.createElement('img');
        image05_1.id = 'image05_1-1';
        image05_1.className = 'image05_1';  
        image05_1.src = 'img/projects/thisSite.gif';
        
        
        var image05_3 = document.createElement('img');
        image05_3.id = 'image05_3';
        image05_3.className = 'image05_3';  
        image05_3.src = 'img/projects/threejs.gif';
        
        
        var image05_4 = document.createElement('img');
        image05_4.id = 'image05_4';
        image05_4.className = 'image05_4';  
        image05_4.src = 'img/projects/cube.gif';
        

        // var video5_1 = document.createElement('iframe');
        // video5_1.className = 'video5_1';
        // video5_1.src = "http://player.vimeo.com/video/90502907";
        // video5_1.width = '1600px';
        // video5_1.height = '900px';
        
        var tool5 = document.createElement('div');
        tool5.id = 'tool5';
        tool5.className = 'tool';
        tool5.textContent = 'toolkit: ' + table[22];
        project5.appendChild(tool5);

        var golink5 = document.createElement('div');
        golink5.className = 'golink';
        golink5.textContent = "Plane Game";
        golink5.onclick = function(event){
            window.open("http://smilingstrange.com/plane");
            event.preventDefault();
        }
        project5.appendChild(golink5);

        var projectFive = new THREE.CSS3DObject(project5);
        projectFive.position.x = -5000;
        projectFive.position.y = -3000;
        projectFive.position.z = 0;
        scene.add( projectFive );


        //6
        var project6 = document.createElement('div');
        project6.className = 'project6';
        project6.id = 'project6';

        var goback6 = document.createElement('div');
        goback6.className = 'cross';
        goback6.id = 'cross';
        goback6.textContent = "x";
        goback6.onclick = function(event) {
            moveToProject(project_default, 1000);
            event.preventDefault();
        };

        // var image06 = document.createElement('img');
        // image06.id = 'image06';
        // image06.className = "image06";
        // image06.src = 'img/projects/scoreboard.gif';

        // var image06_2 = document.createElement('img');
        // image06_2.id = 'image06_2';
        // image06_2.className = "image06_2";
        // image06_2.src = 'img/projects/scoreboard2.gif';

        var image06 = document.createElement('img');
        image06.id = 'image06';
        image06.className = 'image06';  
        image06.src = 'img/projects/BandPage.gif';
          

        var image06_1 = document.createElement('img');
        image06_1.id = 'image06_1-1';
        image06_1.className = 'image06_1';  
        image06_1.src = 'img/projects/drive.gif';
        
        
        var image06_3 = document.createElement('img');
        image06_3.id = 'image06_3';
        image06_3.className = 'image06_3';  
        image06_3.src = 'img/projects/piano.gif';
        
        
        var image06_4 = document.createElement('img');
        image06_4.id = 'image06_4';
        image06_4.className = 'image06_4';  
        image06_4.src = 'img/projects/frog.gif';

        //Use this for github

        

        project6.appendChild(goback6);

        var golink6 = document.createElement('div');
        golink6.className = 'golink';
        golink6.textContent = "Driving";
        golink6.onclick = function(event){
            window.open("http://smilingstrange.com/drive/");
            event.preventDefault();
        }
        project6.appendChild(golink6);

        var tool6 = document.createElement('div');
        tool6.id = 'tool6';
        tool6.className = 'tool';
        tool6.textContent = 'toolkit: ' + table[27];
        project6.appendChild(tool6);

        var concept6 = document.createElement('div');
        concept6.className = 'concept6';
        concept6.textContent = concepts[5];
        project6.appendChild(concept6); 

        var projectSix = new THREE.CSS3DObject(project6);
        projectSix.position.x = 0;
        projectSix.position.y = -3000;
        projectSix.position.z = 0;
        scene.add( projectSix );


        //7
        var project7 = document.createElement('div');
        project7.className = 'project7';
        project7.id = 'project7';

        var goback7 = document.createElement('div');
        goback7.className = 'cross';
        goback7.id = 'cross';
        goback7.textContent = "x";
        goback7.onclick = function(event) {
            moveToProject(project_default, 1000);
            event.preventDefault();
        };
        project7.appendChild(goback7);

        // var image07 = document.createElement('img');
        // image07.id = 'image07';
        // image07.className = "image07";
        // image07.src = 'img/projects/giph.gif';

        // var image07_2 = document.createElement('img');
        // image07_2.id = 'image07_2';
        // image07_2.className = "image07_2";
        // image07_2.src = 'img/projects/giph2.gif';

        var tool7 = document.createElement('div');
        tool7.id = 'tool7';
        tool7.className = 'tool';
        tool7.textContent = 'Other Work: ';
        project7.appendChild(tool7);

        var golink7 = document.createElement('div');
        golink7.className = 'golink golinkCenter';
        golink7.textContent = "Tone.js";
        golink7.onclick = function(event){
            window.open("http://smilingstrange.com/BandTest/index.html");
            event.preventDefault();
        }
        
        project7.appendChild(golink7);

        var golink7_1 = document.createElement('div');
        golink7_1.className = 'golink golink2 golinkCenter';
        golink7_1.textContent = "Javascript Keyboard";
        golink7_1.onclick = function(event){
            window.open("http://smilingstrange.com/Keyboard/index.html");
            event.preventDefault();
        }
        project7.appendChild(golink7_1);

        
        var golink7_2 = document.createElement('div');
        golink7_2.className = 'golink golink3 golinkCenter';
        golink7_2.textContent = "Zane Site";
        golink7_2.onclick = function(event){
            window.open("http://smilingstrange.com/Three4/index.html");
            event.preventDefault();
        }
        project7.appendChild(golink7_2);

       
        var golink7_3 = document.createElement('div');
        golink7_3.className = 'golink golink4 golinkCenter';
        golink7_3.textContent = "Cube Test";
        golink7_3.onclick = function(event){
            window.open("http://smilingstrange.com/Three5/index.html");
            event.preventDefault();
        }
        project7.appendChild(golink7_3);

        
        var golink7_4 = document.createElement('div');
        golink7_4.className = 'golink golink5 golinkCenter';
        golink7_4.textContent = "Glitch Art";
        golink7_4.onclick = function(event){
            window.open("http://smilingstrange.com/Three6/index.html");
            event.preventDefault();
        }
        project7.appendChild(golink7_4);



        var concept7 = document.createElement('div');
        concept7.className = 'concept7';
        concept7.textContent = concepts[6];
        project7.appendChild(concept7);

        var projectSeven = new THREE.CSS3DObject(project7);
        projectSeven.position.x = 5000;
        projectSeven.position.y = -3000;
        projectSeven.position.z = 0;
        scene.add( projectSeven );


        //8
        var project8 = document.createElement('div');
        project8.className = 'project8';
        project8.id = 'project8';

        var goback8 = document.createElement('div');
        goback8.className = 'cross';
        goback8.id = 'cross';
        goback8.textContent = "x";
        goback8.onclick = function(event) {
            moveToProject(project_default, 1000);
            event.preventDefault();
        };
        project8.appendChild(goback8);

        var concept8 = document.createElement('div');
        concept8.className = 'concept';
        concept8.textContent = concepts[7];
        project8.appendChild(concept8);

        var image08 = document.createElement('img');
        image08.id = 'image08';
        image08.className = 'image08';  
        image08.src = 'img/projects/directory.gif';
          

        var image08_1 = document.createElement('img');
        image08_1.id = 'image08_1-1';
        image08_1.className = 'image08_1';  
        image08_1.src = 'img/projects/scrollmagic.gif';
        
        
        var image08_3 = document.createElement('img');
        image08_3.id = 'image08_3';
        image08_3.className = 'image08_3';  
        image08_3.src = 'img/projects/piano.gif';
        
        
        var image08_4 = document.createElement('img');
        image08_4.id = 'image08_4';
        image08_4.className = 'image08_4';  
        image08_4.src = 'img/projects/threejs.gif';
        
        
        var tool8 = document.createElement('div');
        tool8.id = 'tool7';
        tool8.className = 'tool';
        tool8.textContent = 'toolkit: ' + table[37];
        

        var golink8 = document.createElement('div');
        golink8.className = 'golink';
        golink8.textContent = "kyle-b-rosse GitHub";
        golink8.onclick = function(event){
            window.open("https://github.com/kyle-b-rosse");
            event.preventDefault();
        }
        project8.appendChild(golink8);

        var projectEight = new THREE.CSS3DObject(project8);
        projectEight.position.x = 5000;
        projectEight.position.y = 0;
        projectEight.position.z = 0;
        scene.add( projectEight );


        // setTimeout(function(){
            // project3.appendChild(image02);
            // project3.appendChild(video3_1);
            // project4.appendChild(video4);
            // project5.appendChild(video5);
            // project5.appendChild(video5_1);
            // project8.appendChild(video8);
            
        // }, 2390);

       

        // ************************************************************************************************
        for ( var i = 0; i < table.length; i += 5 ) {



            element = document.createElement( 'div' );
            element.className = 'element';
            element.id = 'element';
            // element.style.backgroundImage = 'url(' +imagePath[i/5] + ')';
            element.setAttribute("data-index", i/5);

            //images   
            var img = document.createElement('img') ;
            img.id = 'image';
            img.className = 'image';
            img.src = imagePath[i/5];
            element.appendChild( img );

            // toolkit
            var tools = document.createElement( 'div' );
            tools.className = 'tools';
            tools.textContent = table[ i + 2];
            element.appendChild( tools );


            // 大title
            var symbol = document.createElement( 'div' );
            symbol.className = 'symbol';
            symbol.textContent = table[ i ];
            element.appendChild( symbol );


            // 点击每个element to trigger modal window
            element.onclick = function () {
                var index = this.getAttribute('data-index');

                if (index == 0) {
                    project1.appendChild(image01);
                    project1.appendChild(image01_1);
                    project1.appendChild(image01_3);
                    project1.appendChild(image01_4);
                    moveToProject( project_one, 1500);
                } else if (index ==1) {
                    project2.appendChild(image02);
                    project2.appendChild(image02_1);
                    project2.appendChild(image02_3);
                    project2.appendChild(image02_4);  
                    moveToProject(project_two, 1500);
                } else if (index ==2) {
                    project3.appendChild(image03);
                    project3.appendChild(image03_1);
                    project3.appendChild(image03_3);
                    project3.appendChild(image03_4);  
                    // project1.appendChild(image02_2);
                    moveToProject( project_three, 1500);
                } else if (index ==3) {
                    project4.appendChild(image04);
                    project4.appendChild(image04_1);
                    project4.appendChild(image04_3);
                    // project4.appendChild(image04_4);
                    moveToProject(project_four, 1500);
                } else if(index == 4) {
                    project5.appendChild(image05);
                    project5.appendChild(image05_1);
                    project5.appendChild(image05_3);
                    project5.appendChild(image05_4);
                    moveToProject(project_five, 1500);
                } else if (index ==5) {
                    project6.appendChild(image06);
                    project6.appendChild(image06_1);
                    project6.appendChild(image06_3);
                    project6.appendChild(image06_4);
                    moveToProject(project_six, 1500);
                } else if (index ==6) {
                    moveToProject(project_seven, 1500);
                    project7.appendChild(image07);
                    project7.appendChild(image07_2);
                } else if (index ==7) {
                    project8.appendChild(image08);
                    project8.appendChild(image08_1);
                    project8.appendChild(image08_3);
                    project8.appendChild(image08_4);
                    moveToProject(project_eight, 1500);
                }
                // console.log(index);
                
            }



            var object = new THREE.CSS3DObject( element );
            object.position.x = Math.random() * 4000 ;
            object.position.y = Math.random() * 4000 ;
            object.position.z = Math.random() * 4000 + 2000 ;
            scene.add( object );


            objects.push( object );
            

            // table table : 720,720间距

            var object = new THREE.Object3D();
            object.position.x = ( table[ i + 3 ] * 720 ) - 1800;
            object.position.y = - ( table[ i + 4 ] * 720 ) + 1090;
            targets.table.push( object );	

            // i = 0, 5, 10, .... 35;
          
        }


        var button = document.getElementById( 'table' );
        button.addEventListener( 'click', function ( event ) {

            moveToProject(intro, 2000);
            // scene.add(about_intro);
            about.appendChild(about_info);
            // event.preventDefault();
        }, false );

    } // projects-end

    

    // solar system
    {
        var Ypos = -95;
        var Zpos = -10000
        
        sun = addSphere(40, 0, Ypos, Zpos, { mass: 1.988435e30 });
        sun.astro.ghost.visible = true;
        

        planets.push(addSphere(40, -650.32, Ypos, Zpos, 2,  { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        planets.push(addSphere(40, -600.32, Ypos, Zpos, 2,  { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        planets.push(addSphere(40, -550.32, Ypos, Zpos, 2,  { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        planets.push(addSphere(0.0060519, -508.8, Ypos, Zpos, 2, { mass: 4.86732e24, vel: new THREE.Vector3(0, 0, 3.5e-5) }));
        planets.push(addSphere(40, -450.32, Ypos, Zpos, 2, { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        planets.push(addSphere(0.0060519, -408.8, Ypos, Zpos, 2, { mass: 4.86732e24, vel: new THREE.Vector3(0, 0, 3.5e-5) }));
        planets.push(addSphere(40, -375.32, Ypos, Zpos, 2, { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        planets.push(addSphere(0.0060519, -325.8, Ypos, Zpos, 1, { mass: 4.86732e24, vel: new THREE.Vector3(0, 0, 3.5e-5) }));
        planets.push(addSphere(40, -250.32, Ypos, Zpos, 1, { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        planets.push(addSphere(0.0060519, -150.8, Ypos, Zpos, 1, { mass: 4.86732e24, vel: new THREE.Vector3(0, 0, 3.5e-5) }));
        planets.push(addSphere(0.0063674447, -100, Ypos, Zpos, 1, { mass: 5.9721986e24, vel: new THREE.Vector3(0, 0, 2.963e-5) }));
        // planets.push(addSphere(0.0063674447, -75, Ypos, Zpos, 1, { mass: 5.9721986e24, vel: new THREE.Vector3(0, 0, 2.963e-5) }));

        planets.push(addSphere(40, 0, Ypos, -10250, .5,  { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));

        // planets.push(addSphere(0.0063674447, 75, Ypos, Zpos, 1, { mass: 5.9721986e24, vel: new THREE.Vector3(0, 0, 2.963e-5) }));
        planets.push(addSphere(0.0063674447, 100, Ypos, Zpos, 1, { mass: 5.9721986e24, vel: new THREE.Vector3(0, 0, 2.963e-5) }));
        planets.push(addSphere(0.0063674447, 150, Ypos, Zpos, 1, { mass: 5.9721986e24, vel: new THREE.Vector3(0, 0, 2.963e-5) }));
        planets.push(addSphere(40, 250.32, Ypos, Zpos, 1, { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        planets.push(addSphere(0.0060519, 308.8, Ypos, Zpos, 1, { mass: 4.86732e24, vel: new THREE.Vector3(0, 0, 3.5e-5) }));
        planets.push(addSphere(40, 400, Ypos, Zpos, 1, { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        planets.push(addSphere(0.0060519, 450.8, Ypos, Zpos, 1, { mass: 4.86732e24, vel: new THREE.Vector3(0, 0, 3.5e-5) }));
        planets.push(addSphere(0.003386, 227.94, Ypos, Zpos, 1, { mass: 6.41693e23, vel: new THREE.Vector3(0, 0, 0.0000228175) }));
        planets.push(addSphere(40, 470.32, Ypos, Zpos, 2, { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        planets.push(addSphere(0.0060519, 508.8, Ypos, Zpos, 2, { mass: 4.86732e24, vel: new THREE.Vector3(0, 0, 3.5e-5) }));
        planets.push(addSphere(0.069173, 578.33, Ypos, Zpos, 2, { mass: 1.89813e27, vel: new THREE.Vector3(0, 0, 0.0000129824) }));
        planets.push(addSphere(0.069173, 600.33, Ypos, Zpos, 2, { mass: 1.89813e27, vel: new THREE.Vector3(0, 0, 0.0000129824) }));
        planets.push(addSphere(40, 630.32, Ypos, Zpos, 2,  { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        planets.push(addSphere(40, 678.32, Ypos, Zpos, 2,  { mass: 3.30104e23, vel: new THREE.Vector3(0, 0, 4.74e-5) }));
        // planets.push(addSphere(0.057316, 1429.4, Ypos, Zpos,   { mass: 5.68319e26, vel: new THREE.Vector3(0, 0, 9.280e-6) }));
        // planets.push(addSphere(0.025266, 2870.99, Ypos, Zpos,  { mass: 8.68103e25, vel: new THREE.Vector3(0, 0, 6.509e-6) }));
        // planets.push(addSphere(0.024553, 4504, Ypos,Zpos,   { mass: 1.0241e26, vel: new THREE.Vector3(0, 0, 5.449e-6) }));
    } 

//This is the loading CUBE
    loadCube = new THREE.Mesh(new THREE.BoxGeometry( 100, 100, 100 ), new THREE.MeshNormalMaterial( { color:0x000000 } ));
    loadCube.position.z = 90;
    scene2.add(loadCube);
    
    end.position.z= -25000;
    end.position.x=0;
    end.position.y=0;

    window.onscroll = scroll;

    function scroll () {
     // alert("scroll event detected! " + window.pageXOffset + " " + window.pageYOffset);
    }



    setTimeout(function() { 
        transform( targets.table, 3000 );
        cubeFade(end, 2300);
    }, 5100);
    // transform( targets.table, 2300 );
 
    


    raycaster = new THREE.Raycaster();

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.style.position = 'absolute';
    document.getElementById( 'container' ).appendChild( renderer.domElement );

    
    renderer2 = new THREE.WebGLRenderer();
    renderer2.setClearColor( 0x1E781E );
    renderer2.setPixelRatio( window.devicePixelRatio );
    renderer2.setSize( window.innerWidth, window.innerHeight );
    document.getElementById('container').appendChild( renderer2.domElement );

   
    //

    window.addEventListener( 'resize', onWindowResize, false );
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    // console.log(scene.children[0].position.x + ";" + scene.children[0].position.y + ";" + scene.children[0].position.z);

    


}





// 以上
function transform( targets, duration ) {

    TWEEN.removeAll();

    for ( var i = 0; i < objects.length; i ++ ) {

        var object = objects[ i ];
        var target = targets[ i ];

        new TWEEN.Tween( object.position )
            .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

    }

    new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();

}



function moveToProject(project, duration) {
    TWEEN.removeAll();

    new TWEEN.Tween(camera.position)
        .to( {x: project.position.x, y: project.position.y, z: project.position.z}, Math.random()*duration + duration)
        .easing(TWEEN.Easing.Exponential.Out)
        .start();

    new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();
}

function cubeFade(end, duration) {
    // TWEEN.removeAll();

    new TWEEN.Tween(loadCube.position)
        .to( {x: end.position.x, y: end.position.y, z: end.position.z}, Math.random()*duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();
}


function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    
}

function onDocumentMouseMove( event ) {

    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects(scene.children);

    // console.log(event.clientX + "; " + event.clientY);
}

function animate() {

    requestAnimationFrame( animate );
    render();
    TWEEN.update();
    loadCube.rotation.x += 0.005;
    loadCube.rotation.y += 0.01;
    // console.log(camera.position.z);
}



function render() {
    renderer2.render( scene2, camera );
    renderer.render( scene, camera );
    // var timer = Date.now() * 0.0001;
       
    for (var i = 0; i < planets.length; i++) {
      orbit(planets[i], sun);
    }

    planets[11].rotation.y += 0.002;
    // planets[1].rotation.x += 0.01;

    // console.log(camera.position.x + ";" + camera.position.y + ";" + camera.position.z);
    // console.log("sun: y=" + sun.position.y + "; z=" + sun.position.z);
}

$(document).ready(function() {
    

    init();
    animate();


});


function closeCube() {

    loadCube.position.z -=100;
    if (loadCube.position.z <0 ) {
        scene2.remove(loadCube);
    }
}
// -------------------------------------- solar system functions ----------------------------------------
function getDistance(v1, v2) {
  var x = v1.x - v2.x;
  var y = v1.y - v2.y;
  var z = v1.z - v2.z;
  return Math.sqrt(x * x + y * y + z * z);
}

function createTrail(x, y, z) {
  var trailGeometry = new THREE.Geometry();
  for (i = 0; i < MAX_TRAIL_VERTICES; i++) {
    trailGeometry.vertices.push(new THREE.Vector3(x, y, z));
  }
  var trailMaterial = new THREE.LineDashedMaterial({color: 0x4D4D4D, linewidth: 0.7});
  return new THREE.Line(trailGeometry, trailMaterial);
}

function createSphere(r, x, y, z, w, astro) {
  if (astro === undefined) {
    astro = {};
  }
  if (astro.vel === undefined) {
    astro.vel = new THREE.Vector3();
  }
  if (astro.trail === undefined) {
    astro.trail = createTrail(x, y, z);
  }

  var mountainWidth = (150 * ( 1.25 + Math.random()))/w;
  var mountainHeight = (200 * ( .75 + Math.random()))/w;

  var geometry = new THREE.CylinderGeometry( 0, mountainWidth, mountainHeight, 12 );
  var material = new THREE.MeshNormalMaterial();
  var sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(x, y, z);
  sphere.astro = astro;


    var points = [];
    for ( var i = 0; i < 50; i ++ ) {
        points.push( randomPointInSphere( 1 ) );
    }

 

  var ghostGeometry = new THREE.CylinderGeometry( 0, 3, 5, 12 );
  var ghostMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, wireframe: true});
  var ghostSphere = new THREE.Mesh(ghostGeometry, ghostMaterial);
  ghostSphere.position.set(x, y, z);
  sphere.astro.ghost = ghostSphere;
  return sphere;

}

function addSphere(r, x, y, z, astro) {
  var sphere = createSphere(r, x, y, z, astro);
  scene2.add(sphere);
  // scene2.add(sphere.astro.ghost);
  scene2.add(sphere.astro.trail);
  return sphere;
}

function getAcceleration(distance, starMass) {
  return G * starMass / (Math.pow(distance, 2));
}

function updateVelocity(planet, star) {
  var vel = new THREE.Vector3();
  var speed;
  for(var i=0; i < STEPS_PER_FRAME; i++) {
    speed = getAcceleration(getDistance(star.position, planet.position) * METERS_PER_UNIT, star.astro.mass) * SEC_PER_STEP;
    vel.subVectors(star.position, planet.position).setLength(speed / METERS_PER_UNIT);
    planet.astro.vel.add(vel);

    planet.position.x += planet.astro.vel.x * SEC_PER_STEP;
    planet.position.y += planet.astro.vel.y * SEC_PER_STEP;
    planet.position.z += planet.astro.vel.z * SEC_PER_STEP;

    if (i % 10000 === 0) {
      leaveTrail(planet);
    }
  }
  
}

function leaveTrail(sphere) {
  sphere.astro.trail.geometry.vertices.unshift(new THREE.Vector3().copy(sphere.position));
  sphere.astro.trail.geometry.vertices.length = MAX_TRAIL_VERTICES;
  sphere.astro.trail.geometry.verticesNeedUpdate = true;
}

function orbit(planet, star) {

  updateGhost(star);
  updateGhost(planet);
}

function updateGhost(planet) {
  planet.astro.ghost.position.copy(planet.position);

  var distance = getDistance(camera.position, planet.position);
  if (distance < MIN_GHOST_DISTANCE) {
    planet.astro.ghost.material.opacity = 0;
  } else {
    planet.astro.ghost.scale.x = planet.astro.ghost.scale.y = planet.astro.ghost.scale.z = distance/GHOST_DISTANCE_SCALE;
    planet.astro.ghost.material.opacity = MAX_GHOST_OPACITY;
  }
}

function randomPointInSphere( radius ) {

    return new THREE.Vector3(
        ( Math.random() - 0.5 ) * 2 * radius,
        ( Math.random() - 0.5 ) * 2 * radius,
        ( Math.random() - 0.5 ) * 2 * radius
    );
}

