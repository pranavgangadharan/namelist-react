import React from 'react';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class Formview extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            names:[],
            name: "",
            id: "",
            place: ""
        }
        this.add = this.add.bind(this);
    }

    nameChange = (event) => {
        this.setState({name: event.target.value});
    }

    idChange = (event) => {
        this.setState({id: event.target.value});
    }

    placeChange = (event) => {
        this.setState({place: event.target.value});
    }
    
    async add() {
        let name = this.state.name;
        let id = this.state.id;
        let place = this.state.place;
        let item = localStorage.getItem("name");
        var arr;
        item !== null ? arr = JSON.parse(item) : arr = this.state.names;
        arr.push({
            name: name,
            ids: id,
            places: place
        })
        this.setState({names : arr});
        localStorage.setItem("name", JSON.stringify(arr));
        this.state.name = "";
        this.state.id = "";
        this.state.place = "";
        // await this.setState({
        //     names:this.state.names.concat(name),
        //     ids:this.state.ids.concat(id),
        //     places:this.state.places.concat(place),
        // });
        // // console.log(this.state);
        // document.getElementById('name').value = ""
        // document.getElementById('empid').value = ""
        // document.getElementById('place').value = ""
        
        // localStorage.setItem("empid", JSON.stringify(this.state.ids));
        // localStorage.setItem("place", JSON.stringify(this.state.places));
    }


    render() {
        return(
            <div>
            {/* <list names={this.state.names}/> */}
            <table>
    <tbody>
    <tr>
        <td><label>Name:</label></td>
        <td><input type="text" id="name" value={this.state.name} onChange={this.nameChange}></input></td>
    </tr>
    <tr>
        <td><label>EmpID:</label></td>
        <td><input type="text" id="empid" value={this.state.id} onChange={this.idChange}></input></td>
    </tr>
    <tr>
        <td><label>Place:</label></td>
        <td><input type="text" id="place" value={this.state.place} onChange={this.placeChange}></input></td>
    </tr>
    <tr>
        <td><input type="button" value="submit" onClick={this.add}></input></td>
    </tr>
    </tbody>
</table>
        
        </div>
        );
    }
}

export default Formview;