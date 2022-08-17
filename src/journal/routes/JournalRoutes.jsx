import { Route, Routes } from "react-router-dom"

export const JournalRoutes = () => {
  return (
    <Routes>
        <AppRouterte path='/' element={ <JournalPage /> } />

        <Route path='/*' element={ <Navigate to='/' />} />
    </Routes>
  )
}
