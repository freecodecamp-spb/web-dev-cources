import React, { Component } from 'react';
import { CourseCard } from '../../components/course-card';

export class CoursesItemPage extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.saveCourse = this.saveCourse.bind(this);
  }

  componentDidMount() {
    this.getCourse();
  }

  render() {
    let thumb;

    if (this.state.course) {
      thumb = <CourseCard
        card={this.state.course.card}
        id={this.props.params.id}
        onSave={this.saveCourse}
      />

    } else {
      thumb = <div>Loading...</div>
    }

    return (
      <div className="CoursesItemPage">
        { thumb }
      </div>
    );
  }

  saveCourse(data) {
    let request = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(data)
    };

    fetch(`/api/courses/${this.props.params.id}`, request)
    .then(res => res.json())
    .then((data) => console.log("data: ", data))
  }

  getCourse() {
    let request = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    };

    fetch(`/api/courses/${this.props.params.id}`, request)
    .then(response => response.json())
    .then(data => this.setState({course: data}))
  }
}
