// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = '🌞';
    } else {
        modeToggle.textContent = '🌙';
    }
});
document.querySelector('.cta-button').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector('#explore-hackathons');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
const hackathons = [
    {
        name: "Hackathon 1",
        description: "An exciting online hackathon to showcase your skills.",
        image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2023-10-13T13%3A18%3A03.254Z-1000124912.jpg",
    },
    {
        name: "Hackathon 2",
        description: "Join us for an offline event in Delhi.",
        image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-11-30T05%3A22%3A43.149Z-h2s%20home%20%281%29.png",
    },
    {
        name: "Hackathon 3",
        description: "Participate in a thrilling coding competition.",
        image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-11-29T10%3A00%3A24.363Z-homepage.sbi.h2s%20%282%29.png",
    },
    {
        name: "Hackathon 4",
        description: "An offline hackathon in Mumbai with amazing prizes.",
        image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2025-01-09T07%3A38%3A16.272Z-Frame%20152.png",
    },
    {
        name: "Hackathon 5",
        description: "Collaborate and innovate in this online event.",
        image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-10-17T02%3A22%3A54.175Z-homepage.aibl.old.png",
    },
    {
        name: "Hackathon 6",
        description: "An exciting online hackathon to showcase your skills.",
        image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-08-30T03%3A58%3A11.297Z-homepage.ABC-min-v2.png",
    },
    {
        name: "Hackathon 7",
        description: "Join us for an offline event in Delhi.",
        image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-07-04T12%3A07%3A30.534Z-new.web.ISRO.png",
    },
    {
        name: "Hackathon 8",
        description: "Participate in a thrilling coding competition.",
        image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-03-26T06%3A17%3A03.902Z-homepage%20%283%29.png",
    },
    {
        name: "Hackathon 9",
        description: "An offline hackathon in Mumbai with amazing prizes.",
        image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2023-12-09T07%3A27%3A53.444Z-home%20page%20%283%29.png",
    },
    {
        name: "Hackathon 10",
        description: "Collaborate and innovate in this online event.",
        image: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-07-06T06%3A15%3A14.610Z-homepage.png",
    },
];

// Add hackathon cards to the container
const hackathonList = document.getElementById("hackathon-list");

hackathons.forEach((hackathon) => {
    const card = document.createElement("div");
    card.classList.add("hackathon-card");
    card.innerHTML = `
        <img src="${hackathon.image}" alt="${hackathon.name}">
        <h3>${hackathon.name}</h3>
        <p>${hackathon.description}</p>
        <button>Register</button>
    `;
    hackathonList.appendChild(card);
});

hackathonList.scrollTo({ left: 0, behavior: "smooth" });
                scrollAmount = 0;
            
        
; // Adjust speed by changing 20


// Function to stop auto-scroll
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Event listeners for manual scrolling
hackathonList.addEventListener("scroll", () => {
    isScrolling = true;
    stopAutoScroll();

    // Resume auto-scroll after 2 seconds of no scrolling
    clearTimeout(hackathonList.scrollTimeout);
    hackathonList.scrollTimeout = setTimeout(() => {
        isScrolling = false;
        startAutoScroll();
    }, 2000);
});

// Start auto-scroll initially
startAutoScroll();