'use client';
import React,{useState,useEffect} from 'react';
import ProfileHeader from '@/components/client/profile/ProfileHeader';
import UserQueries from '@/components/client/profile/UserQueries';
import ProfileActions from '@/components/client/profile/ProfileActions';
import axios from 'axios';
import { useSession } from 'next-auth/react';

export default function ProfilePage() {
  const [queries, setQueries] = useState([]);
  const { data: session } = useSession(); 

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get('/api/client/queries');
        const userresponses = response.data.filter(query => query.clientId === session?.user?.id);
        setQueries(userresponses);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }   
    }
    fetchQueries();
  }, []);

  return (
    <div className="animate-fadeIn max-w-2xl">
      <ProfileHeader />
      <UserQueries queries={queries} />
      <ProfileActions />
    </div>
  );
}
