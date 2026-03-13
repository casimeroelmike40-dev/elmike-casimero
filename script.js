// Toggle function for project cards
function toggleProject(element) {
    element.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    const homeSection = document.getElementById('home-section');
    const projectsSection = document.getElementById('projects-section');
    const aboutSection = document.getElementById('about-section');
    const contactsSection = document.getElementById('contacts-section');

    function hideAllSections() {
        homeSection.classList.remove('active-section');
        projectsSection.classList.remove('active-section');
        aboutSection.classList.remove('active-section');
        contactsSection.classList.remove('active-section');
    }

    function deactivateAllLinks() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    function showSection(sectionId) {
        hideAllSections();
        
        switch(sectionId) {
            case 'home':
                homeSection.classList.add('active-section');
                break;
            case 'projects':
                projectsSection.classList.add('active-section');
                break;
            case 'about':
                aboutSection.classList.add('active-section');
                break;
            case 'contacts':
                contactsSection.classList.add('active-section');
                break;
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            deactivateAllLinks();
            this.classList.add('active');
            showSection(section);
        });
    });

    const viewWorkBtn = document.querySelector('.view-work-btn');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', function() {
            deactivateAllLinks();
            showSection('projects');
            navLinks.forEach(link => {
                if (link.getAttribute('data-section') === 'projects') {
                    link.classList.add('active');
                }
            });
        });
    }
});