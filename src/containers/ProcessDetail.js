import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProcessDetail extends Component {

    render() {
        return (
                <div>
                    <p> description : {this.props.process.description} </p>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        process: state.activeProcess
    }
}

export default connect(mapStateToProps)(ProcessDetail)