import './MessageForm.scss'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { RiMailSendLine } from 'react-icons/ri'
import axiosInstance from '../../../helpers/axios'
import constants from '../../../helpers/constants'
import Banner, { BannerStatus } from '../../Atoms/Banner/Banner'
import Button from '../../Atoms/Button/Button'
import SectionWrapper from '../../Organisms/SectionWrapper/SectionWrapper'

type MessageFormType = {
    name: string
    email: string
    message: string
}

const defaultMessageFormState: MessageFormType = {
    name: '',
    email: '',
    message: '',
}

export const MessageForm = () => {
    const methods = useForm<MessageFormType>({
        defaultValues: defaultMessageFormState,
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = methods

    const { t } = useTranslation()

    const [bannerStatus, updateBannerStatus] = useState<BannerStatus>('neutral')
    const [showBanner, setShowBanner] = useState(false)

    const getBannerMessage = {
        success: t('messageSentSuccess'),
        error: t('sorryCouldntSendMsg'),
        neutral: t('sendingMessage'),
    }

    const successHandler: SubmitHandler<MessageFormType> = async (data) => {
        const { name, email, message } = data
        try {
            setShowBanner(true)
            updateBannerStatus('neutral')
            const response = await axiosInstance.post('/mail', {
                email: email,
                message: message,
                name: name,
            })

            if (response.data.msg === 'success') {
                updateBannerStatus('success')
                reset()
            } else if (response.data.msg === 'fail') {
                updateBannerStatus('error')
            }
        } catch (e: unknown) {
            updateBannerStatus('error')
        }
    }

    return (
        <>
            {showBanner && (
                <Banner
                    data-testid="banner"
                    type={bannerStatus}
                    text={getBannerMessage[bannerStatus]}
                    closeBanner={() => {
                        updateBannerStatus('neutral')
                        setShowBanner(false)
                    }}
                />
            )}
            <div className="section-title h2 bold">
                {t('sectionName.messageFormTitle')}
            </div>
            <form
                id="contact-form"
                className="subsection message-content"
                onSubmit={handleSubmit(successHandler)}
                noValidate
            >
                <div className="subsection-data">
                    {/* <TopMateSection /> */}
                    <p className="subsection-title body-text">
                        {t('messageFormSubtitle')}
                    </p>
                    <div className="primary-color body-text form-wrapper">
                        <div className="input-form-control">
                            <label htmlFor="name">{t('inputs.fullName')}</label>
                            <input
                                {...register('name', {
                                    required: t('common.validations.required', {
                                        name: t('inputs.fullName'),
                                    }),
                                })}
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
                            <label htmlFor="email">
                                {t('inputs.emailAddress')}
                            </label>
                            <input
                                {...register('email', {
                                    required: t('common.validations.required', {
                                        name: t('inputs.emailAddress'),
                                    }),
                                    validate: {
                                        maxLength: (v) =>
                                            v.length <= 50 ||
                                            t(
                                                'common.validations.maxEmailLengthReached'
                                            ),
                                        matchPattern: (v) =>
                                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                                                v
                                            ) ||
                                            t(
                                                'common.validations.invalidEmailError'
                                            ),
                                    },
                                })}
                                placeholder={t(
                                    'inputs.placeholders.emailAddress'
                                )}
                                name="email"
                                type="email"
                                id="email"
                                className={
                                    errors.email ? 'highlight-error' : ''
                                }
                            />
                            {errors.email && (
                                <span className="error-message-label">
                                    {errors.email?.message}
                                </span>
                            )}
                        </div>
                        <div className="input-form-control">
                            <label htmlFor="message">
                                {t('inputs.message')}
                            </label>
                            <textarea
                                {...register('message', {
                                    required: t('common.validations.required', {
                                        name: t('inputs.message'),
                                    }),
                                })}
                                placeholder={t('inputs.placeholders.message')}
                                name="message"
                                id="message"
                                className={
                                    errors.message ? 'highlight-error' : ''
                                }
                            />
                            {errors.message && (
                                <span className="error-message-label">
                                    {errors.message?.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <Button
                        className={
                            bannerStatus === 'neutral' && showBanner
                                ? 'loading'
                                : ''
                        }
                        type="submit"
                        label={t('button.send')}
                        Icon={
                            bannerStatus === 'neutral' && showBanner
                                ? AiOutlineLoading3Quarters
                                : RiMailSendLine
                        }
                    />
                </div>
            </form>
        </>
    )
}

export default SectionWrapper(MessageForm, constants.classNames.MESSAGE_FORM)
