import React from 'react'

export default function (props) {
    console.log(props);
    return (
        <div>[id] {props.match.params.id}</div>
    )
}
