// jana's code
document.getElementById("header1").innerHTML = "Home"
document.getElementById("header2").innerHTML = "Sports"
document.getElementById("header3").innerHTML = "Teams"
document.getElementById("header4").innerHTML = "News"
document.getElementById("header5").innerHTML = "Results"
document.getElementById("header6").innerHTML = "About"
document.getElementById("teamsHeroMain").innerHTML = "Teams and Athletes"
document.getElementById("teamsHeroText").innerHTML = "Discover the top-performing universities and athletes competing across Egypt's premier sports federation."
// jana's code

// samia's code
let rankings = [{
    rank: "#1",
    university: "Cairo University",
    totalpoints: "2,450",
    totalmedals: "115",
    sport1: "Football",
    sport2: "Volleyball"
},
{
    rank: "#2",
    university: "Ain Shams University",
    totalpoints: "2,350",
    totalmedals: "105",
    sport1: "Basketball",
    sport2: "Swimming"
}
]
for (i = 0; i < 2; i++) {
document.getElementById("rankingsrow").innerHTML += `   
<div class="LM_card">
    <h6 class="LM_text">${rankings[i].rank} ${rankings[i].university}</h6>
    <div class="LM_carddiv">
        <div class="LM_carddiv1">
            <h6 class="LM_text">Total Points</h6>
            <div class="LM_scorebox">
                <h6 class="LM_text">${rankings[i].totalpoints}</h6>
            </div>
        </div>
        <div class="LM_carddiv1">
            <h6 class="LM_text">Total Medals</h6>
            <div class="LM_scorebox">
                <h6 class="LM_text">${rankings[i].totalmedals}</h6>
            </div>
        </div>
    </div>
    <h6 class="LM_buttontext">Top Sports</h6>
    <div class="Teams_sports_container">
        <div class="UC_button">
            <h6 class="teams_button_white_text">${rankings[i].sport1}</h6>
        </div>
        <div class="UC_button">
            <h6 class="teams_button_white_text">${rankings[i].sport2}</h6>
        </div>
    </div>
</div>`;
}

document.getElementById("Teamtext1").innerHTML = "UNIVERSITY RANKINGS";
document.getElementById("Teamtext2").innerHTML = "View more";
// samia's code

// jana's code
document.getElementById("teamsSec2Header").innerHTML = "TOP ATHLETES"


let athletes = [{
    img: "imgs/athlete1.jpg",
    name: "Youssef Shamel",
    sport: "Épée Fencing",
    uni: "Egypt University of Informatics",
    medal: "imgs/gold-medal-icon.svg",
}, {
    img: "imgs/athlete2.jpg",
    name: "Dana Mohamed",
    sport: "Épée Fencing",
    uni: "Egypt University of Informatics",
    medal: "imgs/bronze-medal-icon.svg",
}, {
    img: "imgs/athlete3.jpg",
    name: "Youssef Shamel",
    sport: "Taekwondo",
    uni: "Egypt University of Informatics",
    medal: "imgs/silver-medal-icon.svg",
}]

for (i = 0; i < 3; i++) {
    document.getElementById("athletesRow1").innerHTML += `
                <div class="athlete">
                    <img class="athlete-img" src="${athletes[i].img}">
                    <div class="athlete-content">
                        <div class="athlete-details">
                            <h5>${athletes[i].name}</h5>
                            <span>${athletes[i].sport}</span>
                            <span>${athletes[i].uni}</span>
                        </div>
                        <img class="medal" src="${athletes[i].medal}">
                    </div>
                </div>`;
}

let athletes2 = [{
    img: "imgs/athlete4.jpg",
    name: "Malak Abdel Shafie",
    sport: "Para Swimming",
    uni: "The American University in Cairo",
    medal: "imgs/bronze-medal-icon.svg",
}, {
    img: "imgs/athlete5.jpg",
    name: "Youssef Tamer",
    sport: "Swimming",
    uni: "German International University",
    medal: "imgs/silver-medal-icon.svg",
}, {
    img: "imgs/athlete6.jpg",
    name: "Hassan Ali",
    sport: "Darts",
    uni: "Arab Academy for Science, Tech...",
    medal: "imgs/silver-medal-icon.svg",
}]

for (i = 0; i < 3; i++) {
    document.getElementById("athletesRow2").innerHTML += `
                <div class="athlete">
                    <img class="athlete-img" src="${athletes2[i].img}">
                    <div class="athlete-content">
                        <div class="athlete-details">
                            <h5>${athletes2[i].name}</h5>
                            <span>${athletes2[i].sport}</span>
                            <span>${athletes2[i].uni}</span>
                        </div>
                        <img class="medal" src="${athletes2[i].medal}">
                    </div>
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
