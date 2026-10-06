/* =====================================================
           DATA SISWA
           ===================================================== */

        const students = [

            {
                name: '	Adnan Ata Pratam',
                nis: '11287',
                foto: 'adnan.jpeg'
            },

            {
                name: 'Afia Husna',
                nis: '11288',
                foto: 'afi.jpg.jpeg'
            },

            {
                name: 'Alena Mauratika',
                nis: '11289',
                foto: 'alena.jpeg'
            },

            {
                name: 'Alif Rizky Firmansyah',
                nis: '11290',
                foto: 'alip.jpeg'
            },

            {
                name: 'Anastasya Khofifatun Najwa',
                nis: '11291',
                foto: 'caca.jpeg'
            },

            {
                name: 'Anisa Nur Rohmah',
                nis: '11292',
                foto: 'anisa.jpeg'
            },

            {
                name: 'Apriliyana Afita Putri',
                nis: '11293',
                foto: ''
            },

            {
                name: 'Azharina Saputri',
                nis: '11294',
                foto: 'azahra.jpeg'
            },

            {
                name: 'Azzahra Nabila Rakhmah',
                nis: '11295',
                foto: 'nabila.jpeg'
            },

            {
                name: 'Azzahra Rinaya Ari',
                nis: '11296',
                foto: 'naya.jpeg'
            },

            {
                name: 'Elshi Alisya Putry',
                nis: '11297',
                foto: 'elsi.jpeg'
            },

            {
                name: 'Evi Anisa Putri',
                nis: '11298',
                foto: 'evi.jpeg'

            },

            {
                name: 'Faizal Afandi Ferdianzah',
                nis: '11299',
                foto: 'faizal (2).JPG'
            },

            {
                name: 'Farhan Syahrul Romadhon',
                nis: '11300',
                foto: 'farhan.png'
            },

            {
                name: 'Febriano Abbasy Pramono',
                nis: '11301',
                foto: 'vebri.jpeg'
            },

            {
                name: 'Ihvan Candra Utama',
                nis: '11302',
                foto: 'ihfan.jpeg'
            },

            {
                name: 'Lia Ramadhani',
                nis: '11303',
                foto: 'LIA.jpeg'
            },

            {
                name: 'Melisa Nawang Wulan',
                nis: '11304',
                foto: 'meli.jpeg'
            },

            {
                name: 'Muhammad Habi Burrohman',
                nis: '11305',
                foto: 'habib.JPG'
            },

            {
                name: 'Naszha Marhatus Soleha',
                nis: '11306',
                foto: 'arha2.jpeg'
            },

            {
                name: 'Nesya Dana Yuliasari',
                nis: '11307',
                foto: ''
            },

            {
                name: 'Neyshia Salsabila Nuraini',
                nis: '11308',
                foto: 'esa.jpeg'
            },

            {
                name: 'Raihana Aisyahra',
                nis: '11309',
                foto: 'hana2.jpeg'
            },

            {
                name: 'Regina Cendi Aulia',
                nis: '11310',
                foto: 'regina.jpeg'
            },

            {
                name: 'Reskia Frista Nurditian',
                nis: '11231',
                foto: 'reskia.jpeg'
            },

            {
                name: 'Rofiatul Latifah',
                nis: '11232',
                foto: 'ofi.jpeg'
            },

            {
                name: 'Shafa Iqra Rahmania',
                nis: '11233',
                foto: 'safa.jpeg'
            },

            {
                name: 'Ulahfah Luthfiah Meysah',
                nis: '11234',
                foto: 'ulahfah.jpeg'
            },

            {
                name: 'Januar Lutfi Hidayat',
                nis: '11235',
                foto: 'lutfi.png'
            },
            
            {
                name: 'lely nur alifan',
                nis: '12101',
                foto: 'leli.jpeg'
            }

        ];


        /* =====================================================
           RENDER SISWA
           ===================================================== */

        const studentGrid =
            document.getElementById(
                'studentGrid'
            );


        students.forEach(
            student => {

                const card =
                    document.createElement(
                        'div'
                    );


                card.className =
                    'student-card';


                const foto =
                    student.foto ||
                    'logo-kelas.jpg';


                card.innerHTML = `

                    <div class="avatar">

                        <img
                            src="${foto}"
                            alt="${student.name}"
                            onclick="bukaFoto(this)"
                        >

                    </div>

                    <div class="name">
                        ${student.name}
                    </div>

                    <div class="nis">
                        NIS. ${student.nis}
                    </div>

                `;


                studentGrid.appendChild(
                    card
                );

            }
        );


        /* =====================================================
           DATA GALERI
           ===================================================== */

        const galleryPhotos = [
            'kelas 11(2).jpeg',
            'kelas 11(3).jpeg',
            'kelas 11(4).jpeg',
            'kelas 11(5).jpeg',
            'kelas 11(6).jpeg',
            'kelas 11(7).jpeg',
            'kelas 11(8).jpeg',
            'kelas 11(9).jpeg',
            'kelas 11(10).jpeg',
            'kelas 11(11).jpeg',
            'kelas 11(12).jpeg',
            'kelas 11(14).jpeg',
            'kelas 11(15).jpeg',
            'kelas 11(16).jpeg',
            'kelas 11(17).jpeg',
            'kelas 11(20).jpeg',
            'kelas 11(21).jpeg',
            'kelas 11(22).jpeg',
            'kelas 11(23).jpeg',
            'kelas 11(24).jpeg',
            '1.jpeg',
            '2.jpeg',
            '6.jpeg',
            '8.jpeg',
            '10.jpeg',
            '13.jpeg',
            '15.jpeg',
            '18.jpeg',
            '19.jpeg',
            '20.jpeg',
            '22.jpeg',
            '24.jpeg',
            '25.jpeg',
            '26.jpeg',
            '27.jpeg',
            '28.jpeg',
            '29.jpeg',
            '30.jpeg',
            '33.jpeg',
            '36.jpeg',
            '37.jpeg',
            '38.jpeg',
            '39.jpeg',
            '41.jpeg',
            '42.jpeg',
            '43.jpeg',
            '44.jpeg',
            '45.jpeg',
            '46.jpeg',
            '47.jpeg',
            '48.jpeg',
            '49.jpeg',
            '50.jpeg',
            '51.jpeg',
            '52.jpeg',
            '53.jpeg',
            '54.jpeg',
            '55.jpeg',
            '56.jpeg',
            '57.jpeg',
            '58.jpeg',
            '59.jpeg',
            '60.jpeg',
            '61.jpeg',
            '62.jpeg',
            '64.jpeg',
            '65.jpeg',
            '66.jpeg',
            '67 (2).jpeg',
            '67.jpeg',
            'a.JPG',
            'c.JPG',
            'tikus.jpg',
        ];


        const galleryGrid =
            document.getElementById(
                'galleryGrid'
            );


        galleryPhotos.forEach(
            (photo, index) => {

                const item =
                    document.createElement(
                        'div'
                    );


                item.className =
                    'gallery-item';


                item.innerHTML = `

                    <img
                        src="${photo}"
                        alt="Galeri ${index + 1}"
                        onclick="bukaFoto(this)"
                    >

                `;


                galleryGrid.appendChild(
                    item
                );

            }
        );


        /* =====================================================
           POPUP FOTO
           ===================================================== */

        const photoModal =
            document.getElementById(
                'photoModal'
            );


        const photoModalImg =
            document.getElementById(
                'photoModalImg'
            );


        const closePhoto =
            document.getElementById(
                'closePhoto'
            );


        function bukaFoto(foto) {

            photoModalImg.src =
                foto.src;

            photoModalImg.alt =
                foto.alt;

            photoModal.classList.add(
                'show'
            );

            document.body.style.overflow =
                'hidden';

        }


        function tutupFoto() {

            photoModal.classList.remove(
                'show'
            );

            photoModalImg.src = "";

            document.body.style.overflow =
                "";

        }


        closePhoto.addEventListener(
            'click',
            tutupFoto
        );


        photoModal.addEventListener(
            'click',
            event => {

                if (
                    event.target ===
                    photoModal
                ) {

                    tutupFoto();

                }

            }
        );


        document.addEventListener(
            'keydown',
            event => {

                if (
                    event.key ===
                    'Escape'
                ) {

                    tutupFoto();

                }

            }
        );


        /* =====================================================
           HAMBURGER
           ===================================================== */

        const hamburger =
            document.getElementById(
                'hamburger'
            );


        const navMenu =
            document.getElementById(
                'navMenu'
            );


        hamburger.addEventListener(
            'click',
            () => {

                navMenu.classList.toggle(
                    'open'
                );

            }
        );


        document.querySelectorAll(
            '#navMenu a'
        ).forEach(
            link => {

                link.addEventListener(
                    'click',
                    () => {

                        navMenu.classList.remove(
                            'open'
                        );

                    }
                );

            }
        );


        /* =====================================================
           ACTIVE NAVIGATION
           ===================================================== */

        const sections =
            document.querySelectorAll(
                'section[id]'
            );


        const navLinks =
            document.querySelectorAll(
                '#navMenu a'
            );


        window.addEventListener(
            'scroll',
            () => {

                let current = '';


                sections.forEach(
                    section => {

                        const top =
                            section.offsetTop -
                            100;


                        if (
                            window.scrollY >=
                            top
                        ) {

                            current =
                                section.id;

                        }

                    }
                );


                navLinks.forEach(
                    link => {

                        link.classList.remove(
                            'active'
                        );


                        if (
                            link.getAttribute(
                                'href'
                            ) ===
                            `#${current}`
                        ) {

                            link.classList.add(
                                'active'
                            );

                        }

                    }
                );

            }
        );


        /* =====================================================
           PARTICLE WAVE
           ===================================================== */

        (() => {

            const canvas =
                document.getElementById(
                    'particleBackground'
                );


            const ctx =
                canvas.getContext('2d');


            let W;
            let H;
            let particles = [];


            function resize() {

                W =
                    canvas.width =
                    window.innerWidth;

                H =
                    canvas.height =
                    window.innerHeight;


                particles = [];


                const count =
                    window.innerWidth < 700
                    ? 80
                    : 160;


                for (
                    let i = 0;
                    i < count;
                    i++
                ) {

                    particles.push({

                        x:
                            Math.random() * W,

                        y:
                            Math.random() * H,

                        r:
                            Math.random() * 1.5,

                        speed:
                            .1 +
                            Math.random() * .4,

                        phase:
                            Math.random() *
                            Math.PI * 2

                    });

                }

            }


            function draw(time) {

                ctx.clearRect(
                    0,
                    0,
                    W,
                    H
                );


                const t =
                    time * .0005;


                particles.forEach(
                    p => {

                        const y =
                            p.y +
                            Math.sin(
                                t * 2 +
                                p.phase
                            ) * 20;


                        ctx.beginPath();


                        ctx.arc(
                            p.x,
                            y,
                            p.r,
                            0,
                            Math.PI * 2
                        );


                        ctx.fillStyle =
                            'rgba(0,234,255,.75)';


                        ctx.shadowColor =
                            '#00eaff';


                        ctx.shadowBlur = 8;


                        ctx.fill();


                        ctx.shadowBlur = 0;

                    }
                );


                requestAnimationFrame(
                    draw
                );

            }


            window.addEventListener(
                'resize',
                resize
            );


            resize();

            requestAnimationFrame(
                draw
            );

        })();

/* ================= SCRIPT BERIKUTNYA ================= */

(() => {
            const themeButton = document.getElementById('themeToggle');

            if (!themeButton) return;

            const applyTheme = (nightMode) => {
                document.body.classList.toggle('night-mode', nightMode);
                themeButton.setAttribute('aria-pressed', String(nightMode));
                themeButton.setAttribute(
                    'aria-label',
                    nightMode ? 'Aktifkan mode siang' : 'Aktifkan mode malam'
                );
                themeButton.innerHTML = nightMode
                    ? '<i class="fas fa-sun"></i><span>Mode siang</span>'
                    : '<i class="fas fa-moon"></i><span>Mode malam</span>';
            };

            try {
                applyTheme(localStorage.getItem('xltav-theme') === 'night');
            } catch (error) {
                applyTheme(false);
            }

            themeButton.addEventListener('click', () => {
                const nightMode = !document.body.classList.contains('night-mode');
                applyTheme(nightMode);

                try {
                    localStorage.setItem('xltav-theme', nightMode ? 'night' : 'light');
                } catch (error) {
                    /* Pilihan tetap berlaku selama halaman dibuka. */
                }
            });
        })();
