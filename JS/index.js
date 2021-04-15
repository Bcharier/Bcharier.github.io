const githubLink = document.getElementById("github-link");
const linkedinLink = document.getElementById("linkedin-link");
const emailLink = document.getElementById("email-link");
const description = document.getElementById("description");
const projects = document.getElementsByClassName("project-presentation");
const projectPresentation = document.getElementById("project-presentation");
const buttonLang = document.getElementById("lang-choice");
const buttonFr = document.getElementById("button-fr");
const buttonEn = document.getElementById("button-en");
const nav = document.querySelector("nav");
const frontEnd = document.getElementById("front-end");
const alternance = document.getElementById("alternance");
const navAbout = document.getElementById("nav-about");
const navProjects = document.getElementById("nav-projects");
const header = document.querySelector("header");
const main = document.querySelector("main");
const navResponsive = document.getElementById("nav-responsive");
const closeIcon = document.getElementById("close-icon");
const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const responsiveHome = document.getElementById("responsive-home");
const responsiveAbout = document.getElementById("responsive-about");
const responsiveProjects = document.getElementById("responsive-projects");
const responsiveLinks = document.querySelectorAll(".responsive-links");
const aboutTitle = document.getElementById("about-title");
const aboutText = document.getElementById("about-text");
const projectTitle = document.querySelector(".ended-project-title");
const textReservia = document.getElementById("text-reservia");
const textOhmyfood = document.getElementById("text-ohmyfood");
const textGameon = document.getElementById("text-gameon");
const textFisheye = document.getElementById("text-fisheye");
const textPlats = document.querySelector("#text-plats");
const textNba = document.querySelector("#text-nba");
const incomingProjects = document.getElementById("incoming-projects-section");
const incomingProjectsTitle = document.querySelector(".incoming-project-title");
const skillsSection = document.querySelector(".skills");
const skillsTitle = document.querySelector(".skills-title");
const thorough = document.querySelector("#thorough");
const adaptability = document.querySelector("#flexible");
const learner = document.querySelector("#learner");
const positivity = document.querySelector("#positivity");


/* 
Changement de la langue de la page 
 */
buttonFr.addEventListener("click", langSwitchFr);
buttonEn.addEventListener("click", langSwitchEn);

function langSwitchEn() {
  frontEnd.innerHTML = "Front End Developper";
  frontEnd.classList.add("lang-switch");
  alternance.innerHTML = "Looking for an apprenticeship";
  alternance.classList.add("lang-switch");
  navAbout.innerHTML = "ABOUT";
  navProjects.innerHTML = "PROJECTS";
  navProjects.classList.add("lang-switch");
  navAbout.classList.add("lang-switch");
  responsiveHome.innerHTML = `HOME`
  responsiveHome.classList.add("lang-switch");
  responsiveAbout.innerHTML = `ABOUT`
  responsiveAbout.classList.add("lang-switch");
  responsiveProjects.innerHTML = `PROJECTS`
  responsiveProjects.classList.add("lang-switch");
  aboutTitle.innerHTML = `About me`;
  aboutTitle.classList.add("lang-switch");
  aboutText.innerHTML = ` 
  <p>Passionnate about coding, curious and rigorous, I am looking for a company willing to accompany my development through an apprenticeship.</p>
  <p>After a first career in international project management, I found my true passion in web development and I am currently switching career to become a full time front end developper</p>
  <p>I am following a front end developper cursus with OpenClassrooms, I am comfortable with HTML, CSS/SASS, JS and training to be proficient with React and Tailwind</p>`;
  aboutText.classList.add("lang-switch");
  projectTitle.innerHTML = `Projects`;
  projectTitle.classList.add("lang-switch");
  textReservia.innerHTML = "Web app for appartments rental service";
  textReservia.classList.add("lang-switch");
  textOhmyfood.innerHTML = "Web app for online meal reservation";
  textOhmyfood.classList.add("lang-switch");
  textGameon.innerHTML = "Platform for the organization of video games tournaments";
  textGameon.classList.add("lang-switch");
  textFisheye.innerHTML = "Photographer promotionnal web app";
  textFisheye.classList.add("lang-switch");
  incomingProjectsTitle.innerHTML = `Incoming Projects`;
  incomingProjectsTitle.classList.add("lang-switch");
  textPlats.innerHTML = "Search engine for cooking recipes"
  textPlats.classList.add("lang-switch");
  textNba.innerHTML = "Tracker for NBA results and stats";
  textNba.classList.add("lang-switch");
  thorough.innerHTML = "Thorough"
  thorough.classList.add("lang-switch");
  adaptability.innerHTML = "Flexible";
  adaptability.classList.add("lang-switch");
  learner.innerHTML = "Quick Learner";
  learner.classList.add("lang-switch");
  positivity.innerHTML = "Positivity";
  positivity.classList.add("lang-switch");
  skillsTitle.innerHTML = "Skills";
  skillsTitle.classList.add("lang-switch");
  setTimeout(clearClass, 1500);
}

function langSwitchFr() {
  frontEnd.innerHTML = "Développeur Front End";
  frontEnd.classList.add("lang-switch");
  alternance.innerHTML = "A la recherche d'une alternance";
  alternance.classList.add("lang-switch");
  navAbout.innerHTML = "A PROPOS";
  navAbout.classList.add("lang-switch");
  navProjects.innerHTML = "PROJETS";
  navProjects.classList.add("lang-switch");
  responsiveHome.innerHTML = `ACCUEIL`;
  responsiveHome.classList.add("lang-switch");
  responsiveAbout.innerHTML = `A PROPOS`;
  responsiveAbout.classList.add("lang-switch");
  responsiveProjects.innerHTML = `PROJETS`;
  responsiveProjects.classList.add("lang-switch");
  aboutTitle.innerHTML = `A propos`;
  aboutTitle.classList.add("lang-switch");
  aboutText.innerHTML = ` 
  <p>Passionné de code, curieux et rigoureux, je suis à la recherche d'une
  entreprise pour m'accompagner dans ma formation en alternance.</p>
  <p>Après une première carrière dans la gestion de projet internationaux, j'ai trouvé ma vraie passion dans le développement et suis en cours de reconversion professionnelle.</p>
  <p>En formation de développeur Front End chez OpenClassrooms, je suis à l'aise en HTML, CSS/SASS, JS et en montée de compétences sur React et Tailwind.</p>`;
  aboutText.classList.add("lang-switch");
  projectTitle.innerHTML = `Mes Projets`;
  projectTitle.classList.add("lang-switch");
  textReservia.innerHTML = "Site de locations de logements";
  textReservia.classList.add("lang-switch");
  textOhmyfood.innerHTML = "Application web pour réserver ses repas en ligne";
  textOhmyfood.classList.add("lang-switch");
  textGameon.innerHTML = "Plateforme d'organisation de tournois de jeux-vidéo";
  textGameon.classList.add("lang-switch");
  textFisheye.innerHTML = "Plateforme de promotion de photographes";
  textFisheye.classList.add("lang-switch");
  incomingProjectsTitle.innerHTML = `Projets en cours`
  incomingProjectsTitle.classList.add("lang-switch");
  textPlats.innerHTML = "Moteur de recherche de recettes de cuisine"
  textPlats.classList.add("lang-switch");
  textNba.innerHTML = "Suivi des résultats et stats NBA";
  textNba.classList.add("lang-switch");
  thorough.innerHTML = "Rigueur";
  thorough.classList.add("lang-switch");
  adaptability.innerHTML = "Adaptabilité";
  adaptability.classList.add("lang-switch");
  learner.innerHTML = "Rapidité d'apprentissage"
  learner.classList.add("lang-switch");
  positivity.innerHTML = "Positivité";
  positivity.classList.add("lang-switch");
  skillsTitle.innerHTML = "Compétences";
  skillsTitle.classList.add("lang-switch");
  setTimeout(clearClass, 1500)
}

function clearClass() {
  frontEnd.classList.remove("lang-switch");
  alternance.classList.remove("lang-switch");
  navProjects.classList.remove("lang-switch");
  navAbout.classList.remove("lang-switch");
  responsiveHome.classList.remove("lang-switch");
  responsiveAbout.classList.remove("lang-switch");
  responsiveProjects.classList.remove("lang-switch");
  aboutTitle.classList.remove("lang-switch");
  aboutText.classList.remove("lang-switch");
  projectTitle.classList.remove("lang-switch");
  textReservia.classList.remove("lang-switch");
  textOhmyfood.classList.remove("lang-switch");
  textGameon.classList.remove("lang-switch");
  textFisheye.classList.remove("lang-switch");
  incomingProjectsTitle.classList.remove("lang-switch");
  textPlats.classList.remove("lang-switch");
  thorough.classList.remove("lang-switch");
  adaptability.classList.remove("lang-switch");
  learner.classList.remove("lang-switch");
  positivity.classList.remove("lang-switch");
  skillsTitle.classList.remove("lang-switch");
}

/* 
Responsive Hamburger menu
*/

function responsiveNav() {
  if (navResponsive.style.display === "inline-block") {
    navResponsive.style.display = "none";
    closeIcon.style.display = "none"
    hamburgerIcon.style.display = "inline-block"
  }

  else {
    navResponsive.style.display = "inline-block";
    closeIcon.style.display = "inline-block";
    hamburgerIcon.style.display = "none";
    responsiveLinks.forEach((div) => div.addEventListener("click", closeResponsiveNav));
  }
}

function closeResponsiveNav() {
  navResponsive.style.display = "none";
  closeIcon.style.display = "none";
  hamburgerIcon.style.display = "inline-block";
}

/* 
Apparition des éléments on scroll
*/

function myScrollFunction() {
  const pageTitle = document.getElementById("page-title");
  const aboutSection = document.getElementById("about");

  let y = window.scrollY;

  let aboutPosition = (header.offsetHeight + pageTitle.offsetHeight + aboutSection.offsetHeight - 600);

  let skillsPosition = (aboutPosition + skillsSection.offsetHeight);

  let projectsPosition = (skillsPosition + projectPresentation.offsetHeight);

  if (y > 0) {
    header.classList.add("sticky");
  }

  if (y == 0) {
    header.classList.remove("sticky");
  }

  if (y > aboutPosition) {
    skillsSection.classList.add("section-appear");
  }

  if (y > skillsPosition) {
    projectPresentation.classList.add("section-appear");
  }

  if (y > projectsPosition) {
    incomingProjects.classList.add("section-appear");
  }
}


window.addEventListener("scroll", myScrollFunction);

