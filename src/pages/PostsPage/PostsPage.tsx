import React from 'react';

import { useGetPostsQuery } from '../../services/posts.ts';

const PostsPage: React.FC = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  if (isError) return <h1>Error!</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Posts</h1>
      {posts && posts.map(({ title }) => <p>{title}</p>)}
    </>
  );
};

export default PostsPage;
