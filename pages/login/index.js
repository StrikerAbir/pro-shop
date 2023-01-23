import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { currentUser } from "../../all_structure/redux/features/userSlice";


const Login = () => {
  const dispatch = useDispatch();
  const router=useRouter();
    const handleLogin = (event) => {
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          const userData = {
            email,
            password,
          };
          // console.log(userData);
        fetch("http://localhost:1000/user/login", {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.length>0) {
                console.log(data);
                dispatch(currentUser(data));
                toast.success("Successfully Login...")
                router.push("/");
              } else {
                  toast.error('Login failed..')
              }
            });
    }
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="hero w-full">
          <div className="hero-content flex-col w-full lg:flex-row">
            <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl text-center font-bold">Login now!</h1>
              {/* form */}
              <form onSubmit={handleLogin} className="card-body ">
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
                  {/* <label className="label">
                  <Link href="/forget" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label> */}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-green-500 hover:bg-green-400 border-none text-white"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>

              <p className="text-center">
                New Here?
                <Link className="text-green-500 font-bold ml-2" href="/signUp">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;

Login.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}