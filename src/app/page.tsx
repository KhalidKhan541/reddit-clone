"use client";
import { PostCard } from "@/components/PostCard";
import { CreatePost } from "@/components/CreatePost";
import { useState } from "react";

const subreddits = [
  { name: "programming", members: "5.2M", description: "Computer Programming" },
  { name: "javascript", members: "2.1M", description: "All about JavaScript" },
  { name: "webdev", members: "1.8M", description: "Web Development" },
];

const initialPosts = [
  { id: "1", title: "I built a full-stack app in a weekend using Next.js and Prisma", content: "Here is what I learned from the experience...", author: "techdev123", subreddit: "webdev", upvotes: 342, commentCount: 67, timeAgo: "5h" },
  { id: "2", title: "TypeScript 5.4 is out with some great new features", content: "The latest release includes NoInfer utility type, improved type narrowing, and more...", author: "typescriptfan", subreddit: "javascript", upvotes: 521, commentCount: 89, timeAgo: "8h" },
  { id: "3", title: "Why every developer should learn SQL in 2024", image: "https://via.placeholder.com/600x300/333/fff?text=SQL+Learning", author: "databasemaster", subreddit: "programming", upvotes: 234, commentCount: 45, timeAgo: "12h" },
  { id: "4", title: "Just mass deleted 50k lines of code and the app still works", content: "Sometimes less is more. The codebase is now so much cleaner.", author: "refactorqueen", subreddit: "programming", upvotes: 891, commentCount: 156, timeAgo: "1d" },
];

export default function Home() {
  const [posts, setPosts] = useState(initialPosts);
  const [sortBy, setSortBy] = useState<"hot" | "new" | "top">("hot");

  const handlePost = (title: string, content: string) => {
    const newPost = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      author: "kevinabdulrahman",
      subreddit: "programming",
      upvotes: 1,
      commentCount: 0,
      timeAgo: "now",
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 flex items-center h-12 gap-4">
          <span className="text-2xl font-bold text-orange-500">reddit</span>
          <input type="text" placeholder="Search Reddit" className="bg-gray-100 rounded px-4 py-1 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="flex-1" />
          <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">Log In</button>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto px-4 py-4 flex gap-4">
        <div className="flex-1">
          <div className="bg-white border rounded mb-4 p-2 flex gap-2">
            {(["hot", "new", "top"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSortBy(tab)}
                className={`px-3 py-1 rounded text-sm ${sortBy === tab ? "bg-gray-200 font-bold" : "hover:bg-gray-100"}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <CreatePost onPost={handlePost} />
          {posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
        <div className="w-80">
          <div className="bg-white border rounded">
            <div className="bg-blue-500 h-20 rounded-t" />
            <div className="p-3">
              <h3 className="font-bold">Home</h3>
              <p className="text-sm text-gray-600 mt-1">Your personal Reddit frontpage. Come here to check in with your favorite communities.</p>
              <button className="w-full bg-blue-500 text-white py-1 rounded mt-3 font-bold text-sm">Create Post</button>
              <button className="w-full border border-blue-500 text-blue-500 py-1 rounded mt-2 font-bold text-sm">Create Community</button>
            </div>
          </div>
          <div className="bg-white border rounded mt-4 p-3">
            <h3 className="font-bold mb-2">Top Communities</h3>
            {subreddits.map((sub, i) => (
              <div key={sub.name} className="flex items-center gap-2 py-2 hover:bg-gray-50 cursor-pointer">
                <span className="text-gray-500 text-sm w-4">{i + 1}</span>
                <div className="h-8 w-8 rounded-full bg-gray-300" />
                <div>
                  <p className="text-sm font-medium">r/{sub.name}</p>
                  <p className="text-xs text-gray-500">{sub.members} members</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
