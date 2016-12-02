import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectProcess } from '../actions'

class ProcessList extends Component {

    createListItems() {
        return this.props.processes.map((process) => {
            return (
                <li
                    key={process.id}
                    onClick={() => this.props.selectProcess(process)}
                    > name : {process.name} 
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.createListItems()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        processes: state.processes
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectProcess: selectProcess}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProcessList)