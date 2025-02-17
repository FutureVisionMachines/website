// Set the launch date (YYYY, MM (0-indexed), DD, HH, MM, SS)
const launchDate = new Date(2025, 2, 1, 0, 0, 0).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft <= 0) {
    document.querySelector('.countdown').innerHTML = "<h2>We're Live! 🎉</h2>";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? '0' + days : days;
  document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Handle Subscription Form Submission
document.getElementById("subscribe-form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you for subscribing! 🚀");
});