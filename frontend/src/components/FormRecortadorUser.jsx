import { useForm } from "react-hook-form";
import { cut } from "../services/cut";
import { useState } from "react";
import FormExpiraciones from "./FormExpiraciones";
import { URI } from "../Uri";
import QRCodeComponent from "./QRCodeComponent";



function FormRecortadorUser() {
    const [url, setUrl] = useState("");
    const [urlRecortada, setUrlRecortada] = useState("");



    const { register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            mantenerSesion: true
        }
    });

    const onSubmit = handleSubmit(async (data) => {
        const respuesta = await cut(data.url);
        if (respuesta?.code) {
            setUrlRecortada(respuesta);
        }
        reset();
    });

    return (

        <main className='flex justify-center items-center w-full h-[100vh] bg-gray-100 overflow-auto'>
            <div className="flex   justify-center items-center flex-col sm:block sm:w-[40%]" >
                <label htmlFor="url" className="block  sm:text-left  sm:text-7xl text-center text-4xl  font-serif  leading-6 mb-9  text-gray-900">Acorta tu URL</label>
                <form className="flex w-60 sm:w-auto gap-3 mt-2 sm:flex-row flex-col" onSubmit={onSubmit}>
                    <input {...register("url",
                        {
                            required: {
                                value: true,
                                message: "La URL es requerida"
                            },
                            pattern: {
                                value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
                                message: "URL no valida"
                            }
                        }
                    )}
                        placeholder="ejemplo: https://www.google.cl/"
                        type="text"
                        name="url"
                        id="url"
                        autoComplete="off"
                        className="block w-60 sm:w-full p-2 rounded-xl border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-inset
                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                       sm:text-sm sm:leading-6"
                        onChange={e => setUrl(e.target.value)}
                    />
                    <button className="h-10  px-6 font-semibold rounded-full bg-violet-600 text-white">
                        Acortar
                    </button>
                </form>
                <div className="flex flex-col gap-3 mt-3">
                    {
                        errors.url && <span className="text-xs text-red-600">{errors.url.message}</span>
                    }

                    <span className="w-60">Url original: {url} </span>
                </div>

                <FormExpiraciones existeurl={urlRecortada.code} idurl={urlRecortada && urlRecortada.newUrl._id} />

                <span className="w-60">Url acortada: {urlRecortada && <a target="_blanck" href={URI + urlRecortada.code}>{URI + urlRecortada.code}</a>}</span>

                <p className="mt-10">Haz click sobre el código QR para descargar</p>
                <div className="md:flex  gap-4  md:items-center">
                    <QRCodeComponent URI={URI} datosUrlUnitarios={urlRecortada.code} />
                </div>

            </div>
        </main>
    );
}

export default FormRecortadorUser;
