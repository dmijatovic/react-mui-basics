import React from 'react';

const FlexRowPanel = props => {
    return (
        <div className="flex-panel-row" >
            {
                props.items.map((cellItem, pos) => {
                    return(
                        <div key={pos} 
                            className="flex-panel-cell">
                            { cellItem }
                        </div>
                    )
                })
            }
        </div>
    );
};

export default FlexRowPanel;