const Header = () => {
  return (
      // NAVBAR START
      <div className="header-contaier">
          <div className="navbar bg-base-100">
              <div className="flex-1">
                  <a className="btn btn-ghost text-4xl font-bold">Recipe Calories</a>
                  <ul className="flex justify-between items-center gap-10 ml-80 tetx-4xl font-bold">
                      <li>Home</li>
                      <li>Recipe</li>
                      <li>About</li>
                      <li>Search</li>
                  </ul>
              </div>
              <div className="flex-none gap-2">
                  <div className="form-control">
                      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                  </div>
                  <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                      </div>
                      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                          <li>
                              <a className="justify-between">
                                  Profile
                                  <span className="badge">New</span>
                              </a>
                          </li>
                          <li><a>Settings</a></li>
                          <li><a>Logout</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/n1qFLJL/pots-vegetables-harvest.jpg)'}}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                      <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                      <button className="btn btn-accent">Explore Now</button>
                      <button className="btn btn-secondary ml-10">Our Feedback</button>
                  </div>
              </div>
          </div>
          <br /><br /><br /><br />
          <h1 className="text-4xl font-bold text-center">OUR RECIPES</h1>
          <p className="text-xl text-center mt-5">Secret blend, culinary finesse, memories shared. Our recipe delights palates, creating moments cherished, flavors savored, leaving diners longing.</p>
      </div>
      // navbar end
  );
};

export default Header;

