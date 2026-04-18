document.addEventListener('DOMContentLoaded', () => {
    
    // --- Feedback Loop Mechanism ---
    const feedbackBtns = document.querySelectorAll('.feedback-btn, .mini-feedback-btn');
    
    feedbackBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Find sibling buttons (either thumbs up or thumbs down)
            const parent = this.parentElement;
            const siblings = parent.querySelectorAll('.feedback-btn, .mini-feedback-btn');
            
            // Remove active class from all siblings
            siblings.forEach(sib => sib.classList.remove('active'));
            
            // Toggle active class on clicked button
            this.classList.add('active');
            
            // Optional: simulate sending feedback
            console.log('Feedback recorded:', this.classList.contains('thumbs-up') ? 'Positive' : 'Negative');
        });
    });

    // --- Monetization/Expansion Trigger (Modal) ---
    const lockedCard = document.getElementById('lockedFeatureCard');
    const upgradeModal = document.getElementById('upgradeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');

    function openModal() {
        upgradeModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        upgradeModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (lockedCard) {
        lockedCard.addEventListener('click', openModal);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (cancelModalBtn) {
        cancelModalBtn.addEventListener('click', closeModal);
    }

    // Close modal on outside click
    upgradeModal.addEventListener('click', (e) => {
        if (e.target === upgradeModal) {
            closeModal();
        }
    });

    // --- Action Button Interaction ---
    const actionBtns = document.querySelectorAll('.action-btn:not(.unlock-btn)');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering card clicks
            const originalText = this.innerHTML;
            
            // Simulate action executing
            this.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon ai-icon" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg> Executing...';
            this.style.opacity = '0.8';
            this.style.pointerEvents = 'none';

            setTimeout(() => {
                this.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Complete';
                this.style.background = 'var(--success-color)';
                this.style.borderColor = 'var(--success-color)';
                this.style.color = 'white';
                this.style.opacity = '1';
                
                // Reset after 3 seconds
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style = '';
                    this.style.pointerEvents = 'auto';
                }, 3000);
            }, 1200);
        });
    });

});
