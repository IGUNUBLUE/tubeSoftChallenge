import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	Toolbar,
	AppBar,
	IconButton,
	Typography,
	Badge,
	MenuItem,
	Menu,
} from "@material-ui/core";
import { AccountCircle, ShoppingCart, More } from "@material-ui/icons";

import useStyles from "./styles";
import { logOut } from "../../store/actions";

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleLogOut = () => {
		dispatch(logOut())
		handleMenuClose()
		
		return navigate("/")
	}

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleLogOut}>Log out</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="cart notifications" color="inherit">
					<Badge badgeContent={1} color="secondary" overlap="rectangular">
						<ShoppingCart />
					</Badge>
				</IconButton>
				<p>Cart</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position="fixed" color="primary">
				<Toolbar>
					<img
						src="/images/TB_logo.png"
						alt="Logo tubesoft"
						className={classes.logo}
					/>
					<Typography className={classes.title} variant="h6" noWrap>
						Tubesoft Store
					</Typography>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton aria-label="cart items" color="inherit">
							<Badge badgeContent={1} color="secondary" overlap="rectangular">
								<ShoppingCart />
							</Badge>
						</IconButton>
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<More />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
};

export default Navbar;
