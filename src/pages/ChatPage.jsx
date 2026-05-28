function ChatPage() {
  return (
    <div className="h-screen bg-[#111827] text-white flex">
      
      {/* Sidebar */}
      <div className="w-[300px] bg-[#1f2937] border-r border-gray-700 flex flex-col">
        
        <div className="p-5 text-2xl font-bold border-b border-gray-700">
          Sendora Chat
        </div>

        <div className="flex-1 overflow-y-auto">

          <div className="p-4 hover:bg-[#374151] cursor-pointer border-b border-gray-700">
            <h2 className="font-semibold">Karthik</h2>
            <p className="text-sm text-gray-400">Hey, completed the UI?</p>
          </div>

          <div className="p-4 hover:bg-[#374151] cursor-pointer border-b border-gray-700">
            <h2 className="font-semibold">Design Team</h2>
            <p className="text-sm text-gray-400">Meeting at 6 PM</p>
          </div>

          <div className="p-4 hover:bg-[#374151] cursor-pointer border-b border-gray-700">
            <h2 className="font-semibold">Cyber Squad</h2>
            <p className="text-sm text-gray-400">Security testing pending</p>
          </div>

        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <div className="h-[80px] border-b border-gray-700 flex items-center justify-between px-6 bg-[#1f2937]">
          <div>
            <h1 className="text-xl font-bold">Karthik</h1>
            <p className="text-sm text-green-400">Online</p>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
              Call
            </button>

            <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
              Profile
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#111827]">

          <div className="flex justify-start">
            <div className="bg-[#374151] px-4 py-3 rounded-2xl max-w-[400px]">
              Hey bro 👋
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-blue-600 px-4 py-3 rounded-2xl max-w-[400px]">
              UI work almost completed 🔥
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-[#374151] px-4 py-3 rounded-2xl max-w-[400px]">
              Niceee 😭
            </div>
          </div>

        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-700 bg-[#1f2937] flex gap-4">

          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-[#374151] text-white px-4 py-3 rounded-xl outline-none"
          />

          <button className="bg-blue-600 px-6 rounded-xl hover:bg-blue-700">
            Send
          </button>

        </div>

      </div>
    </div>
  );
}

export default ChatPage;