import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListCoursesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.deleteCourse = this.deleteCourse.bind(this);
        this.editCourse = this.editCourse.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.reloadCoursesList = this.reloadCoursesList.bind(this);
    }

    componentDidMount() {
        this.reloadCoursesList();
    }

    reloadCoursesList() {
        ApiService.fetchCourses()
            .then((res) => {
                this.setState({courses: res.data})
            });
    }

    deleteCourse(courseId) {
        ApiService.deleteCourse(courseId)
           .then(res => {
               this.setState({message : 'Course deleted successfully.'});
               this.setState({courses: this.state.courses.filter(course => course.id !== courseId)});
           })

    }

    editCourse(id) {
        window.localStorage.setItem("courseId", id);
        this.props.history.push('/edit-course');
    }

    addCourse() {
        window.localStorage.removeItem("courseId");
        this.props.history.push('/add-course');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Course Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addCourse()}> Add Course</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.courses.map(
                        course =>
                                    <tr key={course.id}>
                                        <td>{course.title}</td>
                                        <td>{course.author}</td>
                                        <td>{course.category}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteCourse(course.id)}> Delete</button>
                                        </td>
                                        <td>    
                                            <button className="btn btn-success" onClick={() => this.editCourse(course.id)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListCoursesComponent;