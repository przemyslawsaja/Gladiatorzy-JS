import React from 'react'
import styled from 'styled-components';
import H1 from '../components/atoms/H1'
import PostCard from '../components/molecules/PostCard'
import BodyLarge from '../components/atoms/BodyLarge'
import {BlogCards} from '../StaticData/BlogData'

const BlogWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 80px 20px 0;
`
const Filters = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`
const FilterValue = styled.p`
text-decoration: underline;
`
const Blog = () => {
  return (
    <BlogWrapper>
     
      <H1>Witaj na Blogu!</H1>
      <p>Tutaj odnajdzesz wszystkie informację o społeczności Gladiatorów Javascriptu</p>
      <Filters>
        <BodyLarge>Sortuj według:</BodyLarge>
        <FilterValue>od najnowszego</FilterValue>
      </Filters>
      {BlogCards.map(e => {
        return <PostCard 
          img={e.img}
          title={e.title}
          description={e.description}
          date={e.date}
          tags={e.tags}
          />
      })}
      
    </BlogWrapper>
  )
}

export default Blog
