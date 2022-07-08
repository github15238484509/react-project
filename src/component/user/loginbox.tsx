import React from 'react'
import "./loginbox.less"
export default function login(props: any) {
    return (
        <div className='loginbox'>{props.children}</div>
    )
}
