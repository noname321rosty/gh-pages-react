import React, {Component} from 'react';

class Task extends Component {
    render() {
        return (
            <div>
                <p>Implement Announcement Website with the following functionality:  </p>
                <ul>
                    <li> 1. Add new announcement</li>
                    <li> 2. Edit announcement</li>
                    <li> 3. Delete announcement</li>
                    <li> 4. See list of announcement</li>
                    <li> 5. Search announcements by title</li>
                    <li>6. Show selected announcement details:
                        <br/>
                        <br/>a. Should contain such fields: Title, Description, Date Added
                        <br/>b. Should show top 3 similar announcements
                    </li>

                </ul>

                <p>*two announcements are considered similar if they have at least one same word in title and
                    description</p>
            </div>
        );
    }
}

export default Task;
