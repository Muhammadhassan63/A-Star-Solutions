
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
    