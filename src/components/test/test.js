import React, { Component } from 'react';

class Tshirt extends Component{
render(){
    return (
        <div>
            {this.props.match.params.id}
        </div>
    )
}
}

export default Tshirt;