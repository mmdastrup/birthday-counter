import React from 'react';

const changeDate = (title, callback) => {
    return (
        <button key={1}className="change-date" onClick ={callback}>
            {title}
            <i className="fas fa-calendar-alt"></i>
        </button>
    )
}

export default changeDate;