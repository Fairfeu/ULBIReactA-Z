import { useMemo, useState } from "react";
import "./App.css";
import PostList from "./PostList";
import PostForm from "./PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "aa",
      body: "as",
    },
    {
      id: 2,
      title: "rr",
      body: "sq",
    },
    {
      id: 3,
      title: "dd",
      body: "qwer",
    },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <hr style={{ margin: "15px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        title={"posts about JS"}
        remove={removePost}
        posts={sortedAndSearchedPosts}
      ></PostList>
    </div>
  );
}

export default App;
