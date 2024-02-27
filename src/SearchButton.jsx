import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchButton() {
    return (
        <div style={{ marginBottom: "1.5rem" }}>
            <Button variant="contained" type="submit" >
                <SearchIcon /> Search
            </Button>
        </div>
    );
}