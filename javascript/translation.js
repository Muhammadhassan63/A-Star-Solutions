



// Translation object for section content
var sectionTranslations = {
en: {
  heading1: "Our Comprehensive IT Solutions",
  subheading1: "Web Development",
  web_text: "Our talented team of web developers creates stunning websites that leave a lasting impression on your audience. From responsive designs to seamless user experiences, we ensure that your website represents your brand with elegance and functionality.",
  subheading2: "App Development",
  app_text: "We have extensive experience creating cutting-edge mobile applications that are appealing to your target audience. Whether it's a simple consumer app or a complex enterprise solution, we use cutting-edge technology to provide the best possible experience.",
  subheading3: "E-commerce Solutions",
  commerce_text: "We understand the nuances of e-commerce and can create robust online stores that attract customers and increase sales. Our customized e-commerce solutions include secure payment gateways, inventory management systems, and an easy-to-use interface.",
  subheading4: "Custom Software Development",
  dev_text: "Do you need a one-of-a-kind software solution to streamline your business processes? We can develop custom software applications to meet your specific needs, resulting in increased efficiency and productivity."
},
sv: {
  heading1: "Våra Omfattande IT-lösningar",
  subheading1: "Webbutveckling",
  web_text: "Vårt talangfulla team av webbutvecklare skapar imponerande webbplatser som lämnar ett varaktigt intryck på din publik. Från responsiva design till sömlösa användarupplevelser ser vi till att din webbplats representerar ditt varumärke med elegans och funktionalitet.",
  subheading2: "Apputveckling",
  app_text: "Vi har omfattande erfarenhet av att skapa toppmoderna mobila applikationer som tilltalar din målgrupp. Oavsett om det är en enkel konsumentapp eller en komplex företagslösning använder vi modern teknologi för att erbjuda den bästa möjliga upplevelsen.",
  subheading3: "E-handelslösningar",
  commerce_text: "Vi förstår nyanserna av e-handel och kan skapa robusta onlinebutiker som lockar kunder och ökar försäljningen. Våra anpassade e-handelslösningar inkluderar säkra betalningsportaler, lagerhanteringssystem och en användarvänlig gränssnitt.",
  subheading4: "Anpassad Programvaruutveckling",
  dev_text: "Behöver du en unik programvarulösning för att effektivisera dina affärsprocesser? Vi kan utveckla anpassade programapplikationer för att möta dina specifika behov, vilket leder till ökad effektivitet och produktivitet."
},
es: {
  heading1: "Nuestras Soluciones de TI Integrales",
  subheading1: "Desarrollo Web",
  web_text: "Nuestro talentoso equipo de desarrolladores web crea sitios web impresionantes que dejan una impresión duradera en su audiencia. Desde diseños receptivos hasta experiencias de usuario sin problemas, nos aseguramos de que su sitio web represente su marca con elegancia y funcionalidad.",
  subheading2: "Desarrollo de Aplicaciones",
  app_text: "Tenemos una amplia experiencia en la creación de aplicaciones móviles de vanguardia que atraen a su público objetivo. Ya sea una simple aplicación de consumo o una solución empresarial compleja, utilizamos tecnología de vanguardia para ofrecer la mejor experiencia posible.",
  subheading3: "Soluciones de Comercio Electrónico",
  commerce_text: "Entendemos las sutilezas del comercio electrónico y podemos crear tiendas en línea robustas que atraen a los clientes y aumentan las ventas. Nuestras soluciones de comercio electrónico personalizadas incluyen pasarelas de pago seguras, sistemas de gestión de inventario y una interfaz fácil de usar.",
  subheading4: "Desarrollo de Software Personalizado",
  dev_text: "¿Necesita una solución de software única para optimizar sus procesos comerciales? Podemos desarrollar aplicaciones de software personalizadas para satisfacer sus necesidades específicas, lo que resulta en un aumento de la eficiencia y la productividad."
}
};

// Function to update section content based on selected language
function updateSectionContent(language) {
document.getElementById("heading1").textContent = sectionTranslations[language].heading1;
document.getElementById("subheading1").textContent = sectionTranslations[language].subheading1;
document.getElementById("web_text").textContent = sectionTranslations[language].web_text;
document.getElementById("subheading2").textContent = sectionTranslations[language].subheading2;
document.getElementById("app_text").textContent = sectionTranslations[language].app_text;
document.getElementById("subheading3").textContent = sectionTranslations[language].subheading3;
document.getElementById("commerce_text").textContent = sectionTranslations[language].commerce_text;
document.getElementById("subheading4").textContent = sectionTranslations[language].subheading4;
document.getElementById("dev_text").textContent = sectionTranslations[language].dev_text;
// Update other elements as needed
}

// Set the default language
var defaultLanguage = "en";
updateSectionContent(defaultLanguage);

// Handle language selector change
var languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", function() {
var selectedLanguage = languageSelector.value;
updateSectionContent(selectedLanguage);
});



// Set the default language
var defaultLanguage = "en";
updateContent(defaultLanguage);

// Handle language selector change
var languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", function() {
var selectedLanguage = languageSelector.value;
updateContent(selectedLanguage);
});
//


// Translation object
var translations = {
    en: {
        pageTitle: "Welcome to A-Star Solutions",
        pageDescription: "Your premier IT partner in Sweden, empowering businesses with exceptional IT solutions. With a strong emphasis on web development and app development, we have earned a reputation for excellence in delivering innovative and tailored solutions that drive growth and success.",
 
    },
    sv: {
         pageTitle: "Välkommen till A-Star Solutions",
        pageDescription: "Din främsta IT-partner i Sverige, som befäster företag med exceptionella IT-lösningar. Med ett starkt fokus på webbutveckling och apputveckling har vi ett rykte om oss för att leverera innovativa och skräddarsydda lösningar som driver tillväxt och framgång."
    },

    es: {
        pageTitle: "Bienvenido a A-Star Solutions",
        pageDescription: "Su principal socio de TI en Suecia, potenciando las empresas con soluciones de TI excepcionales. Con un fuerte énfasis en el desarrollo web y el desarrollo de aplicaciones, hemos ganado una reputación de excelencia al ofrecer soluciones innovadoras y adaptadas que impulsan el crecimiento y el éxito.",
       
}
    }


// Function to update content based on selected language
function updateContent(language) {
    document.getElementById("pageTitle").textContent = translations[language].pageTitle;
    document.getElementById("pageDescription").textContent = translations[language].pageDescription;
}

// Set the default language
var defaultLanguage = "en";
updateContent(defaultLanguage);

// Handle language selector change
var languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", function() {
    var selectedLanguage = languageSelector.value;
    updateContent(selectedLanguage);
});
//



// Translation object for "What Happens Next" section
var contactTranslations = {
en: {
  contact_heading: "What Happens Next?",
  contact_text1: "Our business development team contacts you within two working days.",
  contact_text2: "A discovery session is held to understand your project requirements.",
  contact_text3: "All the information shared is protected.",
  contact_text4: "Our technical and business development teams analyze the scope of your project and share the best way forward in a proposal.",
  contact_text5: "A software development agreement is signed based on mutually agreed terms of the proposal."
},
es: {
  contact_heading: "¿Qué Sucede a Continuación?",
  contact_text1: "Nuestro equipo de desarrollo de negocios se pondrá en contacto con usted en un plazo de dos días laborables.",
  contact_text2: "Se llevará a cabo una sesión de descubrimiento para comprender los requisitos de su proyecto.",
  contact_text3: "Toda la información compartida está protegida.",
  contact_text4: "Nuestros equipos técnicos y de desarrollo de negocios analizarán el alcance de su proyecto y compartirán la mejor manera de avanzar en una propuesta.",
  contact_text5: "Se firma un acuerdo de desarrollo de software basado en los términos mutuamente acordados de la propuesta."
},
sv: {
  contact_heading: "Vad Händer Nästa?",
  contact_text1: "Vårt affärsutvecklingsteam kontaktar dig inom två arbetsdagar.",
  contact_text2: "En upptäcktssession hålls för att förstå dina projektbehov.",
  contact_text3: "All information som delas är skyddad.",
  contact_text4: "Våra tekniska och affärsutvecklingsteam analyserar omfattningen av ditt projekt och delar den bästa vägen framåt i ett förslag.",
  contact_text5: "En programvaruutvecklingsöverenskommelse undertecknas baserat på ömsesidigt överenskomna villkor i förslaget."
}
};

// Function to update content in "What Happens Next" section based on selected language
function updateContactContent(language) {
document.getElementById("contact_heading").textContent = contactTranslations[language].contact_heading;
document.getElementById("contact_text1").textContent = contactTranslations[language].contact_text1;
document.getElementById("contact_text2").textContent = contactTranslations[language].contact_text2;
document.getElementById("contact_text3").textContent = contactTranslations[language].contact_text3;
document.getElementById("contact_text4").textContent = contactTranslations[language].contact_text4;
document.getElementById("contact_text5").textContent = contactTranslations[language].contact_text5;
// You can update other elements here if needed
}

// Set the default language
var defaultLanguage = "en";
updateContactContent(defaultLanguage);

// Handle language selector change
var languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", function() {
var selectedLanguage = languageSelector.value;
updateContactContent(selectedLanguage);
});
//




// Translation object
var processTranslations = {
  en: {
    Processes_heading: "Our Client-Centered Process:",
    consultation: "Consultation:",
    consultation_text: "We begin by having detailed discussions with you to understand the nuances of your project. We take into account your company's goals, target audience, and desired outcomes.",
    design: "Design and Development:",
    design_text: "Our designers create visually appealing designs, while our developers bring them to life with precision and efficiency.",
    testing: "Thorough Testing:",
    testing_text: "Prior to final delivery, we conduct extensive testing to ensure that the solutions meet the highest quality standards and function flawlessly.",
    delivery: "On-Time Delivery:",
    delivery_text: "We understand the value of time in business, and our project management ensures that we meet deadlines without sacrificing quality.",
    support: "Ongoing Support:",
    support_text: "Our relationship does not end with the completion of the project. We provide ongoing support to address any concerns and ensure peak performance."
  },
  es: {
    Processes_heading: "Nuestro Proceso Centrado en el Cliente:",
    consultation: "Consulta:",
    consultation_text: "Comenzamos teniendo discusiones detalladas contigo para entender los matices de tu proyecto. Tenemos en cuenta los objetivos de tu empresa, el público objetivo y los resultados deseados.",
    design: "Diseño y Desarrollo:",
    design_text: "Nuestros diseñadores crean diseños visualmente atractivos, mientras que nuestros desarrolladores los hacen realidad con precisión y eficiencia.",
    testing: "Pruebas Exhaustivas:",
    testing_text: "Antes de la entrega final, realizamos pruebas exhaustivas para asegurarnos de que las soluciones cumplan con los estándares de calidad más altos y funcionen sin problemas.",
    delivery: "Entrega a Tiempo:",
    delivery_text: "Entendemos el valor del tiempo en los negocios, y nuestra gestión de proyectos garantiza que cumplamos con los plazos sin sacrificar la calidad.",
    support: "Soporte Continuo:",
    support_text: "Nuestra relación no termina con la finalización del proyecto. Ofrecemos soporte continuo para abordar cualquier inquietud y garantizar un rendimiento óptimo."
  },
  sv: {
    Processes_heading: "Vårt Kundcentrerade Process:",
    consultation: "Konsultation:",
    consultation_text: "Vi börjar med att ha detaljerade diskussioner med dig för att förstå nyanserna i ditt projekt. Vi beaktar ditt företags mål, målgrupp och önskade resultat.",
    design: "Design och Utveckling:",
    design_text: "Våra designers skapar visuellt tilltalande design, medan våra utvecklare ger dem liv med precision och effektivitet.",
    testing: "Grundliga Tester:",
    testing_text: "Innan slutleverans utför vi omfattande tester för att säkerställa att lösningarna uppfyller de högsta kvalitetsstandarderna och fungerar felfritt.",
    delivery: "Leverans i Tid:",
    delivery_text: "Vi förstår värdet av tid i affärer, och vår projektledning säkerställer att vi uppfyller deadlines utan att kompromissa med kvaliteten.",
    support: "Ongoing Support:",
    support_text: "Vårt samarbete avslutas inte med projektets slutförande. Vi erbjuder löpande support för att hantera eventuella frågor och säkerställa optimal prestanda."
  }
};

// Function to update content based on selected language
function updateProcessContent(language) {
  document.getElementById("Processes_heading").textContent = processTranslations[language].Processes_heading;
  document.getElementById("consultation").textContent = processTranslations[language].consultation;
  document.getElementById("consultation_text").textContent = processTranslations[language].consultation_text;
  document.getElementById("design").textContent = processTranslations[language].design;
  document.getElementById("design_text").textContent = processTranslations[language].design_text;
  document.getElementById("testing").textContent = processTranslations[language].testing;
  document.getElementById("testing_text").textContent = processTranslations[language].testing_text;
  document.getElementById("delivery").textContent = processTranslations[language].delivery;
  document.getElementById("delivery_text").textContent = processTranslations[language].delivery_text;
  document.getElementById("support").textContent = processTranslations[language].support;
  document.getElementById("support_text").textContent = processTranslations[language].support_text;
  // Update other elements as needed
}

// Set the default language
var defaultLanguage = "en";
updateProcessContent(defaultLanguage);

// Handle language selector change
var languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", function() {
  var selectedLanguage = languageSelector.value;
  updateProcessContent(selectedLanguage);
});
//


// Translation object for portfolio section
var portfolioTranslations = {
en: {
  title: "Portfolio",
  item1_title: "Vinco App",
  item1_link: "Visit Site",
  item2_title: "DaarDoor Web App",
  item2_link: "Visit Site",
  item3_title: "Vinco Web App",
  item3_link: "Visit Site",
  item4_title: "Vinco Mobile App",
  item4_link: "Visit Site",
},
sv: {
  title: "Portfölj",
  item1_title: "Vinco App",
  item1_link: "Besök webbplatsen",
  item2_title: "DaarDoor Web App",
  item2_link: "Besök webbplatsen",
  item3_title: "Vinco Web App",
  item3_link: "Besök webbplatsen",
  item4_title: "Vinco Mobile App",
  item4_link: "Besök webbplatsen",
},
es: {
  title: "Portafolio",
  item1_title: "Vinco App",
  item1_link: "Visitar sitio",
  item2_title: "DaarDoor Web App",
  item2_link: "Visitar sitio",
  item3_title: "Vinco Web App",
  item3_link: "Visitar sitio",
  item4_title: "Vinco Mobile App",
  item4_link: "Visitar sitio",
},
};

// Function to update portfolio content based on selected language
function updatePortfolioContent(language) {
// Update the portfolio section title
document.getElementById("portfolio_title").textContent = portfolioTranslations[language].title;

// Update portfolio item titles and links
document.getElementById("portfolio_item1_title").textContent = portfolioTranslations[language].item1_title;
document.getElementById("portfolio_item1_link").textContent = portfolioTranslations[language].item1_link;

document.getElementById("portfolio_item2_title").textContent = portfolioTranslations[language].item2_title;
document.getElementById("portfolio_item2_link").textContent = portfolioTranslations[language].item2_link;

document.getElementById("portfolio_item3_title").textContent = portfolioTranslations[language].item3_title;
document.getElementById("portfolio_item3_link").textContent = portfolioTranslations[language].item3_link;

document.getElementById("portfolio_item4_title").textContent = portfolioTranslations[language].item4_title;
document.getElementById("portfolio_item4_link").textContent = portfolioTranslations[language].item4_link;
}

// Set the default language
var defaultLanguage = "en";
updatePortfolioContent(defaultLanguage);

// Handle language selector change
var languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", function () {
var selectedLanguage = languageSelector.value;
updatePortfolioContent(selectedLanguage);
});

//



// Translation object for contact form
var contactFormTranslations = {
en: {
  title: "Contact Us",
  name: "Your Name",
  email: "Your Email",
  organization: "Your Organization",
  service: "Select the Service Needed",
  software: "Software Development",
  web: "Web Development",
  mobile: "Mobile Development",
  other: "Other",
  message: "Message",
  submit: "Submit",
},
sv: {
  title: "Kontakta oss",
  name: "Ditt namn",
  email: "Din e-post",
  organization: "Ditt företag",
  service: "Välj önskad tjänst",
  software: "Programutveckling",
  web: "Webbutveckling",
  mobile: "Mobilutveckling",
  other: "Annat",
  message: "Meddelande",
  submit: "Skicka",
},
es: {
  title: "Contáctenos",
  name: "Tu Nombre",
  email: "Tu Correo Electrónico",
  organization: "Tu Organización",
  service: "Selecciona el Servicio Requerido",
  software: "Desarrollo de Software",
  web: "Desarrollo Web",
  mobile: "Desarrollo Móvil",
  other: "Otro",
  message: "Mensaje",
  submit: "Enviar",
},
};

// Function to update contact form content based on selected language
function updateContactFormContent(language) {
// Update the contact form section title
document.getElementById("contact_title").textContent = contactFormTranslations[language].title;

// Update form field labels
document.getElementById("label_name").textContent = contactFormTranslations[language].name;
document.getElementById("label_email").textContent = contactFormTranslations[language].email;
document.getElementById("label_organization").textContent = contactFormTranslations[language].organization;
document.getElementById("label_service").textContent = contactFormTranslations[language].service;

// Update service options
document.getElementById("option_software").textContent = contactFormTranslations[language].software;
document.getElementById("option_web").textContent = contactFormTranslations[language].web;
document.getElementById("option_mobile").textContent = contactFormTranslations[language].mobile;
document.getElementById("option_other").textContent = contactFormTranslations[language].other;

// Update message label and submit button text
document.getElementById("label_message").textContent = contactFormTranslations[language].message;
document.getElementById("submit_text").textContent = contactFormTranslations[language].submit;
}

// Set the default language
var defaultLanguage = "en";
updateContactFormContent(defaultLanguage);

// Handle language selector change for contact form
var languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", function () {
var selectedLanguage = languageSelector.value;
updateContactFormContent(selectedLanguage);
});
//




var reasonsTranslations = {
  en: {
    choose_title: "Why Choose A-Star Solutions:",
    excellence_title: "Professional Excellence:",
    excellence_text: "Our dedicated team of developers and designers is committed to delivering excellence in every project we undertake. We take pride in staying current with industry trends and best practices in order to provide cutting-edge solutions.",
    innovation_title: "Creativity and innovation are in our DNA at A-Star Solutions",
    innovation_text: "We approach each project with a fresh perspective, constantly looking for new ways to solve complex problems and deliver unrivaled results.",
    client_approach_title: "Client-Centered Approach",
    client_approach_text: "Your satisfaction is our top priority. We take the time to understand your goals, challenges, and vision in order to develop solutions that are specifically tailored to your needs. Your success is our success."
  },
  es: {
    choose_title: "¿Por qué elegir A-Star Solutions?",
    excellence_title: "Excelencia Profesional:",
    excellence_text: "Nuestro dedicado equipo de desarrolladores y diseñadores está comprometido a entregar excelencia en cada proyecto que emprendemos. Nos enorgullece mantenernos al día con las tendencias de la industria y las mejores prácticas para ofrecer soluciones de vanguardia.",
    innovation_title: "La creatividad y la innovación están en nuestro ADN en A-Star Solutions",
    innovation_text: "Abordamos cada proyecto con una perspectiva fresca, buscando constantemente nuevas formas de resolver problemas complejos y ofrecer resultados inigualables.",
    client_approach_title: "Enfoque centrado en el cliente",
    client_approach_text: "Su satisfacción es nuestra principal prioridad. Nos tomamos el tiempo para comprender sus objetivos, desafíos y visión con el fin de desarrollar soluciones específicamente adaptadas a sus necesidades. Su éxito es nuestro éxito."
  },
  sv: {
    choose_title: "Varför välja A-Star Solutions:",
    excellence_title: "Professionell Excellence:",
    excellence_text: "Vårt engagerade team av utvecklare och designers är dedikerade till att leverera excellens i varje projekt vi tar på oss. Vi är stolta över att hålla oss uppdaterade med branschtrender och bästa praxis för att erbjuda toppmoderna lösningar.",
    innovation_title: "Kreativitet och innovation genomsyrar vårt DNA på A-Star Solutions",
    innovation_text: "Vi närmar oss varje projekt med en fräsch perspektiv och letar ständigt efter nya sätt att lösa komplexa problem och leverera enastående resultat.",
    client_approach_title: "Kundcentrerat tillvägagångssätt",
    client_approach_text: "Din tillfredsställelse är vår högsta prioritet. Vi tar oss tid att förstå dina mål, utmaningar och vision för att utveckla lösningar som är specifikt anpassade efter dina behov. Din framgång är vår framgång."
  }
};

// Function to update content based on selected language
function updateReasonsContent(language) {
  // Update the content using the translation data
  document.getElementById("choose_title").textContent = reasonsTranslations[language].choose_title;
  document.getElementById("excellence_title").textContent = reasonsTranslations[language].excellence_title;
  document.getElementById("excellence_text").textContent = reasonsTranslations[language].excellence_text;
  document.getElementById("innovation_title").textContent = reasonsTranslations[language].innovation_title;
  document.getElementById("innovation_text").textContent = reasonsTranslations[language].innovation_text;
  document.getElementById("client_approach_title").textContent = reasonsTranslations[language].client_approach_title;
  document.getElementById("client_approach_text").textContent = reasonsTranslations[language].client_approach_text;
}

// Set the default language
var defaultLanguage = "en";
updateReasonsContent(defaultLanguage);

// Handle language selector change
var languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", function() {
  var selectedLanguage = languageSelector.value;
  updateReasonsContent(selectedLanguage);
});
//


// Translation object
var headerTranslations = {
  en: {
    home: "Home",
    solutions: "Solutions",
    processes: "Our Processes",
    portfolio: "Portfolio",
    requestQuote: "Request a Quote",
  },
  sv: {
    home: "Hem",
    solutions: "Lösningar",
    processes: "Våra Processer",
    portfolio: "Portfölj",
    requestQuote: "Begär en Offert",
  },
  es: {
    home: "Inicio",
    solutions: "Soluciones",
    processes: "Nuestros Procesos",
    portfolio: "Portafolio",
    requestQuote: "Solicitar Cotización",
  },
};

// Function to update content based on selected language
function updateHeaderContent(language) {
  // Update the navigation menu items
  document.querySelector("a[href='/']").textContent = headerTranslations[language].home;
  document.querySelector("a[href='#solutions']").textContent = headerTranslations[language].solutions;
  document.querySelector("a[href='#processes']").textContent = headerTranslations[language].processes;
  document.querySelector("a[href='#portfolio']").textContent = headerTranslations[language].portfolio;
  document.querySelector("a[href='#contact']").textContent = headerTranslations[language].requestQuote;
}

// Set the default language
var defaultLanguage = "en";
updateHeaderContent(defaultLanguage);

// Handle language selector change
var languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", function() {
  var selectedLanguage = languageSelector.value;
  updateHeaderContent(selectedLanguage);
});


// Set the default language
var defaultLanguage = "en";
updateSectionContent(defaultLanguage);
updateWelcomeContent(defaultLanguage);
updateContactContent(defaultLanguage);
updateProcessContent(defaultLanguage);
updatePortfolioContent(defaultLanguage);
updateContactFormContent(defaultLanguage);
updateReasonsContent(defaultLanguage);
updateHeaderContent(defaultLanguage);

// Handle language selector change
var languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", function() {
  var selectedLanguage = languageSelector.value;
  updateSectionContent(selectedLanguage);
  updateWelcomeContent(selectedLanguage);
  updateContactContent(selectedLanguage);
  updateProcessContent(selectedLanguage);
  updatePortfolioContent(selectedLanguage);
  updateContactFormContent(selectedLanguage);
  updateReasonsContent(selectedLanguage);
  updateHeaderContent(selectedLanguage);
});