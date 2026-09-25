const joinButton = document.getElementById("btn");
const joinStatus = document.getElementById("join-status");

joinButton.addEventListener("click", () => {
	joinButton.textContent = "Joined";
	joinButton.disabled = true;
	joinStatus.textContent = "Joined successfully. Thanks for connecting!";
});
