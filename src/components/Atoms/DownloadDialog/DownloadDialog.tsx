import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { CgClose } from 'react-icons/cg'
import LocalAlertBannerProvider from '../../../context/LocalAlertBannerContext'
import DownloadReasonForm from '../../Molecules/DownloadReasonForm/DownloadReasonForm'
import './DownloadDialog.css'

type DialogProps = {
    open: boolean
    onClose: () => void
    onDownload: () => Promise<void>
}

const DownloadDialog = ({ open, onClose, onDownload }: DialogProps) => {
    const { t } = useTranslation()
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (open) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [open])

    return (
        <dialog
            className="dialog"
            ref={dialogRef}
            onClose={() => {
                dialogRef.current?.close()
                onClose()
            }}
        >
            <header>
                <h2 className="title">{t('downloadDialog.title')}</h2>
                <CgClose
                    className="close-icon"
                    color="var(--primary-color)"
                    cursor="pointer"
                    onClick={onClose}
                    fontSize="1.25rem"
                />
            </header>
            <p className="subsection-title body-text">
                {t('downloadDialog.description')}
            </p>
            <LocalAlertBannerProvider>
                <DownloadReasonForm
                    onDownload={onDownload}
                    closeDialog={onClose}
                />
            </LocalAlertBannerProvider>
        </dialog>
    )
}

export default DownloadDialog
