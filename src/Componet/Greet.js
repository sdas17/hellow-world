import react from 'react';

// function Greet(){
//     return <h1>Welcome</h1>
// }
const Greet=props=>{
    const{name,heronmae}=props

{
return (<div>
<h1>Hellow {name} favourite heroname{heronmae}</h1>
{/* {props.children} */}
</div>)
}}
export default Greet 