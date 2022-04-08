// modules
import { useState, useEffect } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "../../helpers/comments";

// components
import CommentForm from "./commentForm";
import CommentList from "./commentList";

export default function Comments({ currentUserId }) {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  /* activeComment object states
    {type: "replying", id: "1"}
    {type: "editing", id: "1"}
  */
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null,
  );

  const addComment = (text, parentId = null) => {
    console.log(`addComment: ${text}, ${parentId}`);
    createCommentApi
    (text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm(`Are you sure that you want to remove comment?`)) {
      deleteCommentApi(commentId).then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId,
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return {
            ...backendComment,
            body: text,
          };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  }; 

  useEffect(() => {
    getCommentsApi().then((comments) => {
      setBackendComments(comments);
    });
  }, []);

  return (
    <div className="flex flex-col w-full">
      <h3 className="comments-title text-2xl mb-2">Comments</h3>
      <div className="comment-form-title text-sm ml-2">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <CommentList
        rootComments={rootComments}
        backendComments={backendComments}
        currentUserId={currentUserId}
        deleteComment={deleteComment}
        activeComment={activeComment}
        setActiveComment={setActiveComment}
        addComment={addComment}
        updateComment={updateComment}
      />

      {/* <style>{`
        .comment-form-title {
           font-size: 22px;
        }
      `}</style> */}
    </div>
  );
}
