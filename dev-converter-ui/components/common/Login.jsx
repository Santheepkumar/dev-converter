import Image from "next/image";

function Login({ signInWithGoogle }) {
  return (
    <div className="text-center bg-white w-96 rounded-xl mx-auto mt-48">
      <div className="py-20">
        <div className="flex justify-center ml-5">
          <Image
            className="block h-5 "
            src={require("../assets/images/dark.png")}
            alt="converterdev"
            width="300"
            height="80"
          />
        </div>
        <div className="mb-14">
          <h1 className="mt-5 text-3xl text-dark-800">Welcome</h1>
          <h1 className="text-dark-600 mt-4 text-lg">
            Log in to dev converter.
          </h1>
        </div>
        <div className="mt-7 ml-7 w-80">
          <a
            className="p-1 flex justify-center  text-dark-800 text-base  rounded-md border border-dark-300 bg-white cursor-pointer"
            onClick={signInWithGoogle}
          >
            <Image
              className="block h-5 "
              src={require("../assets/images/google.png")}
              alt="converterdev"
              width="35"
              height="35"
            />
            <div className="mt-1">Login with Google</div>
          </a>

          {/* <a className="p-1 flex justify-center text-dark-800  mt-5 text-base border border-gray-300 rounded-md">
            <Image
              className="block h-5"
              src={require("../assets/images/github.png")}
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
