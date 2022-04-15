import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pcmswap.info/contact-us',
        isHighlighted: true,
      },
      // {
      //   label: t('Brand'),
      //   href: 'https://docs.pcmswap.info/brand',
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://medium.com/pancakeswap',
      // },
      {
        label: t('Community'),
        href: 'https://docs.pcmswap.info/contact-us/telegram',
      },
      {
        label: t('PCM token'),
        href: 'https://docs.pcmswap.info/tokenomics/cake',
      },
      {
        label: '—',
      },
      // {
      //   label: t('Online Store'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.pcmswap.info/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.pcmswap.info/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.pcmswap.info/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/PCMswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.pcmswap.info',
      },
      // {
      //   label: t('Bug Bounty'),
      //   href: 'https://docs.pcmswap.info/code/bug-bounty',
      // },
      // {
      //   label: t('Audits'),
      //   href: 'https://docs.pcmswap.info/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      // },
      // {
      //   label: t('Careers'),
      //   href: 'https://docs.pcmswap.info/hiring/become-a-chef',
      // },
    ],
  },
]
