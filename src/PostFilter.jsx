import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  if (!postMessage.length) {
    return <h1 style={{ textAlign: "center" }}>Posts not found</h1>;
  }

  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="search..."
      ></MyInput>

      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorting"
        options={[
          { value: "title", name: "Name" },
          { value: "body", name: "Description" },
        ]}
      />
    </div>
  );
};
export default PostFilter;
