'use client';

export default function ClientBottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'post', icon: '✏️', label: 'Ask' },
    { id: 'dm', icon: '💬', label: 'Messages' },
    { id: 'experts', icon: '👨‍💼', label: 'Experts' },
    { id: 'profile', icon: '👤', label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f0f23] via-[#0f0f23]/95 to-[#0f0f23]/80 backdrop-blur-lg border-t border-[#2a2a3e] px-4 py-2 sm:py-3">
      <div className="max-w-3xl mx-auto flex justify-around">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg transition duration-300 group ${
              activeTab === tab.id
                ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                : 'text-[#a0a0b0] hover:text-white'
            }`}
          >
            <span className={`text-lg sm:text-2xl transition ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-105'}`}>
              {tab.icon}
            </span>
            <span className="text-xs mt-1 font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
