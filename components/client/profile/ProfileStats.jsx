'use client';

export default function ProfileStats({ stats = {} }) {
  const defaultStats = {
    queries: 5,
    answers: 12,
    rating: 4.8,
    followers: 23,
    ...stats,
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-4 text-center hover:border-[#00d4ff] transition duration-300">
        <div className="text-xl sm:text-2xl font-bold text-[#00d4ff] mb-1">
          {defaultStats.queries}
        </div>
        <p className="text-[#a0a0b0] text-xs sm:text-sm">Questions Asked</p>
      </div>

      <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-4 text-center hover:border-[#8800ff] transition duration-300">
        <div className="text-xl sm:text-2xl font-bold text-[#8400ff] mb-1">
          {defaultStats.answers}
        </div>
        <p className="text-[#a0a0b0] text-xs sm:text-sm">Answers Given</p>
      </div>

      <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-4 text-center hover:border-[#ff6b35] transition duration-300">
        <div className="text-xl sm:text-2xl font-bold text-[#ff6b35] mb-1">
          ⭐ {defaultStats.rating}
        </div>
        <p className="text-[#a0a0b0] text-xs sm:text-sm">Overall Rating</p>
      </div>

      <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg p-4 text-center hover:border-[#00d4ff] transition duration-300">
        <div className="text-xl sm:text-2xl font-bold text-[#00d4ff] mb-1">
          {defaultStats.followers}
        </div>
        <p className="text-[#a0a0b0] text-xs sm:text-sm">Followers</p>
      </div>
    </div>
  );
}
