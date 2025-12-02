// yuvi-web-app/app/(site)/expert/layout.jsx

'use client'; 
import { useState } from 'react';
import ExpertBottomNav from '@/components/expert/ExpertBottomNav';
import HomeTab from '@/components/expert/HomeTab';
import MessageTab from '@/components/expert/MessageTab';
import ProfileTab from '@/components/expert/ProfileTab';

export default function ExpertLayout({ children }) {
  // Use state to track the active tab
  const [activeTab, setActiveTab] = useState('home');

  // Function to render the correct component based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'message':
        return <MessageTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Render the current tab's content inside main */}
      <main className="max-w-2xl mx-auto p-0 pb-20"> 
        {renderContent()}
      </main>
      
      {/* Pass state and setter function to the navigation */}
      <ExpertBottomNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
}