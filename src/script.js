// Mengumpulkan ke-6 elemen navbar berdasarkan ID uniknya
const navbarElements = [
    document.getElementById('exploreToggle'),
    document.getElementById('searchToggle'),
    document.getElementById('logoToggle'),
    document.getElementById('newsToggle'),
    document.getElementById('multimediaToggle'),
    document.getElementById('nasaPlusToggle')
];

// Looping untuk memasang event click pada setiap elemen
navbarElements.forEach(element => {
    if (element) {
        element.addEventListener('click', function(event) {
            // Mencegah link '#' membuat halaman loncat ke atas saat diklik
            event.preventDefault(); 

            // Cek apakah elemen yang diklik sudah punya border biru cerah tebal
            const hasBorder = this.classList.contains('border-blue-500');

            // 1. Bersihkan dulu border biru cerah dari SEMUA elemen (reset keadaan)
            navbarElements.forEach(el => {
                if (el) {
                    el.classList.remove('border-blue-500', 'border-[3px]');
                    
                    // Kembalikan ke border bawaan khusus untuk elemen search (neutral-700)
                    if (el.id === 'searchToggle') {
                        el.classList.remove('border-transparent');
                        el.classList.add('border-2', 'border-neutral-700');
                    } else {
                        el.classList.add('border-[3px]', 'border-transparent');
                    }
                }
            });

            // 2. Jika sebelumnya elemen ini BELUM punya border biru cerah, nyalakan sekarang
            if (!hasBorder) {
                this.classList.remove('border-transparent', 'border-neutral-700', 'border-2');
                this.classList.add('border-blue-500', 'border-[3px]');
            }
        });
    }
});