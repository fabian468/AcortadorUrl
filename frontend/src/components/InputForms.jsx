import PropTypes from 'prop-types';


function InputForms({ texto, type = "text", change, placeholder = '', change2 }) {
    return (
        <label className="w-full flex justify-between items-center">
            <span className="mr-2">{texto}:</span>
            <input
                type={type}
                className="border-none text-gray-600 p-1 outline-none rounded-md w-full"
                onChange={e => {
                    change(e.target.value)
                    change2 && change2(e.target.value)
                }}
                placeholder={placeholder}
            />
        </label>
    )
}

InputForms.propTypes = {
    texto: PropTypes.string,
    type: PropTypes.string,
    change: PropTypes.func,
    change2: PropTypes.func,
    placeholder: PropTypes.string
};

export default InputForms