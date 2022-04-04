import React from "react";
import Image from "next/image";
import Wrapper from "../../wrapper";
import CommentForm from "../commentForm";

// components

export default function SingleComment({
  comment,
  replies,
  currentUserId,
  deleteComment,
  activeComment,
  setActiveComment,
  addComment,
  updateComment,
  parentId = null,
}) {
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId && !timePassed;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;
  const isEditing =
    activeComment &&
    activeComment.type === "editing" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;
  return (
    <>
      <div className="comment flex flex-wrap md:flex-row mt-5 w-full">
        <div className="comment-image-container relative inline-block h-10 w-10 m-3">
          <Image
            src="/images/user-icon.png"
            alt="user-photo"
            layout="fill"
            className="rounded-full"
          />
        </div>

        <div className="comment-right-part flex flex-col">
          <div className="comment-content flex w-full">
            <div className="comment-author text-indigo-700 mr-3">
              {comment.username}
            </div>
            <div className="text-sm">{createdAt}</div>
          </div>
          {!isEditing && (
            <div className="comment-text flex relative">{comment.body}</div>
          )}
          {isEditing && (
            <CommentForm
              submitLabel="Update"
              hasCancelButton
              initialText={comment.body}
              handleSubmit={(text) => updateComment(text, comment.id)}
              handleCancel={() => setActiveComment(null)}
            />
          )}
          <div className="comment-actions flex">
            {canReply && (
              <div
                className="comment-action text-gray-500 p-3 text-xs"
                onClick={() =>
                  setActiveComment({ type: "replying", id: comment.id })
                }
              >
                Reply
              </div>
            )}
            {canEdit && (
              <div
                className="comment-action text-gray-500 p-3 text-xs"
                onClick={() =>
                  setActiveComment({ type: "editing", id: comment.id })
                }
              >
                Edit
              </div>
            )}
            {canDelete && (
              <div
                className="comment-action text-gray-500 p-3 text-xs"
                onClick={() => deleteComment(comment.id)}
              >
                Delete
              </div>
            )}
          </div>
          {isReplying && (
            <CommentForm
              submitLabel="Reply"
              handleSubmit={(text) => addComment(text, replyId)}
            />
          )}
          {replies.length > 0 && (
            <div className="replies w-4/5">
              {replies.map((reply) => (
                <Wrapper style="ml-10 w-full" key={reply.id}>
                  <SingleComment
                    comment={reply}
                    replies={[]}
                    currentUserId={currentUserId}
                    deleteComment={() => deleteComment(reply.id)}
                    updateComment={updateComment}
                    addComment={addComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    parentId={comment.id}
                  />
                </Wrapper>
              ))}
            </div>
          )}
        </div>
      </div>

      {/*  <style>{`
        .comment { 
          margin-bottom: 28px;
        }

        .comment-image-container {
          margin-right: 12px;
        }

        .comment-image-container img {
          border-radius: 50px; 
        }

        .comment-right-part {
          width: 100%;
        }

        .comment-content {
          display: flex;
        }

        .comment-author {
          margin-right: 8px;
          font-size: 20px;
          color: rgb(59, 130, 246);
        }

        .comment-text {
          font-size: 18px;
        } 

        .comments-container {
          margin-top: 40px;
        }

        .comment-text {
          font-size: 18px;
        }

        .comment-actions {
          display: flex;
          font-size: 12px;
          color: rgb(51, 51, 51);
          cursor: pointer;
          margin-top: 8px;
        }

        .comment-action {
          margin-right: 8px;
        }

        .comment-action:hover {
          text-decoration: underline;
        }

        .replies {
          margin-top: 20px;
        }
      `}</style> */}
    </>
  );
}
