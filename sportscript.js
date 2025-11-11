// jana's code
document.getElementById("header1").innerHTML = "Home"
document.getElementById("header2").innerHTML = "Sports"
document.getElementById("header3").innerHTML = "Teams"
document.getElementById("header4").innerHTML = "News"
document.getElementById("header5").innerHTML = "Results"
document.getElementById("header6").innerHTML = "About"
document.getElementById("sportsHeroMain").innerHTML = "Sports";
document.getElementById("sportsHeroText").innerHTML = "From team sports to individual competitions, find your passion and compete at the highest level of university athletics in Egypt.";
document.getElementById("sportsSecHeader").innerHTML = "Sports";
document.getElementById("sportsFilter").innerHTML = "All Sports";

let sports = [{
    sport: "Fencing",
    indicator: "Individual",
    img: "imgs/sport1.jpg",
    athletes: "300",
    universities: "8",
},{
    sport: "Swimming",
    indicator: "Individual",
    img: "imgs/sport2.jpg",
    athletes: "1,200",
    universities: "16",
},{
    sport: "Football",
    indicator: "Team",
    img: "imgs/sport3.jpg",
    athletes: "2,400",
    universities: "24",
}]

for (i = 0; i < 3; i++) {
    document.getElementById("sportsRow1").innerHTML += `
        <div class="sport">
            <div class="sport-header">
                <h5>${sports[i].sport}</h5>
                <div class="sport-indicator">${sports[i].indicator}</div>
            </div>
            <img src="${sports[i].img}">
            <div class="sport-digits">
                <div class="sport-digits-content">
                    <h5>${sports[i].athletes}</h5>
                    <span>Athletes</span>
                </div>
                <div class="sport-digits-content">
                    <h5>${sports[i].universities}</h5>
                    <span>Universities</span>
                </div>
            </div>
            <button class="sport-btn">View Championships</button>
        </div>`;
}

let sports2 = [{
    sport: "Basketball",
    indicator: "Team",
    img: "imgs/sport4.jpg",
    athletes: "1,800",
    universities: "22",
},{
    sport: "Volleyball",
    indicator: "Team",
    img: "imgs/sport5.jpg",
    athletes: "1,600",
    universities: "20",
},{
    sport: "Tennis",
    indicator: "Individual",
    img: "imgs/sport6.jpg",
    athletes: "600",
    universities: "14",
}]

for (i = 0; i < 3; i++) {
    document.getElementById("sportsRow2").innerHTML += `
        <div class="sport">
            <div class="sport-header">
                <h5>${sports2[i].sport}</h5>
                <div class="sport-indicator">${sports2[i].indicator}</div>
            </div>
            <img src="${sports2[i].img}">
            <div class="sport-digits">
                <div class="sport-digits-content">
                    <h5>${sports2[i].athletes}</h5>
                    <span>Athletes</span>
                </div>
                <div class="sport-digits-content">
                    <h5>${sports2[i].universities}</h5>
                    <span>Universities</span>
                </div>
            </div>
            <button class="sport-btn">View Championships</button>
        </div>`;
}
// jana's code

// samia's code //
      // footer //
      document.getElementById("footertext1").innerHTML = "Egyptian University Sports Federation";
      document.getElementById("footernav1").innerHTML = "Home";
      document.getElementById("footernav2").innerHTML = "Sports";
      document.getElementById("footernav3").innerHTML = "Teams";
      document.getElementById("footernav4").innerHTML = "News";
      document.getElementById("footernav5").innerHTML = "Results";
      document.getElementById("footernav6").innerHTML = "About";
      document.getElementById("footerdivider").innerHTML = "|";
      document.getElementById("footerdivider1").innerHTML = "|";
      document.getElementById("footerdivider2").innerHTML = "|";
      document.getElementById("footerdivider3").innerHTML = "|";
      document.getElementById("footerdivider4").innerHTML = "|";
      document.getElementById("copywrites1").innerHTML = "© 2025 EUSF . All rights reserved.";
      // samia's code //