// Posts data structure - Update with your posts
const posts = [
    {
        id: 1,
        title: "Getting Started with Your First 4K Wallpaper",
        excerpt: "Learn how to choose, set up, and optimize your first 4K wallpaper for the best visual experience.",
        date: "June 15, 2026",
        readTime: "5 min read",
        tags: ["tutorial", "4K", "beginner"],
        image: "images/placeholder-1.jpg",
        body: `
            <p>Upgrading to a 4K wallpaper is an exciting way to enhance your digital experience. Whether you're using a new monitor or updating your setup, this guide will help you get started.</p>
            
            <h2>Understanding 4K Resolution</h2>
            <p>4K resolution offers four times the pixels of standard HD, providing incredibly sharp and detailed visuals. With dimensions of 3840 × 2160 pixels, 4K wallpapers deliver stunning clarity and detail that brings your digital workspace to life.</p>
            
            <h2>Choosing the Right Wallpaper</h2>
            <ul>
                <li>Consider your personal aesthetic preferences</li>
                <li>Ensure compatibility with your screen size</li>
                <li>Look for high-quality, properly optimized images</li>
                <li>Think about color schemes that complement your workspace</li>
            </ul>
            
            <h2>Installation & Setup</h2>
            <ol>
                <li>Download your chosen 4K wallpaper</li>
                <li>Open your system settings</li>
                <li>Navigate to Display or Wallpaper settings</li>
                <li>Select your image and apply</li>
            </ol>
            
            <h2>Optimization Tips</h2>
            <p>For the best performance, ensure your image is properly sized for your monitor's resolution. Most modern displays automatically scale images, but using native 4K resolution ensures the crispest possible display.</p>
            
            <h2>Conclusion</h2>
            <p>Setting up your first 4K wallpaper is a simple but impactful way to elevate your digital workspace. Experiment with different styles and find what resonates with you!</p>
        `
    },
    {
        id: 2,
        title: "The Evolution of Digital Art in 2026",
        excerpt: "Explore the latest trends in digital art creation and how AI is transforming the wallpaper design industry.",
        date: "June 10, 2026",
        readTime: "7 min read",
        tags: ["design", "AI", "trends"],
        image: "images/placeholder-2.jpg",
        body: `
            <p>Digital art has undergone a remarkable transformation in recent years, and 2026 marks a pivotal moment in creative expression. The convergence of artificial intelligence and traditional artistic techniques has opened new possibilities for creators worldwide.</p>
            
            <h2>AI-Assisted Creation</h2>
            <p>Modern AI tools are no longer just filters and effects. They're intelligent collaborators that can understand artistic intent and enhance creative vision. From generating color palettes to suggesting composition improvements, AI is democratizing design.</p>
            
            <h2>The Rise of Generative Art</h2>
            <p>Generative art is challenging our understanding of creativity. Artists now use algorithms and machine learning to create wallpapers that evolve and adapt, offering endless variations while maintaining aesthetic coherence.</p>
            
            <h2>Trend 1: Minimalist Maximalism</h2>
            <p>The paradoxical blend of minimal elements with maximum impact continues to dominate. Simple geometric shapes combined with sophisticated color theory create wallpapers that feel both calm and captivating.</p>
            
            <h2>Trend 2: Nature-Inspired Abstractions</h2>
            <p>Designers are drawing from natural patterns—fractals, cellular structures, and organic flows—to create abstract wallpapers that feel both organic and digital.</p>
            
            <h2>The Future Awaits</h2>
            <p>As technology continues to evolve, so does the art. The next generation of digital artists will be those who master both traditional principles and cutting-edge tools.</p>
        `
    },
    {
        id: 3,
        title: "Creating High-Performance Web Experiences",
        excerpt: "Discover optimization techniques for delivering stunning visuals without compromising on loading speed.",
        date: "June 5, 2026",
        readTime: "6 min read",
        tags: ["performance", "web", "optimization"],
        image: "images/placeholder-3.jpg",
        body: `
            <p>In today's digital landscape, performance isn't a luxury—it's a necessity. Users expect websites to load instantly, especially when showcasing visual content like 4K wallpapers.</p>
            
            <h2>Understanding Web Performance Metrics</h2>
            <p>Key metrics like First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS) define user experience. Modern tools like Lighthouse help developers measure and improve these metrics.</p>
            
            <h2>Image Optimization Strategies</h2>
            <ul>
                <li>Use modern formats like WebP for better compression</li>
                <li>Implement lazy loading for off-screen images</li>
                <li>Serve responsive images with srcset attributes</li>
                <li>Compress without sacrificing visual quality</li>
            </ul>
            
            <h2>Caching and Content Delivery</h2>
            <p>Leveraging browser caching and CDNs ensures that your stunning wallpapers reach users quickly from servers closest to them. This dramatically improves load times globally.</p>
            
            <h2>Code Splitting and Bundling</h2>
            <p>Modern JavaScript bundlers allow you to split code into chunks, loading only what's necessary. This practice significantly reduces initial load times while maintaining full functionality.</p>
            
            <h2>Measuring Success</h2>
            <p>Use real user monitoring (RUM) to understand how actual visitors experience your site. Real-world performance data is invaluable for ongoing optimization efforts.</p>
        `
    },
    {
        id: 4,
        title: "Minimalist Design: Less is More",
        excerpt: "Explore the beauty of minimalism and how it's revolutionizing wallpaper design aesthetics.",
        date: "May 28, 2026",
        readTime: "5 min read",
        tags: ["design", "minimalism", "aesthetic"],
        image: "images/placeholder-4.jpg",
        body: `
            <p>Minimalism isn't just an aesthetic—it's a philosophy. In wallpaper design, less can indeed be more, creating powerful visual statements through restraint and intentionality.</p>
            
            <h2>The Philosophy of Less</h2>
            <p>Minimalist design strips away the unnecessary to reveal the essential. A single line, a limited color palette, abundant whitespace—these elements combine to create compositions that are both beautiful and meaningful.</p>
            
            <h2>Key Principles</h2>
            <ul>
                <li><strong>Simplicity:</strong> Every element serves a purpose</li>
                <li><strong>Clarity:</strong> Clear visual hierarchy guides the eye</li>
                <li><strong>Space:</strong> Negative space is as important as elements</li>
                <li><strong>Focus:</strong> Minimal elements demand attention</li>
            </ul>
            
            <h2>Color Theory in Minimalism</h2>
            <p>Minimalist wallpapers often employ a restricted color palette. Monochromatic designs, two-color combinations, or subtle gradients create sophisticated backgrounds that won't compete with desktop icons and content.</p>
            
            <h2>Practical Applications</h2>
            <p>From professional workspaces to creative studios, minimalist wallpapers provide the perfect backdrop. They enhance focus, reduce visual fatigue, and maintain clarity across different displays and resolutions.</p>
            
            <h2>The Timeless Appeal</h2>
            <p>Minimalist design transcends trends. A perfectly executed minimal wallpaper remains beautiful and relevant for years, making it a wise choice for those seeking lasting aesthetic value.</p>
        `
    },
    {
        id: 5,
        title: "Color Psychology in Digital Aesthetics",
        excerpt: "Understand how colors influence mood and perception in digital wallpaper design.",
        date: "May 20, 2026",
        readTime: "6 min read",
        tags: ["psychology", "color", "design"],
        image: "images/placeholder-5.jpg",
        body: `
            <p>Colors are more than visual elements—they're psychological tools that influence mood, energy, and perception. Understanding color psychology is essential for creating wallpapers that resonate emotionally with viewers.</p>
            
            <h2>The Basics of Color Psychology</h2>
            <p>Different colors evoke different emotional responses. Red energizes, blue calms, green refreshes, yellow uplifts. These associations are partly cultural and partly biological, creating universal patterns in how we respond to color.</p>
            
            <h2>Warm vs. Cool Colors</h2>
            <ul>
                <li><strong>Warm colors</strong> (red, orange, yellow): energetic, inviting, stimulating</li>
                <li><strong>Cool colors</strong> (blue, green, purple): calming, professional, refreshing</li>
            </ul>
            
            <h2>Creating Emotional Depth</h2>
            <p>Sophisticated wallpaper design uses color gradients and combinations to create emotional complexity. A gradient from warm to cool can suggest transition or balance. Complementary colors create visual tension and interest.</p>
            
            <h2>Context Matters</h2>
            <p>The environment where your wallpaper appears influences its impact. A creative studio might benefit from vibrant, energizing colors, while a professional workspace might prefer calm, focused tones.</p>
            
            <h2>Personal Connection</h2>
            <p>Ultimately, color preference is personal. The most important wallpaper is one that makes you feel good about your digital space. Understanding color psychology helps you make intentional choices rather than random ones.</p>
        `
    },
    {
        id: 6,
        title: "Typography Tips for Digital Content",
        excerpt: "Master the art of typography and create visually stunning text-based digital designs.",
        date: "May 12, 2026",
        readTime: "5 min read",
        tags: ["typography", "design", "tips"],
        image: "images/placeholder-6.jpg",
        body: `
            <p>Typography is the art of arranging text to make it appealing and readable. In digital design, particularly in wallpapers with text elements, typography can make or break the final result.</p>
            
            <h2>Choosing the Right Typeface</h2>
            <p>Typeface selection is fundamental. Serif fonts convey tradition and formality, while sans-serif fonts feel modern and clean. Script fonts add elegance but must be used sparingly to maintain readability.</p>
            
            <h2>Hierarchy and Contrast</h2>
            <ul>
                <li>Use varying font sizes to establish hierarchy</li>
                <li>Create contrast between different text weights</li>
                <li>Employ color to emphasize important elements</li>
                <li>Space text elements for visual breathing room</li>
            </ul>
            
            <h2>Readability Best Practices</h2>
            <p>Ensure sufficient contrast between text and background. Use appropriate line heights and letter spacing for clarity. Remember that typography on screens differs from print—font sizes often need to be larger.</p>
            
            <h2>Typography in Minimalist Design</h2>
            <p>Minimalist wallpapers often feature bold typography as the primary design element. A single word or short phrase in a striking typeface can create powerful visual impact with elegant simplicity.</p>
            
            <h2>The Designer's Mindset</h2>
            <p>Good typography is invisible—it serves the content without drawing attention to itself. However, great typography enhances the message and creates memorable visual experiences that users appreciate.</p>
        `
    }
];

// Function to render posts feed
function renderPosts() {
    const postsGrid = document.getElementById('postsGrid');
    
    if (!postsGrid) return;
    
    postsGrid.innerHTML = posts.map(post => `
        <article class="post-card" onclick="openPostModal(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="post-card-image" loading="lazy">
            <div class="post-card-content">
                <div class="post-card-date">${post.date}</div>
                <h3 class="post-card-title">${post.title}</h3>
                <p class="post-card-excerpt">${post.excerpt}</p>
                <div class="post-card-footer">
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <span>${post.readTime}</span>
                </div>
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
