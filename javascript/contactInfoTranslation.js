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