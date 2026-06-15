// Sample posts data structure
const posts = [
    {
        id: 1,
        title: "Getting Started with Your First 4K Wallpaper",
        excerpt: "Learn how to choose, set up, and optimize your first 4K wallpaper for the best visual experience.",
        date: "June 15, 2026",
        tags: ["tutorial", "4K", "beginner"],
        image: "images/placeholder-1.jpg",
        link: "posts/post-1.html"
    },
    {
        id: 2,
        title: "The Evolution of Digital Art in 2026",
        excerpt: "Explore the latest trends in digital art creation and how AI is transforming the wallpaper design industry.",
        date: "June 10, 2026",
        tags: ["design", "AI", "trends"],
        image: "images/placeholder-2.jpg",
        link: "posts/post-2.html"
    },
    {
        id: 3,
        title: "Creating High-Performance Web Experiences",
        excerpt: "Discover optimization techniques for delivering stunning visuals without compromising on loading speed.",
        date: "June 5, 2026",
        tags: ["performance", "web", "optimization"],
        image: "images/placeholder-3.jpg",
        link: "posts/post-3.html"
    },
    {
        id: 4,
        title: "Minimalist Design: Less is More",
        excerpt: "Explore the beauty of minimalism and how it's revolutionizing wallpaper design aesthetics.",
        date: "May 28, 2026",
        tags: ["design", "minimalism", "aesthetic"],
        image: "images/placeholder-4.jpg",
        link: "posts/post-4.html"
    },
    {
        id: 5,
        title: "Color Psychology in Digital Aesthetics",
        excerpt: "Understand how colors influence mood and perception in digital wallpaper design.",
        date: "May 20, 2026",
        tags: ["psychology", "color", "design"],
        image: "images/placeholder-5.jpg",
        link: "posts/post-5.html"
    },
    {
        id: 6,
        title: "Typography Tips for Digital Content",
        excerpt: "Master the art of typography and create visually stunning text-based digital designs.",
        date: "May 12, 2026",
        tags: ["typography", "design", "tips"],
        image: "images/placeholder-6.jpg",
        link: "posts/post-6.html"
    }
];

// Function to render posts
function renderPosts() {
    const postsGrid = document.getElementById('postsGrid');
    
    if (!postsGrid) return;
    
    postsGrid.innerHTML = posts.map(post => `
        <article class="post-card">
            <img src="${post.image}" alt="${post.title}" class="post-image" loading="lazy">
            <div class="post-content">
                <time class="post-date" datetime="${new Date(post.date).toISOString().split('T')[0]}">${post.date}</time>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${post.link}" class="read-more">Read More →</a>
            </div>
        </article>
    `).join('');
}

// Render posts when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPosts);
} else {
    renderPosts();
}