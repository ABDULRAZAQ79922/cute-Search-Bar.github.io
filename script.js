document.addEventListener('DOMContentLoaded', () => {
    const cuteSearchInput = document.querySelector('.cute-search-input');
    const cuteSearchButton = document.querySelector('.cute-search-button');
  
    cuteSearchButton.addEventListener('click', () => {
      alert(`You searched for: ${cuteSearchInput.value}`);
    });
  });
  