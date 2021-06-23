import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    render() {
        return (
            <div className="row">
                {/*search*/}
                <Search keywords={this.props.keywords} />

                {/*Sort*/}
                <Sort  sort={this.props.sort} />

            </div>
        );
    }
}

export default Control;