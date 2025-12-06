'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QueryForm from '@/components/client/create-query/QueryForm';
import axios from 'axios';
import { useSession } from 'next-auth/react';

export default function CreateQueryPage() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log('Submitting query:', formData);

      const body = {
        questionTitle: formData.title,
        questionBody: formData.description,
        categoryId: formData.category,
        clientId: session.user.id
      }
      
      // Simulate API call
      await axios.post('/api/client/queries', body);
      
      // Show success message
      alert('Question posted successfully!');
      router.push('/client/home');
    } catch (error) {
      console.error('Error posting question:', error);
      alert('Failed to post question. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fadeIn max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#ff006e] bg-clip-text text-transparent">
            Ask a Question
          </span>
        </h1>
        <p className="text-[#a0a0b0] text-sm sm:text-base">
          Get answers from experienced experts in our community
        </p>
      </div>

      <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl p-6 sm:p-8">
        <QueryForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}
