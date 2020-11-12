import React, {FC} from 'react'
import BodyLarge from '../../atoms/BodyLarge'
import { IPostCard} from '../../../__types__/IPostCard'
import { 
  CardWrapper, 
  ImageWrapper, 
  DataContainer,
  CardContent,
  Tag,
  TagsContainer
} from './style'

const PostCard:FC<IPostCard> = ({img, date, title, description, tags}) => {
  return (
    <CardWrapper>
      <ImageWrapper img={img}/>
      <CardContent>
        <DataContainer>{date}</DataContainer>
        <BodyLarge>
            {title}
        </BodyLarge>
        <p>{description}</p>
      </CardContent>
      <TagsContainer>
        {tags.map(tag => {
          return <Tag>{tag}</Tag>
        })}
      </TagsContainer>

    </CardWrapper>
  )
}

export default PostCard
