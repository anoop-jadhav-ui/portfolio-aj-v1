import './DownloadReasonForm.scss'

import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { CgSoftwareDownload } from 'react-icons/cg'
import { z } from 'zod'
import { useLocaleAlertBanner } from '../../../context/LocalAlertBannerContext'
import axiosInstance from '../../../helpers/axios'
import Button from '../../Atoms/Button/Button'
import LocalBanner from '../../Atoms/LocalBanner/LocalBanner'

type DownloadReasonForm = {
    name: string
    email: string
    message: string
}

const defaultValues: DownloadReasonForm = {
    name: '',
    email: '',
    message: '',
}

const DownloadReasonForm = ({
    onDownload,
    closeDialog,
}: {
    onDownload: () => Promise<void>
    closeDialog: () => void
}) => {
    const { t } = useTranslation()
    const { showAlertBanner } = useLocaleAlertBanner()

    const messageFormSchema = z.object({
        name: z.string().min(1, {
            message: t('common.validations.required', {
                name: t('inputs.fullName'),
            }),
        }),
        email: z
            .string()
            .min(1, {
                message: t('common.validations.required', {
                    name: t('inputs.emailAddress'),
                }),
            })
            .max(50, {
                message: t('common.validations.maxEmailLengthReached'),
            })
            .email({
                message: t('common.validations.invalidEmailError'),
            }),
        message: z.string().min(1, {
            message: t('common.validations.required', {
                name: t('inputs.message'),
            }),
        }),
    })

    const methods = useForm<DownloadReasonForm>({
        resolver: zodResolver(messageFormSchema),
        defaultValues,
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = methods

    const [isLoading, setLoading] = useState(false)

    const successHandler: SubmitHandler<DownloadReasonForm> = async (data) => {
        const { name, email, message } = data
        try {
            setLoading(true)
            const response = await axiosInstance.post('/mail', {
                email,
                name,
                message,
                section: 'Download',
            })

            if (response.data.msg === 'success') {
                showAlertBanner('success', t('messageSentSuccess'))
                await onDownload()
                reset()
                closeDialog()
            } else if (response.data.msg === 'fail') {
                showAlertBanner('error', t('sorryCouldntSendMsg'))
            }
        } catch (e: unknown) {
            showAlertBanner('error', t('sorryCouldntSendMsg'))
        } finally {
            setLoading(false)
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.stopPropagation()
                e.preventDefault()
                handleSubmit(successHandler)(e)
            }}
            noValidate
        >
            <div className="primary-color body-text form-wrapper">
                <div className="input-form-control">
                    <label htmlFor="name">{t('inputs.fullName')}</label>
                    <input
                        {...register('name')}
                        placeholder={t('inputs.placeholders.fullName')}
                        name="name"
                        id="name"
                        className={errors.name ? 'highlight-error' : ''}
                        autoFocus
                    />
                    {errors.name && (
                        <span className="error-message-label">
                            {errors.name?.message}
                        </span>
                    )}
                </div>
                <div className="input-form-control">
                    <label htmlFor="email">{t('inputs.emailAddress')}</label>
                    <input
                        {...register('email')}
                        placeholder={t('inputs.placeholders.emailAddress')}
                        name="email"
                        type="email"
                        id="email"
                        className={errors.email ? 'highlight-error' : ''}
                    />
                    {errors.email && (
                        <span className="error-message-label">
                            {errors.email?.message}
                        </span>
                    )}
                </div>
                <div className="input-form-control">
                    <label htmlFor="message">{t('inputs.message')}</label>
                    <textarea
                        {...register('message')}
                        placeholder={t('inputs.placeholders.downloadMessage')}
                        name="message"
                        id="message"
                        className={errors.message ? 'highlight-error' : ''}
                    />
                    {errors.message && (
                        <span className="error-message-label">
                            {errors.message?.message}
                        </span>
                    )}
                </div>
                <LocalBanner />
            </div>
            <div className="button-wrapper">
                <Button
                    className={isLoading ? 'loading' : ''}
                    disabled={isLoading}
                    type="submit"
                    label={t('button.downloadCv')}
                    Icon={
                        isLoading
                            ? AiOutlineLoading3Quarters
                            : CgSoftwareDownload
                    }
                />
            </div>
        </form>
    )
}

export default DownloadReasonForm
