import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListCoursesComponent from "./component/course/test";
import AddCourseComponent from "./component/course/AddCourseComponent";
import EditCourseComponent from "./component/course/EditCourseComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>Courses Demo Application</h1>
                  <Switch>
                      <Route path="/" exact component={ListCoursesComponent} />
                      <Route path="/courses" component={ListCoursesComponent} />
                      <Route path="/add-course" component={AddCourseComponent} />
                      <Route path="/edit-course" component={EditCourseComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
