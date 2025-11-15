// Open a tab
function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    document.getElementById(tabName).style.display = 'block';
}

// Default open Home
openTab('home');

// Register button opens WhatsApp
function registerCitizen() {
    const phone = "9986211712";
    const message = encodeURIComponent("I want to become a citizen of Paperzia!");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
