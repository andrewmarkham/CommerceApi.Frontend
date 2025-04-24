import { ToastContainer, Zoom } from 'react-toastify';

export const Toaster = () => {
    return (
        <ToastContainer position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Zoom}/>
    )
}
;