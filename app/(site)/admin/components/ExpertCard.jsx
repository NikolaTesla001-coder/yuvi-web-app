"use client";

export default function ExpertCard({ expert, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-start justify-between gap-4">
      <div>
        <h4 className="text-sm font-semibold">{expert.name}</h4>
        {expert.tags && (
          <p className="text-xs text-gray-500 mt-1">{expert.tags.join(" • ")}</p>
        )}
        {expert.bio && <p className="text-xs text-gray-400 mt-2">{expert.bio}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => onEdit(expert)}
          className="px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(expert)}
          className="px-3 py-1 rounded-md bg-red-50 text-red-600 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
