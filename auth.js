// Authentication System
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.users = JSON.parse(localStorage.getItem('lifeapp_users') || '[]');
        this.sessions = JSON.parse(localStorage.getItem('lifeapp_sessions') || '{}');
        
        this.initializeAuth();
        this.initializeEventListeners();
    }

    // Initialize authentication state
    initializeAuth() {
        const savedSession = localStorage.getItem('lifeapp_current_session');
        if (savedSession) {
            const sessionData = JSON.parse(savedSession);
            const user = this.users.find(u => u.id === sessionData.userId);
            if (user && this.isValidSession(sessionData)) {
                this.login(user, false);
            } else {
                this.logout();
            }
        }
        this.updateUI();
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Login form
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Register form
        const registerForm = document.getElementById('register-form');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }

        // Modal controls
        this.setupModalControls();
        
        // User menu controls
        this.setupUserMenuControls();
        
        // Auth required overlay
        this.setupAuthRequiredControls();
    }

    // Setup modal controls
    setupModalControls() {
        const loginBtn = document.getElementById('login-btn');
        const closeLogin = document.getElementById('close-login');
        const closeRegister = document.getElementById('close-register');
        const showRegister = document.getElementById('show-register');
        const showLogin = document.getElementById('show-login');

        if (loginBtn) loginBtn.addEventListener('click', () => this.showLoginModal());
        if (closeLogin) closeLogin.addEventListener('click', () => this.hideLoginModal());
        if (closeRegister) closeRegister.addEventListener('click', () => this.hideRegisterModal());
        if (showRegister) showRegister.addEventListener('click', () => this.showRegisterModal());
        if (showLogin) showLogin.addEventListener('click', () => this.showLoginModal());

        // Close modals on backdrop click
        const loginModal = document.getElementById('login-modal');
        const registerModal = document.getElementById('register-modal');
        
        if (loginModal) {
            loginModal.addEventListener('click', (e) => {
                if (e.target === loginModal) this.hideLoginModal();
            });
        }
        
        if (registerModal) {
            registerModal.addEventListener('click', (e) => {
                if (e.target === registerModal) this.hideRegisterModal();
            });
        }
    }

    // Setup user menu controls
    setupUserMenuControls() {
        const userMenuButton = document.getElementById('user-menu-button');
        const userDropdown = document.getElementById('user-dropdown');
        const logoutBtn = document.getElementById('logout-btn');
        const profileBtn = document.getElementById('profile-btn');

        if (userMenuButton) {
            userMenuButton.addEventListener('click', () => {
                userDropdown?.classList.toggle('hidden');
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }

        if (profileBtn) {
            profileBtn.addEventListener('click', () => this.showProfileModal());
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userMenuButton?.contains(e.target) && !userDropdown?.contains(e.target)) {
                userDropdown?.classList.add('hidden');
            }
        });
    }

    // Setup auth required overlay controls
    setupAuthRequiredControls() {
        const authLoginBtn = document.getElementById('auth-login-btn');
        const authRegisterBtn = document.getElementById('auth-register-btn');

        if (authLoginBtn) {
            authLoginBtn.addEventListener('click', () => {
                this.hideAuthRequired();
                this.showLoginModal();
            });
        }

        if (authRegisterBtn) {
            authRegisterBtn.addEventListener('click', () => {
                this.hideAuthRequired();
                this.showRegisterModal();
            });
        }
    }

    // Handle login form submission
    async handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const submitBtn = e.target.querySelector('button[type="submit"]');

        // Add loading state
        submitBtn.classList.add('btn-loading');
        submitBtn.disabled = true;

        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            const user = this.users.find(u => u.email === email);
            
            if (!user) {
                throw new Error('Email não encontrado');
            }

            if (user.password !== this.hashPassword(password)) {
                throw new Error('Senha incorreta');
            }

            this.login(user);
            this.hideLoginModal();
            this.showNotification('Login realizado com sucesso!', 'success');
            
        } catch (error) {
            this.showNotification(error.message, 'error');
        } finally {
            submitBtn.classList.remove('btn-loading');
            submitBtn.disabled = false;
        }
    }

    // Handle register form submission
    async handleRegister(e) {
        e.preventDefault();
        
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;
        const submitBtn = e.target.querySelector('button[type="submit"]');

        // Validation
        if (password !== confirmPassword) {
            this.showNotification('As senhas não coincidem', 'error');
            return;
        }

        if (password.length < 6) {
            this.showNotification('A senha deve ter pelo menos 6 caracteres', 'error');
            return;
        }

        if (this.users.find(u => u.email === email)) {
            this.showNotification('Este email já está cadastrado', 'error');
            return;
        }

        // Add loading state
        submitBtn.classList.add('btn-loading');
        submitBtn.disabled = true;

        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            const newUser = {
                id: Date.now().toString(),
                name,
                email,
                password: this.hashPassword(password),
                createdAt: new Date().toISOString(),
                stats: {
                    videosWatched: 0,
                    modulesCompleted: 0,
                    totalTime: 0
                },
                settings: {
                    emailNotifications: true,
                    autoplay: true,
                    darkMode: false
                }
            };

            this.users.push(newUser);
            this.saveUsers();
            
            this.login(newUser);
            this.hideRegisterModal();
            this.showNotification('Conta criada com sucesso! Bem-vindo(a)!', 'success');
            
        } catch (error) {
            this.showNotification('Erro ao criar conta. Tente novamente.', 'error');
        } finally {
            submitBtn.classList.remove('btn-loading');
            submitBtn.disabled = false;
        }
    }

    // Login user
    login(user, createSession = true) {
        this.currentUser = user;
        this.isLoggedIn = true;
        
        if (createSession) {
            const sessionData = {
                userId: user.id,
                loginTime: Date.now(),
                expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 days
            };
            
            localStorage.setItem('lifeapp_current_session', JSON.stringify(sessionData));
        }
        
        this.updateUI();
    }

    // Logout user
    logout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        
        localStorage.removeItem('lifeapp_current_session');
        
        // Hide user dropdown
        document.getElementById('user-dropdown')?.classList.add('hidden');
        
        this.updateUI();
        this.showNotification('Logout realizado com sucesso', 'info');
    }

    // Update UI based on auth state
    updateUI() {
        const loginBtn = document.getElementById('login-btn');
        const userMenu = document.getElementById('user-menu');
        const userName = document.getElementById('user-name');

        if (this.isLoggedIn && this.currentUser) {
            // Show user menu, hide login button
            loginBtn?.classList.add('hidden');
            userMenu?.classList.remove('hidden');
            
            if (userName) {
                userName.textContent = this.currentUser.name.split(' ')[0]; // First name only
            }
        } else {
            // Show login button, hide user menu
            loginBtn?.classList.remove('hidden');
            userMenu?.classList.add('hidden');
        }
    }

    // Show modals
    showLoginModal() {
        document.getElementById('login-modal')?.classList.remove('hidden');
        document.getElementById('register-modal')?.classList.add('hidden');
        document.getElementById('login-email')?.focus();
    }

    showRegisterModal() {
        document.getElementById('register-modal')?.classList.remove('hidden');
        document.getElementById('login-modal')?.classList.add('hidden');
        document.getElementById('register-name')?.focus();
    }

    showProfileModal() {
        if (!this.isLoggedIn) return;
        
        const modal = document.getElementById('profile-modal');
        const profileName = document.getElementById('profile-name');
        const profileEmail = document.getElementById('profile-email');
        const profileSince = document.getElementById('profile-since');
        const statsVideos = document.getElementById('stats-videos');
        const statsModules = document.getElementById('stats-modules');
        const statsTime = document.getElementById('stats-time');

        if (profileName) profileName.textContent = this.currentUser.name;
        if (profileEmail) profileEmail.textContent = this.currentUser.email;
        if (profileSince) {
            const date = new Date(this.currentUser.createdAt);
            profileSince.textContent = date.toLocaleDateString('pt-BR');
        }
        
        if (statsVideos) statsVideos.textContent = this.currentUser.stats.videosWatched;
        if (statsModules) statsModules.textContent = this.currentUser.stats.modulesCompleted;
        if (statsTime) statsTime.textContent = `${Math.floor(this.currentUser.stats.totalTime / 60)}h`;

        // Setup settings toggles
        this.setupSettingsToggles();
        
        modal?.classList.remove('hidden');
        
        // Close modal handler
        const closeProfile = document.getElementById('close-profile');
        if (closeProfile) {
            closeProfile.onclick = () => modal?.classList.add('hidden');
        }
    }

    // Hide modals
    hideLoginModal() {
        document.getElementById('login-modal')?.classList.add('hidden');
    }

    hideRegisterModal() {
        document.getElementById('register-modal')?.classList.add('hidden');
    }

    // Show/hide auth required overlay
    showAuthRequired() {
        document.getElementById('auth-required')?.classList.remove('hidden');
    }

    hideAuthRequired() {
        document.getElementById('auth-required')?.classList.add('hidden');
    }

    // Setup settings toggles in profile modal
    setupSettingsToggles() {
        if (!this.currentUser) return;
        
        const emailToggle = document.getElementById('email-notifications');
        const autoplayToggle = document.getElementById('autoplay');
        const darkModeToggle = document.getElementById('dark-mode-toggle');

        if (emailToggle) {
            emailToggle.checked = this.currentUser.settings.emailNotifications;
            emailToggle.onchange = () => {
                this.currentUser.settings.emailNotifications = emailToggle.checked;
                this.saveUsers();
            };
        }

        if (autoplayToggle) {
            autoplayToggle.checked = this.currentUser.settings.autoplay;
            autoplayToggle.onchange = () => {
                this.currentUser.settings.autoplay = autoplayToggle.checked;
                this.saveUsers();
            };
        }

        if (darkModeToggle) {
            darkModeToggle.checked = document.documentElement.classList.contains('dark');
            darkModeToggle.onchange = () => {
                if (window.LifeApp && window.LifeApp.toggleTheme) {
                    window.LifeApp.toggleTheme();
                }
                this.currentUser.settings.darkMode = darkModeToggle.checked;
                this.saveUsers();
            };
        }
    }

    // Check if content requires authentication
    requiresAuth(action) {
        if (!this.isLoggedIn) {
            this.showAuthRequired();
            return false;
        }
        return true;
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Remove existing notification
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="flex-shrink-0">
                    ${type === 'success' ? '<i data-lucide="check-circle" class="w-5 h-5 text-green-600"></i>' : ''}
                    ${type === 'error' ? '<i data-lucide="x-circle" class="w-5 h-5 text-red-600"></i>' : ''}
                    ${type === 'info' ? '<i data-lucide="info" class="w-5 h-5 text-blue-600"></i>' : ''}
                </div>
                <div class="flex-1">
                    <p class="text-sm font-medium">${message}</p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" class="flex-shrink-0">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </div>
        `;

        document.body.appendChild(notification);
        
        // Initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    // Update user stats
    updateStats(type, value = 1) {
        if (!this.currentUser) return;
        
        switch (type) {
            case 'video_watched':
                this.currentUser.stats.videosWatched += value;
                break;
            case 'module_completed':
                this.currentUser.stats.modulesCompleted += value;
                break;
            case 'time_watched':
                this.currentUser.stats.totalTime += value;
                break;
        }
        
        this.saveUsers();
    }

    // Utility methods
    hashPassword(password) {
        // Simple hash function for demo purposes
        // In production, use proper hashing like bcrypt
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString();
    }

    isValidSession(sessionData) {
        return sessionData.expiresAt > Date.now();
    }

    saveUsers() {
        localStorage.setItem('lifeapp_users', JSON.stringify(this.users));
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Check if user is logged in
    getIsLoggedIn() {
        return this.isLoggedIn;
    }
}

// Initialize auth system when DOM is loaded
let authSystem;

document.addEventListener('DOMContentLoaded', () => {
    authSystem = new AuthSystem();
    
    // Make auth system globally available
    window.AuthSystem = authSystem;
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AuthSystem;
}