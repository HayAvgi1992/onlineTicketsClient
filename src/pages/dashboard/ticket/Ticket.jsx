import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
// import { DataGrid } from '@mui/x-data-grid'
import TicketTable from '../../../components/ticketTable/TicketTable'
import { useValue } from '../../../context/ContextProvider'
import { getTicketsData } from '../../../actions/ticket'

const Ticket = () => {
    const {
        state: { tickets },
        dispatch 
    } = useValue()

    const [ticketDataRows, setTicketDataRows] = useState(tickets)

    useEffect(() => {
        getTicketsData(dispatch)
    }, [])

    useEffect(() => {
        setTicketDataRows(tickets)
    }, [tickets])

    return (
        <Box
            sx={{
                height: 400,
                width: '100%',
            }}
        >
            <Typography
                variant='h3'
                component='h3'
                sx={{
                    textAlign: 'center',
                    mt: 3,
                    mb: 3
                }}
            >
                Manage Tickets
            </Typography>

            <TicketTable rows={ticketDataRows} />


        </Box>
    )
}

export default Ticket