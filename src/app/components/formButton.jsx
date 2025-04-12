import React from "react";
import CheckIcon from "@/app/components/icons/checkIcon";
import ErrorIcon from "@/app/components/icons/errorIcon";

function FormButton({state}) {
    return (
        <button
            className={`
        btn mt-5 w-full px-16 force-outline
        transition-all duration-300 ease-in-out
        border-2
        ${buttonType(state)}
      `}
            disabled={state.isLoading || !state.formFilled}
        >
            {buttonBody(state.isLoading, state.msgSent, state.error)}
        </button>
    );
}

function buttonBody(isLoading, msgSent, error) {
    if (isLoading) return <span className="loading loading-spinner"></span>;
    if (msgSent) return <><CheckIcon/> Message sent</>
    if (error) return <><ErrorIcon/> Something went wrong</>
    return 'Submit';
}

function buttonType(state) {
    if (!state.formFilled || state.isLoading)
        return 'bg-transparent text-primary border-primary cursor-not-allowed hover:bg-transparent hover:text-primary';
    if (state.msgSent)
        return 'bg-success text-white border-success';
    if (state.error)
        return 'bg-error text-white border-error';
    return 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white';
}

export default FormButton;