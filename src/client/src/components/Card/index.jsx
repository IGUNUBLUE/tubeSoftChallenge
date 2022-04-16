import { useState } from "react";
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

const CardComponent = ({ product }) => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={product.imageLink}
					title="Contemplative Reptile"
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
					<IconButton aria-label="add product">
						<Badge badgeContent={1} color="primary" overlap="rectangular">
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
