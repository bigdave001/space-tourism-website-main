const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navLinks = document.querySelector(".nav-links");

// Add space between number and word in nav links
window.addEventListener("DOMContentLoaded", function () {
  const navAnchors = document.querySelectorAll(".nav-links a");
  navAnchors.forEach((link) => {
    link.innerHTML = link.innerHTML.replace(
      /^(\d{2})([A-Za-z]+)/,
      '<span class="nav-num">$1</span> $2'
    );
  });

  // Set active class based on current URL
  const current = window.location.pathname.split("/").pop();
  navAnchors.forEach((link) => {
    const href = link.getAttribute("href");
    if ((current === "" && href === "index.html") || current === href) {
      link.classList.add("active");
    }
  });
});

openMenu.onclick = () => {
  navLinks.classList.add("show");
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
};

closeMenu.onclick = () => {
  navLinks.classList.remove("show");
  closeMenu.classList.add("hidden");
  openMenu.classList.remove("hidden");
};
const planetData = {
  moon: {
    name: "MOON",
    img: "assets/destination/image-moon.png", // Add the correct image path here
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time: "3 DAYS",
  },
  mars: {
    name: "MARS",
    img: "assets/destination/image-mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS",
  },
  europa: {
    name: "EUROPA",
    img: "assets/destination/image-europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    time: "6 YEARS",
  },
  titan: {
    name: "TITAN",
    img: "assets/destination/image-titan.png",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 YEARS",
  },
};

const buttons = document.querySelectorAll(".tabs button");
const img = document.getElementById("planet-img");
const name = document.getElementById("planet-name");
const desc = document.getElementById("planet-description");
const dist = document.getElementById("planet-distance");
const time = document.getElementById("planet-time");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const planet = button.getAttribute("data-planet");
    const data = planetData[planet];

    // update content
    img.src = data.img;
    img.alt = data.name;
    name.textContent = data.name;
    desc.textContent = data.description;
    dist.textContent = data.distance;
    time.textContent = data.time;

    // update active tab
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
const profiles = [
  {
    role: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "assets/crew/image-douglas-hurley.png",
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "assets/crew/image-mark-shuttleworth.png",
  },
  {
    role: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: "assets/crew/image-victor-glover.png",
  },
  {
    role: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "assets/crew/image-anousheh-ansari.png",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dot");
  const role = document.getElementById("role");
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const image = document.getElementById("image");

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);

      // Change the text and image
      role.textContent = profiles[index].role;
      name.textContent = profiles[index].name;
      description.textContent = profiles[index].description;
      image.src = profiles[index].image;

      // Remove red dot from all
      dots.forEach((d) => d.classList.remove("active"));

      // Make this one red
      dot.classList.add("active");
    });
  });
});
const technologyItems = [
  {
    role: "THE TERMINOLOGY...",
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: "assets/technology/image-launch-vehicle-portrait.jpg",
  },
  {
    role: "THE TERMINOLOGY...",
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: "assets/technology/image-spaceport-portrait.jpg",
  },
  {
    role: "THE TERMINOLOGY...",
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: "assets/technology/image-space-capsule-portrait.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const techDots = document.querySelectorAll(".tech-dot");
  const techRole = document.getElementById("tech-role");
  const techName = document.getElementById("tech-name");
  const techDescription = document.getElementById("tech-description");
  const techImage = document.getElementById("tech-image");

  techDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);

      techRole.textContent = technologyItems[index].role;
      techName.textContent = technologyItems[index].name;
      techDescription.textContent = technologyItems[index].description;
      techImage.src = technologyItems[index].image;

      techDots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
});
