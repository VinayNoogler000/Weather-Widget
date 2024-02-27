import TextField from '@mui/material/TextField';

export default function SearchBox({ location, updateLocation }) {

    function handleChange(event) { //handler for 'change' event, defined on <SearchBox /> component
        updateLocation(event.target.value);
    }

    return (
        <TextField style={{ marginBottom: "1.25rem" }}
            label="City/Town/Village"
            type="search"
            variant="filled"
            placeholder="Enter"
            value={location}
            onChange={handleChange}
            required
        />
    );
}