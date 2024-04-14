import React from 'react'
import { useGetFoodByCategoryQuery } from './mealApi';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { useParams } from 'react-router';
import CategorySkeleton from '../../ui/skeletons/CategorySkeleton';


const CategoryFood = () => {
  const { category } = useParams();
  const { data, isLoading, isError, error } = useGetFoodByCategoryQuery(category);
  if (isLoading) {
    return <CategorySkeleton />;
  }



  return (
    <div className='grid grid-cols-3 gap-5 p-5'>

      {data && data.meals.map((cata) => {
        return <Card key={cata.idMeal} className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={cata.strMealThumb}
              alt="card-image"
              className='w-full'
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {cata.strMeal}
            </Typography>


          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      })}


    </div>
  )
}

export default CategoryFood