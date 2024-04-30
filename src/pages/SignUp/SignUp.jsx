import PageHeading from '../../ui/PageHeading';

function SignUp() {
  return (
    <section id="sign up" className="bg-aboutBgImage">
      <PageHeading title="Sign Up" />
      <div className="page-padding container flex justify-center py-20">
        <form className="flex w-[35rem] flex-col gap-8 bg-black p-14">
          <div>
            <h2 className="mb-2 text-2xl text-white">Email</h2>
            <input
              type="mail"
              placeholder="gymate@gmail.com"
              className="h-12 w-full p-4 outline-none"
            />
          </div>
          <div>
            <h2 className="mb-2 text-2xl text-white">Password</h2>
            <input
              type="password"
              placeholder="password"
              className="h-12 w-full p-4 outline-none"
            />
          </div>
          <button className="h-14 w-full bg-red-500 text-xl text-white">
            Sign Up
          </button>
          <div>
            <p className="text-white">
              Already have account?{' '}
              <span className="text-red-500">Sign In</span>
            </p>
            <p className="text-neutral-300">
              ( Make <span className="text-red-500">new Accout</span> or go to{' '}
              {''}
              <span className="text-red-500">Sign In</span> Page for Test
              Account )
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
