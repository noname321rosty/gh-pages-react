import React, {Component} from 'react';
import {reports} from "../../database/database";

export default  class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reports: [...reports],
            title: '',
            array: []
        }

    };

    checkTitle = (e) => {
        e.preventDefault();

        this.setState({
            title: e.target.value
        });

        const filteredArray = this.state.reports.filter(value => value.title.includes(this.state.title));

        if(filteredArray.length) {
            this.setState({
                array: filteredArray
            })
        } else {
            this.setState({
                array: []
            })
        }
    };

    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.checkTitle} type="text" placeholder={'search by title'}/>
                <div>
                    {
                        this.state.array.map((report,index) => (
                            <div key={index}>
                                <h2>{report.title}</h2>
                                <p>{report.description}</p>
                                <p>{report.date}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
