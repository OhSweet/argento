import Home from './pages/home'
import Scan from './pages/scan'
import Help from "./pages/help"
import Login from "./pages/login"
import Create from "./pages/create"
import ViewFragment from "./pages/viewFragment"
import MyFragments from "./pages/myFragments"

const routes = {
	home: {
		title: 'Explore',
		Page: Home,
		drawerInfo: {
			name: "Explore",
			icon: "map"
		}
	},
	scan: {
		title: 'Scan a QR code',
		Page: Scan,
		drawerInfo: {
			name: "Scan fragment",
			icon: "settings-overscan"
		}
	},
	help: {
		title: "Help",
		Page: Help,
		drawerInfo: {
			name: "Help and support",
			icon: "help-outline"
		}
	},
	login: {
		title: "Login",
		Page: Login,
		hideNavbar: true
	},
	create: {
		title: "Create fragments",
		Page: Create,
		hideNavbar: false,
		drawerInfo: {
			name: "Create fragments",
			icon: "add-location"
		}
	},
	viewFragment: {
		title: "View Fragment",
		Page: ViewFragment,
		hideNavbar: false
	},
	myFragments: {
		title: "My fragments",
		Page: MyFragments,
		hideNavbar: false,
		drawerInfo: {
			name: "My fragments",
			icon: "list"
		}
	}

}

export default routes
