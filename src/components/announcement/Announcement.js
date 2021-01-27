import React, {Component} from 'react';
import {reports} from "../../database/database";

import axios from 'axios';

export default class Announcement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            report: null,
            reports:[...reports],
            title:'',
            description:'',
            date:'',
            textTitle:'',
            textDescription:''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios('/announcements/' + id)
            // .then(res => res.json())
            .then(report => this.setState({report}))
        this.state.reports.map(report => {
            if (report.id === +id) {
                const title = report.title;
                const description = report.description
                const date = report.date
                this.setState({title, description, date})
            }
            return report;
        })
    };

    handleTitle(e) {
        console.log(e.target.value);
        this.setState({
            textTitle:e.target.value
        })
        console.log(this.state.textTitle)
    };

    handleDescription(e) {
        console.log(e.target.value);
        this.setState({
            textDescription:e.target.value
        })
        console.log(this.state.textDescription)
    };

    changeReport() {
        const {title , description} = this.state;
        if ( title !== this.state.textTitle || title !== '' || description !== this.state.textDescription || description !== ''){
            this.setState({
                title: this.state.textTitle,
                description: this.state.textDescription
            })
            console.log(this.state.reports);
        } else {
            console.log('you need to change smth');
        }
    };

    render() {
        const {title ,description, date} = this.state;
        return (
            <div>
                {
                    (
                        <div>
                            <h2>{title}</h2><input placeholder={title} type="text" onChange={this.handleTitle.bind(this)}/>
                            <p>{description}</p><input placeholder={description} type="text" onChange={this.handleDescription.bind(this)}/>
                            <p>{date}</p>
                            <button onClick={() => {this.props.history.push('/announcements')}}>back</button>
                            <button onClick={() => {this.changeReport()}}>change</button>
                        </div>
                    )
                }
            </div>
        );
    }
}
