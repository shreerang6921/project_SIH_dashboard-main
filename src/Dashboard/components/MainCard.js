import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
 
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";


export default function MainCard({title,score,link,image}) {
  return (
    <Card className="w-full sm:w-96 m-3">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={image}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography>
          <Link to={link} className="text-lime-500 text-lg font-bold">Begin</Link>
          
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          {score}
        </Typography>
      </CardFooter>
    </Card>
  )
}
