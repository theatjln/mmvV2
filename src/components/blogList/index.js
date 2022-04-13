import BlogCard from "../blogCard";

export default function BlogList({ blogs }) {
  return (
    <>
      {blogs.map((blog, index) => {
        return <BlogCard key={blog.sys.id} blog={blog.fields} />;
      })}
    </>
  );
}
