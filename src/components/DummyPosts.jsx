import { useEffect, useState } from "react";

const DUMMY_POSTS = [
  {
  },
];

function DummyPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const fetchDummyData = () => {
      setLoading(true);
      setError("");

      setTimeout(() => {
        if (ignore) return;

        try {
          // Simulasi data dummy berhasil diambil (bisa diganti fetch() API publik jika mau)
          setPosts(DUMMY_POSTS);
          setLoading(false);
        } catch {
          setError("Gagal memuat data dummy.");
          setLoading(false);
        }
      }, 800);
    };

    fetchDummyData();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return (
      <section>
        <h2>Fetch Data Dummy</h2>
        <p>Memuat data...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2>Fetch Data Dummy</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Fetch Data Dummy</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DummyPosts;