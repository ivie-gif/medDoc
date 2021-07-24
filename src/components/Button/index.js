import React from 'react';

import {Button} from 'react-materialize';




const Index = ({title, className}) => {
    return (
        <div>

            <Button
                large
                node="a"
                style={{
                marginRight: '5px'
                }}
                waves=""
                className={className}
            >
                {title}
            </Button>

        </div>
    )
}
export default Index;