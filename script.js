document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    let hideTimeout;
  
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout);
      dropdownContent.style.display = 'block';
    });
  
    dropdown.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(() => {
        dropdownContent.style.display = 'none';
      }, 800); // stays for 800ms after cursor moves away
    });
  
    dropdownContent.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout);
    });
  
    dropdownContent.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(() => {
        dropdownContent.style.display = 'none';
      }, 800);
    });
  });
  