import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <div className="wrap-search">
                    <input type="text" placeholder="搜索一下~"/>
                    <a className="ca-icon"></a>
                </div>
            </div>
        )
    }
}