import './reset.css';
import './css/App.css';

import { useEffect, useState } from 'react';

import { PostDetail } from './PostDetail';
import { PostList } from './PostList';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number>();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const data = (await response.json()) as Post[];
        setPosts(data);
        setSelectedPostId(data[0]?.id);
      } catch (error) {
        console.error('Error while fetching posts:', error);
      }
    };

    void fetchPosts();
  }, []);

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="app-container">
      <div className="post-list-container">
        <PostList
          posts={posts}
          onPostClick={handlePostClick}
          selectedPostId={selectedPostId}
        />
      </div>
      <div className="post-detail-container">
        {selectedPostId != null && <PostDetail postId={selectedPostId} />}
      </div>
    </div>
  );
};
