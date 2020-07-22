$(document).ready(function () {
	var arr = ["pics/33.jpg", "pics/66.jpg", "pics/11.jpg"];
	var ind = 0;
	var temp = document.createElement("img");
	document.getElementById("picu").appendChild(temp);
	temp.style.height = "650px";
	temp.style.width = "100%";
	temp.class = "img-responsive";
	var show = function () {
		temp.src = arr[ind];
		ind++;
		if (ind > arr.length - 1) {
			ind = 0;
		}
	};
	var current = function () {
		show();
		$("#about .picme img").fadeIn("slow", function () {
			setTimeout(function () {
				$("#about .picme img").fadeOut("slow", current);
			}, 2000);
		});
	};
	current();
});
