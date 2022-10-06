import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  // onClickHanlder = () => {
  //   this.fetchData();
  // };

  componentDidMount(){
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

 

  render() {
    return (
      <div>
        <h1>All Posts</h1>
        {/* <button onClick={this.onClickHanlder}>Get Data</button> */}
       {
        this.state.posts.length > 0 ? (
          <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((item) => (
              <Post key={ item.id } data={item} />
            ))}
          </tbody>
        </table>
        ) : (
          <h2>No Data Found</h2>
        )
       }
      </div>
    );
  }
}
export default Posts;
