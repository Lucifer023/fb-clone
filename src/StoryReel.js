import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image="https://static.dw.com/image/45665028_6.jpg" profileSrc='https://avatars.githubusercontent.com/u/75372710?v=4' title='Milos Bojanic' />
            <Story image='https://i.ytimg.com/vi/K39J1iTEEtE/hqdefault.jpg' profileSrc='https://avatars.githubusercontent.com/u/47660922?v=4' title='Marko Pavlovic' />
            <Story image='https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg' profileSrc='https://avatars.githubusercontent.com/u/24712956?v=4' title='Sonny Sangha' />
            <Story image='https://nyamie.com/uploads/photos/medium/Entity-X44MuaYXzII69UdW.JPG' profileSrc='https://avatars.githubusercontent.com/u/16898896?v=4' title='Veljko Budimir' />
            <Story image='https://static.dw.com/image/58312486_101.jpg' profileSrc='https://cdn.mos.cms.futurecdn.net/M7fDTpDnJcZ4dt3myngzxi.jpg' title='Aleksandar Bilinac' />
        </div>
    )
}

export default StoryReel

