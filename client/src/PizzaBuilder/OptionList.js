import React from 'react';
import ListElement from './ListElement';

export default function OptionList(props) {
    return (
        <ul>
            { props.Dough.map(option => <ListElement {...option} key={option.id} setDough={props.setDough} />) }
        </ul>
    )
}
