// modules
// components
import SingleComment from "../singleComment";

export default function CommentList({
  rootComments,
  backendComments,
  currentUserId,
  deleteComment,
  activeComment,
  setActiveComment,
  addComment,
  updateComment
}) {
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
 
  return (
    <>
      <div className="comments w-full mt-5 ml-5">
        <div className="comments-container flex flex-col w-full">
          {rootComments.map((rootComment) => {
            return (
              <SingleComment
                key={rootComment.id}
                comment={rootComment}
                replies={getReplies(rootComment.id)}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment} 
                updateComment={updateComment}
              />
            );
          })}
        </div>
      </div> 
    </>
  );
}
