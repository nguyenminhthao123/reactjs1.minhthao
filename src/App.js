
import './App.css';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskLisk from './Components/TaskLisk';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isDisplayForm: false,
      taskEditing: null,
      fliter: {
        name: '',
        status: -1
      },
      keyboard: '',
      sortby: '',
      sortstatus: -1
    }
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem('task')) {
      this.setState({ task: JSON.parse(localStorage.getItem('task')) })
    }
  }
  getGender = () => {
    console.log("gendenr")
    var randomstring = require("randomstring");
    var task = [
      {
        id: randomstring.generate(),
        name: 'Học lập trình Js',
        status: false,
      },
      {
        id: randomstring.generate(),
        name: 'Học lập trình ReactJs',
        status: true,
      },
      {
        id: randomstring.generate(),
        name: 'Học lập trình',
        status: false,
      }
    ]
    this.setState({
      task: task
    })
    localStorage.setItem('task', JSON.stringify(task))
  }
  addTask = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null,

      })
    } else {
      this.setState({
        isDisplayForm: true,


      })
    }


  }
  getIsDidlayFrom = () => {
    this.setState({
      isDisplayForm: false,
    })
  }
  getdata = (data) => {
    var { task } = this.state
    var randomstring = require("randomstring");
    if (data.id === "") {
      data.id = randomstring.generate();
      task.push(data);
    } else {
      console.log(data.id)
      for (var i = 0; i < task.length; i++) {
        if (data.id === task[i].id) {
          task[i] = data;
        }
      }
    }


    this.setState({
      task: task,
      taskEditing: null,
    })
    localStorage.setItem('task', JSON.stringify(task))
  }
  onSpan = (id) => {
    var { task } = this.state
    for (var i = 0; i < task.length; i++) {
      if (task[i].id === id) {
        task[i].status = !task[i].status
        this.setState({
          task: task
        })
      }

    }
    localStorage.setItem('task', JSON.stringify(task))

  }
  onDelete = (id) => {
    var { task } = this.state
    for (var i = 0; i < task.length; i++) {
      if (task[i].id === id) {
        task.splice(task[i], 1)
        this.setState({
          task: task
        })
      }

    }
    localStorage.setItem('task', JSON.stringify(task))
    this.getIsDidlayFrom()
  }
  onEditing = (id) => {
    this.addTask()
    var { task } = this.state

    for (var i = 0; i < task.length; i++) {
      if (task[i].id === id) {

        var taskEditing = task[i]

        this.setState({
          taskEditing: taskEditing
        })
      }
    }

  }
  onFilter = (name, value) => {
    var value = +value
    var name = name.toLowerCase()
    this.setState({
      fliter: {
        name: name,
        status: value
      }
    })

  }
  keywords = (value) => {
    this.setState({
      keywords: value.keywords
    })
  }
  sort = (value) => {
    this.setState(
      {
        sortby: value.sortby,
        sortstatus: value.sortstatus

      }
    )


  }
  render() {
    console.log(this.state)
    var { task, isDisplayForm, taskEditing, fliter, keywords, sortby, sortstatus } = this.state;
    if (fliter) {
      if (fliter.name) {
        task = task.filter((value) => {
          return value.name.toLowerCase().indexOf(fliter.name) !== -1;
        })
      }
      task = task.filter((value) => {
        if (fliter.status === -1) {
          return value
        } else {
          return value.status === (fliter.status === 1 ? true : false)
        }

      })

    }
    if (keywords) {
      task = task.filter((value) => {
        return value.name.toLowerCase().indexOf(keywords.toLowerCase()) !== -1;
      })
    }
    if (sortby === "name") {

      task.sort((a, b) => {
        if (a.name > b.name) return sortstatus
        else if (a.name < b.name) return -sortstatus
        else return 0

      })
    } else{
      task.sort((a, b) => {
        if (a.status < b.status) return sortstatus
        else if (a.status > b.status) return -sortstatus
        else return 0

      })
    }
    var elements = isDisplayForm ? <TaskForm getIsDidlayFrom={this.getIsDidlayFrom} getdata={this.getdata} taskEditing={taskEditing} /> : '';
    return (
      <div className="container">
        <h1>Quản Lý Công Việc</h1>
        <div className="row mt-5">
          <div className={isDisplayForm ? "col-sm-4 col-md-4 col-lg-4 col-xs-4" : ""}>
            {elements}
          </div>
          <div className={isDisplayForm ? "col-sm-8 col-md-8 col-lg-8 col-xs-8" : "col-sm-12 col-md-12 col-lg-12 col-xs-12"}>
            <button type="button" className="btn btn-primary" name="add" onClick={this.addTask}><i className="fas fa-plus"></i>Thêm Công việc</button>
            <button type="button" className="btn btn-gender ml-2" name="add" onClick={this.getGender}>GetGender</button>
            <Control keywords={this.keywords} sort={this.sort} />
            {/*Task_Lisk */}
            <TaskLisk task={task} onSpan={this.onSpan} onDelete={this.onDelete} onEditing={this.onEditing} onFilter={this.onFilter} />
          </div>
        </div>
      </div >
    );
  }
}

export default App;