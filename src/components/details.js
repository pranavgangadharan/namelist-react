import React from 'react'
import './details.css'
class Details extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            names: JSON.parse(localStorage.getItem("name")),
            detail: []
        }
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        let detail = this.state.names.filter((item, index)=> {
            return(index.toString() === id)
        });
        console.log(detail[0]);
        await this.setState({detail: detail[0]});
        console.log(this.state.detail);

    }
    render() {
        return(
            <div>
                <table id="details">
                    <tr>
                    <th>EmpId</th>
                    <th>Name</th>
                    <th>Place</th>
                    </tr>
                    <tr>
                    <td>{this.state.detail.ids}</td>
                    <td>{this.state.detail.name}</td>
                    <td>{this.state.detail.places}</td>
                    </tr>
            </table>
            </div>
        );
    }
}




export default Details