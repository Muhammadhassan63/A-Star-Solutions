
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