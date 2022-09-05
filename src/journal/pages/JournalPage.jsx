/* import { Typography } from '@mui/material' */

import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant='h1'>JournalPage</Typography> */}

      <NothingSelectedView />
      {/* NoteView */}
      
    </JournalLayout>
  )
}
