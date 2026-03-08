import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import DownloadReasonForm from '../../Molecules/DownloadReasonForm/DownloadReasonForm'

type DialogProps = {
    open: boolean
    onClose: () => void
}

const DownloadDialog = ({ open, onClose }: DialogProps) => {
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
                onClose()
            }}
        >
            <header>
                <h2 className="title">{t('downloadDialog.title')}</h2>
                <X
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
            <DownloadReasonForm closeDialog={onClose} />
        </dialog>
    )
}

export default DownloadDialog
