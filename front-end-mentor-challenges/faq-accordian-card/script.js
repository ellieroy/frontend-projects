document.querySelectorAll('.accordion-question').forEach(item => {
    item.addEventListener('click', event => {
        let accCollapse = item.nextElementSibling;

        // Open accordion item
        if(!item.classList.contains('open')){
            // Get height of .accordion-collapse 
            accCollapse.style.display = 'block'; 
            let accHeight = accCollapse.clientHeight;

            // Opening transition
            setTimeout(() => {
                accCollapse.style.height = accHeight + 'px';
                accCollapse.style.display = '';
            }, 1);

            // Remove "collapse", add "collapsing" class to .accordion-collapse (sibling)            
            accCollapse.classList = 'accordion-collapse collapsing';
            
            // After 300ms, remove "collapsing" class and add "collapse open" class
            setTimeout(() => {
                accCollapse.classList = 'accordion-collapse collapse open';
            }, 300);
        }

        // Close accordion item 
        else {
            // Remove "collapse open", add "collapsing" class to .accordion-collapse (sibling)
            accCollapse.classList = 'accordion-collapse collapsing';

            setTimeout(() => {
                accCollapse.style.height = '0px';
            }, 1);

            // After 300ms, remove "collapsing" class and add "collapse" class
            setTimeout(() => {
                accCollapse.classList = 'accordion-collapse collapse';
                accCollapse.style.height = '';
            }, 300);
        }
    
        item.classList.toggle('open');
    });
});
