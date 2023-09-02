  // Translation object
  var footerTranslations = {
    en: {
      title: "A-Star Solutions",
      copyright: "© 2023 A-Star Solutions. All rights reserved.",
      address: "Address: Sweden",
    },
    sv: {
      title: "A-Star Lösningar",
      copyright: "© 2023 A-Star Lösningar. Alla rättigheter förbehållna.",
      address: "Adress: Sverige",
    },
    es: {
      title: "A-Star Soluciones",
      copyright: "© 2023 A-Star Soluciones. Todos los derechos reservados.",
      address: "Dirección: Suecia",
    },
  };

  // Function to update footer content based on selected language
  function updateFooterContent(language) {
    // Update the footer title, copyright, and address
    document.getElementById("footer_title").textContent = footerTranslations[language].title;
    document.getElementById("footer_copyright").textContent = footerTranslations[language].copyright;
    document.getElementById("footer_address").textContent = footerTranslations[language].address;
  }

  // Set the default language
  var defaultLanguage = "en";
  updateFooterContent(defaultLanguage);

  // Handle language selector change
  var languageSelector = document.getElementById("languageSelector");
  languageSelector.addEventListener("change", function() {
    var selectedLanguage = languageSelector.value;
    updateFooterContent(selectedLanguage);
  });