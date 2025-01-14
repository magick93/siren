import { FC } from 'react'
import Siren from '../../assets/images/siren.svg'
import { DiscordUrl, LighthouseBookUrl } from '../../constants/constants'
import Button, { ButtonFace } from '../Button/Button'
import HealthMetric, { HealthMetricProps } from './HealthMetric'

export interface FootBarProps extends HealthMetricProps {}

const FootBar: FC<FootBarProps> = (props) => {
  return (
    <div className='w-full h-11 dark:bg-dark900 border border-l-0 dark:border-dark800 border-dark200 flex justify-between'>
      <div className='hidden md:flex space-x-2 items-center dark:text-white px-3 dark:bg-darkFull'>
        <Siren />
      </div>
      <div className='flex items-center space-x-4 w-max'>
        <HealthMetric {...props} />
        <div className='flex space-x-1'>
          <a href={DiscordUrl} target='_blank' rel='noreferrer'>
            <Button type={ButtonFace.ICON}>
              <i className='bi bi-discord' />
            </Button>
          </a>
          <a href={LighthouseBookUrl} target='_blank' rel='noreferrer'>
            <Button type={ButtonFace.ICON}>
              <i className='bi bi-question-circle-fill' />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FootBar
