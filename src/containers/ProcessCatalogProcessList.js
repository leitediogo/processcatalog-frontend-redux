import React, { Component } from 'react';
import { connect } from 'react-redux'

class ProcessCatalogProcessList extends Component {

    filteredProcesses() {
        return (
            this.props.processes.filter(function (process) {
                return process.businessArea === this.props.businessArea.name
            })
        )
    }

    createProcessList() {

        return this.props.processes.map((process) => {
            if (process.businessArea === this.props.businessArea.name) {
                return (
                    <li key={process.id}>
                        name : {process.name}
                        <br />
                        business area : {process.businessArea}
                    </li>
                )
            }
            else return null

        })
    }

    render() {
        return (
            <div>
                <p> BusinessArea Selected : {this.props.businessArea.name} </p>
                <ul>
                    {this.createProcessList()}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        businessArea: state.activeProcess,
        processes: state.processes
    }
}

export default connect(mapStateToProps)(ProcessCatalogProcessList)