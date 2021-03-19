import React from 'react'
import {Link} from 'react-router-dom';

class List extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            names: JSON.parse(localStorage.getItem("name"))
        }

    }
    
render() {
    return(
        <div>
            <ul id="list">

            {
                this.state.names.map((item,index) => (
                    <li key={index}>
                    <Link to = {`list/${index}`}>
                    {item.name}
                    </Link>
                    </li>
                ))
            }

            </ul>
        </div>
        


    );
}
}

export default List