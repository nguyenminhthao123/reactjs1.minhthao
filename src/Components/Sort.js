import React, { Component } from 'react';


class Sort extends Component {
    constructor(props){
        super(props);
        this.state={
            sortby:'',
            sortstatus:-1
            
        }
    }
  sort= async (sortname,sortstatus) => {
    await this.setState({
           
               sortby:sortname,
               sortstatus:sortstatus
           
       })
       this.props.sort(this.state)
    }
    render() {
        return (
            <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6 mt-2">
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp Xếp
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item" type="button" onClick={()=>{this.sort('name',1)}}><a role="button">
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                            </span>
                        </a></button>
                        <button className="dropdown-item" type="button"  onClick={()=>{this.sort('name',-1)}}><a role="button">
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Tên Z-A
                            </span>
                        </a></button>
                        <button className="dropdown-item" type="button"  onClick={()=>{this.sort('status',1)}}><a role="button">Trạng Thái Kích Hoạt</a></button>
                        <button className="dropdown-item" type="button"  onClick={()=>{this.sort('status',-1)}}><a role="button">Trạng Thái Ẩn</a></button>

                    </div>
                </div>

            </div>
        );
    }
}

export default Sort;