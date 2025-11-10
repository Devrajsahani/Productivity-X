import { useState } from "react";

export default function Github() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchGithubProfile = async () => {
    try {
      setError("");
      setData(null);

      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error("User not found");
      }

      const profile = await res.json();
      setData(profile);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow">
    <h2 className="text-3xl font-bold mb-6">GitHub Profile Analyzer</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="flex-1 px-3 py-2 rounded bg-gray-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={fetchGithubProfile}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {data && (
        <div className="bg-gray-600 p-4 rounded shadow">
          <img
            src={data.avatar_url}
            alt="avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-center">{data.name}</h3>
          <p className="text-center text-white mb-2">@{data.login}</p>

          <div className="flex justify-around mt-4">
            <div>
              <p className="font-bold">{data.followers}</p>
              <p className="text-sm text-white">Followers</p>
            </div>
            <div>
              <p className="font-bold">{data.public_repos}</p>
              <p className="text-sm text-white">Repos</p>
            </div>
            <div>
              <p className="font-bold">{data.following}</p>
              <p className="text-sm text-white">Following</p>
            </div>
          </div>

          <a
            href={data.html_url}
            target="_blank"
            className="block mt-5 text-red-500 underline text-center"
          >
            View Profile on GitHub
          </a>
        </div>
      )}
    </div>
  );
}
