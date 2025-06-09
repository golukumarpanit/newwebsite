
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
    else if (courseSelect1.value === 'Airtable' && courseSelect2.value === 'Airtable20') {
        // Show alert first
        alert('Sirf Amankumarpandit mail se hi khulega.');
        // After alert is closed, open the URL
        setTimeout(() => {
            window.open('https://airtable.com/appGsMAUq85SeCLO1/tblWrew2BYIhRC9RX/viwttwAUE93neKoqA?blocks=hide', '_blank');
        }, 100); // Small delay to ensure alert is closed
    }
    else if (courseSelect1.value === 'Airtable' && courseSelect2.value === 'Airtable30') {
        // Show alert first
        alert('Sirf Amankumarpandit mail se hi khulega.');
        // After alert is closed, open the URL
        setTimeout(() => {
            window.open('https://airtable.com/appQgYPqyGnNdrtlL/tblWjy4iSRMiXUYdQ/viwFEl6S6LBc4NblW?blocks=hide', '_blank');
        }, 100); // Small delay to ensure alert is closed
    }
    // yaha se marksheets add kiya hai 
    else if (courseSelect1.value === 'adca2024lenahai' && courseSelect2.value === 'marksheets') {
        // Show alert first
        alert('Sirf Amankumarpandit mail se hi khulega.');
        // After alert is closed, open the URL
        setTimeout(() => {
            window.open('https://marksheets2024.netlify.app/', '_blank');
        }, 100); // Small delay to ensure alert is closed
    }
    else {
        alert('Please select Dhyan se Chelaa???');
    }
}