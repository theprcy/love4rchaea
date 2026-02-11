const noBtn = document.querySelector('#no-button');

noBtn.addEventListener('mouseover', () => {
 
    const padding = 20; 
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed'; 
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

function goToStep2() {
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');
    
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff69b4', '#ffffff']
    });

    initConsentForm();
}

function initConsentForm() {
    const checkboxes = document.querySelectorAll('.consent-checkbox');
    const submitBtn = document.querySelector('#submit-btn');
    const warningMsg = document.querySelector('#warning-msg');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const allChecked = Array.from(checkboxes).every(c => c.checked);
            
            if (allChecked) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('bg-gray-300', 'cursor-not-allowed');
                submitBtn.classList.add('bg-rose-500', 'hover:bg-rose-600', 'cursor-pointer');
                warningMsg.innerText = "Ready to submit! ❤️";
            } else {
                submitBtn.disabled = true;
                submitBtn.classList.add('bg-gray-300', 'cursor-not-allowed');
                submitBtn.classList.remove('bg-rose-500', 'hover:bg-rose-600', 'cursor-pointer');
                warningMsg.innerText = "All boxes must be checked to proceed ^^ 💕";
            }
        });
    });
}

function goToStep3() {
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-3').classList.remove('hidden');

    document.body.style.backgroundColor = '#ffe4e6';
    
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
}