import { useFormik } from "formik";
import employeeSchema from "../validation/employeeSchema";
import "./EmployeeForm.css";
import FormInput from "./FormInput"
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckBoxGroup";
import SelectInput from "./SelectInput";
import FileInput from "./FileInput";

function EmployeeForm() {

    const formik = useFormik({

        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            gender: "",
            skills: [],
            country: "",
            dob: "",
            profileImage: null,
            about: "",
            terms: false,
        },

        validationSchema: employeeSchema,

        onSubmit: (values) => {

            console.log(values);
            alert("Employee Registered Successfully");

        }

    });

    function handleSkillChange(e) {

        const { value, checked } = e.target;
        console.log("Entire Event:", e);

        console.log("Target:", e.target);

        console.log("Value:", e.target.value);

        console.log("Checked:", e.target.checked);

        if (checked) {

            formik.setFieldValue(
                "skills",
                [...formik.values.skills, value]
            );

        } else {

            formik.setFieldValue(
                "skills",
                formik.values.skills.filter(
                    skill => skill !== value
                )
            );

        }

    }

    return (

        <div className="employee-container">

            <div className="employee-card">

                <h1>Employee Registration</h1>

                <p className="subtitle">
                    Fill in the information below to register a new employee.
                </p>

                <form
                    className="employee-form"
                    onSubmit={formik.handleSubmit}
                >

                    <FormInput label={"Full Name"} name={"fullName"} placeholder={"Enter your full Name."} type={"text"} formik={formik} />
                    <FormInput label={" Email "} name={"email"} placeholder={"Enter your Email Address."} type={"email"} formik={formik} />
                    <FormInput label={"Phone No."} name={"phone"} placeholder={"Enter your full Name."} type={"text"} formik={formik} />
                    <FormInput label={"Password"} name={"password"} placeholder={"Enter the password."} type={"password"} formik={formik} />
                    <FormInput label={"Confirm Password"} name={"confirmPassword"} placeholder={"Enter password to confirm."} type={"password"} formik={formik} />


                    {/* Country */}
                    <SelectInput label={"Country"} name={"country"} options={['Nepal', 'Bangladesh', 'USA', 'India', 'Nigeria']} formik={formik} />
                    {/* Gender */}
                    <RadioGroup label={"Gender"} name={"gender"} options={['Male', 'Female', 'Other']} formik={formik} />

                    {/* Date of Birth */}
                    <FormInput label={"DOB"} name={"dob"} placeholder={" "} type={"date"} formik={formik} />



                    <CheckboxGroup label={"Skillset"} name={"skills"} options={['React', 'JS', 'Python', 'Node', ' Linux']} values={formik.values.skills} formik={formik} handleChange={handleSkillChange} />

                    {/* Profile Image */}
                    <FileInput label={"File Input"} formik={formik} name={"profileImage"} />




                    {/* About */}

                    <div className="form-group">

                        <label>About Yourself</label>

                        <textarea
                            rows="5"
                            name="about"
                            placeholder="Tell us about yourself..."
                            value={formik.values.about}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.about &&
                            formik.errors.about && (
                                <span className="error">
                                    {formik.errors.about}
                                </span>
                            )}

                    </div>

                    {/* Terms */}

                    <div className="terms">

                        <label>

                            <input
                                type="checkbox"
                                name="terms"
                                checked={formik.values.terms}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            I accept the Terms & Conditions

                        </label>

                        {formik.touched.terms &&
                            formik.errors.terms && (
                                <span className="error">
                                    {formik.errors.terms}
                                </span>
                            )}

                    </div>

                    {/* Submit Button */}

                    <button
                        className="submit-btn"
                        type="submit"
                    >
                        Register Employee
                    </button>

                </form>

            </div>

        </div>

    );

}

export default EmployeeForm;