

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
  
  