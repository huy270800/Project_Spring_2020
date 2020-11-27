import { TimerSharp } from '@material-ui/icons'
import React, { Component } from 'react'
import Search from './Search'

export default class Leftmenu extends Component {
    check(array){
        if (array.delivery == false) return "Delivery unavailable"
        else return "Delivery available"
    }
    
    render() {
        let output = (
            <div>
                <Search  location={this.props.location} searchResults={this.props.searchResults}  SetSearchResults={this.props.SetSearchResults}/>
                <h1>Name:</h1>
                <h3>Address:</h3>
                <h3>Delivery:</h3>
            </div>
        )
        if (this.props.selectedLocation != null) {
            output= (
                <div>
                    <Search location={this.props.location} searchResults={this.props.searchResults} SetSearchResults={this.props.SetSearchResults}/>
                    <h1> Name: {this.props.selectedLocation.name}</h1>
                    <h3> Address: {this.props.selectedLocation.address}</h3>
                    <h3> Delivery: {this.check(this.props.selectedLocation)}</h3>
                </div>
            )
        }
        console.log(this.props.location)
        return (
            output
        )
    }
}
