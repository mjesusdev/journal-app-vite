import { Toolbar } from '@mui/material'
import { Box } from '@mui/system'

import { NavBar } from '../components/NavBar'
import { Sidebar } from '../components/Sidebar'

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        {/* Navbar */}
        <NavBar drawerWidth={ drawerWidth }/>

        {/* Sidebar */}
        <Sidebar drawerWidth={ drawerWidth }/>

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />

            { children }
        </Box>
    </Box>
  )
}
