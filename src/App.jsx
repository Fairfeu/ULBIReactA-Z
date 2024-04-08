import { useMemo, useState } from "react";
import "./App.css";
import PostList from "./PostList";
import PostForm from "./PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
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

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log(123);
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <hr style={{ margin: "15px 0" }} />

      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search..."
        ></MyInput>

        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting"
          options={[
            { value: "title", name: "Name" },
            { value: "body", name: "Description" },
          ]}
        />
      </div>

      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={sortedPosts}></PostList>
      ) : (
        <h1 style={{ textAlign: "center" }}>There are no posts yet</h1>
      )}
    </div>
  );
}

export default App;
