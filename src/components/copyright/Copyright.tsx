import { Link, Typography } from '@mui/material';
//---------------------------------------------------------------------

function Copyright(props: any) {
  return (
    <Typography variant="h5" color="text.secondary" align="center" {...props}>
      {'copyright © '}
      <Link color="inherit" href="/" mr={0.5}>
        Elearning
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;
