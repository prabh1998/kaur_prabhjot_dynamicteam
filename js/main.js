(() => {
	let toPrabhBhatti = document.querySelector(".changePB"),
		toPrabhGill = document.querySelector(".changePG");

	function changePB() {
		document.getElementById("member1").src="images/prabh_bhatti.jpeg";
		document.querySelector(".teammate1").classList.add("hidden");
		document.querySelector(".teammate2").classList.remove("hidden");
		document.querySelector(".changeMyText").textContent="CHANGE TO PRABHJOT GILL";
		document.querySelector(".buttonPB").classList.add("hidden");
		document.querySelector(".buttonPG").classList.remove("hidden");
	}

	toPrabhBhatti.addEventListener("click", changePB);

	function changePG() {
		document.getElementById("member1").src="images/prabhgill.jpg";
		document.querySelector(".teammate2").classList.add("hidden");
		document.querySelector(".teammate1").classList.remove("hidden");
		document.querySelector(".changeMyText").textContent="CHANGE TO PRABHJOT BHATTI";
		document.querySelector(".buttonPB").classList.remove("hidden");
		document.querySelector(".buttonPG").classList.add("hidden");
	}

	toPrabhGill.addEventListener("click", changePG);


})();