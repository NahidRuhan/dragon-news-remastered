import { Link } from "react-router-dom";

const Other = () => {
    return (
        <div className="flex flex-col justify-center text-center">
            <h1 className="font-bold text-3xl text-center py-20">Come Back Later</h1>
            <div><Link to='/'><button className="btn btn-primary">Go Back</button></Link></div>
        </div>
    );
};

export default Other;