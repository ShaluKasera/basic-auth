
import { TextField} from "@mui/material";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="rounded border w-[80%] md:w-[50%] lg:w-[25%] p-6 bg-white  ">
        <p className="text-xl font-semibold mb-0">Signin to Your PopX Account</p>
<p className="text-gray-400 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptate!</p>
        <form className="flex flex-col gap-2">
          
          <TextField label="Email Address" variant="outlined" fullWidth />
          <TextField label="Password" type="password" variant="outlined" fullWidth />

          

          <button type="submit" className="block text-center text-black bg-purple-300 border-2 border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 px-4 py-2 rounded mb-2 no-underline transition-all duration-500">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
