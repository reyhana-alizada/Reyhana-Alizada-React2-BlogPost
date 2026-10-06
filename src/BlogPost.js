import blogImage from "./assets/blog-image.jpg";
import "./BlogPost.css";

function BlogPost() {
  return (
    <div className="blog-post">
      <img
        src={blogImage}
        alt="React Components"
      />

      <h2>Learn React Components</h2>

      <p>By Reyhana Alizada • Sep 22, 2026</p>

      <p>
        Learn the basics of React components and JSX and start building
        modern web applications.
      </p>

      <button>Read More</button>
    </div>
  );
}

export default BlogPost;