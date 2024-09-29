import './css/PostList.css';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostListProps = {
  posts: Post[];
  onPostClick: (postId: number) => void;
  selectedPostId: number | undefined;
};

export const PostList = ({
  posts,
  onPostClick,
  selectedPostId,
}: PostListProps) => {
  return (
    <div>
      <h2>포스트 목록</h2>
      <ol className="post-list">
        {posts.map((post) => (
          <li
            key={post.id}
            onClick={() => {
              onPostClick(post.id);
            }}
            className={post.id === selectedPostId ? 'selected' : ''}
          >
            {post.title}
          </li>
        ))}
      </ol>
    </div>
  );
};
