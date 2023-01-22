import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { currentUser } from "../../all_structure/redux/features/userSlice";


const SignUp = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userR);
    console.log(user);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userData = {
            name,email,password
        }
        // console.log(userData);
        fetch("http://localhost:1000/user/addUser", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.result);
                if (data.isExist) {
                    toast.success('Already have account with this email. Login...')
                    console.log(data);
                } else {
                    dispatch(currentUser(data.result))
                    toast.success('Successfully Signed In..')
                     window.location.href = "/";
                }
        })
    }

    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="hero w-full">
          <div className="hero-content flex-col w-full lg:flex-row">
            <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl text-center font-bold">Sign Up</h1>
              {/* form */}
              <form onSubmit={handleSignUp} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="user name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn text-white bg-green-500 hover:bg-green-400 border-none"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>

              <p className="text-center">
                Already have an account?
                <Link className="text-green-500 font-bold ml-2" href="/login">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    );
};

export default SignUp;

SignUp.getLayout = function PageLayout(page) {
  return <>{page}</>;
};