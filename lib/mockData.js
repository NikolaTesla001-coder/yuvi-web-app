export const expertProfile = {
  id: 'expert1',
  name: 'Alex Johnson',
  email: 'alex.j@expert.com',
  avatar: 'A',
  stats: {
    queries: 15,
    answers: 124,
    rating: 4.9,
  },
  answeredQueries: [
    { id: 'q1', title: 'How to optimize React performance with useMemo?', answers: 2 },
    { id: 'q2', title: 'Best practices for Next.js API routes security?', answers: 3 },
    { id: 'q3', title: 'Understanding CSS Grid Layout', answers: 1 },
  ],
};

export const mockQueries = [
  {
    id: '1',
    title: 'How to optimize React performance with useMemo?',
    category: 'React',
    description: 'I have a large list rendering slowly. Need optimization tips for React components.',
    clientName: 'Arjun Sharma',
    clientAvatar: 'A',
    createdAt: '2025-11-28',
    status: 'pending', 
  },
  {
    id: '2',
    title: 'Implementing secure serverless authentication with AWS Lambda?',
    category: 'AWS',
    description: 'Looking for a robust, scalable way to handle user authentication in a serverless environment.',
    clientName: 'Priya Patel',
    clientAvatar: 'P',
    createdAt: '2025-11-27',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Tailwind CSS vs utility-first alternatives: which is better?',
    category: 'CSS',
    description: 'Evaluating different modern CSS frameworks for performance and maintainability.',
    clientName: 'Vikram Singh',
    clientAvatar: 'V',
    createdAt: '2025-11-26',
    status: 'answered',
  },
];

export const mockChatClients = [
  {
    id: '1',
    name: 'Sarah Dev',
    avatar: 'S',
    lastMessage: 'Thanks for the detailed response on useMemo!',
    timestamp: '2m ago',
    unread: true,
    context: 'React Query Optimization',
  },
  {
    id: '2',
    name: 'Raj Kumar',
    avatar: 'R',
    lastMessage: 'I understand the security risks now, thanks.',
    timestamp: '1h ago',
    unread: false,
    context: 'Next.js API Security',
  },
  {
    id: '3',
    name: 'Emily Chen',
    avatar: 'E',
    lastMessage: 'The Python solution worked perfectly!',
    timestamp: '3h ago',
    unread: true,
    context: 'Django ORM Issue',
  },
  
];


export const mockExperts = [
  {
    id: '1',
    name: 'Sarah Dev',
    category: 'React',
    rating: 4.9,
    answers: 124,
    verified: true,
    bio: 'Senior React Developer with 8+ years of experience',
    avatar: 'S',
  },
  {
    id: '2',
    name: 'Raj Kumar',
    category: 'Next.js',
    rating: 4.8,
    answers: 98,
    verified: true,
    bio: 'Full Stack Developer specializing in Next.js',
    avatar: 'R',
  },
  {
    id: '3',
    name: 'Priya Singh',
    category: 'JavaScript',
    rating: 4.7,
    answers: 87,
    verified: false,
    bio: 'JavaScript Expert and Open Source Contributor',
    avatar: 'P',
  },
  {
    id: '4',
    name: 'Amit Patel',
    category: 'Python',
    rating: 4.6,
    answers: 76,
    verified: true,
    bio: 'Python Backend Developer',
    avatar: 'A',
  },
];

export const mockMessages = [
  {
    id: '1',
    expertName: 'Sarah Dev',
    expertId: '1',
    category: 'React',
    lastMessage: 'Thanks for the question! You can use React.memo to...',
    timestamp: '2m ago',
    unread: true,
    verified: true,
  },
  {
    id: '2',
    expertName: 'Raj Kumar',
    expertId: '2',
    category: 'Next.js',
    lastMessage: 'I can help with that. Let me check the documentation...',
    timestamp: '1h ago',
    unread: false,
    verified: true,
  },
  {
    id: '3',
    expertName: 'Priya Singh',
    expertId: '3',
    category: 'JavaScript',
    lastMessage: 'Sure! When are you available for a detailed discussion?',
    timestamp: '3h ago',
    unread: false,
    verified: false,
  },
];
