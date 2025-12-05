'use client';

export default function MessageCard({ message, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-4 hover:border-[#00d4ff] hover:bg-[#1a1a2e]/50 transition duration-300 cursor-pointer group"
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8800ff] flex items-center justify-center text-white font-bold flex-shrink-0 relative shadow-md">
          {message.expertName.charAt(0)}
          {message.verified && (
            <div className="absolute -bottom-1 -right-1 bg-[#00d4ff] rounded-full p-1 shadow-md">
              <svg className="w-3 h-3 text-[#0f0f23]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-white group-hover:text-[#00d4ff] transition text-sm sm:text-base truncate">
              {message.expertName}
            </h3>
            {message.unread && (
              <div className="w-2.5 h-2.5 bg-[#00d4ff] rounded-full flex-shrink-0 animate-pulse"></div>
            )}
          </div>
          <p className="text-[#a0a0b0] text-xs sm:text-sm mb-2">{message.category} Specialist</p>
          <p className="text-[#a0a0b0] text-sm line-clamp-2 mb-2">{message.lastMessage}</p>
          <p className="text-[#a0a0b0] text-xs">{message.timestamp}</p>
        </div>
      </div>
    </div>
  );
}
