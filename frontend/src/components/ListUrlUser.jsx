import { Link } from "react-router-dom";
import { useListUrlUser } from "../hooks/useListUrlUser";
import { URI } from "../Uri";
import { MdDeleteForever } from "react-icons/md";
import { deleteUrl } from "../services/deleteUrl";
import PropTypes from 'prop-types';

function ListUrlUser({ setMisUrls }) {

    const { urlUser, removeUrlById } = useListUrlUser()

    const dropUrl = (id) => {
        removeUrlById(id)
        deleteUrl(id)
    }

    return (
        <section className="overflow-y-auto w-full h-[90vh] bg-gray-200">
            <ul className="overflow-y-auto p-2 flex justify-center  items-center gap-7 flex-col">
                {urlUser.length > 0 ? (
                    urlUser.map((urlsUser) => (

                        <li key={urlsUser._id} className="overflow-hidden relative rounded-lg h-48 flex flex-col gap-2 p-2  bg-white w-96">
                            <p><span className="font-bold">Url original:</span>  {urlsUser.url}</p>
                            <p><span className="font-bold">Url acortada: </span><span className="text-fuchsia-600">{URI + urlsUser.code}</span></p>
                            <p><span className="font-bold">Números de click: </span>{urlsUser.countClick}</p>
                            <Link onClick={() => setMisUrls(false)} to={urlsUser._id} className="absolute right-5 bottom-4 hover:text-blue-500 font-medium text-lg" >Más info</Link>
                            <span onClick={() => { dropUrl(urlsUser._id) }}
                                className="absolute left-20 bottom-5 cursor-pointer hover:text-red-500">
                                <MdDeleteForever className="w-20" />
                            </span>
                        </li>

                    ))
                ) : (
                    <p>No existen urls</p>
                )}
            </ul>
        </section>
    );
}

ListUrlUser.propTypes = {
    setMisUrls: PropTypes.func,
};


export default ListUrlUser;
