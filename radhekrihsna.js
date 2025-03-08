
function adca2024() {
    window.open("https://gcsm2024.netlify.app/", "_blank");
}
function TYPING2024() {
    window.open("https://typing-2024.netlify.app/", "_blank");
}
function TYPING2023() {
    window.open("https://gcsmtyp.netlify.app/", "_blank");
}
function TYPING2024() {
    window.open("https://typing-2024.netlify.app/", "_blank");
}function ADCA2022_2023() {
    window.open("https://globalcomputer.netlify.app/", "_blank");
}
function showTab(tabId) {
    // सभी टैब कंटेंट को छुपाएं
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // केवल चयनित टैब को दिखाएं
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

function openCourse() {
    const courseSelect1 = document.getElementById('coursedegree1');
    const courseSelect2 = document.getElementById('coursedegree2');

    if (courseSelect1.value === 'adca2024lenahai' && courseSelect2.value === '2024') {
        // Open the URL in a new tab for ADCA 2024
        window.open('https://gcsm2024.netlify.app/', '_blank');
    } else if (courseSelect1.value === 'adca2024lenahai' && courseSelect2.value === '2023') {
        // Open the URL in a new tab for TYPING 2023
        window.open('https://globalcomputer.netlify.app/', '_blank');
    }
    else if (courseSelect1.value === 'adca2024lenahai' && courseSelect2.value === '2022') {
        // Open the URL in a new tab for TYPING 2023
        window.open('https://globalcomputer.netlify.app/', '_blank');
    }
    
    // yaha se typing suru ho rha hai
    else if (courseSelect1.value === 'adca2023lenahai' && courseSelect2.value === '2024') {
        // Open the URL in a new tab for TYPING 2023
        window.open('https://typing-2024.netlify.app/', '_blank');
    }
    else if (courseSelect1.value === 'adca2023lenahai' && courseSelect2.value === '2023') {
        // Open the URL in a new tab for TYPING 2023
        window.open('https://gcsmtyp.netlify.app/', '_blank');
    }
    else if (courseSelect1.value === 'adca2023lenahai' && courseSelect2.value === '2023B') {
        // Open the URL in a new tab for TYPING 2023
        window.open('https://gcsmtyp.netlify.app/', '_blank');
    }
    else {
        alert('Please select Dhyan se Chelaa???');
    }
}