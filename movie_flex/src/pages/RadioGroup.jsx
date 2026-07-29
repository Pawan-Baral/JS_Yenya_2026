function RadioGroup({
    label,
    name,
    options,
    formik,
}) {
    return (
        <div className="form-group">

            <label>{label}</label>

            <div className="radio-group">

                {options.map((option) => (

                    <label key={option}>

                        <input
                            type="radio"
                            name={name}
                            value={option}
                            checked={formik.values[name] === option}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {option}

                    </label>

                ))}

            </div>

            {formik.touched[name] &&
                formik.errors[name] && (

                    <span className="error">
                        {formik.errors[name]}
                    </span>

                )}

        </div>
    );
}

export default RadioGroup;