import { BlockIcon, CheckmarkCircleIcon, Flex, Image, Skeleton, Text } from '@pcmswap/uikit'
import { useTranslation } from 'contexts/Localization'

import styled from 'styled-components'
import { getRewardGroupAchievements, useCompetitionRewards } from '../../helpers'
import { UserTradingInformationProps } from '../../types'
import { BoldTd, StyledPrizeTable, Td } from '../StyledPrizeTable'

const StyledThead = styled.thead`
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
`

const UserPrizeGrid: React.FC<{ userTradingInformation?: UserTradingInformationProps }> = ({
  userTradingInformation,
}) => {
  const { t } = useTranslation()
  const { userRewardGroup, userCakeRewards, userMoboxRewards, userPointReward, canClaimMysteryBox, canClaimNFT } =
    userTradingInformation
  const { cakeReward, moboxReward, dollarValueOfTokensReward } = useCompetitionRewards({
    userCakeRewards,
    userMoboxRewards,
  })

  const achievement = getRewardGroupAchievements(userRewardGroup, userPointReward)

  return (
    <StyledPrizeTable>
      <StyledThead>
        <tr>
          <th>{t('Token Prizes')}</th>
          <th>{t('Achievements')}</th>
          <th>{t('NFT')}</th>
          <th>{t('Mystery Box')}</th>
        </tr>
      </StyledThead>
      <tbody>
        <tr>
          <BoldTd>
            <Flex flexDirection="column">
              <Text bold>{cakeReward.toFixed(4)} PCM</Text>
              <Text bold>{moboxReward.toFixed(4)} MBOX</Text>
              {dollarValueOfTokensReward !== null ? (
                <Text fontSize="12px" color="textSubtle">
                  ~{dollarValueOfTokensReward.toFixed(2)} USD
                </Text>
              ) : (
                <Skeleton height={24} width={80} />
              )}
            </Flex>
          </BoldTd>
          <Td>
            <Flex alignItems="center" flexWrap="wrap" justifyContent="center" width="100%">
              <Image src={`/images/achievements/${achievement.image}`} width={25} height={25} />
              <Text fontSize="12px" color="textSubtle" textTransform="lowercase">
                + {userPointReward} {t('Points')}
              </Text>
            </Flex>
          </Td>
          <Td>{canClaimNFT ? <CheckmarkCircleIcon color="success" /> : <BlockIcon color="textDisabled" />}</Td>
          <Td>{canClaimMysteryBox ? <CheckmarkCircleIcon color="success" /> : <BlockIcon color="textDisabled" />}</Td>
        </tr>
      </tbody>
    </StyledPrizeTable>
  )
}

export default UserPrizeGrid