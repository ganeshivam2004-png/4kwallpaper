// Open post in modal
function openPostModal(postId) {
    const post = posts.find(p => p.id === postId);
    
    if (!post) return;
    
    const modalPostContent = document.getElementById('modalPostContent');
    const modal = document.getElementById('postModal');
    
    modalPostContent.innerHTML = `
        <div class="modal-post-header">
            <div class="modal-post-date">${post.date}</div>
            <h1 class="modal-post-title">${post.title}</h1>
            <div class="modal-post-meta">
                <span>${post.readTime}</span>
                <span>•</span>
                <span>By 4K Wallpaper Studio</span>
            </div>
        </div>
        <img src="${post.image}" alt="${post.title}" class="modal-post-image" loading="lazy">
        <div class="modal-post-body">
            ${post.body}
        </div>
        <div class="modal-post-footer">
            <div class="modal-post-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="#" class="back-to-feed" onclick="closePostModal(); return false;">← Back to Feed</a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Scroll modal to top
    setTimeout(() => {
        modal.scrollTop = 0;
    }, 0);
}

// Close post modal
function closePostModal() {
    const modal = document.getElementById('postModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePostModal();
    }
});

// Close modal when clicking outside content
document.addEventListener('click', (e) => {
    const modal = document.getElementById('postModal');
    if (e.target === modal) {
        closePostModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('return false')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console message
console.log('🎨 Welcome to 4K Wallpaper Studio - Medium.com style blog with sleek UI/UX');
