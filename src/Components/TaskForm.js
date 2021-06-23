import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            status:true,
            id:'',
        }
    }
    componentDidMount(){
        if(this.props.taskEditing)
        {
            this.setState({
                id:this.props.taskEditing.id,
                name:this.props.taskEditing.name,
                status:this.props.taskEditing.status,
            })
        }
      
    }
    componentWillReceiveProps(value){
      if(value && value.taskEditing){
      this.setState({
          id:value.taskEditing.id,
          name:value.taskEditing.name,
          status:value.taskEditing.status,
      })
       }
       else if (!value.taskEditing)
       {
        this.setState({
            name:'',
            status:true,
            id:'',
        })
       }
    }
    
    closeForm = () => {

        this.props.getIsDidlayFrom()
    }
    onChange = (e) => {
        var name = e.target.name;
        var value=e.target.value;
        if(name==="status"){
         var value=e.target.value==="true"?true:false;
       }
        this.setState({
            [name]: value
        })
       
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.getdata(this.state)
        this.closeForm()
    }
    onClose=()=>{
        this.setState({
            name:'',
            status:true,

        })
    }
    render() {
        var {id}=this.state
        return (
            <div>
                <div className="card">
                    <div className="card-header"><p>{id==''?`Thêm Công việc`:`Cập nhật Công việc`} <i className="fas fa-times-circle" onClick={() => this.closeForm(true)}></i></p></div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên:</label>
                                <input type="text"
                                    className="form-control" name="name" id=""  placeholder="" onChange={this.onChange} value={this.state.name} />
                            </div>
                            <div className="form-group">
                                <label>Trạng Thái:</label>
                                <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onChange}>
                                    <option value={true}>Kích Hoạt</option>
                                    <option value={false}>Ẩn</option>
                                </select>
                            </div>
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary"><i className="fa fa-save"></i>Lưu Lại</button>
                                <button type="button" className="btn btn-error" onClick={this.onClose} ><i className="fas fa-window-close"></i>Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;