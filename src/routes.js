import Home from './pages/home'
import Scan from './pages/scan'
import Help from "./pages/help"
import Login from "./pages/login"

// components

const routes = {
	home: {
		title: 'Explore',
		Page: Home,
		drawerInfo: {
			name: "Explore",
			icon: "bookmark-border"
		}
	},
	scan: {
		title: 'Scan a QR code',
		Page: Scan,
		drawerInfo: {
			name: "Scan fragment",
			icon: "bookmark-border"
		}
	},
	help: {
		title: "Help",
		Page: Help,
		drawerInfo: {
			name: "Help and support",
			icon: "bookmark-border"
		}
	},
	login: {
		title: "Login",
		Page: Login,
		hideNavbar: true,
		drawerInfo: {
			name: "Login with FB",
			icon: "bookmark-border"
		}
	}
}

export default routes
