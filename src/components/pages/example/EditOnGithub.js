import React from 'react'
import styled from 'styled-components'
import { Position, Absolute, Button, Fixed, Box } from 'serverless-design-system'

const EditGithubButton = styled(Button)`
line-height: 14px;

  &:focus {
    outline: none;
  }
`

export default class EditOnGithubOption extends React.Component {
  scrollIntoNewsLetter = () => {
    const newsletterField =  document.getElementById('newsletter-box')
    newsletterField.scrollIntoView()
  }

  render() {
    return (
        <Position
        position='sticky'
        top='30%'
        zIndex={1}
      >
        <Absolute
          display={['none', 'none', 'block']}
          right={0}
          style={{
            transform: 'rotate(270deg) translate(0, -100%)',
            transformOrigin: '100% 0'
          }}
        >
          <EditGithubButton
            height={32}
            width={161}
            fontSize={'14px'}
            letterSpacing={'0.6px'}
            py={1}
            onClick={this.scrollIntoNewsLetter}
          >
            edit on Github
          </EditGithubButton>
        </Absolute>
      </Position>
    )
  }
}
