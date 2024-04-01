import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";

const Form = ({
    isSignInPage = false,
}) => {
    const [data, setData] = useState({
        ...(!isSignInPage && {
            fullName: ''
        }),
        email: '',
        password: ''
    })

    console.log(data);
    return ( 
        <div className="bg-white w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
            <div className="text-4xl font-extrabold">Welcome {isSignInPage && 'Back'}</div>
            <div className="text-xl font-simple mb-6">{isSignInPage ?'Sign in to continue':'Sign up to get Started'}</div>

            <form className="flex flex-col items-center w-full" onSubmit={() => console.log('Submitted')}>
                {!isSignInPage && <Input label="Full Name" name="Name" placeholder="Enter your full name" className="mb-6" value={data.fullName} onChange={(e) => setData({...data,fullName: e.target.value})}/> }
                <Input label="Email" type="email" name="Email" placeholder="Enter your email" className="mb-6" value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
                <Input label="Password" name="Password" type="Password" placeholder="Enter your Password" className="mb-14" value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
                <Button label={isSignInPage ? 'Sign in':"Sign up"} type="submit" className="w-1/2" />
            </form>

            <div className=" mt-3">{isSignInPage ? "Didn't have an account?":'Already have an acoount?'}<span className="text-primary cursor-pointer underline ">{isSignInPage ?'Sign up':'Sign in'}</span></div>
        </div>
     );
}

export default Form;
