import React from "react";
import DownloadIcon from "@/app/components/icons/downloadIcon";

function FormButton({state, submitBtnRef}) {
    console.log('state in button is', state)
    return <button ref={submitBtnRef}
                   className={`btn btn-outline  mt-5 w-full px-16
                    transition-all duration-300 ease-in-out
                    ${!state.isValid ? 'btn-disabled' : ''}
                    ${!state.msgSent ? 'btn-primary btn-outline' : 'btn-success'}`}
                   disabled={state.isLoading || !state.isValid}>
        {buttonBody(state.isLoading, state.msgSent)}
    </button>

}

function buttonBody(isLoading, msgSent) {
    if (isLoading) return <span className="loading loading-spinner "></span>
    return msgSent ? (<><DownloadIcon/> Message sent</>) : "Submit"

}

export default FormButton