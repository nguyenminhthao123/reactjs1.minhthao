import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords:'',
        }
    }
    onChange=(e)=>{
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    onClick=()=>{
        this.props.keywords(this.state)
        
    }
    render() {
        var {keywords} = this.state
        return (
            <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                <div className="form-group">
                    <div className="input-group mt-2">
                        <input type="text"
                            className="form-control" name=""  placeholder="Nhập từ khóa ..." name="keywords" value={keywords} onChange={this.onChange} />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button"onClick={this.onClick}><i className="far fa-search" ></i>Tìm Kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;