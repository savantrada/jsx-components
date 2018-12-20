import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
 return (
    <div className="comment">
    <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
    </a>
    <div className="content">
        <a href="/" className="author">
            sam
        </a>
        <div className="metadata">
            <span className="date">Today date is 20/12/2018</span>
        </div>
        <div className="text"> this is my comment</div>
    </div>
</div>
 );
};

export default CommentDetail;