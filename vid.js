document.addEventListener("DOMContentLoaded", function () {
    const videoUpload = document.getElementById("video-upload");
    const uploadBtn = document.getElementById("upload-btn");
    const videosContainer = document.getElementById("videos");

    const reelUpload = document.getElementById("reel-upload");
    const uploadReelBtn = document.getElementById("upload-reel-btn");
    const reelsContainer = document.getElementById("reels");

    // Load saved videos & reels from localStorage
    const savedVideos = JSON.parse(localStorage.getItem("userVideos")) || [];
    const savedReels = JSON.parse(localStorage.getItem("userReels")) || [];

    // Function to display videos
    function displayVideos() {
        videosContainer.innerHTML = ""; // Clear existing list

        savedVideos.forEach((videoSrc, index) => {
            const videoItem = document.createElement("div");
            videoItem.classList.add("video-item");

            const videoElement = document.createElement("video");
            videoElement.src = videoSrc;
            videoElement.controls = true;

            // Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = function () {
                savedVideos.splice(index, 1); // Remove from array
                localStorage.setItem("userVideos", JSON.stringify(savedVideos)); // Save updated list
                displayVideos(); // Refresh the list
            };

            videoItem.appendChild(videoElement);
            videoItem.appendChild(deleteBtn);
            videosContainer.appendChild(videoItem);
        });
    }

    // Function to display reels
    function displayReels() {
        reelsContainer.innerHTML = ""; // Clear existing list

        savedReels.forEach((reelSrc, index) => {
            const reelItem = document.createElement("div");
            reelItem.classList.add("reel-item");

            const reelElement = document.createElement("video");
            reelElement.src = reelSrc;
            reelElement.controls = true;
            reelElement.loop = true;
            reelElement.autoplay = true;

            // Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = function () {
                savedReels.splice(index, 1); // Remove from array
                localStorage.setItem("userReels", JSON.stringify(savedReels)); // Save updated list
                displayReels(); // Refresh the list
            };

            reelItem.appendChild(reelElement);
            reelItem.appendChild(deleteBtn);
            reelsContainer.appendChild(reelItem);
        });
    }

    // Handle video upload
    uploadBtn.addEventListener("click", function () {
        const file = videoUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                savedVideos.push(event.target.result);
                localStorage.setItem("userVideos", JSON.stringify(savedVideos));
                displayVideos();
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please select a video to upload.");
        }
    });

    // Handle reel upload
    uploadReelBtn.addEventListener("click", function () {
        const file = reelUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                savedReels.push(event.target.result);
                localStorage.setItem("userReels", JSON.stringify(savedReels));
                displayReels();
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please select a reel to upload.");
        }
    });

    // Load videos & reels on page load
    displayVideos();
    displayReels();
});