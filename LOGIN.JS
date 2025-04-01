// Função principal para configurar os botões mobile
function setupMobileToggle() {
    // Remove botões existentes para evitar duplicação
    document.querySelectorAll('.mobile-toggle').forEach(btn => btn.remove());
    
    // Verifica se é mobile
    if (window.innerWidth <= 768) {
        // Cria botão para formulário de login
        const loginToggle = document.createElement('button');
        loginToggle.className = 'mobile-toggle';
        loginToggle.textContent = 'Criar uma nova conta';
        
        // Cria botão para formulário de cadastro
        const signupToggle = document.createElement('button');
        signupToggle.className = 'mobile-toggle';
        signupToggle.textContent = 'Já tem uma conta? Faça login';
        signupToggle.style.display = 'none';

        // Adiciona aos formulários
        const signInForm = document.getElementById('signInForm');
        const signUpForm = document.getElementById('signUpForm');
        
        if (signInForm) {
            signInForm.appendChild(loginToggle);
            signInForm.style.display = 'flex';
            signInForm.style.flexDirection = 'column';
            signInForm.style.alignItems = 'center';
        }
        
        if (signUpForm) {
            signUpForm.appendChild(signupToggle);
            signUpForm.style.display = 'flex';
            signUpForm.style.flexDirection = 'column';
            signUpForm.style.alignItems = 'center';
        }

        // Função de alternância
        const toggleForms = () => {
            const container = document.getElementById('container');
            if (container) {
                container.classList.toggle('right-panel-active');
                
                if (container.classList.contains('right-panel-active')) {
                    loginToggle.style.display = 'none';
                    signupToggle.style.display = 'flex';
                } else {
                    loginToggle.style.display = 'flex';
                    signupToggle.style.display = 'none';
                }
            }
        };

        // Eventos de clique
        loginToggle.addEventListener('click', toggleForms);
        signupToggle.addEventListener('click', toggleForms);
    }
}

// Executa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', setupMobileToggle);

// Também executa quando a janela for redimensionada
window.addEventListener('resize', setupMobileToggle);