import React from 'react';

const ColoredLineLayout = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.001,
            width: 1000
        }}
    />
);

export default ColoredLineLayout;
