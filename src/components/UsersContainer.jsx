import { Outlet } from "react-router-dom"
import { UsersNavBar } from "./UsersNavBar"

export function UsersContainer() {
	return (
		<div style={{ display: "flex" }}>
			<UsersNavBar />
			<Outlet />
		</div>
	)
}