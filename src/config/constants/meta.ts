import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PCMSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('PCMSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('PCMSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('PCMSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('PCMSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('PCMSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('PCMSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('PCMSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('PCMSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('PCMSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('PCMSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('PCMSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('PCMSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('PCMSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('PCMSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('PCMSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('PCMSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('PCMSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('PCMSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PCMSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('PCMSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('PCMSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('PCMSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('PCMSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('PCMSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('PCMSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('PCMSwap')}`,
      }
    default:
      return null
  }
}
