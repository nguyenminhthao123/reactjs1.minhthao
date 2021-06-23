import React, { Component } from 'react';

class TaskListitem extends Component {
    constructor(props){
        super(props);
    }
    onSpan=()=>{
        this.props.onSpan(this.props.value.id)
    }
    onDelete=()=>{
        this.props.onDelete(this.props.value.id)
    }
    onEditing=()=>{
        this.props.onEditing(this.props.value.id)
    }
    render() {
        var {value,index}=this.props
        return (
            <tr > 
                <td >{index+1}</td>
                <td>{value.name}</td>
                <td className="text-center">
                {value.status?<span className="badge badge-success" onClick={this.onSpan}>Kich hoạt</span>:<span onClick={this.onSpan} className="badge badge-secondary">Ẩn</span>}
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEditing}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskListitem;