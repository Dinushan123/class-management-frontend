document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const grade = urlParams.get('grade');
    const month = urlParams.get('month');

    const infoText = document.getElementById('info');
    const whatsappLink = document.getElementById('whatsapp-link');

    if (grade === '10') {
        infoText.textContent = `Grade 10 - ${month}`;
        whatsappLink.href = "https://chat.whatsapp.com/HBEAdmwstGhLBzwX4Ov9Dq";
    } else if (grade === '11') {
        infoText.textContent = `Grade 11 - ${month}`;
        whatsappLink.href = "https://chat.whatsapp.com/LawfR2hG9zUEnQoQuLIXPP";
    }
});
