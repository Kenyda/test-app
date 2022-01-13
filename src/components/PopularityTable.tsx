import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {TABLE_DATA} from "../utils/texts";
import Paper from '@mui/material/Paper';

const PopularityTable = () => {
    const createRow = (country: string, count: number, description: string) => {
        return { country, count, description };
    }

    const rows = TABLE_DATA.map(row => createRow(row.country, row.catsCount, row.description));

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={row.country}
                        >
                            <TableCell scope="row">№{index + 1}</TableCell>
                            <TableCell>{row.country}</TableCell>
                            <TableCell>{row.count} млн</TableCell>
                            <TableCell>{row.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default PopularityTable;