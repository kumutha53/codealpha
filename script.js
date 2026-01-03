const faqs = {
  "hello": "Hi there! How can I help you?",
  "how are you": "I'm just a bot, but I'm doing fine!",
  "what is your name": "I'm FAQ Bot 😎",
  "what courses do you offer": "We offer Computer Science, IT, and Web Development courses.",
  "internship": "We provide internship guidance and projects for students.",
  "bye": "Goodbye! Have a great day!"
};

function sendMessage() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const chatlog = document.getElementById("chatlog");

  if(input.trim() === "") return;

  // User message
  const userMsg = document.createElement("p");
  userMsg.className = "user";
  userMsg.innerText = "You: " + input;
  chatlog.appendChild(userMsg);

  // Bot reply
  const botMsg = document.createElement("p");
  botMsg.className = "bot";

  if(faqs[input]) {
    botMsg.innerText = "Bot: " + faqs[input];
  } else {
    botMsg.innerText = "Bot: Sorry, I don't understand.";
  }
  chatlog.appendChild(botMsg);

  document.getElementById("userInput").value = "";
  chatlog.scrollTop = chatlog.scrollHeight;
}