import React from 'react';
import {Cell as CellWSR, FontUpgrade} from 'wix-style-react';
import type {CellProps} from './Cell.props';
import {CellTypes} from './Cell.props';

/**
 * Layout
 */
const Cell = ({span, children, vertical, rows}: CellProps) => {
    return (
        <FontUpgrade>
            <CellWSR
                span={span}
                vertical={vertical}
                rows={rows}
            >
                {children}
            </CellWSR>
        </FontUpgrade>
    );
}

Cell.propTypes = CellTypes;

Cell.defaultProps = {
    span: 12,
    children: [<span/>]
};

export default Cell;
