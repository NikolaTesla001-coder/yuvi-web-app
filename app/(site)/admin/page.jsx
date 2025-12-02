'use client';

import { useRouter } from 'next/navigation';
import NavBar from './components/NavBar';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-white mb-6">Home</h2>
        <button 
          onClick={() => router.push('/posts')}
          className="w-full bg-slate-800 hover:bg-slate-700 text-orange-500 py-4 px-6 rounded-lg border border-slate-700 transition-colors"
        >
          All Posts
        </button>
        <button 
          onClick={() => router.push('/add-post')}
          className="w-full bg-slate-800 hover:bg-slate-700 text-orange-500 py-4 px-6 rounded-lg border border-slate-700 transition-colors"
        >
          Add Post
        </button>
        <button 
          onClick={() => router.push('/categories')}
          className="w-full bg-slate-800 hover:bg-slate-700 text-orange-500 py-4 px-6 rounded-lg border border-slate-700 transition-colors"
        >
          Modify Categories
        </button>
        <button 
          onClick={() => router.push('/experts')}
          className="w-full bg-slate-800 hover:bg-slate-700 text-orange-500 py-4 px-6 rounded-lg border border-slate-700 transition-colors"
        >
          Modify Experts
        </button>
      </div>
      <NavBar />
    </>
  );
}
