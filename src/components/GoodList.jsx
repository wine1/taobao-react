import React, {Component} from 'react'

export default class GoodList extends Component{
    render(){
        return(
            <div className="good-list">
                <ul>
                    <li>
                        <img src={require('../assets/img/1.jpg')} alt=""/>
                    </li>
                    <li>
                        <img src={require('../assets/img/94f97ce12535e47b49aa231a257e1ae6.jpeg')} alt=""/>
                    </li>
                </ul>
            </div>
        )
    }
}