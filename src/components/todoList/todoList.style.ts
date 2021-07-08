import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: theme.palette.primary.main,
			height: '100%',
			overflowY: 'auto',
			paddingLeft: theme.spacing(3),
			paddingRight: theme.spacing(3),
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
			borderRadius: theme.spacing(2),
			boxShadow:
				'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
			[theme.breakpoints.up('md')]: {
				width: '50%',
				height: '50%',
			},
		},
	})
);
