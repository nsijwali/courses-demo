import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import ApiService from "../../service/ApiService";
import {
    reloadCoursesList
} from '../actions/courseActions'

const mapStateToProps = state => {
    return{
    courses: state.courseReducer ? state.courseReducer.courses : []
}}

const mapDispatchToProps = dispatch => ({
    reloadCoursesList: () => reloadCoursesList(dispatch),
    // deleteCourse: (courseId) => deleteCourse(dispatch, courseId)
})

const ListCoursesComponent = (props) => {
    // const [courses, setCourses] = useState([]);

    useEffect(()=>{
        props.reloadCoursesList();
    }, []);

    const editCourse = (id) => {
        window.localStorage.setItem("courseId", id);
        props.history.push('/edit-course');
    }
    const addCourse = () => {
        window.localStorage.removeItem("courseId");
        props.history.push('/add-course');
    }
 return(
<>
    <h2 className="text-center">Course Details</h2>
    <button className="btn btn-danger" style={{width:'100px'}} onClick={() => addCourse()}> Add Course</button>
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
                props.courses.map(
            course =>
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.author}</td>
                            <td>{course.category}</td>
                            <td>
                                <button className="btn btn-success" > Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-success"  style={{marginLeft: '20px'}} onClick={() => editCourse(course.id)}> Edit</button>
                            </td>
                        </tr>
                )
            }
        </tbody>
    </table>

</>
 )
}

ListCoursesComponent.defaultProps = {
    courses: []
}
export default connect(mapStateToProps, mapDispatchToProps)(ListCoursesComponent);