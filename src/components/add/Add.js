import React, { Component } from "react";
import {reports} from "../../database/database";

export default class Add extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reports: [...reports],
            title: this.props.title,
            description: this.props.description,
            id: 5 ,
            newTitle: '',
            newDescription: '',
            array: []
        }
    }

    handleTitle(e) {
        this.setState({
            newTitle:e.target.value
        })
    }

    handleDescription(e) {
        this.setState({
            newDescription:e.target.value
        })
    }

    addReport(){
        const {newTitle , newDescription} = this.state;
        const array = this.state.reports;
        let id = this.state.reports.length + 1;

        if (newTitle !== '' || newDescription !== '') {
            array.push({
                id: id,
                title: newTitle,
                description: newDescription,
                date: new Date().toLocaleString()
            });

            this.setState({
                reports: array,
                array: array
            })

            console.log(this.state.reports)

        } else {
            console.log('you need to change smth');
        }
    };

    render() {
        return (
            <div>
                <input placeholder={'title'} type="text" onChange={this.handleTitle.bind(this)}/>
                <input placeholder={'description'} type="text" onChange={this.handleDescription.bind(this)}/>
                <button onClick={() => {this.addReport()}}>add</button>
            </div>
        );
    }
};
