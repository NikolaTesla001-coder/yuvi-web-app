"use client";

export default function PostCard({ post, onOpen }) {
  return (
    <div
      onClick={() => onOpen(post)}
      className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-semibold">{post.title || "Untitled"}</h3>
        <span className="text-xs text-gray-500">{post.category || "Uncategorized"}</span>
      </div>

      <p className="text-xs text-gray-600 mt-2 line-clamp-3">{post.query}</p>

      <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
        <span>{post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : ""}</span>
        <span>{post.answersCount ? `${post.answersCount} answers` : ""}</span>
      </div>
    </div>
  );
}
