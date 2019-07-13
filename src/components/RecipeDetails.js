import React, { Component } from 'react';
import { recipe } from "../tempDetails"

export default class RecipeDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            recipe:{},
            url:`https://www.food2fork.com/api/get?key=2c07b23b970d91e87ac087c8053dab5&rId=${
                this.props.id
            }`             
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello from details</h1>
            </React.Fragment>
        )
    }
}
