import { NavLink } from "react-router-dom"

export function UsersNavBar() {
	return (
		<div style={{ background: "lightblue", padding: 20 }}>
			<NavLink
				to="/users/premium"
				style={({ isActive }) =>
					isActive ? { textDecoration: "strike-through", color: "black" } : undefined
				}
			>
				Premium Users
			</NavLink>
			<br />
			<NavLink
				style={({ isActive }) =>
					isActive ? { textDecoration: "strike-through", color: "black" } : undefined
				}
				to="/users/regular"
			>
				Regular Users
			</NavLink>
		</div>
	)
}import { NavLink } from "react-router-dom"

export function UsersNavBar() {
	return (
		<div style={{ background: "lightblue", padding: 20 }}>
			<NavLink
				to="/users/premium"
				style={({ isActive }) =>
					isActive ? { textDecoration: "strike-through", color: "black" } : undefined
				}
			>
				Premium Users
			</NavLink>
			<br />
			<NavLink
				style={({ isActive }) =>
					isActive ? { textDecoration: "strike-through", color: "black" } : undefined
				}
				to="/users/regular"
			>
				Regular Users
			</NavLink>
		</div>
	)
}