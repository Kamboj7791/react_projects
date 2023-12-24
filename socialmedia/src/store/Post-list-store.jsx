import { createContext, useReducer } from "react";

const Postlists = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  return currentPostList;
};
const Postlistsprovider = ({ children }) => {
  const [postlist, dispatchpostlist] = useReducer(postListReducer, []);
  const addPost = () => {};
  const deletePost = () => {};
  return (
    <Postlists.Provider
      value={{
        postlist,
        addPost,
        deletePost,
      }}>
      {children}{" "}
    </Postlists.Provider>
  );
};
export default Postlistsprovider;
