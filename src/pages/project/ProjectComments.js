import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "../../components/avatar/Avatar";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ProjectComments({ project }) {
  const { updateDocument, response } = useFirestore("projects");
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: user.uid,
    };

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });

    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className=" min-h-screen text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 p-5 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold mb-4">Project Comments</h4>
        <ul>
          {project.comments.length > 0 &&
            project.comments.map((comment) => (
              <li key={comment.id} className="mb-3 border-b border-gray-700">
                <div className="flex items-center space-x-3 mb-2">
                  <Avatar src={comment.photoURL} className="w-10 h-10 rounded-full" />
                  <p className="font-semibold">{comment.displayName}</p>
                </div>
                <div className="mb-2 text-gray-400">
                  <p>
                    {comment.createdAt &&
                      formatDistanceToNow(comment.createdAt.toDate(), {
                        addSuffix: true,
                      })}
                  </p>
                </div>
                <div className="text-white">
                  <p>{comment.content}</p>
                </div>
              </li>
            ))}
        </ul>
        <form className="add-comment mt-4" onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-300">Add new comment</span>
            <textarea
              required
              onChange={(e) => setNewComment(e.target.value)}
              value={newComment}
              className="w-full mt-1 p-2 bg-gray-700 text-white rounded"
            ></textarea>
          </label>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProjectComments;
