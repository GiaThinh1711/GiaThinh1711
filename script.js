document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbarToggle");
  const navbarMenu = document.getElementById("navbarMenu");

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", function () {
      navbarToggle.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
      const isExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
      navbarToggle.setAttribute("aria-expanded", !isExpanded);
    });
  }
});

document.querySelectorAll('.nav_link a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 1. Xử lý đổi class active cho menu
        document.querySelectorAll('.nav_link a').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        const cards = document.querySelectorAll('.port_card');

        // 2. Xử lý ẩn/hiện card
        cards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block'; // Hiện
                // Bạn có thể thêm animation ở đây
            } else {
                card.style.display = 'none';  // Ẩn
            }
        });
    });
});
