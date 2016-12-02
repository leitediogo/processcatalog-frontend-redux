import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterBusinessArea } from '../actions'

class ProcessCatalogAppBarLeftIconMenu extends Component {

    createListItems() {
        return this.props.businessAreas.map((businessArea) => {
            return (
                <li
                    key={businessArea.id}
                    onClick={() => this.props.filterBusinessArea(businessArea)}
                    > name : {businessArea.name} 
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
        );
    }
}

function mapStateToProps(state) {
    return {
        businessAreas: state.businessAreas
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({filterBusinessArea: filterBusinessArea}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProcessCatalogAppBarLeftIconMenu)