function FileInput({
    label,
    name,
    formik,
}) {

    return (

        <div className="form-group">

            <label>{label}</label>

            <input
                type="file"
                name={name}
                onBlur={formik.handleBlur}
                onChange={(event) =>
                    formik.setFieldValue(
                        name,
                        event.currentTarget.files[0]
                    )
                }
            />

            {formik.touched[name] &&
                formik.errors[name] && (

                    <span className="error">
                        {formik.errors[name]}
                    </span>

                )}

        </div>

    );

}

export default FileInput;