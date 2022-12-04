import Input from "./input";

const AuthformikControl = (props)=>{
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        default:
            return null;
    }
}
export default AuthformikControl;