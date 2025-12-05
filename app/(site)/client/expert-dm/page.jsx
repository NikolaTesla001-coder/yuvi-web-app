'use client';
import { useState } from 'react';
import MessageList from '@/components/client/expert-dm/MessageList';
import ExpertChatModal from '@/components/client/modals/ExpertChatModal';
import { mockMessages } from '@/lib/mockData';

export default function ExpertDMPage() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff006e] bg-clip-text text-transparent">
            Messages
          </span>
        </h1>
        <p className="text-[#a0a0b0] text-sm sm:text-base">
          Keep in touch with experts you're working with
        </p>
      </div>

      <MessageList messages={mockMessages} onMessageClick={setSelectedMessage} />

      {selectedMessage && (
        <ExpertChatModal
          expert={selectedMessage}
          onClose={() => setSelectedMessage(null)}
        />
      )}
    </div>
  );
}
