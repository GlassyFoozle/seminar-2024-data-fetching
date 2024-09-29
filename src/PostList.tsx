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
      <ol>
        {posts.map((post) => (
          <li
            key={post.id}
            onClick={() => {
              onPostClick(post.id);
            }}
            style={{
              cursor: 'pointer',
              fontWeight: post.id === selectedPostId ? 'bold' : 'normal',
              backgroundColor:
                post.id === selectedPostId ? '#f0f0f0' : 'transparent',
              padding: '10px',
              borderBottom: '1px solid #ccc',
            }}
          >
            {post.title}
          </li>
        ))}
      </ol>
    </div>
  );
};
