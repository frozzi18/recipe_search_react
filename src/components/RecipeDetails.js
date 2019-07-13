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
        const {
            image_url,
            publisher,
            publisher_url,
            title,
            ingredients
        } = this.state.recipe;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button className="btn btn-warning mb-5 text-capitalize">
                                back to recipe list
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
