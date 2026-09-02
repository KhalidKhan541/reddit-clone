"use client";
import { useState } from "react";

interface PostData {
  id: string;
  title: string;
  content?: string;
  image?: string;
  author: string;
  subreddit: string;
  upvotes: number;
  commentCount: number;
  timeAgo: string;
}

export function PostCard({ post }: { post: PostData }) {
  const [votes, setVotes] = useState(post.upvotes);
  const [userVote, setUserVote] = useState<1 | -1 | 0>(0);

  const handleVote = (dir: 1 | -1) => {
    if (userVote === dir) {
      setVotes(votes - dir);
      setUserVote(0);
    } else {
      setVotes(votes - userVote + dir);
      setUserVote(dir);
    }
  };

  return (
    <div className="bg-white border rounded hover:border-gray-400 flex mb-2">
      <div className="bg-gray-50 w-10 flex flex-col items-center py-2 gap-1 rounded-l">
        <button onClick={() => handleVote(1)} className={`text-lg hover:bg-gray-200 rounded p-1 ${userVote === 1 ? "text-orange-500" : "text-gray-500"}`}>?</button>
        <span className="text-xs font-bold">{votes}</span>
        <button onClick={() => handleVote(-1)} className={`text-lg hover:bg-gray-200 rounded p-1 ${userVote === -1 ? "text-blue-500" : "text-gray-500"}`}>?</button>
      </div>
      <div className="flex-1 p-2">
        <div className="text-xs text-gray-500 mb-1">
          r/{post.subreddit} · Posted by u/{post.author} · {post.timeAgo}
        </div>
        <h3 className="font-medium text-lg">{post.title}</h3>
        {post.content && <p className="text-sm text-gray-700 mt-1">{post.content}</p>}
        {post.image && <img src={post.image} alt="" className="mt-2 rounded max-h-96" />}
        <div className="flex gap-4 mt-2 text-sm text-gray-500">
          <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">?? {post.commentCount} Comments</button>
          <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">? Share</button>
          <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">? Save</button>
          <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">•••</button>
        </div>
      </div>
    </div>
  );
}
