import React from 'react';
import PropsType from 'prop-types';
import './Header.css';

export default function Header(props) {
    const { title, onBack } = props;
    return (
        <div className="header">
            <div className="header-back" onClick={onBack}>
                <svg width='42' height='42'>
                    <polyline points='25,13 16,21 25,29'
                        stroke='#fff'
                        wtroke-width = '2'
                        fill = 'none'
                    />
                </svg>
            </div>
            <div className="header-title">{title}</div>
        </div>
    )
}
Header.propsType = {
    title: PropsType.string.isRequired,
    onBack:PropsType.func.isRequired
}