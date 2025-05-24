import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="rounded border w-[80%] md:w-[50%] lg:w-[25%] p-6 bg-white ">
        <p className="text-xl font-semibold mb-4">Create Your PopX Account</p>

        <form className="flex flex-col gap-2">
          <TextField label="Full Name" variant="outlined"  fullWidth />
          <TextField label="Phone Number" variant="outlined" fullWidth />
          <TextField label="Email Address" variant="outlined" fullWidth />
          <TextField label="Password" type="password" variant="outlined" fullWidth />
          <TextField label="Company Name" variant="outlined" fullWidth />

          <FormControl >
            <FormLabel>Are you an Agency?</FormLabel>
            <RadioGroup row defaultValue="no" name="agency" className="mb-10">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <Link to='/profile' type="submit" className="block text-center text-black bg-purple-300 border-2 border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 px-4 py-2 rounded mb-2 no-underline transition-all duration-500">Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
