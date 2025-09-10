// Data
const modules = [
    {
        id: 'workout',
        title: 'Rotina de Treino: Projeto Verão',
        description: 'Prepare seu corpo para o verão com treinos eficazes e resultados garantidos',
        gradient: 'linear-gradient(135deg, #ff6b35, #dc2626)',
        coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1600',
        videos: [
            { id: 'W2BrY2sEbSg', title: 'Primeira Aula', description: 'Aula introdutória do programa de treino' },
            { id: 'DAopIzOrLuo', title: 'Segunda Aula', description: 'Continuação do programa de treino' },
            { id: 'khu8PSv-1u8', title: 'Terceira Aula', description: 'Progressão avançada dos exercícios' },
            { id: 'l84YxJd4tT0', title: 'Quarta Aula', description: 'Finalização do ciclo de treino' },
            { id: 'DQFLkPZkn3A', title: 'Quinta Aula', description: 'Evolução dos exercícios básicos' },
            { id: 'MBfxdjNYuc8', title: 'Sexta Aula', description: 'Aprofundamento da técnica' },
            { id: 'EaSxH8R2pFw', title: 'Sétima Aula', description: 'Desenvolvimento da resistência' },
            { id: 'jb59YKb4lds', title: 'Oitava Aula', description: 'Fortalecimento muscular' },
            { id: 'pjdU79WxNMc', title: 'Nona Aula', description: 'Intensificação do treino' },
            { id: 'bYNSsbKTbG0', title: 'Décima Aula', description: 'Resistência e coordenação' }
        ]
    },
    {
        id: 'nutrition',
        title: 'Receitas Saudáveis para Emagrecer Saudável',
        description: 'Deliciosas receitas nutritivas que aceleram o metabolismo e ajudam na perda de peso',
        gradient: 'linear-gradient(135deg, #10b981, #059669)',
        coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1600',
        videos: [
            { id: 'AKTYUUgGHgY', title: 'Aula 1', description: 'Primeira aula de receitas saudáveis' },
            { id: 'ZTVBLspNnKA', title: 'Aula 2', description: 'Segunda aula de receitas saudáveis' },
            { id: 'xe7J8tBMkvk', title: 'Aula 3', description: 'Terceira aula de receitas saudáveis' },
            { id: 'ry0x6ofzpyk', title: 'Aula 4', description: 'Quarta aula de receitas saudáveis' },
            { id: 'quitcvB8UFw', title: 'Aula 5', description: 'Quinta aula de receitas saudáveis' },
            { id: 's_4rB4haSiA', title: 'Aula 6', description: 'Sexta aula de receitas saudáveis' },
            { id: '6IZljZw8Yz0', title: 'Aula 7', description: 'Sétima aula de receitas saudáveis' },
            { id: 'rkmOyLZPpEM', title: 'Aula 8', description: 'Oitava aula de receitas saudáveis' },
            { id: 'OQBW54anX7c', title: 'Aula 9', description: 'Nona aula de receitas saudáveis' },
            { id: 'Ge6-YfX2Bv4', title: 'Aula 10', description: 'Décima aula de receitas saudáveis' },
            { id: 'SkJr5_Y1cT8', title: 'Aula 11', description: 'Décima primeira aula de receitas saudáveis' },
            { id: '-OHv-EOK55g', title: 'Aula 12', description: 'Décima segunda aula de receitas saudáveis' },
            { id: 'x-qq_fDzKNo', title: 'Aula 13', description: 'Décima terceira aula de receitas saudáveis' },
            { id: 'WTY7tlIu7kM', title: 'Aula 14', description: 'Décima quarta aula de receitas saudáveis' },
            { id: '5kF4RcsS9NE', title: 'Aula 15', description: 'Décima quinta aula de receitas saudáveis' },
            { id: 'YEwL7EHHduM', title: 'Aula 16', description: 'Décima sexta aula de receitas saudáveis' },
            { id: 'w7_BoxvGXkI', title: 'Aula 17', description: 'Décima sétima aula de receitas saudáveis' },
            { id: 'chfwW8ZElao', title: 'Aula 18', description: 'Décima oitava aula de receitas saudáveis' },
            { id: 'gWh-WYujWZc', title: 'Aula 19', description: 'Décima nona aula de receitas saudáveis' },
            { id: 'gWh-WYujWZc', title: 'Aula 20', description: 'Vigésima aula de receitas saudáveis' }
        ]
    },
    {
        id: 'bonus',
        title: 'Bônus!',
        description: 'Conteúdo exclusivo para maximizar seus resultados e manter a motivação',
        gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        coverImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1600',
        videos: []
    }
];

// DOM Elements
let tabButtons, tabContents, moduleCarousel, moduleModal, videoModal, progressModal;
let closeModalBtn, closeVideoBtn, closeProgressBtn, quickStartBtn, progressBtn, themeToggle;

// Initialize DOM elements
function initializeElements() {
    tabButtons = document.querySelectorAll('.tab-button');
    tabContents = document.querySelectorAll('.tab-content');
    moduleCarousel = document.getElementById('module-carousel');
    moduleModal = document.getElementById('module-modal');
    videoModal = document.getElementById('video-modal');
    progressModal = document.getElementById('progress-modal');
    closeModalBtn = document.getElementById('close-modal');
    closeVideoBtn = document.getElementById('close-video');
    closeProgressBtn = document.getElementById('close-progress');
    quickStartBtn = document.getElementById('quick-start-btn');
    progressBtn = document.getElementById('progress-btn');
    themeToggle = document.getElementById('theme-toggle');
}

// Initialize app
function init() {
    initializeElements();
    renderModules();
    initEventListeners();
    lucide.createIcons();
}

// Render modules in carousel
function renderModules() {
    if (!moduleCarousel) return;
    
    moduleCarousel.innerHTML = modules.map(module => `
        <div class="module-card" style="background-image: url('${module.coverImage}'); background: ${module.gradient}" data-module="${module.id}">
            <div class="module-overlay">
                <h3 class="text-xl font-bold mb-2">${module.title}</h3>
                <p class="text-sm opacity-90">${module.description}</p>
            </div>
        </div>
    `).join('');
}

// Initialize event listeners
function initEventListeners() {
    // Tab navigation
    tabButtons.forEach(button => {
        button.addEventListener('click', () => switchTab(button.dataset.tab));
    });

    // Module clicks
    if (moduleCarousel) {
        moduleCarousel.addEventListener('click', (e) => {
            const moduleCard = e.target.closest('.module-card');
            if (moduleCard) {
                openModule(moduleCard.dataset.module);
            }
        });
    }

    // Modal close buttons
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => closeModal(moduleModal));
    if (closeVideoBtn) closeVideoBtn.addEventListener('click', () => closeModal(videoModal));
    if (closeProgressBtn) closeProgressBtn.addEventListener('click', () => closeModal(progressModal));

    // Quick actions
    if (quickStartBtn) {
        quickStartBtn.addEventListener('click', () => {
            const firstModule = modules[0];
            if (firstModule && firstModule.videos.length > 0) {
                playVideo(firstModule.videos[0]);
            }
        });
    }

    if (progressBtn) {
        originalProgressHandler = () => {
            progressModal.classList.remove('hidden');
        };
        progressBtn.addEventListener('click', originalProgressHandler);
    }

    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Close modals on backdrop click
    [moduleModal, videoModal, progressModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal(modal);
                }
            });
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
}

// Keyboard event handler
function handleKeyboard(e) {
    if (e.key === 'Escape') {
        if (!moduleModal.classList.contains('hidden')) {
            closeModal(moduleModal);
        } else if (!videoModal.classList.contains('hidden')) {
            closeModal(videoModal);
        } else if (!progressModal.classList.contains('hidden')) {
            closeModal(progressModal);
        }
    }
}

// Tab switching
function switchTab(tabName) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.add('hidden'));
    
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    const activeContent = document.getElementById(`tab-${tabName}`);
    
    if (activeTab) activeTab.classList.add('active');
    if (activeContent) activeContent.classList.remove('hidden');
}

// Open module modal
function openModule(moduleId) {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return;

    // Check if user needs to be authenticated for premium content
    if (moduleId !== 'workout' && !isUserAuthenticated()) {
        showAuthRequired();
        return;
    }

    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    if (modalTitle) modalTitle.textContent = module.title;
    
    if (module.id === 'bonus') {
        modalContent.innerHTML = `
            <div class="flex items-center justify-center min-h-[400px]">
                <div class="text-center">
                    <div class="text-6xl mb-4">🚀</div>
                    <h3 class="text-2xl font-semibold mb-2">Seus Bônus Chegaram em Breve!</h3>
                    <p class="text-muted-foreground">Conteúdo exclusivo está sendo preparado para você</p>
                </div>
            </div>
        `;
    } else {
        modalContent.innerHTML = module.videos.map(video => `
            <div class="card">
                <div class="video-thumbnail" data-video='${JSON.stringify(video)}'>
                    <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${video.title}" loading="lazy">
                    <div class="play-overlay">
                        <div class="play-button">
                            <i data-lucide="play" class="w-8 h-8 text-blue-500"></i>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold mb-2">${video.title}</h3>
                    <p class="text-sm text-muted-foreground mb-3">${video.description}</p>
                    <button class="btn-primary w-full" data-video='${JSON.stringify(video)}'>
                        Assistir Aula
                    </button>
                </div>
            </div>
        `).join('');
    }

    moduleModal.classList.remove('hidden');
    lucide.createIcons();

    // Add video click listeners
    modalContent.addEventListener('click', handleVideoClick);
}

// Handle video click events
function handleVideoClick(e) {
    const videoElement = e.target.closest('[data-video]');
    if (videoElement) {
        try {
            const video = JSON.parse(videoElement.dataset.video);
            playVideo(video);
        } catch (error) {
            console.error('Error parsing video data:', error);
        }
    }
}

// Play video
function playVideo(video) {
    // Check authentication for non-workout videos
    if (!video.id || (!isUserAuthenticated() && !isWorkoutVideo(video.id))) {
        showAuthRequired();
        return;
    }

    const videoTitle = document.getElementById('video-title');
    const youtubePlayer = document.getElementById('youtube-player');
    
    if (videoTitle) videoTitle.textContent = video.title;
    if (youtubePlayer) {
        youtubePlayer.src = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;
    }
    
    // Update user stats if logged in
    if (isUserAuthenticated() && window.AuthSystem) {
        window.AuthSystem.updateStats('video_watched');
    }
    
    closeModal(moduleModal);
    videoModal.classList.remove('hidden');
}

// Close modal
function closeModal(modal) {
    if (!modal) return;
    
    modal.classList.add('hidden');
    
    // Stop video when closing video modal
    if (modal === videoModal) {
        const youtubePlayer = document.getElementById('youtube-player');
        if (youtubePlayer) youtubePlayer.src = '';
    }
}

// Theme toggle
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
        lucide.createIcons();
    }
    
    // Save theme preference
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (error) {
        console.warn('Could not save theme preference:', error);
    }
}

// Load saved theme
function loadTheme() {
    try {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            const icon = themeToggle?.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', 'moon');
            }
        }
    } catch (error) {
        console.warn('Could not load theme preference:', error);
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Authentication helper functions
function isUserAuthenticated() {
    return window.AuthSystem && window.AuthSystem.getIsLoggedIn();
}

function showAuthRequired() {
    if (window.AuthSystem) {
        window.AuthSystem.showAuthRequired();
    }
}

function isWorkoutVideo(videoId) {
    const workoutModule = modules.find(m => m.id === 'workout');
    return workoutModule && workoutModule.videos.some(v => v.id === videoId);
}

// Update progress button functionality
function showProgressModal() {
    if (!isUserAuthenticated()) {
        showAuthRequired();
        return;
    }
    
    const progressModal = document.getElementById('progress-modal');
    progressModal?.classList.remove('hidden');
}

// Protect premium content
function protectPremiumContent() {
    if (!isUserAuthenticated()) {
        // Blur content for non-authenticated users
        const premiumModules = document.querySelectorAll('[data-module="nutrition"], [data-module="bonus"]');
        premiumModules.forEach(module => {
            module.style.filter = 'blur(2px)';
            module.style.opacity = '0.6';
        });
        
        // Add premium badges
        premiumModules.forEach(module => {
            if (!module.querySelector('.premium-badge')) {
                const badge = document.createElement('div');
                badge.className = 'premium-badge absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-semibold';
                badge.innerHTML = '👑 PREMIUM';
                module.style.position = 'relative';
                module.appendChild(badge);
            }
        });
    } else {
        // Remove blur and badges for authenticated users
        const premiumModules = document.querySelectorAll('[data-module="nutrition"], [data-module="bonus"]');
        premiumModules.forEach(module => {
            module.style.filter = 'none';
            module.style.opacity = '1';
            const badge = module.querySelector('.premium-badge');
            if (badge) badge.remove();
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    init();
    
    // Wait for auth system to initialize, then protect content
    setTimeout(() => {
        protectPremiumContent();
        
        // Update progress button
        const progressBtn = document.getElementById('progress-btn');
        if (progressBtn) {
            progressBtn.removeEventListener('click', originalProgressHandler);
            progressBtn.addEventListener('click', showProgressModal);
        }
    }, 100);
});

// Store original progress handler
let originalProgressHandler;

// Re-initialize if page becomes visible again
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Listen for auth state changes
document.addEventListener('auth-state-changed', () => {
    protectPremiumContent();
});

// Update UI when user logs in/out
function updateContentAccess() {
    protectPremiumContent();
    
    // Refresh module carousel if needed
    if (moduleCarousel) {
        renderModules();
        protectPremiumContent();
    }
}

// Export functions for potential external use
window.LifeApp = {
    switchTab,
    openModule,
    playVideo,
    toggleTheme,
    modules,
    updateContentAccess,
    isUserAuthenticated
};