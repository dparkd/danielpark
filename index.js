function seeDalle() {
  var x = document.getElementById("dalle_tooltip");
  var y = document.getElementById("dalle_seemore");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "See Less";
  } else {
    x.style.display = "none";
    y.innerHTML = "See More";
  }
}

function seePaper() {
  var x = document.getElementById("paper_tooltip");
  var y = document.getElementById("paper_seemore");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "See Less";
  } else {
    x.style.display = "none";
    y.innerHTML = "See More";
  }
}

function seeStar() {
  var x = document.getElementById("star_tooltip");
  var y = document.getElementById("star_seemore");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "See Less";
  } else {
    x.style.display = "none";
    y.innerHTML = "See More";
  }
}

function seeTicket() {
  var x = document.getElementById("ticket_tooltip");
  var y = document.getElementById("ticket_seemore");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "See Less";
  } else {
    x.style.display = "none";
    y.innerHTML = "See More";
  }
}