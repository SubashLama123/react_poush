import React from 'react'
import { useParams } from 'react-router'

const CategoryFood = () => {
  const { category } = useParams();
  return (
    <div>CategoryFood</div>
  )
}

export default CategoryFood