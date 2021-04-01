const pageContainer = document.getElementById("page-container");
const firstName = document.getElementById("name-delay0");
const lastName = document.getElementById("name-delay1");
const githubLink = document.getElementById("github-link");
const linkedinLink = document.getElementById("linkedin-link");
const emailLink = document.getElementById("email-link");
const jobDescription = document.getElementById("job-description");
const description = document.getElementById("description");
const arrowScroll = document.getElementById("arrow-scroll");
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
const navContact = document.getElementById("nav-contact");
const descriptionText = document.getElementById("description-text");
const header = document.querySelector("header");
const main = document.querySelector("main");
const navResponsive = document.getElementById("nav-responsive");
const closeIcon = document.getElementById("close-icon");
const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const responsiveHome = document.getElementById("responsive-home");
const responsiveAbout = document.getElementById("responsive-about");
const responsiveProjects = document.getElementById("responsive-projects");
const responsiveContact = document.getElementById("responsive-contact");
const responsiveLinks = document.querySelectorAll(".responsive-links");
const aboutTitle = document.getElementById("about-title");
const aboutText = document.getElementById("about-text");
const projectTitle = document.getElementById("project-title");
const textReservia = document.getElementById("text-reservia");
const textOhmfood = document.getElementById("text-ohmyfood");
const textGameon = document.getElementById("text-gameon");
const textFisheye = document.getElementById("text-fisheye");
const contactTitle = document.getElementById ("contact-title");
const contactLinkedin = document.getElementById("contact-linkedin");
const contactMail = document.getElementById("contact-mail");

/* 
Apparition des éléments on scroll
*/

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y > 0) {
    header.classList.add("sticky");
    // main.classList.add("sticky-padding");
  }

  if (y == 0) {
    header.classList.remove("sticky");
    // main.classList.remove("sticky-padding");
  }

  if (y >= 500) {
    projectPresentation.classList.add("projects-appear");
  }

  if (y >= 4200) {
    arrowScroll.classList.remove("scroll-appear");
    arrowScroll.classList.remove("scroll-appear-again");
  }

  if (y <= 4200) {
    arrowScroll.classList.add("scroll-appear-again");
  }

  else {
  }
};



window.addEventListener("scroll", myScrollFunc);

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
  navProjects.innerHTML = "MY PROJECTS";
  navProjects.classList.add("lang-switch");
  navAbout.classList.add("lang-switch");
  navContact.classList.add("lang-switch");
  descriptionText.innerHTML = "Passionnate about coding, curious and rigorous, I am looking for a company willing to accompany my development through an apprenticeship.";
  descriptionText.classList.add("lang-switch");
  responsiveHome.innerHTML = `HOME`
  responsiveHome.classList.add("lang-switch");
  responsiveAbout.innerHTML = `ABOUT`
  responsiveAbout.classList.add("lang-switch");
  responsiveProjects.innerHTML = `MY PROJECTS`
  responsiveProjects.classList.add("lang-switch");
  responsiveContact.innerHTML = `CONTACT`
  responsiveContact.classList.add("lang-switch");
  aboutTitle.innerHTML = `About me`;
  aboutTitle.classList.add("lang-switch");
  aboutText.innerHTML = ` 
  <p>After a first career in international project management, I found my true passion in web development and I am currently switching career to become a full time front end developper</p>
  <p>I am following a front end developper cursus with OpenClassrooms, I am comfortable with HTML, CSS/SASS, JS and training to be proficient with React and Tailwind</p>`;
  aboutText.classList.add("lang-switch");
  projectTitle.innerHTML = `My Projects`;
  projectTitle.classList.add("lang-switch");
  contactTitle.innerHTML = `Contact Me`;
  contactTitle.classList.add("lang-switch");
  contactLinkedin.innerHTML = `On Linkedin`;
  contactLinkedin.classList.add("lang-switch");
  contactMail.innerHTML = `By Mail`;
  contactMail.classList.add("lang-switch");
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
  navContact.classList.add("lang-switch");
  descriptionText.innerHTML = `Passionné de code, curieux et rigoureux, je suis à la recherche d'une
  entreprise pour m'accompagner dans ma formation en alternance.`
  descriptionText.classList.add("lang-switch");
  responsiveHome.innerHTML = `ACCUEIL`;
  responsiveHome.classList.add("lang-switch");
  responsiveAbout.innerHTML = `A PROPOS`;
  responsiveAbout.classList.add("lang-switch");
  responsiveProjects.innerHTML = `MES PROJETS`;
  responsiveProjects.classList.add("lang-switch");
  responsiveContact.innerHTML = `CONTACT`;
  responsiveContact.classList.add("lang-switch");
  aboutTitle.innerHTML = `A propos de moi`;
  aboutTitle.classList.add("lang-switch");
  aboutText.innerHTML = ` 
  <p>Après une première carrière dans la gestion de projet internationaux, j'ai trouvé ma vraie passion dans le développement et suis en cours de reconversion professionnelle.</p>
  <p>En formation de développeur Front End chez OpenClassrooms, je suis à l'aise en HTML, CSS/SASS, JS et en montée de compétences sur React et Tailwind.</p>`;
  aboutText.classList.add("lang-switch");
  projectTitle.innerHTML = `Mes Projets`;
  projectTitle.classList.add("lang-switch");
  contactTitle.innerHTML = `Contactez moi`;
  contactTitle.classList.add("lang-switch");
  contactLinkedin.innerHTML = `Sur Linkedin`;
  contactLinkedin.classList.add("lang-switch");
  contactMail.innerHTML = `Par Mail`;
  contactMail.classList.add("lang-switch");
  setTimeout(clearClass, 1500)
}

function clearClass() {
  frontEnd.classList.remove("lang-switch");
  alternance.classList.remove("lang-switch");
  navProjects.classList.remove("lang-switch");
  navAbout.classList.remove("lang-switch");
  navContact.classList.remove("lang-switch");
  descriptionText.classList.remove("lang-switch");
  responsiveHome.classList.remove("lang-switch");
  responsiveAbout.classList.remove("lang-switch");
  responsiveProjects.classList.remove("lang-switch");
  responsiveContact.classList.remove("lang-switch");
  aboutTitle.classList.remove("lang-switch");
  aboutText.classList.remove("lang-switch");
  projectTitle.classList.remove("lang-switch");
  contactTitle.classList.remove("lang-switch");
  contactLinkedin.classList.remove("lang-switch");
  contactMail.classList.remove("lang-switch");
}

/* 
Apparition des éléments au chargement de la page
*/

const lightsOn = () => {
  firstName.classList.add("name-appear-delay0");
  lastName.classList.add("name-appear-delay1");
  frontEnd.classList.add("item-appear-delay0");
  jobDescription.classList.add("small-title-appear");
  description.classList.add("item-appear-delay1");
  githubLink.classList.add("socials-appear-delay0");
  linkedinLink.classList.add("socials-appear-delay1");
  emailLink.classList.add("socials-appear-delay2");
  arrowScroll.classList.add("scroll-appear");
  buttonLang.classList.add("item-appear-delay0");
  nav.classList.add("item-appear-delay0");
  hamburgerMenu.classList.add("item-appear-delay0");
}

lightsOn();


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
