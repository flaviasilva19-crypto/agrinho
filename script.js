// script.js - Agrinho Sustentável Open Source

// Local Memory State
let points = parseInt(localStorage.getItem('agrinho_os_points')) || 150;

// Update core displays
function updatePointsDisplay() {
    document.getElementById('score-counter').textContent = points;
    document.getElementById('rank-points').textContent = points + ' 🌱';
    localStorage.setItem('agrinho_os_points', points);
}

// 1. Simulation Action handler
function runSimulation(choice) {
    const feedbackBox = document.getElementById('sim-feedback');
    feedbackBox.classList.remove('hidden', 'correct', 'incorrect');
    
    if (choice === 'direto') {
        points += 50;
        feedbackBox.textContent = 'Parabéns! O Plantio Direto evita erosões e alimenta os microrganismos. Ganhou +50 🌱!';
        feedbackBox.classList.add('correct');
    } else {
        if (points > 10) points -= 10;
        feedbackBox.textContent = 'Alerta! O revolvimento expõe o solo ao vento e evapora a água. Perdeu -10 🌱.';
        feedbackBox.classList.add('incorrect');
    }
    
    updatePointsDisplay();
}

// 2. Quiz interactive state
function checkQuiz(selectedIndex) {
    const feedbackBox = document.getElementById('quiz-feedback');
    feedbackBox.classList.remove('hidden', 'correct', 'incorrect');
    
    if (selectedIndex === 1) { // Choice B is correct
        points += 40;
        feedbackBox.textContent = "Correto! A palha vegetal amortece a água da chuva no solo e previne perdas nutricionais. Ganhou +40 🌱!";
        feedbackBox.classList.add('correct');
    } else {
        feedbackBox.textContent = "Ops! Resposta incorreta. Lembre-se que a cobertura do solo fornece proteção física.";
        feedbackBox.classList.add('incorrect');
    }
    
    updatePointsDisplay();
}

// Initialize on page boot
window.onload = function() {
    updatePointsDisplay();
};
