import { FaRegUserCircle, FaCamera } from "react-icons/fa";

const Profile = () => {
  const user = {
    name: "Shalu Kumari",
    email: "shalu@gmail.com",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="rounded h-[500px] border w-[80%] md:w-[50%] lg:w-[25%]  bg-white shadow-md">
        <p className="font-bold text-2xl  p-6">Account Setting</p>

        <div
          className="flex items-center mb-0 border-b-2 border-dotted border-gray-300
 bg-gray-100 space-x-6"
        >
          <div className="relative p-4">
            <FaRegUserCircle className="text-7xl text-gray-500" />

            <div className="absolute top-16 right-4 bg-white p-1 rounded-full shadow-md cursor-pointer">
              <FaCamera className="text-purple-600 text-sm" />
            </div>
          </div>

          <div>
            <p className="font-semibold text-xl mb-1">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <p className="text-sm p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          iusto.
        </p>
      </div>
    </div>
  );
};

export default Profile;
