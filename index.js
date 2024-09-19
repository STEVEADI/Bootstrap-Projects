document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');

    const button = document.getElementById('actionButton');
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });

    // Additional functionality
    const contentSection = document.getElementById('content');
    contentSection.style.border = '1px solid #007bff';
    contentSection.style.padding = '20px';
    contentSection.style.borderRadius = '5px';
});
