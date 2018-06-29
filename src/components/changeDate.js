import React from 'react';

const changeDate = (title, callback) => {
    return (
        <button className="change-date" onClick ={callback}>
            {title}
            <i className="fas fa-calendar-alt"></i>
        </button>
    )
}

export default changeDate;