import { Link, Outlet, useNavigate } from "react-router-dom";

export const P1 = () => {
  return <div>This is p1's page</div>;
};
export const P2 = () => {
  return <div>This is p2's page</div>;
};
export const Practise = () => {
  const navigate = useNavigate();
  function handle() {
    navigate("/practise/p1");
  }
  function handle1() {
    navigate("/practise/p2");
  }
  return (
    <div>
      Hello this is a practise page
      <button onClick={handle}>P1's Page</button>
      <button onClick={handle1}>P2's Page</button>
      <Outlet />
    </div>
  );
};
