'use client';
import { useState } from 'react';

export default function QueryDetailModal({ query, onClose }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-t-3xl md:rounded-3xl w-full md:max-w-2xl max-h-[90vh] overflow-y-auto animate-slideUp shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#00d4ff]/10 to-[#ff006e]/10 border-b border-[#2a2a3e] px-4 sm:px-6 py-4 flex justify-between items-center">
          <h2 className="font-bold text-white text-base sm:text-lg">Question Details</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#2a2a3e] transition duration-300 text-[#a0a0b0] hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Question Header */}
          <div>
            <div className="flex gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8800ff] flex items-center justify-center text-white font-bold shadow-md">
                {query.clientAvatar}
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{query.clientName}</p>
                <p className="text-[#a0a0b0] text-xs">{query.createdAt}</p>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{query.title}</h3>
            <p className="text-[#a0a0b0] text-sm leading-relaxed mb-4">{query.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-[#00d4ff]/20 text-[#00d4ff] px-3 py-1 rounded-full text-xs font-semibold">
                {query.category}
              </span>
              <span className="inline-block bg-[#ff6b35]/20 text-[#ff6b35] px-3 py-1 rounded-full text-xs font-semibold">
                ⭐ {query.rating}
              </span>
            </div>

            <div className="flex gap-4 text-xs text-[#a0a0b0] border-t border-[#2a2a3e] pt-4">
              <span className="flex items-center gap-1">
                <span>👁️</span>
                <span>{query.views} Views</span>
              </span>
              <span className="flex items-center gap-1">
                <span>💬</span>
                <span>{query.answers} Answers</span>
              </span>
            </div>
          </div>

          {/* Answers Section */}
          {query.answerList && query.answerList.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                Answers ({query.answerList.length})
              </h3>
              <div className="space-y-3">
                {query.answerList.map((answer) => (
                  <div key={answer.id} className="bg-[#0f0f23] border border-[#2a2a3e] rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-[#00d4ff] text-sm">🎯 {answer.expert}</p>
                      <div className="text-[#a0a0b0] text-xs">👍 {answer.likes}</div>
                    </div>
                    <p className="text-[#a0a0b0] text-sm leading-relaxed">{answer.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(!query.answerList || query.answerList.length === 0) && (
            <div className="bg-[#0f0f23] border border-[#2a2a3e] rounded-lg p-6 text-center">
              <p className="text-[#a0a0b0] mb-4">No answers yet. Be the first to help!</p>
              <button className="px-6 py-2 bg-gradient-to-r from-[#00d4ff] to-[#8800ff] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00d4ff]/20 transition duration-300 text-sm">
                Write an Answer
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 border-t border-[#2a2a3e] pt-6">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex-1 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition duration-300 ${
                liked
                  ? 'bg-[#ff006e]/20 text-[#8800ff] border border-[#9000ff]'
                  : 'bg-[#2a2a3e] text-[#a0a0b0] hover:text-white hover:border-[#00d4ff] border border-[#2a2a3e]'
              }`}
            >
              ❤️ Helpful
            </button>
            <button className="flex-1 py-2 sm:py-3 bg-gradient-to-r from-[#00d4ff] to-[#9000ff] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00d4ff]/20 transition duration-300 text-sm sm:text-base">
              Message Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
