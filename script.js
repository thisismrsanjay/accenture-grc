function nextScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function selectOption(option) {
    // Store the user's selection
    localStorage.setItem('userOption', option);
    nextScreen('screen3');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message.trim()) {
        const messagesDiv = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = `You: ${message}`;
        messagesDiv.appendChild(newMessage);

        // Clear the input
        input.value = '';

        // Here you would add the API call to OpenAI
        // For now, we'll just simulate a response
        const botResponse = document.createElement('div');
        botResponse.textContent = `Humsafar: (Simulated response based on option ${localStorage.getItem('userOption')} and message "${message}")`;
        messagesDiv.appendChild(botResponse);

        // Scroll to the bottom
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}
