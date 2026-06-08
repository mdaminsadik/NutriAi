

import { useState } from "react";
import { FiUsers, FiThumbsUp } from "react-icons/fi";

const HealthCommunity = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: "Alice", content: "Started a 10k steps challenge today! 🏃‍♀️", likes: 12 },
    { id: 2, author: "Bob", content: "Made a healthy smoothie with spinach and banana 🍌🥬", likes: 8 },
    { id: 3, author: "Clara", content: "Meditation session in the morning keeps me energized 🌞🧘‍♀️", likes: 15 },
  ]);

  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (!newPost.trim()) return;
    setPosts([{ id: Date.now(), author: "You", content: newPost, likes: 0 }, ...posts]);
    setNewPost("");
  };

  const likePost = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-extrabold text-green-700">
            Health Community
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 text-lg">
            Connect with like-minded people, share healthy habits, inspire others,
            and grow together on your wellness journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Create Post */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Share an update
            </h2>
            <textarea
              rows={4}
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-green-400 resize-none"
              placeholder="What healthy habit are you working on?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <button
              onClick={addPost}
              className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Post to Community
            </button>
          </div>
        </div>

        {/* Feed */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <FiUsers className="text-green-600" />
                </div>
                <span className="font-semibold text-gray-800">
                  {post.author}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {post.content}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={() => likePost(post.id)}
                  className="flex items-center gap-1 text-green-600 font-medium hover:text-green-700"
                >
                  <FiThumbsUp /> {post.likes}
                </button>
                <span className="text-sm text-gray-400">
                  Comments coming soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Badge */}
      <div className="text-center py-6 text-gray-500 text-sm">
        🌱 Building healthy habits together — NutriAI Community
      </div>
    </div>
  );
};

export default HealthCommunity;
