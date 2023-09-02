
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
  
  
  