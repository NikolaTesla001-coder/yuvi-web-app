'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchBar from '@/components/client/home/SearchBar';
import QueriesList from '@/components/client/home/QueriesList';
import { mockQueries } from '@/lib/mockData';
import QueryDetailModal from '@/components/client/modals/QueryDetailModal';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(null);
  const router = useRouter();

  const filteredQueries = mockQueries.filter(
    (q) =>
      q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fadeIn">
      <SearchBar onSearch={setSearchTerm} />

      <div className="mb-6">
        <button
          onClick={() => router.push('/client/create-query')}
          className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-[#00d4ff] to-[#ff006e] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/20 transition duration-300 text-sm sm:text-base flex items-center justify-center gap-2 group"
        >
          <span className="text-lg group-hover:scale-110 transition duration-300">✏️</span>
          <span>Ask a Question</span>
        </button>
      </div>

      <QueriesList queries={filteredQueries} onQuerySelect={setSelectedQuery} />

      {selectedQuery && (
        <QueryDetailModal query={selectedQuery} onClose={() => setSelectedQuery(null)} />
      )}
    </div>
  );
}
