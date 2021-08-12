import Link from "next/link";
import { usePostsByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const {
    data,
    error,
    isLoading, 
    isEmpty,
  } = usePostsByUserId(props.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isEmpty) {
    return <p>No comments found.</p>;
  }

  return (
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/comments/${post.id}`}>
              <a>{`${post.body}`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
