import { URI } from "../Uri";


export async function deleteUrl(_id) {
    try {
        const response = await fetch(URI + "urluser/delete", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id }),
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();

        return data
    } catch {
        alert("Error en la solicitud intentelo nuevamente")
    }
}