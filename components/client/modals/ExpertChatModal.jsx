'use client';
import ExpertDetailPage from './ExpertDetailPage';

export default function ExpertChatModal({ expert, onClose }) {
  return <ExpertDetailPage expert={expert} onClose={onClose} />;
}
