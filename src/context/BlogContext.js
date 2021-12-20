import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    // case "get_blogpost":
    //   return state.filter((blogPost) => blogPost.id === action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    callback();
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    // In our components we are actually running this returned function, so if we want to pass payload to the action, we have to accept it here
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
// const getBlogPost = (dispatch) => {
//   return (id) => {
//     dispatch({ type: "get_blogpost", payload: id });
//   };
// };

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
