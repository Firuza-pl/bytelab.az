// <!-- © 2025 Firuza Poladzade Jafarli - bytelab.az
// All rights reserved.   -->

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".openPdf").forEach(function (item) {

        item.addEventListener("click", function (e) {
            e.preventDefault();

            const target = this.dataset.target;

            // PDF file mapping
            const pdfFiles = {
                pdfModal1: "../assets/img/doc/syllabus-csharp.jpg",
                pdfModal2: "../assets/img/doc/syllabus-java.jpg",
                pdfModal3: "../assets/img/doc/syllabus-db.jpg"
            };

            const titles = {
                pdfModal1: "Tədris Planı – Programlaşdırmanın əsasları (C# / .NET)  (Bütün hüquqlar qorunur-ByteLab)",
                pdfModal2: "Tədris Planı – Programlaşdırmanın əsasları  (Java / Spring Boot) (Bütün hüquqlar qorunur-ByteLab)",
                pdfModal3: "Tədris Planı – Verilənlər bazasının idarə olunması (Bütün hüquqlar qorunur-ByteLab)"
            };

            // Set modal content
            document.getElementById("pdfFrame").src = pdfFiles[target];
            document.getElementById("pdfTitle").textContent = titles[target];

            // Open modal
            const modal = new bootstrap.Modal(document.getElementById("pdfModal"));
            modal.show();
        });
    });
});
