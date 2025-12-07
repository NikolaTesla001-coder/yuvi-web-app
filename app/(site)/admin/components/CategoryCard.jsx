"use client";

export default function CategoryCard({ category, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
      <div>
        <h4 className="text-sm font-semibold">{category.name}</h4>
        {category.desc && <p className="text-xs text-gray-500 mt-1">{category.desc}</p>}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(category)}
          className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-sm hover:opacity-90"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(category)}
          className="px-3 py-1 rounded-md bg-red-50 text-red-600 text-sm hover:opacity-90"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
