import { useEffect, useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Comment = {
  postId: number;
  id: number;
  email: string;
  body: string;
};

export const PostDetail = ({ postId }: { postId: number }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
        );
        const postData = (await postResponse.json()) as Post;
        setPost(postData);

        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        );
        const commentsData = (await commentsResponse.json()) as Comment[];
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching post or comments:', error);
      }
    };

    void fetchPostAndComments();
  }, [postId]);

  return (
    <div>
      {post != null ? (
        <>
          <h2>내용</h2>
          <p>{post.body}</p>
          <h2>댓글</h2>
          {comments.map((comment) => (
            <div key={comment.id} style={{ marginBottom: '10px' }}>
              <strong>작성자 : {comment.email}</strong>
              <p>{comment.body}</p>
            </div>
          ))}
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};
