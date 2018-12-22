import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const ApprovalCard = (props) => {

return (
    <div className="ui card">
        <div className="content">
        {props.children}
        </div>
        <div className="extra content">
            <div className="ui two buttons">
                <div className="ui basic green button">approve</div>
                <div className="ui basic red button">reject</div>
            </div>
        </div>
    </div>

);
};
 
export default ApprovalCard;