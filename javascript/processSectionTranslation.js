
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
  