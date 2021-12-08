import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { counterActions } from "../../store/counter";

const ReduxBasics = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };
  const loginHandler = () => {
    dispatch(authActions.login());
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div>
      <div className="border border-primary">
        <p>Redux counter example</p>
        {show && <p>{counter}</p>}
        {/* can also conditionally render components */}
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={toggleHandler}>Toggle</button>
      </div>
      <div className="mt-2 border border-success">
        <p>Redux auth example</p>
        <button onClick={loginHandler}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
        {isAuth && <p>You are logged in!</p>}
        {!isAuth && <p>You are not logged in!</p>}
      </div>
    </div>
  );
};

export default ReduxBasics;
