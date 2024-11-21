

const chatIcon = document.getElementById('chat-icon');
const chatContainer = document.getElementById('chat-container');
const closeChat = document.getElementById('close-chat');

chatIcon.addEventListener('click', () => {
    chatContainer.style.display = 'block';
});

closeChat.addEventListener('click', () => {
    chatContainer.style.display = 'none';
});

document.getElementById('send-btn').addEventListener('click', () => {
    const input = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = input.value;

    if (userMessage.trim() !== '') {
        chatBox.innerHTML += `<p><strong>Tú:</strong> ${userMessage}</p>`;
        input.value = '';

        setTimeout(() => {
            chatBox.innerHTML += `<p><strong>Bot:</strong> Esto es una respuesta simulada.</p>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
});
