import React from 'react'

export default (props) => (
    <li className="collection-item">
        <div>{props.client}
            <a href="#!" className="secondary-content">
                <i className="material-icons">open_in_new</i>
            </a>
            <a href="#!" className="secondary-content">
                <i className="material-icons">fast_forward</i>
            </a>
            <a href="#!" className="secondary-content">
                <i className="material-icons">delete</i>
            </a>
        </div>
    </li>
)