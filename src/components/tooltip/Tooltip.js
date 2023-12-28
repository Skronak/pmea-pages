import React from 'react';
import './index1.css';

function Tooltip(props) {

    return (
        <div className={'tooltip'}>
            <span className={'tooltiptext'}>{props.children}</span>
        </div>
    );
}

export default Tooltip;
