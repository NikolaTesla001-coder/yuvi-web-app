"use client";

import { useState, useEffect } from "react";
import BottomNav from "./components/BottomNav";
import BottomSheet from "./components/BottomSheet";
import PostCard from "./components/PostCard";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState([]);
  const [openSheet, setOpenSheet] = useState(false);
  const [editing, setEditing] = useState(null);

  // Mock load
  useEffect(() => {
    // replace this with real fetch
    setPosts([
      { id: "1", title: "Payment not reflecting", category: "Payments", query: "I paid but didn't get confirmation", updatedAt: Date.now(), answersCount: 1 },
      { id: "2", title: "How to reset password?", category: "Account", query: "I forgot my password", updatedAt: Date.now(), answersCount: 0 },
    ]);
  }, []);

  function openNew() {
    setEditing(null);
    setOpenSheet(true);
  }

  function openEdit(post) {
    setEditing(post);
    setOpenSheet(true);
  }

  function savePost(data) {
    // TODO: replace with API POST/PUT
    if (editing) {
      setPosts((prev) => prev.map(p => p.id === editing.id ? { ...p, ...data } : p));
    } else {
      setPosts((prev) => [{ id: Date.now().toString(), ...data }, ...prev]);
    }
    setOpenSheet(false);
  }

  return (
    <div className="min-h-screen pb-24 bg-gray-50">
      <div className="max-w-3xl mx-auto p-4 space-y-4">
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-bold">All Posts</h1>
          <button
            onClick={openNew}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          >
            + Add Post
          </button>
        </header>

        <div className="grid gap-4">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} onOpen={openEdit} />
          ))}
        </div>
      </div>

      <BottomNav />

      <BottomSheet
        open={openSheet}
        onClose={() => setOpenSheet(false)}
        height={editing ? "85vh" : "75vh"}
      >
        <PostForm initial={editing} onCancel={() => setOpenSheet(false)} onSave={savePost} />
      </BottomSheet>
    </div>
  );
}

/* Inline PostForm to keep files minimal — move to separate file if preferred */
function PostForm({ initial, onCancel, onSave }) {
  const [title, setTitle] = useState(initial?.title || "");
  const [category, setCategory] = useState(initial?.category || "");
  const [query, setQuery] = useState(initial?.query || "");
  const [answer, setAnswer] = useState(initial?.answer || "");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{initial ? "Edit Post" : "Add Post"}</h3>
        <button onClick={onCancel} className="text-sm text-gray-500">Close</button>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded-md px-3 py-2" placeholder="Post title" />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium">Category</label>
        {/* Replace with real categories dropdown */}
        <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border rounded-md px-3 py-2" placeholder="Category" />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium">Query</label>
        <textarea value={query} onChange={(e) => setQuery(e.target.value)} className="w-full border rounded-md px-3 py-2 h-28" />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium">Answer</label>
        <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} className="w-full border rounded-md px-3 py-2 h-28" />
      </div>

      <div className="flex justify-end gap-2">
        <button onClick={onCancel} className="px-4 py-2 rounded-md bg-gray-100">Cancel</button>
        <button onClick={() => onSave({ title, category, query, answer })} className="px-4 py-2 rounded-md bg-blue-600 text-white">Save</button>
      </div>
    </div>
  );
}
