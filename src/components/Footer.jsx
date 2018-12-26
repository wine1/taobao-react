import React, { Component } from 'react'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <ul>
                        <li><a href="javascript:;" className="footer-home active"></a></li>
                        <li><a href="javascript:;" className="footer-weitao"></a></li>
                        <li><a href="javascript:;" className="footer-message"></a></li>
                        <li><a href="javascript:;" className="footer-cart"></a></li>
                        <li><a href="javascript:;" className="footer-mine"></a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}