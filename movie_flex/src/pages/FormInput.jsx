function FormInput({
    label,
    name,
    type,
    placeholder,
    formik
}) {
    return (
        <div className="form-group">
            <label>{label}</label>

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            {formik.touched[name] && formik.errors[name] && (
                <span className="error">
                    {formik.errors[name]}
                </span>
            )}
        </div>
    );
}

export default FormInput;