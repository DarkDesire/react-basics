import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Post = (props) => {
    const id = props.match.params.post_id
    const [post, setPost] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setPost(res.data)
        })();
    }, []);
    return (
        <div className="mt-10">
            
            <div className="card ">
                <h5 className="card-header">{post.title}</h5>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Post
