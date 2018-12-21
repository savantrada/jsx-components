import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
 console.log(props);
    return (
    <div className="comment">
    <a href="/" className="avatar">
        <img alt="avatar" src={props.imageava} />
    </a>
    <div className="content">
        <a href="/" className="author">
            {props.author}
        </a>
        <div className="metadata">
            <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text"> this is my comment</div>
    </div>
</div>
);
};

export default CommentDetail;