import { Header } from "./components/Header";
import { Post } from "./components/Post";
import type { PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: "Hallan Christian",
      avatarUrl: "https://github.com/hallancma.png",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala 2 galeraa 👋," },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉🏻 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-08-15 05:07:00"),
  },
  {
    id: 2,
    author: {
      name: "Mayk Brito",
      avatarUrl: "https://github.com/maykbrito.png",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋," },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉🏻 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-08-10 08:07:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
