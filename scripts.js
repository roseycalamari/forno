// Language translations JSON mapping
const translations = {
    uk: {
        pepperoni_title: "ПЕПЕРОНІ",
        pepperoni_desc: "Пепероні, моцарела, маскарпоне та пармезан, томатне пюре з травами.",
        margherita_title: "ТУРБО МАРГАРИТА",
        margherita_desc: "Моцарела, маскарпоне та пармезан, томатне пюре з травами.",
        spinach_title: "МАСКАРПОНЕ ЗІ ШПИНАТОМ",
        spinach_desc: "Шпинат з маскарпоне та соусом мускатного горіха, гауда, моцарела та пармезан, шинка, гарбузове насіння.",
        cheese_title: "ШІСТЬ СИРІВ З РОЗМАРИНОМ",
        cheese_desc: "Гауда, моцарела, брі, пекоріно, пармезан, маскарпоне, карамелізована цибуля, чебрець та соус розмарину."
    },
    en: {
        pepperoni_title: "PEPPERONI",
        pepperoni_desc: "Pepperoni, mozzarella, mascarpone and parmesan cheeses, tomato puree with herbs.",
        margherita_title: "TURBO MARGHERITA",
        margherita_desc: "Mozzarella, mascarpone and parmesan cheeses, tomato puree with herbs.",
        spinach_title: "MASCARPONE WITH SPINACH",
        spinach_desc: "Spinach with mascarpone and nutmeg sauce, gouda, mozzarella and parmesan cheeses, ham, pumpkin seeds.",
        cheese_title: "SIX CHEESES WITH ROSEMARY",
        cheese_desc: "Gouda, mozzarella, brie, pecorino, parmesan, mascarpone, caramelized onions, thyme and rosemary sauce."
    }
};

// Current language (default: Ukrainian)
let currentLang = 'uk';

// Function to translate the page
function translatePage(lang) {
    currentLang = lang;
    
    // Update document language
    document.documentElement.lang = lang;
    
    // We're not using data-translate attributes in this version,
    // but if we add them later, this code would work
}

// Language toggle functionality
document.querySelectorAll('.language-toggle button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.language-toggle button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Translate page
        const lang = this.getAttribute('data-lang');
        translatePage(lang);
    });
});

// Initialize page in Ukrainian
translatePage('uk'); 