document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isActive = button.classList.contains('active');

        // Close all other open answers
        document.querySelectorAll('.faq-question.active').forEach(activeButton => {
            if (activeButton !== button) {
                activeButton.classList.remove('active');
                activeButton.nextElementSibling.style.maxHeight = 0;
            }
        });

        // Toggle the current button and answer
        button.classList.toggle('active');

        if (isActive) {
            answer.style.maxHeight = 0;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});