import React from 'react'
import H1 from '../../components/atoms/H1'
import PostCard from '../../components/molecules/PostCard'
import BodyLarge from '../../components/atoms/BodyLarge'
import MainTemplate from '../../templates/MainTemplate'
import { BlogCards } from '../../StaticData/BlogData'
import { 
  BlogWrapper,
  Filters,
  FilterValue,
  BlogPosts,
} from './style'

const Blog = () => {
  return (
    <MainTemplate>
      <BlogWrapper>
        <H1>Witaj na Blogu!</H1>
        <p>Tutaj odnajdzesz wszystkie informację o społeczności Gladiatorów Javascriptu</p>
        <Filters>
          <BodyLarge>Sortuj według:</BodyLarge>
          <FilterValue>od najnowszego</FilterValue>
        </Filters>
        <BlogPosts>
          {BlogCards.map(e => {
            return <PostCard 
              img={e.img}
              title={e.title}
              description={e.description}
              date={e.date}
              tags={e.tags}
              />
          })}
        </BlogPosts>
      </BlogWrapper>
    </MainTemplate>
  )
}

export default Blog
