// Write your code here
import {useState} from 'react'

import {
  LockMainContainer,
  LockContainer,
  LockImage,
  Lockpara,
  Lockbutton,
} from './styledComponents'

const Unlock = () => {
  const [image, setImage] = useState(true)

  const onLock = () => {
    setImage(prevState => !prevState)
  }
  const imageUrl = image
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const buttontext = image ? 'Unlock' : 'Lock'
  const imageAlt = image ? 'Lock' : 'Unlock'
  const para = image ? 'Your Device is Locked' : 'Your Device is Unlocked'
  return (
    <>
      <LockMainContainer>
        <LockContainer>
          <LockImage src={imageUrl} alt={imageAlt} />
          <Lockpara> {para} </Lockpara>
          <Lockbutton onClick={onLock} type="button">
            {buttontext}
          </Lockbutton>
        </LockContainer>
      </LockMainContainer>
    </>
  )
}

export default Unlock
