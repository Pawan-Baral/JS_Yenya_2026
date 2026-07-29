function CheckboxGroup({
    label,
    name,
    options,
    values,
    formik,
    handleChange,
}) {

    return (
        <div
            className="form-group"
            style={{ gridColumn: "1 / 3" }}
        >
            <label>{label}</label>

            <div className="checkbox-group">

                {options.map((option) => (

                    <label key={option}>

                        <input
                            type="checkbox"
                            name={name}
                            value={option}
                            checked={values.includes(option)}
                            onChange={handleChange}
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

export default CheckboxGroup;