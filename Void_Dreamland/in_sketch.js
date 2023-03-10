const USBtn = document.getElementById('US-btn');
const CNBtn = document.getElementById('CN-btn');
const UKBtn = document.getElementById('UK-btn');

USBtn.addEventListener('click', () => {
    // Replace "page1.html" with the URL of the page you want to navigate to
    window.location.href = "US_1.html";
});

CNBtn.addEventListener('click', () => {
    // Replace "page2.html" with the URL of the page you want to navigate to
    window.location.href = "CN_1.html";
});

UKBtn.addEventListener('click', () => {
  // Replace "page2.html" with the URL of the page you want to navigate to
  window.location.href = "UK_1.html";
});
