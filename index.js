function createPost() {
    var content = document.getElementById("post-content").value;
    var postsSection = document.getElementById("posts");
    var imageInput = document.getElementById("post-image");
    var imageFile = imageInput.files[0];

    if (content.trim() !== "" || imageFile) {
        var post = document.createElement("div");
        post.classList.add("post");

        if (content.trim() !== "") {
            var textContent = document.createElement("p");
            textContent.innerText = content;
            post.appendChild(textContent);
        }

        if (imageFile) {
            var image = document.createElement("img");
            image.src = URL.createObjectURL(imageFile);
            image.alt = "Post Image";
            image.style.maxWidth = "100%";
            image.style.marginTop = "10px";
            post.appendChild(image);
        }
        var likeCount = 0;
        var commentCount = 0;

        var likeButton = document.createElement("button");
        likeButton.classList.add("like-button");
        likeButton.innerHTML = '<img src = "pics/like.png"> Like';
        likeButton.onclick = function() {
            likeCount++; //counting likes
            likeButton.querySelector('.counter').innerText = likeCount;
        };

        var commentButton = document.createElement("button");
        commentButton.classList.add("comment-button");
        commentButton.innerHTML = '<img src = "pics/comment.png"> Comment';
        commentButton.onclick = function() {
            var commentInput = document.createElement("input");
            commentInput.classList.add("comment-input");
            commentInput.placeholder = "Write a comment...";
            var commentSection = post.querySelector(".comment-section") || document.createElement("div");
            commentSection.classList.add("comment-section");
            commentSection.appendChild(commentInput);
            post.appendChild(commentSection);

            commentInput.onkeypress = function(event) {
                if (event.key === "Enter" && commentInput.value.trim() !== "") {
                    var comment = document.createElement("p");
                    comment.classList.add("comment");
                    comment.innerText = commentInput.value;
                    commentSection.appendChild(comment);
                    commentCount++;
                    commentButton.querySelector('.counter').innerText = commentCount;
                    commentInput.value = "";
                }
            };
        };

        post.appendChild(likeButton);
        post.appendChild(commentButton);
        postsSection.appendChild(post);
        document.getElementById("post-content").value = "";
        imageInput.value = ""; // Clear the file input
    } else {
        alert("Please enter some content or choose an image to post.");
    }
}

function sendMessage() {
    var content = document.getElementById("message-content").value;
    var messageBox = document.getElementById("message-box");

    if (content.trim() !== "") {
        var message = document.createElement("div");
        message.classList.add("message");
        message.innerText = content;

        messageBox.appendChild(message);
        document.getElementById("message-content").value = "";
    } else {
        alert("Please enter a message to send.");
    }
}