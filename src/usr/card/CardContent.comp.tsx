import React from 'react';
import PropTypes from 'prop-types';
import {Card as CardWSR, FontUpgrade} from 'wix-style-react';

export interface CardContentProps {
    children?: React.ReactNode;
    size?: 'medium' | 'large';
}

/**
 * A card content component
 */
class CardContent extends React.Component<CardContentProps, any> {

    static propTypes: PropTypes.InferProps<CardContentProps> = {
        /**
         * any custom content to display
         */
        children: PropTypes.arrayOf(PropTypes.element),
        /**
         * controls the appearance of the element
         */
        size: PropTypes.oneOf(['', 'medium', 'large']),
    };

    static defaultProps: CardContentProps = {
        children: [<span/>]
    };

    render() {
        const {children, size} = this.props;
        return (
            <FontUpgrade>
                <CardWSR.Content size={size}>
                    {children}
                </CardWSR.Content>
            </FontUpgrade>
        );
    }
}

export default CardContent;
