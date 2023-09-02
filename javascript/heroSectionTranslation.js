
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