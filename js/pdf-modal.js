document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".openPdf").forEach(function (item) {

        item.addEventListener("click", function (e) {
            e.preventDefault();

            const target = this.dataset.target;

            // PDF file mapping
            const pdfFiles = {
                pdfModal1: "../assets/img/doc/Syllabus-Backend.pdf",
                pdfModal2: "../assets/img/doc/Syllabus-DB.pdf",
                pdfModal3: "../assets/img/doc/Syllabus-NET.pdf"
            };

            const titles = {
                pdfModal1: "Syllabus – Programming Fundamentals",
                pdfModal2: "Syllabus – Database Management",
                pdfModal3: "Syllabus – .NET Framework"
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
