"use client";

import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import BottomSheet from "../components/BottomSheet";
import CategoryCard from "../components/CategoryCard";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    // mock data, replace with fetch
    setCategories([
      { id: "c1", name: "Payments", desc: "Payment & billing related" },
      { id: "c2", name: "Account", desc: "Account and settings" },
    ]);
  }, []);

  function openAdd() {
    setEditing(null);
    setOpen(true);
  }
  function openEdit(cat) {
    setEditing(cat);
    setOpen(true);
  }
  function remove(cat) {
    if (!confirm(`Delete category "${cat.name}"?`)) return;
    setCategories((prev) => prev.filter((c) => c.id !== cat.id));
    // TODO call delete API
  }
  function save(data) {
    if (editing) {
      setCategories((prev) => prev.map(c => c.id === editing.id ? { ...c, ...data } : c));
    } else {
      setCategories((prev) => [{ id: Date.now().toString(), ...data }, ...prev]);
    }
    setOpen(false);
  }

  return (
    <div className="min-h-screen pb-24 bg-gray-50">
      <div className="max-w-3xl mx-auto p-4 space-y-4">
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Categories</h1>
          <button onClick={openAdd} className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow">+ Add</button>
        </header>

        <div className="grid gap-3">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} onEdit={openEdit} onDelete={remove} />
          ))}
        </div>
      </div>

      <BottomNav />

      <BottomSheet open={open} onClose={() => setOpen(false)} height={"45vh"}>
        <CategoryForm initial={editing} onCancel={() => setOpen(false)} onSave={save} />
      </BottomSheet>
    </div>
  );
}

function CategoryForm({ initial, onCancel, onSave }) {
  const [name, setName] = useState(initial?.name || "");
  const [desc, setDesc] = useState(initial?.desc || "");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{initial ? "Edit Category" : "Add Category"}</h3>
        <button onClick={onCancel} className="text-sm text-gray-500">Close</button>
      </div>

      <div>
        <label className="text-xs font-medium">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-md px-3 py-2 mt-1" />
      </div>

      <div>
        <label className="text-xs font-medium">Description (optional)</label>
        <input value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full border rounded-md px-3 py-2 mt-1" />
      </div>

      <div className="flex justify-end gap-2">
        <button onClick={onCancel} className="px-4 py-2 rounded-md bg-gray-100">Cancel</button>
        <button onClick={() => onSave({ name, desc })} className="px-4 py-2 rounded-md bg-blue-600 text-white">Save</button>
      </div>
    </div>
  );
}
