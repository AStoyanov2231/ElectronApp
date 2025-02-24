document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation between screens and device details
    function handleItemClick(items, itemClass, contentClass, getContentId) {
        items.forEach(item => {
            item.addEventListener('click', function(e) {
                if (e.preventDefault) e.preventDefault();
                
                // Remove active class from all items
                items.forEach(i => i.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Hide all content elements
                document.querySelectorAll(contentClass).forEach(content => {
                    content.style.display = 'none';
                    content.classList.remove('active');
                });
                
                // Show corresponding content
                const contentId = getContentId(this);
                const content = document.getElementById(contentId);
                if (content) {
                    content.style.display = 'block';
                    content.classList.add('active');
                }
            });
        });
    }

    // Handle sidebar navigation
    handleItemClick(
        document.querySelectorAll('.sidebar .item'),
        '.item',
        '.screen',
        item => item.getAttribute('data-screen')
    );

    // Handle device selection
    handleItemClick(
        document.querySelectorAll('.device-item'),
        '.device-item',
        '.device-detail',
        item => `device-${item.getAttribute('data-device')}`
    );

    // Initialize all checkboxes
    $('.ui.checkbox').checkbox();
});
