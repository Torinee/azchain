import React from 'react'
import { Footer } from './MainLayout.styled'
import Container from '../Container'
import FacebookIcon from '@/images/FacebookIcon'
import InstagramIcon from '@/images/InstagramIcon'
import TwitterIcon from '@/images/TwitterIcon'
import YoutubeIcon from '@/images/YoutubeIcon'
import { useGlobalContext } from '@/context/GlobalContext'
import Link from 'next/link'

const FooterContainer = () => {
    const { t, language } = useGlobalContext()

    const generateLink = (link) =>
        `${link}${language === 'vi' ? '?lang=vi' : ''}`

    return (
        <Footer.Container>
            <Container>
                <Footer.Top>
                    <img src='/images/logo.png' />

                    <span>
                        © 2024 <b>AZChain</b> All rights reserved.
                    </span>

                    <Footer.SocialList>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <YoutubeIcon />
                    </Footer.SocialList>
                </Footer.Top>

                <Footer.Menu>
                    <Link href=''>{t('Buy now')}</Link>
                    <Link href=''>{t('Terms of service')}</Link>
                    <Link href={generateLink('/privacy-policy')}>
                        {t('Privacy policy')}
                    </Link>
                    <Link href=''>{t('Disclaimer')}</Link>
                    <Link href=''>{t('Support center')}</Link>
                </Footer.Menu>

                <Footer.Text>
                    {t(
                        'Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.'
                    )}
                </Footer.Text>
            </Container>
        </Footer.Container>
    )
}

export default FooterContainer
