import { Backdrop } from '@mui/material'

/* Defining the props that the component will receive. */
interface ILoading {
  open?: boolean
}

/* A function that returns a JSX element. */
export const Loading = (props: ILoading) => {
  const { open = false } = props

  return (
    <>
      {open && (
        <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 99999 }} open={open}>
          <span className="loader"></span>
        </Backdrop>
      )}
    </>
  )
}
