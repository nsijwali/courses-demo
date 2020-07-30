import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddCourseComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            author: '',
            category: '',
            message: null
        }
        this.saveCourse = this.saveCourse.bind(this);
    }

    saveCourse = (e) => {
        e.preventDefault();
        let course = {title: this.state.title, author: this.state.author, category: this.state.category};
        ApiService.addCourse(course)
            .then(res => {
                this.setState({message : 'Course added successfully.'});
                this.props.history.push('/courses');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Course</h2>
                <form>
                <div className="form-group">
                    <label>Course Title:</label>
                    <input type="text" placeholder="title" name="title" className="form-control" value={this.state.title} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Course Author:</label>
                    <input type="text" placeholder="author" name="author" className="form-control" value={this.state.author} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Course Category:</label>
                    <input type="text" placeholder="category" name="category" className="form-control" value={this.state.category} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveCourse}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddCourseComponent;