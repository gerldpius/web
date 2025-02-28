document.getElementById("send-btn").addEventListener("click", sendMessage);

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    addMessage(userInput, "user-message");

    let botResponse = getBotResponse(userInput.toLowerCase());
    setTimeout(() => addMessage(botResponse, "bot-message"), 500);

    document.getElementById("user-input").value = "";
}

function addMessage(text, className) {
    let chatBox = document.getElementById("chat-box");
    let message = document.createElement("p");
    message.className = className;
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        "hello": "Hi there! I'm Cavin, How can I help?",
        "how are you": "I'm just a bot, but I'm doing great!",
        "what can you do": "Currently I'm not so strong but i can write some simple codes!!",
        "ok": "Yeah!",
        "bye": "Goodbye! Have a nice day!",
    };

    return responses[input] || "I'm not sure I understand. Can you rephrase?";
}