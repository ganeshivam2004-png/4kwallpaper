// GitHub API Configuration
const GITHUB_OWNER = 'ganeshivam2004-png';
const GITHUB_REPO = '4kwallpaper';
const GITHUB_BRANCH = 'main';
const POSTS_FOLDER = 'posts';

// Helper: Convert filename to readable date format
function extractDateFromFilename(filename) {
    // Try to extract date from filename like: 2026-06-15-post-title.md
    const dateMatch = filename.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (dateMatch) {
        const [, year, month, day] = dateMatch;
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
    return 'Unknown Date';
}

// Helper: Extract title from filename
function extractTitleFromFilename(filename) {
    // Remove date prefix and .md extension
    return filename
        .replace(/^\d{4}-\d{2}-\d{2}-/, '')
        .replace(/\.md$/, '')
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Helper: Extract excerpt from markdown content
function extractExcerpt(content, length = 150) {
    // Remove markdown syntax
    let text = content
        .replace(/^#+\s/gm, '') // Remove headings
        .replace(/\*\*/g, '') // Remove bold
        .replace(/\*/g, '') // Remove italics
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links
        .replace(/^[-*+]\s/gm, '') // Remove list markers
        .trim();
    
    if (text.length > length) {
        return text.substring(0, length).trim() + '...';
    }
    return text;
}

// Helper: Convert Markdown to HTML
function markdownToHtml(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.+?)_/g, '<em>$1</em>');
    
    // Links
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>');
    
    // Code blocks
    html = html.replace(/```[a-z]*\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Inline code
    html = html.replace(/`(.+?)`/g, '<code>$1</code>');
    
    // Lists
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
    
    // Blockquotes
    html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
    
    // Paragraphs (double newlines)
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';
    
    // Clean up empty paragraphs
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p>(<h[1-6])/g, '$1');
    html = html.replace(/(<\/h[1-6])><p>/g, '$1');
    html = html.replace(/<p>(<pre)/g, '$1');
    html = html.replace(/(<\/pre>)<p>/g, '$1');
    html = html.replace(/<p>(<blockquote)/g, '$1');
    html = html.replace(/(<\/blockquote>)<p>/g, '$1');
    html = html.replace(/<p>(<ul)/g, '$1');
    html = html.replace(/(<\/ul>)<p>/g, '$1');
    
    return html;
}

// Main function to fetch posts from GitHub
async function fetchPostsFromGitHub() {
    try {
        const loadingIndicator = document.getElementById('loadingIndicator');
        const postsGrid = document.getElementById('postsGrid');
        const noPostsMessage = document.getElementById('noPostsMessage');
        
        // Fetch list of files in posts folder
        const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${POSTS_FOLDER}?ref=${GITHUB_BRANCH}`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const files = await response.json();
        
        // Filter markdown files
        const mdFiles = files.filter(file => file.name.endsWith('.md') && file.type === 'file');
        
        if (mdFiles.length === 0) {
            loadingIndicator.style.display = 'none';
            noPostsMessage.style.display = 'block';
            return;
        }
        
        // Sort by name (assuming date-prefixed format)
        mdFiles.sort((a, b) => b.name.localeCompare(a.name));
        
        // Fetch content of each markdown file
        const posts = [];
        
        for (const file of mdFiles) {
            try {
                const contentResponse = await fetch(file.download_url);
                const content = await contentResponse.text();
                
                const post = {
                    id: posts.length + 1,
                    title: extractTitleFromFilename(file.name),
                    excerpt: extractExcerpt(content),
                    date: extractDateFromFilename(file.name),
                    readTime: Math.ceil(content.split(' ').length / 200) + ' min read',
                    tags: ['4K', 'Wallpaper', 'Design'],
                    image: 'https://via.placeholder.com/120x120?text=4K',
                    content: content,
                    filename: file.name
                };
                
                posts.push(post);
            } catch (error) {
                console.error(`Error fetching ${file.name}:`, error);
            }
        }
        
        // Store posts globally for modal viewing
        window.postsData = posts;
        
        // Render posts
        if (posts.length > 0) {
            loadingIndicator.style.display = 'none';
            noPostsMessage.style.display = 'none';
            renderPosts(posts);
        } else {
            loadingIndicator.style.display = 'none';
            noPostsMessage.style.display = 'block';
        }
        
    } catch (error) {
        console.error('Error fetching posts:', error);
        document.getElementById('loadingIndicator').style.display = 'none';
        document.getElementById('noPostsMessage').style.display = 'block';
        document.getElementById('noPostsMessage').innerHTML = '<p>Error loading posts. Please check the GitHub repository connection.</p>';
    }
}

// Function to render posts feed
function renderPosts(posts) {
    const postsGrid = document.getElementById('postsGrid');
    
    if (!postsGrid) return;
    
    postsGrid.innerHTML = posts.map(post => `
        <article class="post-card" onclick="openPostModal(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="post-card-image" loading="lazy" onerror="this.src='https://via.placeholder.com/120x120?text=4K+Wallpaper'">
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

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchPostsFromGitHub);
} else {
    fetchPostsFromGitHub();
}