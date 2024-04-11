import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { users } from "../../dummy/users";
import UserPost from "./UserPost";


const ShowUser = () => {



  const [open, setOpen] = useState([]);

  const handleOpen = (value) => {
    if (open.includes(value)) {
      const index = open.indexOf(value);
      open.splice(index, 1);
      setOpen([...open]);
    } else {
      setOpen([...open, value]);
    }

  };


  return (
    <div className="max-w-[390px]">

      {users.map((user) => {
        return <Accordion key={user.id} open={open.includes(user.id)}>
          <AccordionHeader onClick={() => handleOpen(user.id)}>{user.name}</AccordionHeader>
          <AccordionBody>
            {open.includes(user.id) && <UserPost user={user} />}
          </AccordionBody>
        </Accordion>
      })}


    </div>
  );
}


export default ShowUser