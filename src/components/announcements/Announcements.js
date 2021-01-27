import React, {Component} from 'react';
import {reports} from "../../database/database";
import Add from "../add/Add";
import Search from "../search/Search";

export default  class Announcements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [...reports],
            text: '',
            title: '',
            description: '',
            array: []
        };
    }

    deleteReport(id) {
        this.setState({
            reports: this.state.reports.filter(report => report.id !== id)
        })
    };

    render() {
        return (
            <div>
                <Add/>
                <hr/>
                <Search/>
                <hr/>
                {
                    this.state.reports.map((report,index) => (
                        <div key={index}>
                            <h2>{report.title}</h2>
                            <p>{report.description}</p>
                            <p>{report.date}</p>
                            <button onClick={this.deleteReport.bind(this, report.id)}>remove</button>
                            <button onClick={() => {this.props.history.push(`/announcements/${report.id}`)}}>edit</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}
