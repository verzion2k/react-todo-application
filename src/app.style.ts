import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme =>
	createStyles({
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			overflowY: 'hidden',
			padding: theme.spacing(2),
			backgroundColor: theme.palette.secondary.main,
		},
	})
);
