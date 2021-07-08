import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: theme.palette.secondary.dark,
			color: theme.palette.secondary.contrastText,
			borderRadius: theme.spacing(2),
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
			'&:hover': {
				backgroundColor: theme.palette.secondary.light,
			},
		},
		delete: {
			color: theme.palette.error.main,
		},
		checked: {
			textDecoration: 'line-through',
		},
	})
)
