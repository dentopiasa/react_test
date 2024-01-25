export default function Display({name, email, password}){
    return(
        <div className="cv">
        <p>your username: {name}</p>
        <p>your email: {email}</p>
        <p>your password: {password}</p>
        </div>
    );
}
