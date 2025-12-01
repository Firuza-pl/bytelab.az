document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".openPdf").forEach(function (item) {

        item.addEventListener("click", function (e) {
            e.preventDefault();

            const target = this.dataset.target;

            // PDF & image file mapping
            const pdfFiles = {
                pdfModal1: [
                    { thumb: "../assets/img/doc/diplom1.jpg", file: "../assets/img/doc/diplom1.jpg" },
                    { thumb: "../assets/img/doc/diplom3.jpg", file: "../assets/img/doc/diplom3.jpg" },
                    { thumb: "../assets/img/doc/diplom2.jpg", file: "../assets/img/doc/diplom2.jpg" },
                    { thumb: "../assets/img/doc/Certificate-net.jpg", file: "../assets/img/doc/Certificate-net.pdf" }, // show png, open pdf
                    { thumb: "../assets/img/doc/Certificate-db.jpg", file: "../assets/img/doc/Certificate-db.pdf" },   // show png, open pdf
                    { thumb: "../assets/img/doc/Certificate-code.jpg", file: "../assets/img/doc/Certificate-code.jpg" },
                    { thumb: "../assets/img/doc/Certificate-csharp.jpg", file: "../assets/img/doc/Certificate-csharp.pdf" } // show png, open pdf
                ],
                pdfModal2: [
                    { thumb: "../assets/img/doc/plan-az.png", file: "../assets/img/doc/plan-az.png" },
                    { thumb: "../assets/img/doc/alqo-az.png", file: "../assets/img/doc/alqo-az.png" },
                    { thumb: "../assets/img/doc/charp-az.png", file: "../assets/img/doc/charp-az.png" },
                    { thumb: "../assets/img/doc/net-az.png", file: "../assets/img/doc/net-az.png" },
                    { thumb: "../assets/img/doc/api-az.png", file: "../assets/img/doc/api-az.png" },
                    { thumb: "../assets/img/doc/sql-az.png", file: "../assets/img/doc/sql-az.png" },
                    { thumb: "../assets/img/doc/java-az.png", file: "../assets/img/doc/java-az.png" }
                ],
            };

            const titles = {
                pdfModal1: "Fayllar",
                pdfModal2: "Tədris Planı"
            };

            const pdfFrame = document.getElementById("pdfFrame");
            const modalBody = document.getElementById("pdfContent");

            modalBody.innerHTML = "";
            pdfFrame.style.display = "none";

            if (Array.isArray(pdfFiles[target])) {
                // MULTIPLE FILES → show as thumbnails
                pdfFiles[target].forEach(item => {
                    modalBody.innerHTML += `
                        <a href="${item.file}" target="_blank">
                            <img src="${item.thumb}" class="img-item">
                        </a>
                    `;
                });
            }

            document.getElementById("pdfTitle").textContent = titles[target];

            const modal = new bootstrap.Modal(document.getElementById("pdfModal"));
            modal.show();
        });
    });
});
