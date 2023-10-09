import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import { createPortal } from 'react-dom'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.OnClose} />
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal} >
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}
const PortalElement = document.getElementById('overlays')
const Modals = (props) => {
    return <Fragment>
        {createPortal(<Backdrop OnClose={props.onClose} />, PortalElement)}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}
    </Fragment>
}

export default Modals