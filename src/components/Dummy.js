import React from 'react';

class Dummy extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props.name + 'constr');
    }


    componentDidMount(){
        console.log(this.props.name + "mounted");
    }

    render(){
        console.log(this.props.name + 'render');
        const {name} = this.props;
        return (
            <div style={{width:"470px", margin:"auto"}}>
                
                <h1>{name}</h1>
                
            </div>
        )
    }

}

export default Dummy;