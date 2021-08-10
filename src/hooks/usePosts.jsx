import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

// useSWRを用いたカスタムフック→条件式に変数を入れることで明確に
// コンポーネント間で使い回すときにも便利
export const usePosts = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};
