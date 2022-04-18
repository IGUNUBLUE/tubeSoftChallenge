import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Typography,
	CardActionArea,
	Badge,
	Tooltip,
} from "@material-ui/core";
import {
	AddShoppingCart,
	RemoveShoppingCart,
	ExpandMore,
	ClearAll,
} from "@material-ui/icons";

import useStyles from "./styles";
import { createCart } from "../../store/actions";
import findCurrentCart from "../../utils/findCurrentCart";

const CardComponent = ({ product }) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);
	const [badgeNumber, setBudgeNumber] = useState(0);
	const carts = useSelector((state) => state.carts);
	const user = useSelector((state) => state.user);

	useEffect(() => {
		const currentCart = findCurrentCart(carts)

		if (currentCart.products) {
			const foundProduct = currentCart.products.find(
				(p) => p.id === product.id
			);

			if (foundProduct) {
				return setBudgeNumber(foundProduct.products_carts.quantity);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleAddToCart = (productId, price) => () => {
		if (!carts.length) {
			const cartItem = {
				isCurrent: true,
				state: "open",
				paymentState: "unpaid",
				total: price,
				userId: user.id,
				price,
				productId,
			};
			dispatch(createCart(cartItem));
			setBudgeNumber(1);
		}
	};

	// const handleBadgeNumber = () => {
	// 	if (currentCart.products) {
	// 		const foundProduct = currentCart.products.find(
	// 			(p) => p.id === product.id
	// 		);

	// 		if (foundProduct) {
	// 			return foundProduct.products_carts.quantity;
	// 		}
	// 	}

	// 	return 0;
	// };
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={product.imageLink}
					title={product.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{product.name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{product.price} USD
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions disableSpacing>
				<Tooltip title="Add" arrow>
					<IconButton
						aria-label="add product"
						onClick={handleAddToCart(product.id, product.price)}
					>
						<Badge
							badgeContent={badgeNumber}
							color="primary"
							overlap="rectangular"
						>
							<AddShoppingCart />
						</Badge>
					</IconButton>
				</Tooltip>
				<Tooltip title="Remove one" arrow>
					<IconButton aria-label="remove product">
						<RemoveShoppingCart />
					</IconButton>
				</Tooltip>
				<Tooltip title="Clear all" arrow>
					<IconButton aria-label="clear all products">
						<ClearAll />
					</IconButton>
				</Tooltip>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMore />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Color: {product.color}</Typography>
					<Typography paragraph>Talla: {product.size}</Typography>
					<Typography paragraph>Marca: {product.brand}</Typography>
					<Typography paragraph>Genero: {product.gender}</Typography>
					<Typography paragraph>Tipo: {product.type}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default CardComponent;
