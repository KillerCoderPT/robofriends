import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', borderTop: '2px solid rgb(35, 154, 145)', borderBottom: '2px solid rgb(35, 154, 145)', height: '75vh' }}>
            {props.children}
        </div>
    );
}

export default Scroll;