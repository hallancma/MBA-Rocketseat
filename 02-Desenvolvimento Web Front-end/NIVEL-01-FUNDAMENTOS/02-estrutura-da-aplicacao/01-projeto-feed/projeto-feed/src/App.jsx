// JSX - Javascript + XML
import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post author="Hallan Christian" content="lorem ipsum" />
      <Post author="Jonatas" content="Um novo Post muito legal" />
    </div>
  );
}
