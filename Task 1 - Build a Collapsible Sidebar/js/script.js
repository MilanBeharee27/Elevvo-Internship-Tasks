const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('mySidebar');

toggleBtn.addEventListener('click', () => {
    
    sidebar.classList.toggle('open');
});