import { Link } from "react-router-dom";
import { useListUrlUser } from "../hooks/useListUrlUser";
import { URI } from "../Uri";

function ListUrlUser() {

    const { urlUser } = useListUrlUser()

    return (
        <section className="overflow-y-auto w-full h-[90vh] bg-gray-200">
            <ul className="overflow-y-auto p-2 flex justify-center  items-center gap-7 flex-col">
                {urlUser.length > 0 ? (
                    urlUser.map((urlsUser) => (

                        <li key={urlsUser._id} className="overflow-hidden rounded-lg h-48 flex flex-col gap-2 p-2  bg-white w-96">
                            <p><span className="font-bold">Url original:</span>  {urlsUser.url}</p>
                            <p><span className="font-bold">Url acortada: </span><span className="text-fuchsia-600">{URI + urlsUser.code}</span></p>
                            <p><span className="font-bold">Números de click: </span>{urlsUser.countClick}</p>
                            <Link to={urlsUser._id} >Más info</Link>
                        </li>

                    ))
                ) : (
                    <p>No existen urls</p>
                )}
            </ul>
        </section>
    );
}

export default ListUrlUser;
