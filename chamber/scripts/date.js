// select the elements to manipulate (output to)
const headerdate = document.querySelector(".date");
const footerdate = document.querySelector("#date");
// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

headerdate.innerHTML = fulldate;
footerdate.innerHTML = fulldate;