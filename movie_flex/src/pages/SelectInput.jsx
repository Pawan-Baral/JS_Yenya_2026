function SelectInput({
    label,
    name,
    options,
    formik,
}) {
    return (
        <div className="form-group">

            <label>{label}</label>

            <select
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
                <option value="">
                    Select {label}
                </option>

                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}

            </select>

            {formik.touched[name] &&
                formik.errors[name] && (
                    <span className="error">
                        {formik.errors[name]}
                    </span>
                )}

        </div>
    );
}

export default SelectInput;