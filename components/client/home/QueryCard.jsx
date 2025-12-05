'use client';

export default function QueryCard({ query, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-4 hover:border-[#00d4ff] hover:shadow-lg hover:shadow-[#00d4ff]/10 transition duration-300 cursor-pointer group"
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8800ff] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base shadow-md">
          {query.clientAvatar}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-white font-semibold group-hover:text-[#00d4ff] transition line-clamp-2 text-sm sm:text-base flex-1">
              {query.title}
            </h3>
            <div className="flex-shrink-0 bg-[#00d4ff]/20 text-[#00d4ff] px-2 py-1 rounded text-xs font-semibold">
              ⭐ {query.rating}
            </div>
          </div>

          <p className="text-[#a0a0b0] text-xs sm:text-sm mb-3 line-clamp-1">
            {query.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-2">
            <span className="inline-block bg-[#00d4ff]/10 text-[#00d4ff] px-2.5 py-0.5 rounded-full text-xs font-medium">
              {query.category}
            </span>
            <span className="inline-block text-[#a0a0b0] text-xs">
              by <span className="text-white font-medium">{query.clientName}</span>
            </span>
          </div>

          <div className="flex gap-4 text-xs text-[#a0a0b0] border-t border-[#2a2a3e] pt-2.5">
            <span className="flex items-center gap-1">
              <span>👁️</span>
              <span>{query.views} views</span>
            </span>
            <span className="flex items-center gap-1">
              <span>💬</span>
              <span>{query.answers} answers</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
