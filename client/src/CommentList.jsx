import React, {useState, useEffect} from "react";
import axios from "axios";

export default ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
            setComments(res.data);
        })();
    }, []);

    const renderedComments = comments.map(comment => {
        console.log(comment);
        return <li key={comment.id}>
            {comment.content}
        </li>
    });

    return <div>
        <ul>
            {renderedComments}
        </ul>
    </div>;
}
