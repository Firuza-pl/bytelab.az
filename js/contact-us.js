// <!-- © 2025 Firuza Poladzade Jafarli - bytelab.az
// All rights reserved.   -->

document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const loading = form.querySelector(".loading");
    const errorMsg = form.querySelector(".error-message");
    const sentMsg = form.querySelector(".sent-message");

    loading.style.display = "block";
    errorMsg.style.display = "none";
    sentMsg.style.display = "none";

    const formData = new FormData(form);

    try {
        const res = await fetch("../contact.php", {
            method: "POST",
            body: formData
        });

        const data = await res.json();
        loading.style.display = "none";

        if(data.success){
            sentMsg.style.display = "block";
            form.reset();
        } else {
            errorMsg.textContent = "Xəta baş verdi, zəhmət olmasa yenidən cəhd edin.";
            errorMsg.style.display = "block";
        }
    } catch(err){
        loading.style.display = "none";
        errorMsg.textContent = "Xəta baş verdi, zəhmət olmasa yenidən cəhd edin.";
        errorMsg.style.display = "block";
        console.error(err);
    }
});
