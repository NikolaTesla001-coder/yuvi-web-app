'use client';

export default function ProfileActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <button className="py-3 px-4 bg-[#1a1a2e] border border-[#2a2a3e] text-white rounded-lg hover:border-[#00d4ff] transition duration-300 font-semibold text-sm">
        ✏️ Edit Profile
      </button>
      <button className="py-3 px-4 bg-[#1a1a2e] border border-[#2a2a3e] text-white rounded-lg hover:border-[#aa00ff] transition duration-300 font-semibold text-sm">
        ⚙️ Settings
      </button>
    </div>
  );
}
