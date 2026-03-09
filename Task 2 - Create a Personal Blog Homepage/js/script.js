document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.card');
    const searchInput = document.getElementById('searchInput');

    function filterPosts() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-category');

        blogCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const category = card.getAttribute('data-category');

            // Logic: Must match category AND match search term
            const matchesCategory = (activeCategory === 'all' || category === activeCategory);
            const matchesSearch = title.includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

   
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPosts();
        });
    });

    
    searchInput.addEventListener('input', filterPosts);
});