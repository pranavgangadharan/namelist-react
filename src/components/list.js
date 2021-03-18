import React from 'react'

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
                    {item.name}
                    </li>
                ))
            }

            </ul>
        </div>
        


    );
}
}

export default List