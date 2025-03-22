import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
const PrivateRoute = ({ children }) => {
  let token = Cookies.get("Token");
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    (async () => {
      try {
        if (!!token === true) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        console.error(error);
        setIsLogin(false);
      } finally {
        setLoading(false); // Set loading to false after verification
      }
    })();
  }, [token]);

  console.log(!!token);

  if (loading) {
    return (
      <div className={`loader__inner active`}>
        <div className='mover'></div>
      </div>
    );
  }

  //   return children;

  return isLogin ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
