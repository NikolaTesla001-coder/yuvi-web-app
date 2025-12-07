"use client";

import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import BottomSheet from "../components/BottomSheet";
import ExpertCard from "../components/ExpertCard";

export default function ExpertsPage() {
  const [experts, setExperts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    setExperts([
      { id: "e1", name: "Alice Kumar", tags: ["Payments", "KYC"], bio: "Payments specialist" },
      { id: "e2", name: "Rahul Singh", tags: ["Account"], bio: "Account support" },
    ]);
  }, []);

  function openAdd() {
    setEditing(null);
    setOpen(true);
  }
  function openEdit(ex) {
    setEditing(ex);
    setOpen(true);
  }
  function remove(ex) {
    if (!confirm(`Delete expert "${ex.name}"?`)) return;
    setExperts((prev) => prev.filter((e) => e.id !== ex.id));
  }
  function save(data) {
    if (editing) {
      setExperts((prev) => prev.map(e => e.id === editing.id ? { ...e, ...data } : e));
    } else {
      setExperts((prev) => [{ id: Date.now().toString(), ...data }, ...prev]);
    }
    setOpen(false);
  }

  return (
    <div className="min-h-screen pb-24 bg-gray-50">
      <div className="max-w-3xl mx-auto p-4 space-y-4">
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Experts</h1>
          <button onClick={openAdd} className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow">+ Add</button>
        </header>

        <div className="grid gap-3">
          {experts.map((e) => (
            <ExpertCard key={e.id} expert={e} onEdit={openEdit} onDelete={remove} />
          ))}
        </div>
      </div>

      <BottomNav />

      <BottomSheet open={open} onClose={() => setOpen(false)} height={"50vh"}>
        <ExpertForm initial={editing} onCancel={() => setOpen(false)} onSave={save} />
      </BottomSheet>
    </div>
  );
}

function ExpertForm({ initial, onCancel, onSave }) {
  const [name, setName] = useState(initial?.name || "");
  const [tags, setTags] = useState((initial?.tags || []).join(", "));
  const [bio, setBio] = useState(initial?.bio || "");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{initial ? "Edit Expert" : "Add Expert"}</h3>
        <button onClick={onCancel} className="text-sm text-gray-500">Close</button>
      </div>

      <div>
        <label className="text-xs font-medium">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md px-3 py-2 mt-1" />
      </div>

      <div>
        <label className="text-xs font-medium">Tags (comma separated)</label>
        <input value={tags} onChange={(e) => setTags(e.target.value)} className="w-full border rounded-md px-3 py-2 mt-1" />
      </div>

      <div>
        <label className="text-xs font-medium">Bio (optional)</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="w-full border rounded-md px-3 py-2 mt-1 h-24" />
      </div>

      <div className="flex justify-end gap-2">
        <button onClick={onCancel} className="px-4 py-2 rounded-md bg-gray-100">Cancel</button>
        <button onClick={() => onSave({ name, tags: tags.split(",").map(t => t.trim()).filter(Boolean), bio })} className="px-4 py-2 rounded-md bg-blue-600 text-white">Save</button>
      </div>
    </div>
  );
}
