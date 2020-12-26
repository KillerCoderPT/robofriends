import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', borderTop: '2px solid #1347b6', borderBottom: '2px solid #1347b6', height: '75vh' }}>
            {props.children}
        </div>
    );
}

export default Scroll;