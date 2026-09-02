"use client";
import { useState } from "react";

export function CreatePost({ onPost }: { onPost: (title: string, content: string) => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showForm, setShowForm] = useState(false);

  if (!showForm) {
    return (
      <div className="bg-white border rounded p-2 mb-4 flex items-center gap-2">
        <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center">K</div>
        <input
          type="text"
          placeholder="Create Post"
          onClick={() => setShowForm(true)}
          className="flex-1 border rounded px-3 py-2 hover:border-blue-500 focus:border-blue-500 focus:outline-none"
          readOnly
        />
        <button className="p-2 hover:bg-gray-100 rounded">??</button>
        <button className="p-2 hover:bg-gray-100 rounded">??</button>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">Create a post</h3>
        <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">?</button>
      </div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-2"
      />
      <textarea
        placeholder="Text (optional)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border rounded px-3 py-2 resize-none"
        rows={4}
      />
      <div className="flex justify-end gap-2 mt-2">
        <button onClick={() => setShowForm(false)} className="px-4 py-1 border rounded text-sm">Cancel</button>
        <button
          onClick={() => { onPost(title, content); setTitle(""); setContent(""); setShowForm(false); }}
          disabled={!title.trim()}
          className="px-4 py-1 bg-blue-500 text-white rounded text-sm disabled:bg-gray-300"
        >
          Post
        </button>
      </div>
    </div>
  );
}
