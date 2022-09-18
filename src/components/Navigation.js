import { withRouter, NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/", exact: true },
  { name: "New Comment", to: "/new-comment" },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}

        {/* <li className="nav-li">
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about-us">about-us</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li> */}
      </ul>
    </nav>
  );
};
export default withRouter(Navigation);
