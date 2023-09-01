import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {

    return (
        <Stack style={styles.spinner} sx={{ color: 'grey.500' }} spacing={5} direction="row">
            <CircularProgress color="inherit" />
        </Stack>
    )
};

export default Spinner;

const styles = {
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
    }
}