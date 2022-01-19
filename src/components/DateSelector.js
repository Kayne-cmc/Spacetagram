import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDayJs from '@mui/lab/AdapterDayjs';

import './DateSelector.css';

export default function DateSelector(props) {
    
    function formatDate(dateToFormat) {
        const offset = dateToFormat.getTimezoneOffset();
        dateToFormat = new Date(dateToFormat.getTime() - (offset * 60 * 1000));
        return dateToFormat.toISOString().split('T')[0];
    }

    return (
        <div className="DateSelector">
            <Typography variant="h6" sx={{ display:"inline-block", margin:"0.5em" }}>Search by date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayJs}>
                <div className="date-picker">
                    <DatePicker
                        label="From"
                        inputFormat="YYYY-MM-DD"
                        value={props.startDate}
                        onChange={(value) => props.setStartDate(formatDate(value.$d))}
                        renderInput={(params) => <TextField sx={{width: 250, margin:"0"}}{...params} />}
                    />
                </div>
                <div className="date-picker">
                    <DatePicker
                        label="To"
                        inputFormat="YYYY-MM-DD"
                        value={props.endDate}
                        onChange={(value) => props.setEndDate(formatDate(value.$d))}
                        renderInput={(params) => <TextField sx={{ width:250, margin:"0"}} {...params} />}
                    />
                </div>
            </LocalizationProvider>

            <Button onClick={() => props.search("date")} sx={{ margin:"auto 2px" }}>Find</Button>
        </div>
    )
}
