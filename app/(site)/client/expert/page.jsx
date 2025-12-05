'use client';
import { useState } from 'react';
import ExpertList from '@/components/client/expert/ExpertList';
import ExpertDetailPage from '@/components/client/modals/ExpertDetailPage';
import ExpertChatModal from '@/components/client/modals/ExpertChatModal';
import { mockExperts } from '@/lib/mockData';

export default function ExpertPage() {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [chatExpert, setChatExpert] = useState(null);

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff006e] bg-clip-text text-transparent">
            Connect with Experts
          </span>
        </h1>
        <p className="text-[#a0a0b0] text-sm sm:text-base">
          Get personalized guidance from verified professionals
        </p>
      </div>

      <ExpertList
        experts={mockExperts}
        onViewClick={setSelectedExpert}
        onMessageClick={setChatExpert}
      />

      {selectedExpert && (
        <ExpertDetailPage expert={selectedExpert} onClose={() => setSelectedExpert(null)} />
      )}

      {chatExpert && (
        <ExpertChatModal expert={chatExpert} onClose={() => setChatExpert(null)} />
      )}
    </div>
  );
}
