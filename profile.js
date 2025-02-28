document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");
    
    const nameText = document.getElementById("profile-name");
    const nameInput = document.getElementById("edit-name");

    const emailText = document.getElementById("profile-email");
    const emailInput = document.getElementById("edit-email");

    const bioText = document.getElementById("profile-bio");
    const bioInput = document.getElementById("edit-bio");

    const profilePic = document.getElementById("profile-pic");
    const uploadImage = document.getElementById("upload-image");

    // Enable edit mode
    editBtn.addEventListener("click", function () {
        nameInput.value = nameText.textContent;
        emailInput.value = emailText.textContent;
        bioInput.value = bioText.textContent;

        nameText.classList.add("hidden");
        emailText.classList.add("hidden");
        bioText.classList.add("hidden");

        nameInput.classList.remove("hidden");
        emailInput.classList.remove("hidden");
        bioInput.classList.remove("hidden");

        editBtn.classList.add("hidden");
        saveBtn.classList.remove("hidden");
    });

    // Save changes
    saveBtn.addEventListener("click", function () {
        nameText.textContent = nameInput.value;
        emailText.textContent = emailInput.value;
        bioText.textContent = bioInput.value;

        nameText.classList.remove("hidden");
        emailText.classList.remove("hidden");
        bioText.classList.remove("hidden");

        nameInput.classList.add("hidden");
        emailInput.classList.add("hidden");
        bioInput.classList.add("hidden");

        saveBtn.classList.add("hidden");
        editBtn.classList.remove("hidden");

        // Optionally save to localStorage (for persistence)
        localStorage.setItem("profileName", nameText.textContent);
        localStorage.setItem("profileEmail", emailText.textContent);
        localStorage.setItem("profileBio", bioText.textContent);
    });

    // Load saved data (if available)
    if (localStorage.getItem("profileName")) {
        nameText.textContent = localStorage.getItem("profileName");
    }
    if (localStorage.getItem("profileEmail")) {
        emailText.textContent = localStorage.getItem("profileEmail");
    }
    if (localStorage.getItem("profileBio")) {
        bioText.textContent = localStorage.getItem("profileBio");
    }

    // Change profile picture
    profilePic.addEventListener("click", function () {
        uploadImage.click();
    });

    uploadImage.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                profilePic.src = event.target.result;
                localStorage.setItem("profilePic", event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Load profile picture if saved
    if (localStorage.getItem("profilePic")) {
        profilePic.src = localStorage.getItem("profilePic");
    }
});