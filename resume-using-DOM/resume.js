getContentHeader = (imgLink, labelName) => {
let contentHeader = document.createElement('div');
contentHeader.classList.add('content-header');

// profileIcon
let profileIcon = document.createElement('img');
profileIcon.src = imgLink;
contentHeader.appendChild(profileIcon);

// profileLabel
let profileLabel = document.createElement('span');
let profileLabelText = document.createTextNode(labelName);
profileLabel.appendChild(profileLabelText);

contentHeader.appendChild(profileLabel);

return contentHeader;
}

getSkillsSlider = (sectionName, skillsArray) => {
let technicalSkillsTitle = document.createElement('div');
technicalSkillsTitle.classList.add('technical-skills-title');
let technicalSkillsTitleText = document.createTextNode(sectionName);
technicalSkillsTitle.appendChild(technicalSkillsTitleText);
skills.appendChild(technicalSkillsTitle);


skillsArray.forEach(item => {
// technical skills
let technicalSkill = document.createElement('div');
technicalSkill.classList.add('technical-skill');

let technicalSkillLabel = document.createElement('span');
let technicalSkillLabelText = document.createTextNode(item.name);
technicalSkillLabel.appendChild(technicalSkillLabelText);
technicalSkill.appendChild(technicalSkillLabel);

let technicalSkillsSlider = document.createElement('input');
technicalSkillsSlider.classList.add('skills-range-silder');
technicalSkillsSlider.setAttribute("type", "range");
technicalSkillsSlider.setAttribute("min", "1");
technicalSkillsSlider.setAttribute("max", "100");
technicalSkillsSlider.setAttribute("value", item.range);
technicalSkillsSlider.setAttribute("disabled", true);
technicalSkill.appendChild(technicalSkillsSlider);
skills.appendChild(technicalSkill);
});
}

getContentSubHeader = (titleOne, titleTwo, titleThree) => {
let contentSubHeader = document.createElement('div');
contentSubHeader.classList.add('content-sub-header');

let contentSubHeaderLineOne = document.createElement('div');
contentSubHeaderLineOne.classList.add('content-sub-header-one-line');

let contentSubHeaderLineOneLeftContent = document.createElement('div');
contentSubHeaderLineOneLeftContent.classList.add('content-sub-header-one-line-left-content');
let contentSubHeaderLineOneLeftContentText = document.createTextNode(titleOne);
contentSubHeaderLineOneLeftContent.appendChild(contentSubHeaderLineOneLeftContentText);
contentSubHeaderLineOne.appendChild(contentSubHeaderLineOneLeftContent);

let contentSubHeaderLineOneRightContent = document.createElement('div');
contentSubHeaderLineOneRightContent.classList.add('content-sub-header-one-line-right-content');
let contentSubHeaderLineOneRightContentText = document.createTextNode(titleTwo);
contentSubHeaderLineOneRightContent.appendChild(contentSubHeaderLineOneRightContentText);
contentSubHeaderLineOne.appendChild(contentSubHeaderLineOneRightContent);
contentSubHeader.appendChild(contentSubHeaderLineOne);

let contentSubHeaderLineTwo = document.createElement('div');
contentSubHeaderLineTwo.classList.add('content-sub-header-two-line');
let contentSubHeaderLineTwoText = document.createTextNode(titleThree);
contentSubHeaderLineTwo.appendChild(contentSubHeaderLineTwoText);
contentSubHeader.appendChild(contentSubHeaderLineTwo);
return contentSubHeader;
}

getContentList = (contentList) => {
let list = document.createElement('ul');
list.classList.add('content-list');
contentList.forEach(point => {
var listPoint = document.createElement('li');
var listPointText = document.createTextNode(point);
listPoint.appendChild(listPointText);
list.appendChild(listPoint);
});
return list;
}

let bodyTag = document.body;

let mainContainer = document.createElement('div');
mainContainer.classList.add('container');

// ###################################### bannerBgWrapper ######################################
let bannerBgWrapper = document.createElement('div');
bannerBgWrapper.classList.add('banner-bg-wrapper');
// ********************* bannerBgStripOne ********************* bannerBgStripOne *********************
let bannerBgStripOne = document.createElement('div');
bannerBgStripOne.classList.add('banner-bg-strip-one');
bannerBgWrapper.appendChild(bannerBgStripOne);
// ********************* bannerBgStripTwo ********************* bannerBgStripTwo *********************
let bannerBgStripTwo = document.createElement('div');
bannerBgStripTwo.classList.add('banner-bg-strip-two');
bannerBgWrapper.appendChild(bannerBgStripTwo);
// ********************* bannerBgStripThree ********************* bannerBgStripThree *********************
let bannerBgStripThree = document.createElement('div');
bannerBgStripThree.classList.add('banner-bg-strip-three');
bannerBgWrapper.appendChild(bannerBgStripThree);
// ********************* profileImg ********************* profileImg *********************
let profileImg = document.createElement('img');
profileImg.src = 'https://static.toiimg.com/thumb/msid-71722862,width-640,resizemode-4,imgsize-60418/71722862.jpg';
profileImg.classList.add('profile-image');
bannerBgWrapper.appendChild(profileImg);
// ********************* profileName ********************* profileName *********************
let profileName = document.createElement('div');
profileName.classList.add('profile-name');
let profileNameText = document.createTextNode("BRAIN DUDEY");
profileName.appendChild(profileNameText);
bannerBgWrapper.appendChild(profileName);

// ###################################### addressBar ######################################
let addressBar = document.createElement('div');
addressBar.classList.add('profile-address');
let addressBarText = document.createTextNode("N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com");
addressBar.appendChild(addressBarText);

// ###################################### contentWrapper ############################################
let contentWrapper = document.createElement('div');
contentWrapper.classList.add('content-wrapper');

// ###################################### contentWrapperLeft ######################################
let contentWrapperLeft = document.createElement('div');
contentWrapperLeft.classList.add('content-wrapper-left');
contentWrapper.appendChild(contentWrapperLeft);

// ********************* profile ********************* profile *********************
let profile = document.createElement('div');
profile.classList.add('profile');
// profile header
profile.append(getContentHeader(
'https://previews.123rf.com/images/tuktukdesign/tuktukdesign1805/tuktukdesign180500115/101624874-profile-icon-vector-male-user-person-avatar-in-flat-color-glyph-pictogram-illustration.jpg',
'Profile'));
// profile Content
let profileContent = document.createElement('p');
profileContent.classList.add('profile-content');
let profileContentText = document.createTextNode("Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, and a literation advocate.");
profileContent.appendChild(profileContentText);
profile.appendChild(profileContent);
contentWrapperLeft.appendChild(profile);

// ********************* skills ********************* skills *********************
let skills = document.createElement('div');
skills.classList.add('skills');
// skills header
skills.append(getContentHeader(
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87IvwuBwjGPCgLDmtknPA6eXwZgZU2WUt6A&usqp=CAU',
'Skills'));

const technicalSkills = [
{ name: 'JavaScript', range: 80 },
{ name: 'CSS', range: 80 },
{ name: 'HTML', range: 60 },
{ name: 'React', range: 60 },
{ name: 'Redux', range: 80 },
{ name: 'Mongo', range: 80 },
{ name: 'Deployment', range: 100 },
];

const additionalSkills = [
{ name: 'Project Management', range: 100 },
{ name: 'Recruitment', range: 80 },
{ name: 'Business Development', range: 100 },
{ name: 'Editing', range: 80 },
{ name: 'Fundraising', range: 100 }
];

getSkillsSlider('Technical Skills', technicalSkills);
getSkillsSlider('Additional Skills', additionalSkills);
contentWrapperLeft.appendChild(skills);

// ********************* work experience ********************* work experience *********************
let workExperience = document.createElement('div');
workExperience.classList.add('work-experience');
// work experience header
workExperience.append(getContentHeader(
'https://www.clipartmax.com/png/middle/340-3403177_briefcase-work-experience-icon-for-resume.png',
'Work Experience'));
// work experience sub header
workExperience.append(getContentSubHeader('Event Manager', '03/2014 - 02/2017', 'C3 Presents, Washington DC'))
// work experience points
const workExperiencePoints = [
'Lead and execute all phases of event planning and production spanning committee recruitment,training,vendor relationships and on-site facilitation.',
'Brought new business to the organization through relentless networking and stewardship which helped the complany win the bid for the state Department Summit on the Middle East and the companies largest civic event to date, the United State of Women',
'Excercise fiscal control over budget creation, tracking and reporting Collaborate with employees at all organizational levels to advance cohesive operations.'
]
workExperience.appendChild(getContentList(workExperiencePoints));
contentWrapperLeft.appendChild(workExperience);


// ###################################### contentWrapperRight ######################################
let contentWrapperRight = document.createElement('div');
contentWrapperRight.classList.add('content-wrapper-right');
contentWrapper.appendChild(contentWrapperRight);

// ********************* work experience ********************* work experience *********************
let workExperience2 = document.createElement('div');
workExperience2.classList.add('work-experience');
// work experience header
workExperience2.append(getContentHeader(
'https://www.clipartmax.com/png/middle/340-3403177_briefcase-work-experience-icon-for-resume.png',
'Work Experience'));
// work experience sub header
workExperience2.append(getContentSubHeader('Community Relations Manager', '06/2011 - 01/2014', 'Gay & Lesbian Elder Housing, Los Angeles'));
// work experience points
const workExperiencePointsTwo = [
'Arranging presentations and pitch deck',
'Designing a PR plan and establishing important focus points.',
'Designing, creating and managing content across multiple communication platforms.',
'Building relationships with key media players.'
];
workExperience2.appendChild(getContentList(workExperiencePointsTwo));
contentWrapperRight.appendChild(workExperience2);

// ********************* Eduction ********************* Eduction *********************
let eduction = document.createElement('div');
eduction.classList.add('eduction');
// eduction header
eduction.append(getContentHeader(
'https://www.pngfind.com/pngs/m/221-2219548_education-icon-png-education-logo-white-png-transparent.png',
'Eduction'));
// eduction sub header
eduction.append(getContentSubHeader('Engineering Immersion Program', '11/2018 - 06/2018', 'Thinkful, Chicago, IL'));
// eduction sub paragraph
let eductionParagraph = document.createElement('p');
let eductionParagraphText = document.createTextNode("Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technical stack.");
eductionParagraph.appendChild(eductionParagraphText);
eduction.appendChild(eductionParagraph);
// eduction points
const eductionPoints = [
'Developed a full-stack web application, "RenewU", using React that allows users to explore various aspects of meditation. Users progress is stored on a backend created using Node and MongobB.',
'Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.',
'Developed a concierge app, "Pley", for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes realtime chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well developed RESTful API, Geospatial searching, and user authentication with JWT.'];
eduction.appendChild(getContentList(eductionPoints));
eduction.append(getContentSubHeader('BA, English', '09/2001 - 09/2005', 'University of California, Los Angles'));
contentWrapperRight.appendChild(eduction);


mainContainer.appendChild(bannerBgWrapper);
mainContainer.appendChild(addressBar);
mainContainer.appendChild(contentWrapper);
bodyTag.appendChild(mainContainer);