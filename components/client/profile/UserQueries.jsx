"use client";
import { Trash2, MessageSquareText, Clock } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function UserQueries({ queries = [] }) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleDelete = async (queryId) => {
    if (loading) return;
    const confirm = window.confirm(
      "Are you sure you want to delete this question?"
    );
    if (!confirm) return;
    try {
      setLoading(true);
      await axios.delete(
        `/api/client/queries/${queryId}?clientId=${session?.user?.id}&queryId=${queryId}`
      );

      window.location.reload();
    } catch (error) {
      console.error("Error deleting query:", error);
      alert("Failed to delete the question. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="mb-6">
      {/* Header */}
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span>📋</span>
        <span>Your Questions</span>

        <span className="ml-auto bg-[#2a2a3e] text-[#c4c4d4] px-2 py-0.5 rounded text-xs">
          {queries.length}
        </span>
      </h2>

      {queries.length > 0 ? (
        <div className="space-y-4">
          {queries.map((query, idx) => (
            <div
              key={idx}
              className="group bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl p-5
                        transition-all duration-300 shadow-lg shadow-black/20
                        hover:shadow-xl hover:shadow-black/30 hover:border-[#00d4ff]/50"
            >
              {/* Title */}
              <h3 className="text-white font-semibold text-base leading-snug group-hover:text-[#00d4ff] transition-colors line-clamp-2">
                {query.questionTitle}
              </h3>

              {/* Meta Row */}
              <div className="flex items-center gap-4 text-xs text-[#a0a0b0] mt-3">
                <div className="flex items-center gap-1">
                  <MessageSquareText size={14} className="text-[#00d4ff]" />
                  {query.answers.length} answers
                </div>

                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-[#ff66c4]" />
                  {new Date(query.createdAt).toLocaleDateString()}
                </div>
              </div>

              {/* Body */}
              <p className="text-[#b1b1c5] text-sm mt-3 leading-relaxed line-clamp-3">
                {query.questionBody}
              </p>

              {/* Footer */}
              <div className="flex justify-end mt-4">
                <button
                  className="flex items-center gap-1 text-red-400 text-xs font-medium
                             px-3 py-1.5 rounded-lg border border-red-500/30
                             hover:bg-red-500/10 hover:border-red-500/60 
                             transition-all duration-300"
                  onClick={() => handleDelete(query.queryId)}
                  disabled={loading}
                >
                  <Trash2 size={12} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl">
          <p className="text-[#a0a0b0]">No questions yet</p>
        </div>
      )}
    </div>
  );
}
