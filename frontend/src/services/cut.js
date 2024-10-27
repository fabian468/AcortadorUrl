import { URI } from "../Uri";


export async function cut(url) {
    try {
        const response = await fetch(URI + "cut", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
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