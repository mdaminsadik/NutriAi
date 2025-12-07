import { useState } from "react";

const NutriBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { sender: "bot", text: "👋 Hi! I'm NutriBot. Ask me anything about nutrition, diet, or health tips!" }
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message
    const newChat = [...chat, { sender: "user", text: message }];
    setChat(newChat);

    try {
      // Call Flask API
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();

      // Add bot response
      setChat([...newChat, { sender: "bot", text: data.response }]);
    } catch (err) {
      setChat([...newChat, { sender: "bot", text: "⚠️ Oops! Unable to reach server. Try again later." }]);
    }

    setMessage("");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating NutriBot Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 shadow-xl text-white font-bold text-lg hover:scale-110 transition transform"
      >
        🤖
      </button>

      {/* Chat Window */}
      {open && (
        <div className="absolute bottom-24 right-0 w-96 h-[500px] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden border-2 border-orange-400">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-4 text-white font-bold flex justify-between items-center">
            NutriBot 🍎
            <button onClick={() => setOpen(false)} className="text-xl font-bold">✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-orange-50">
            {chat.map((c, idx) => (
              <div
                key={idx}
                className={`flex ${c.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-xl max-w-[75%] text-sm shadow-md ${
                    c.sender === "bot"
                      ? "bg-white text-gray-800 border border-orange-200"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {c.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me about nutrition..."
              className="flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-lg transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutriBot;
