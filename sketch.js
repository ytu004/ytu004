const startBtn = document.getElementById('start-btn');



startBtn.addEventListener('click', () => {
    // Replace "new-page.html" with the URL of the page you want to navigate to
    window.location.href = "instruction.html";
});







const publishBtn = document.getElementById("publish");

publishBtn.addEventListener("click", (event) => {
	event.preventDefault(); // prevent form from submitting
	window.location.href = "index.html"; // redirect to home page
});