import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state={
            count:0
        };
        console.log(this.props.name + 'constr');
    }


    componentDidMount(){
        console.log(this.props.name + "mounted");
    }

    render(){
        console.log(this.props.name + 'render');
        const {name, mentor} = this.props;
        const {count} = this.state;
        return (
            <div style={{width:"470px", margin:"auto"}}>
                
                <h1>{name}</h1>
                <pre > I'm an aspiring react developer </pre>
                <pre > My mentor is the G.O.A.T. </pre >
                <h1> {mentor} Sir</h1>
                <button style={{width:"150px", height:"60px", backgroundColor: 'bisque'}} onClick={()=>{
                    this.setState({
                        count : count+1
                    })
                }}> Vote for React - {count}</button>
            </div>
        )
    }

}

export default UserClass;