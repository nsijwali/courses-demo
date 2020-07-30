import axios from 'axios';
import {
    GET_COURSES
} from './actionTypes';
import ApiService from "../../service/ApiService";
import data from './data'

const COURSE_API_BASE_URL = 'http://localhost:8080/courses';

export const successFetchCourses = (payload, key) => ({
    type: GET_COURSES,
    key,
    payload
});

export const reloadCoursesList = async(dispatch) => {
    try{
        const response = await axios(COURSE_API_BASE_URL);
        if(response.status === 200){
            dispatch(successFetchCourses( response, 'courses'));
        }
    } catch (exception){
        if(exception.isAxiosError){
            dispatch(successFetchCourses( data, 'courses'));
        }
    }
};
