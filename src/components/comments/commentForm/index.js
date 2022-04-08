import { useState } from "react"; 
export default function CommentForm({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = "",
  handleCancel, 
}) {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  }; 
  return (
    <div className="max-w-lg rounded-lg shadow-md shadow-blue-600/50">
      <form action="" className="w-full p-4" onSubmit={onSubmit}>
        <div className="mb-2">
          <textarea
            className="comment-form-textarea w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
            placeholder=""
            value={text}
            onChange={(event) => setText(event.target.value)}
            /* for comments nextjs api */
            id="comment"
            ref={commentInputRef}
            /* end for comments nextjs api */
          ></textarea>
        </div>
        <div>
          <button
            className="comment-form-button px-3 py-2 text-sm text-white bg-indigo-600 rounded mr-2 disabled:bg-gray-300"
            type="submit"
            disabled={isTextareaDisabled}
          >
            {submitLabel}
          </button>
          {hasCancelButton && (
            <button
              className="comment-form-button comment-form-cancel-button px-3 py-2 text-sm text-blue-600 border border-blue-500 rounded"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/*  <style>{`
        .comment-form-button {
          font-size: 16px;
          padding: 8px 16px;
          background: rgb(59, 130, 246);
          border-radius: 8px;
          color: white;
        }

        .comment-form-button:hover:enabled {
          cursor: pointer;
          background: rgb(37, 99, 235);
        }

        .comment-form-button:disabled {
          opacity: 0.7;
          cursor: default;
        }

        .comment-form-cancel-button {
          margin-left: 10px;
        }
      `}</style> */}
    </div>
  );
}
