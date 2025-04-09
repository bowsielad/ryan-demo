import { NavLink, Outlet } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../context/DataContext"

export default function ProfilesPage() {
  // const profiles = [1, 2, 3, 4, 5]

  const { profiles } = useContext(DataContext)

  return (
    <section>
      <article>
      <h2>Profiles Page</h2>

      <div className="profiles">
        <nav className="profiles-links">
          {profiles.length
            ? profiles.map((profile) => (
                <NavLink
                  to={`/profiles/${profile}`}
                  key={profile}
                  className={({ isActive }) => {
                    return isActive ? "nav-active" : ""
                  }}
                >
                  Profile {profile}
                </NavLink>
              ))
            : "No profiles exist"}
        </nav>

        <div className="profile">
          <Outlet />
        </div>
      </div>
      </article>
      </section>
  )
}
