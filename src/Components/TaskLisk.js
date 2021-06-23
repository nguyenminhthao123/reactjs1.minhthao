import React, { Component } from 'react';
import TaskListitem from './TaskListitem';

class TaskLisk extends Component {
    constructor(props) {
        super(props);
       this.state={
        filtername:'',
        filterStatus:-1
       }
    }
    onChange=(e)=>{
        var name=e.target.name
        var value=e.target.value
        this.props.onFilter(
            name=="filtername"?value:this.state.filtername,
            name=="filterStatus"?value:this.state.filterStatus
        )
        this.setState({
            [name]:value
        })
      
    }
    render() {
        var task=this.props.task;
        var elements=task.map((value,index)=>{
            return (
                <TaskListitem key={index} index={index} value={value} onSpan={this.props.onSpan} onDelete={this.props.onDelete} onEditing={this.props.onEditing}/>
            )
        })
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" name="filtername" onChange={this.onChange} value={this.state.filtername}/>
                                </td>
                                <td>
                                    <select className="form-control"  name="filterStatus" onChange={this.onChange}>
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                          
                           {elements}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskLisk;