import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {
            minWidth: 650,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }),
);

function createData(nickname: string, sdn: string, listing: string, active: boolean) {
    return { nickname, sdn, listing, active };
}

const rows = [
    createData('A1', "GQ9AK01MB9A", "la casa esa fea", true),
    createData('A2', "B09AN19B0QM", "el crack house", false),
    createData('bro yo ni se donde puse este alexa', "BA901NLR003", "Heloooo", false),
    createData('C3', "1OIJGAGDNLA", "Listing 1", true),
    createData('C1', "348TUABNJAE", "Listing 1", true),
];

export default function BasicTable() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleChangePicker = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Alexa SDN</TableCell>
                        <TableCell>Nickname</TableCell>
                        <TableCell align="left">Asigned to Listing</TableCell>
                        <TableCell align="left">Active?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.nickname}>
                            <TableCell align="left">{row.sdn}</TableCell>
                            <TableCell component="th" scope="row">
                                <TextField id="standard-basic" defaultValue={row.nickname} multiline />
                            </TableCell>
                            <TableCell align="left">
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={row.listing}
                                        onChange={handleChangePicker}
                                    >
                                        <MenuItem value={"Listing 1"}>Listing 1</MenuItem>
                                        <MenuItem value={"Heloooo"}>Heloooo</MenuItem>
                                        <MenuItem value={"la casa esa fea"}>la casa esa fea</MenuItem>
                                        <MenuItem value={"el crack house"}>el crack house</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="left">
                                <Switch
                                    checked={state.checkedA}
                                    onChange={handleChange}
                                    name="checkedA"
                                    color="primary"
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}