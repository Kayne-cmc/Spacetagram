import React from 'react';
import { TextField, Button } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDayJs from '@mui/lab/AdapterDayjs';

export default function DateSelector(props) {
    function formatDate(dateToFormat) {
        const offset = dateToFormat.getTimezoneOffset();
        dateToFormat = new Date(dateToFormat.getTime() - (offset * 60 * 1000));
        return dateToFormat.toISOString().split('T')[0];
    }

    return (
        <div className="DateSelector">
            <LocalizationProvider dateAdapter={AdapterDayJs}>
                <DatePicker
                    label="From"
                    inputFormat="YYYY-MM-DD"
                    value={props.startDate}
                    onChange={(value) => props.setStartDate(formatDate(value.$d))}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                    label="To"
                    inputFormat="YYYY-MM-DD"
                    value={props.endDate}
                    onChange={(value) => props.setEndDate(formatDate(value.$d))}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <Button onClick={() => props.search("date")}>Find</Button>
        </div>
    )
}
