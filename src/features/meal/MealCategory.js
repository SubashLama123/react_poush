import React from 'react'
import { useGetFoodCategoryQuery } from './mealApi';
import CategorySkeleton from '../../skeletons/CategorySkeleton';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
const MealCategory = () => {
  const { data, isLoading, isError, error } = useGetFoodCategoryQuery();
  if (isLoading) {
    return <CategorySkeleton />;
  }
  console.log(data);
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data && data.categories.map((cata) => {
        return <Card key={cata.idCategory} className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={cata.strCategoryThumb}
              alt="card-image"
              className='w-full'
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {cata.strCategory}
            </Typography>
            <Typography>
              {cata.strCategoryDescription.substring(0, 100) + '....'}
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

export default MealCategory