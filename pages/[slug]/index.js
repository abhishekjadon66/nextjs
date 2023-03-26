import { useRouter } from "next/router";

function BlogDetails() {
  const router = useRouter();
  console.log(router.query);
  return <h1>The page blog details</h1>;
}

export default BlogDetails;