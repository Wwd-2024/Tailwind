import { Component } from 'react';
import UserClass from './UserClass';
import Dummy from './Dummy';

const About = () => {

return (
    <div>
        <UserClass name={'Wonder Woman Divya'} mentor={'Akshay Saini'}/>
    </div>
)

}



// class About extends Component {
//     constructor(props){
//         super(props);
//         console.log('Parent constr');
//     }

//     componentDidMount(){
//         console.log('Parent mounted');
//     }
//     render() {
//         console.log('Parent render');
//         return (
//             <div>
//                 <UserClass name={'Wonder Woman Divya'} mentor={'Akshay Saini'}/>
//                 {/* <Dummy name={'cc'} />
//                 <UserClass name={'dd'} mentor={'Akshay Saini'}/> */}

//             </div>
//         )

//         }

// }
     
    
export default About;