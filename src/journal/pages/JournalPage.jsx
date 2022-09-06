import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant='h1'>JournalPage</Typography> */}

      <NothingSelectedView />
      {/* NoteView */}
      
    </JournalLayout>
  )
}
