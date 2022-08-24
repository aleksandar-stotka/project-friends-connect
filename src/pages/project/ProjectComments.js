import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

import Avatar from "../../components/Avatar";
import { useHistory } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ProjectComments({ project }) {
  console.log(project.comments);

  //////////////////////////////////////////////////////
  const { updateDocument, response } = useFirestore("projects");
  const { removeComments } = useFirestore("projects");
  const [newComment, setNewComment] = useState("");

  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),

      id: Math.random(),
    };
    console.log(commentToAdd);

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });
    console.log(commentToAdd);
    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      {
        <ul>
          {project.comments.length > 0 &&
            project.comments.map((comment) => (
              <li key={comment.id}>
                <div className="comment-author">
                  <Avatar src={comment.photoURL} />
                  <p>{comment.displayName}</p>
                </div>
                <div className="comment-date">
                  <p>
                    {comment.createdAt &&
                      formatDistanceToNow(comment.createdAt.toDate(), {
                        addSuffix: true,
                      })}
                  </p>
                </div>
                <div className="comment-content">
                  <p>{comment.content}</p>
                </div>
              </li>
            ))}
        </ul>
      }

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
}

export default ProjectComments;
