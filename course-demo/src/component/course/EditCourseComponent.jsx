import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditCourseComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            author: '',
            category: '',
            message:''
        }
        this.saveCourse = this.saveCourse.bind(this);
        this.loadCourses = this.loadCourses.bind(this);
    }

    componentDidMount() {
        this.loadCourses();
    }

    loadCourses() {
        ApiService.fetchCourseById(window.localStorage.getItem("courseId"))
            .then((res) => {
                let course = res.data;
                this.setState({
                id: course.id,
                title: course.title,
                author: course.author,
                category: course.category
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveCourse = (e) => {
        e.preventDefault();
        let course = {id: this.state.id, title: this.state.title, author: this.state.author, category: this.state.category};
        ApiService.editCourse(course)
            .then(res => {
                this.setState({message : 'Course added successfully.'});
                this.props.history.push('/courses');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Course</h2>
                <form>

                    <div className="form-group">
                        <label>Course Id:</label>
                        <input type="number" placeholder="id" name="id" className="form-control" readonly="true" defaultValue={this.state.id}/>
                    </div>

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

export default EditCourseComponent;