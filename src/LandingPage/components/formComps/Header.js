import {Link} from 'react-router-dom';
import Logo from  "../../images/Logo.svg";


export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <Link to="/">
                 <img 
                    alt=""
                    className="h-15 w-24"
                    src={Logo}/>
                </Link>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-Apurple hover:text-[#9e97ca]">
                {linkName}
            </Link>
            </p>
        </div>
    )
}