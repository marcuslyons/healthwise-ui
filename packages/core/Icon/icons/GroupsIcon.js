import React from 'react'
import Icon from '../Icon'
import styled from 'styled-components'

import { defaultTheme } from '../../Theme'

const PathContrast = styled.path`
  fill: ${props => props.theme.colorPrimaryLight};
`

const PathContrastStroke = styled.path`
  stroke: ${props => props.theme.colorPrimaryLight};
`

const PathPrimary = styled.path`
  fill: ${props => props.theme.colorTextPrimary};
`

const PathPrimaryStroke = styled.path`
  stroke: ${props => props.theme.colorTextPrimary};
`

const GroupsIcon = props => {
  return (
    <Icon viewBox="0 0 170 170" {...props}>
      <g fill="none" fillRule="evenodd">
        <PathContrast
          d="M61 49c0 11.6-9.4 21-21 21s-21-9.4-21-21 9.4-21 21-21 21 9.4 21 21m49 84.48c0 12.42-10.08 22.5-22.5 22.5-12.43 0-22.5-10.08-22.5-22.5 0-12.43 10.07-22.5 22.5-22.5 12.42 0 22.5 10.07 22.5 22.5"
          theme={props.theme}
        />
        <PathContrast
          d="M150.5 50.5c0 8.3-6.72 15-15 15-8.3 0-15-6.7-15-15 0-8.28 6.7-15 15-15 8.28 0 15 6.72 15 15"
          theme={props.theme}
        />
        <PathPrimaryStroke
          d="M39.5 99.94V57.2m42.16 73.97l-35.4-20.8m83.54-.47l-36.18 21.27m42.14-73.82v42.27M93.63 25.04l35.3 20.76m-82.98.22l35.27-20.74M66.04 65.4l-19.9-11.7m83.42 49.04l-18.3-10.76m.22-27.9l17.9-10.52m-83.52 49.1L65.68 91M88 50.66V28m0 98.66V104M47.55 50.3c0 3.85-3.14 7-7 7-3.87 0-7-3.15-7-7 0-3.88 3.13-7 7-7 3.86 0 7 3.12 7 7zm94.17-.16c0 3.8-3.02 6.86-6.73 6.86-3.76 0-6.77-3.07-6.77-6.86 0-3.78 3-6.85 6.74-6.85 3.7 0 6.72 3.04 6.72 6.82zM95 22c0 3.87-3.14 7-7 7-3.87 0-7-3.13-7-7s3.13-7 7-7c3.86 0 7 3.13 7 7zm-.53 111.86c0 3.78-3.02 6.85-6.74 6.85-3.72.04-6.73-3.04-6.73-6.82 0-3.8 3-6.86 6.73-6.86 3.72 0 6.74 3.08 6.74 6.87zm-46.92-27c0 3.86-3.14 7-7 7-3.87 0-7-3.14-7-7 0-3.87 3.13-7 7-7 3.86 0 7 3.13 7 7zm94.7 0c0 3.86-3.14 7-7 7-3.87 0-7-3.14-7-7 0-3.87 3.13-7 7-7 3.86 0 7 3.13 7 7zM115 79c0 14.9-12.1 27-27 27S61 93.9 61 79s12.1-27 27-27 27 12.1 27 27z"
          strokeWidth="4"
          theme={props.theme}
        />
        <PathPrimaryStroke
          d="M97.72 71.8c0 5.14-4.1 9.3-9.14 9.3-5.05 0-9.15-4.16-9.15-9.3 0-5.15 4.1-9.32 9.15-9.32 5.05 0 9.14 4.17 9.14 9.3z"
          strokeWidth="4"
          theme={props.theme}
        />
        <PathPrimaryStroke
          d="M106.58 98v-8.18c0-2.6-2-5.6-4.56-6.4-8.77-2.67-18.12-2.67-26.9 0-2.54.8-4.54 3.8-4.55 6.4l-.08 8.82m8.33-7.24v12.18M98.3 91.4v12.18"
          strokeWidth="4"
          theme={props.theme}
        />
      </g>
    </Icon>
  )
}

GroupsIcon.defaultProps = {
  theme: defaultTheme
}

export default GroupsIcon
