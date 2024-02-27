import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [Transparent, setTransparent] = useState(true)
  const location = useLocation()
  const handleLocation = ()=>{
    console.log(Transparent);
    if(location.pathname!=="/"){
      setTransparent(false)
    }else{
      setTransparent(true)
    }
  }
  useEffect(() => {
      handleLocation()
  }, [location])
  
  return (
    <nav className="bg-transparent w-full absolute z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className={`self-center text-2xl font-bold whitespace-nowrap text-${Transparent?"white":"gray-900"}`}>Hospito</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className={`text-white bg-gray-700 font-medium rounded-lg text-sm px-4 py-2 text-center px-6`}>Sign Up</button>
        </div>
      </div>
    </nav>

  );
}

export default Nav;