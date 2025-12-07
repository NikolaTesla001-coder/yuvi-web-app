"use client";

import { usePathname, useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { label: "Posts", icon: "🏠", path: "/admin" },
    { label: "Categories", icon: "📂", path: "/admin/categories" },
    { label: "Experts", icon: "👤", path: "/admin/experts" },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3">
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => router.push(tab.path)}
          className={`flex flex-col items-center text-sm 
            ${pathname === tab.path ? "text-blue-600" : "text-gray-500"}`}
        >
          <span className="text-xl">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
