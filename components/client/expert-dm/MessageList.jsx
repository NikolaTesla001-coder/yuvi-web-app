'use client';
import MessageCard from './MessageCard';

export default function MessageList({ messages, onMessageClick, isLoading }) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-4 animate-pulse">
            <div className="h-12 bg-[#2a2a3e] rounded-full w-12 mb-3"></div>
            <div className="h-4 bg-[#2a2a3e] rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">💬</div>
        <p className="text-[#a0a0b0] font-medium">No messages yet</p>
        <p className="text-[#a0a0b0] text-sm mt-1">Start a conversation with an expert</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span>💬</span>
        <span>Your Conversations</span>
        <span className="ml-auto bg-[#2a2a3e] text-[#a0a0b0] px-2 py-1 rounded text-xs font-normal">
          {messages.filter((m) => m.unread).length} new
        </span>
      </h2>
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} onClick={() => onMessageClick(message)} />
      ))}
    </div>
  );
}
