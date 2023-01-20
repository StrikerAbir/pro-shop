import Link from "next/link";


const SignUp = () => {
    const handleSignUp = () => {
        
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
                    className="btn bg-green-500 hover:bg-green-400 border-none"
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
      </div>
    );
};

export default SignUp;

SignUp.getLayout = function PageLayout(page) {
  return <>{page}</>;
};