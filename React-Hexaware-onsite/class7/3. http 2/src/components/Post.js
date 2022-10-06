import React from "react";

const Post = (props) => {
  const { title, body } = props.data;
  return (
    <tr>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
};
export default Post;
