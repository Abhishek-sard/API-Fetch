import React from 'react';
import useFetch from 'react-fetch-hook';
function Hook() {
  const { isLoading, data, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Posts</h1>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Hook;