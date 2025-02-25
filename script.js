document.addEventListener('DOMContentLoaded', function() {
    function handleItemClick(items, itemClass, contentClass, getContentId) {
        items.forEach(item => {
            item.addEventListener('click', function(e) {
                if (e.preventDefault) e.preventDefault();

                items.forEach(i => i.classList.remove('active'));

                this.classList.add('active');

                document.querySelectorAll(contentClass).forEach(content => {
                    content.style.display = 'none';
                    content.classList.remove('active');
                });

                const contentId = getContentId(this);
                const content = document.getElementById(contentId);
                if (content) {
                    content.style.display = 'block';
                    content.classList.add('active');
                }
            });
        });
    }

    handleItemClick(
        document.querySelectorAll('.sidebar .item'),
        '.item',
        '.screen',
        item => item.getAttribute('data-screen')
    );

    handleItemClick(
        document.querySelectorAll('.device-item'),
        '.device-item',
        '.device-detail',
        item => `device-${item.getAttribute('data-device')}`
    );

    $('.ui.checkbox').checkbox();
    
    $(document).ready(function() {
        $('.ui.dropdown').dropdown();
    });
});
