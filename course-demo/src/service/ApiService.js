import axios from 'axios';

const COURSE_API_BASE_URL = 'http://localhost:8080/courses';

class ApiService {

    fetchCourses() {
        return axios.get(COURSE_API_BASE_URL);
    }

    fetchCourseById(courseId) {
        return axios.get(COURSE_API_BASE_URL + '/' + courseId);
    }

    deleteCourse(courseId) {
        return axios.delete(COURSE_API_BASE_URL + '/' + courseId);
    }

    addCourse(course) {
        return axios.post(""+COURSE_API_BASE_URL, course);
    }

    editCourse(course) {
        return axios.put(COURSE_API_BASE_URL + '/' + course.id, course);
    }

}

export default new ApiService();