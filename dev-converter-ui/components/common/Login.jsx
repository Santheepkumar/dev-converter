import Image from "next/image";

function Login({ signInWithGoogle }) {
  return (
    <div className="text-center w-96 mx-auto mt-16 pl-2 mb-5 bg-dark-100 border rounded-md  pb-2 pt-2 ">
      <div className="bg-gray-50 p-2 w-4/5 shadow-2xl overflow-hidden border border-gray-300 rounded-xl m-8">
        <h1 className="text-dark-700 bg-white text-2xl p-2 border rounded-xl border-gray-300   font-thin">
          Login page
        </h1>
        <div className="flex mt-3 justify-center ml-5">
          <Image
            className="block h-5 mt-5 "
            src={require("../../assets/images/dark.png")}
            alt="converterdev"
            width="300"
            height="80"
          />
        </div>
        <div className="mb-14">
          <h1 className="mt-5 text-3xl text-dark-800">Welcome</h1>
          <h1 className="text-dark-600 mt-4 text-lg">Log in to dev converter.</h1>
        </div>
        <div className="mt-7 mb-5 w-44 mx-auto">
          <a
            className="p-1 flex justify-center  text-dark-800 text-base  rounded-md border border-dark-300 bg-gray-50 cursor-pointer"
            onClick={signInWithGoogle}
          >
            <Image
              className="block h-5 "
              src={require("../../assets/images/google.png")}
              alt="converterdev"
              width="35"
              height="35"
            />
            <div className="mt-1  ">Login with Google</div>
          </a>

          {/* <a className="p-1 flex justify-center text-dark-800  mt-5 text-base border border-gray-300 rounded-md">
            <Image
              className="block h-5"
              src={require("../../assets/images/github.png")}
              alt="converterdev"
              width="32"
              height="32"
            />
            <div className="mt-1">Login with GitHub</div>
          </a> */}
        </div>
      </div>
    </div>
  );
}
export default Login;
