import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addToBLogs, updateToBLogs } from "./dailySlice";
import { useNavigate, useParams } from "react-router";
import * as Yup from 'yup';

const EditForm = () => {


  const { id } = useParams();
  const { blogs } = useSelector((state) => state.dailySlice);
  const blog = blogs.find((blog) => blog.id === id);


  const dispatch = useDispatch();
  const nav = useNavigate();

  const blogSchema = Yup.object({
    title: Yup.string().required(),
    email: Yup.string().email().required(),
    place: Yup.string().required(),
    hobbies: Yup.array().min(1).required(),
    country: Yup.string().required(),
    detail: Yup.string().min(10).max(200).required(),
    // image: Yup.mixed().test('fileType', 'please provide valid image', (val) => {
    //   const photos = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
    //   return val && photos.includes(val.type);
    // }).test('fileSize', 'file too large', (val) => {
    //   return val && val.size <= 1024 * 1024 * 2;
    // })
  });

  const { values, handleChange,
    handleSubmit, setFieldValue, errors, touched } = useFormik({

      initialValues: {
        title: blog.title,
        email: blog.email,
        place: blog.place,
        hobbies: blog.hobbies,
        country: blog.country,
        detail: blog.detail,
        image: null,
        imagePreview: blog.imagePreview
      },
      onSubmit: (val) => {
        dispatch(updateToBLogs({
          title: val.title,
          email: val.email,
          place: val.place,
          hobbies: val.hobbies,
          country: val.country,
          detail: val.detail,
          imagePreview: val.imagePreview,
          id: blog.id
        }));
        nav(-1);
      },
      validationSchema: blogSchema,


    });




  const radioData = [
    { label: 'Outdoor', value: 'outdoor', color: 'red' },
    { label: 'Indoor', value: 'indoor', color: 'green' },
  ];
  const checkData = [
    { label: 'Dance', value: 'dance', color: 'red' },
    { label: 'Sing', value: 'sing', color: 'green' },
  ];

  return (
    <Card color="transparent" shadow={false} className="max-w-sm mx-auto   mt-3">
      <Typography variant="h4" color="blue-gray">
        Daily Blogs
      </Typography>
      <Typography color="gray" className="mt-1 mb-3 font-normal">
        Add Some Blogs
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <div>
            <Input
              value={values.title}
              onChange={handleChange}
              size="lg"
              label="Title"
              name="title"
            />

            {errors.title && touched.title && <p className="text-pink-500">{errors.title}</p>}
          </div>
          <div>
            <Input
              size="lg"
              label="Email"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
            {errors.email && touched.email && <p className="text-pink-500">{errors.email}</p>}
          </div>

          <div >
            <h1>Select In Place</h1>
            <div className="flex gap-10">
              {radioData.map((rad, i) => {
                return <Radio key={i} label={rad.label}
                  checked={rad.value === values.place}
                  onChange={handleChange}
                  color={rad.color}
                  value={rad.value}
                  name="place" />
              })}
            </div>
            {errors.place && touched.place && <p className="text-pink-500">{errors.place}</p>}
          </div>

          <div >
            <h1>Select Hobbies</h1>
            <div className="flex gap-10">
              {checkData.map((rad, i) => {
                return <Checkbox
                  key={i}
                  checked={values.hobbies.includes(rad.value)}
                  label={rad.label}
                  onChange={handleChange}
                  color={rad.color}
                  value={rad.value} name="hobbies" />
              })}
            </div>
            {errors.hobbies && touched.hobbies && <p className="text-pink-500">{errors.hobbies}</p>}
          </div>
          <div>
            <Select
              value={values.country}
              onChange={(e) => setFieldValue('country', e)}
              name="country"
              label="Select Country">
              <Option value="nepal">Nepal</Option>
              <Option value="india">India</Option>
              <Option value="china">China</Option>

            </Select>
            {errors.country && touched.country && <p className="text-pink-500">{errors.country}</p>}
          </div>
          <div className="w-96">
            <Textarea
              value={values.detail}
              name="detail"
              onChange={handleChange}
              label="Description" />
            {errors.detail && touched.detail && <p className="text-pink-500">{errors.detail}</p>}
          </div>

          <div>

            <Input
              onChange={(e) => {
                const file = e.target.files[0];
                // const url = URL.createObjectURL(file);
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {
                  setFieldValue('imagePreview', e.target.result);
                });
                setFieldValue('image', file);
              }}
              name="image"
              label="select image"
              type="file" />
            <div className="my-2">
              {errors.image && touched.image && <p className="text-pink-500">{errors.image}</p>}
              {values.imagePreview && <img src={values.imagePreview} alt="" />}
            </div>

          </div>

        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}
export default EditForm