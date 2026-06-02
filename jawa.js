function toggleDropdown(menuId) {
  const currentMenu = document.getElementById(menuId);
  const currentWrapper = currentMenu.parentElement;
  const currentButton = currentWrapper.querySelector('.dropdown-btn');
  const currentArrow = currentWrapper.querySelector('.arrow-icon');
  
  const allMenus = document.querySelectorAll('.dropdown-content');
  const allArrows = document.querySelectorAll('.arrow-icon');
  const allButtons = document.querySelectorAll('.dropdown-btn');
  
  // Tutup dropdown lain dan hapus style aktifnya
  allMenus.forEach((menu) => {
    if (menu !== currentMenu) {
      menu.classList.add('hidden');
    }
  });

  allArrows.forEach((arrow) => {
    if (arrow !== currentArrow) {
      arrow.classList.remove('rotate-180');
    }
  });

  allButtons.forEach((btn) => {
    if (btn !== currentButton) {
      btn.classList.remove('outline', 'outline-2', 'outline-white/60', 'outline-offset-8');
    }
  });

  // Toggle state untuk menu yang sedang diklik
  const isHidden = currentMenu.classList.contains('hidden');
  
  if (isHidden) {
    currentMenu.classList.remove('hidden');
    currentArrow.classList.add('rotate-180');
    currentButton.classList.add('outline', 'outline-2', 'outline-white/60', 'outline-offset-8');
  } else {
    currentMenu.classList.add('hidden');
    currentArrow.classList.remove('rotate-180');
    currentButton.classList.remove('outline', 'outline-2', 'outline-white/60', 'outline-offset-8');
  }
}

// Menutup otomatis jika klik di luar area
window.onclick = function(event) {
  if (!event.target.closest('.dropdown-wrapper')) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const arrows = document.querySelectorAll('.arrow-icon');
    const buttons = document.querySelectorAll('.dropdown-btn');
    
    dropdowns.forEach(dropdown => dropdown.classList.add('hidden'));
    arrows.forEach(arrow => arrow.classList.remove('rotate-180'));
    buttons.forEach(btn => btn.classList.remove('outline', 'outline-2', 'outline-white/60', 'outline-offset-8'));
  }
}