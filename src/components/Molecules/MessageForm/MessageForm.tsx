import './MessageForm.css'

import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { RiMailSendLine } from 'react-icons/ri'
import { z } from 'zod'
import { useAlertBanner } from '../../../context/AlertBannerContext'
import axiosInstance from '../../../helpers/axios'
import Button from '../../Atoms/Button/Button'

type MessageFormType = {
    name: string
    email: string
    message: string
}

const defaultValues: MessageFormType = {
    name: '',
    email: '',
    message: '',
}

export const MessageForm = () => {
    const { t } = useTranslation()

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

    const methods = useForm<MessageFormType>({
        resolver: zodResolver(messageFormSchema),
        defaultValues,
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = methods

    const { showAlertBanner } = useAlertBanner()
    const [isLoading, setLoading] = useState(false)

    const successHandler: SubmitHandler<MessageFormType> = async (data) => {
        const { name, email, message } = data
        try {
            setLoading(true)
            const response = await axiosInstance.post('/mail', {
                email,
                message,
                name,
                section: 'Get In Touch',
            })

            if (response.data.msg === 'success') {
                showAlertBanner('success', t('messageSentSuccess'))
                reset()
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
        <form onSubmit={handleSubmit(successHandler)} noValidate>
            <div className="primary-color body-text message-form">
                <div className="input-form-control">
                    <label htmlFor="name">{t('inputs.fullName')}</label>
                    <input
                        {...register('name')}
                        placeholder={t('inputs.placeholders.fullName')}
                        name="name"
                        id="name"
                        className={errors.name ? 'highlight-error' : ''}
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
                        placeholder={t('inputs.placeholders.message')}
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
            </div>
            <div
                style={{
                    marginTop: '1.5rem',
                }}
            >
                <Button
                    className={isLoading ? 'loading' : ''}
                    disabled={isLoading}
                    type="submit"
                    label={t('button.send')}
                    Icon={
                        isLoading ? AiOutlineLoading3Quarters : RiMailSendLine
                    }
                />
            </div>
        </form>
    )
}

export default MessageForm
