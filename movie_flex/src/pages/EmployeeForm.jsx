import { useState } from "react";

import {
    initialEmployee,
    handleChange,
    handleSkillChange,
    resetForm,
    validateEmployee,
} from "../validation/employeeSchema";

import "./EmployeeForm.css";

function EmployeeForm() {
    const [employee, setEmployee] = useState(initialEmployee);
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = validateEmployee(employee);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log(employee);

            alert("Employee Registered Successfully");

            resetForm(setEmployee, setErrors);
        }
    }

    return (
        <div className="employee-container">
            <div className="employee-card">

                <h1>Employee Registration</h1>

                <p className="subtitle">
                    Fill in the information below to register a new employee.
                </p>

                <form className="employee-form" onSubmit={handleSubmit}>

                    {/* Full Name */}
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter Full Name"
                            value={employee.fullName}
                            onChange={(e) => handleChange(e, setEmployee)}
                        />
                        <span>{errors.fullName}</span>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={employee.email}
                            onChange={(e) => handleChange(e, setEmployee)}
                        />
                        <span>{errors.email}</span>
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter Phone Number"
                            value={employee.phone}
                            onChange={(e) => handleChange(e, setEmployee)}
                        />
                        <span>{errors.phone}</span>
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={employee.password}
                            onChange={(e) => handleChange(e, setEmployee)}
                        />
                        <span>{errors.password}</span>
                    </div>

                    {/* Confirm Password */}
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={employee.confirmPassword}
                            onChange={(e) => handleChange(e, setEmployee)}
                        />
                        <span>{errors.confirmPassword}</span>
                    </div>

                    {/* Country */}
                    <div className="form-group">
                        <label>Country</label>

                        <select
                            name="country"
                            value={employee.country}
                            onChange={(e) => handleChange(e, setEmployee)}
                        >
                            <option value="">Select Country</option>
                            <option>Nepal</option>
                            <option>India</option>
                            <option>Qatar</option>
                            <option>Nigeria</option>
                            <option>Bangladesh</option>
                        </select>

                        <span>{errors.country}</span>
                    </div>

                    {/* Gender */}
                    <div className="form-group">
                        <label>Gender</label>

                        <div className="radio-group">

                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={employee.gender === "Male"}
                                    onChange={(e) => handleChange(e, setEmployee)}
                                />
                                Male
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={employee.gender === "Female"}
                                    onChange={(e) => handleChange(e, setEmployee)}
                                />
                                Female
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={employee.gender === "Other"}
                                    onChange={(e) => handleChange(e, setEmployee)}
                                />
                                Other
                            </label>

                        </div>

                        <span>{errors.gender}</span>
                    </div>

                    {/* DOB */}
                    <div className="form-group">
                        <label>Date of Birth</label>

                        <input
                            type="date"
                            name="dob"
                            value={employee.dob}
                            onChange={(e) => handleChange(e, setEmployee)}
                        />

                        <span>{errors.dob}</span>
                    </div>

                    {/* Skills */}
                    <div className="form-group" style={{ gridColumn: "1 / 3" }}>

                        <label>Skills</label>

                        <div className="checkbox-group">

                            <label>
                                <input
                                    type="checkbox"
                                    value="HTML"
                                    checked={employee.skills.includes("HTML")}
                                    onChange={(e) =>
                                        handleSkillChange(e, setEmployee)
                                    }
                                />
                                HTML
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    value="CSS"
                                    checked={employee.skills.includes("CSS")}
                                    onChange={(e) =>
                                        handleSkillChange(e, setEmployee)
                                    }
                                />
                                CSS
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    value="JavaScript"
                                    checked={employee.skills.includes("JavaScript")}
                                    onChange={(e) =>
                                        handleSkillChange(e, setEmployee)
                                    }
                                />
                                JavaScript
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    value="React"
                                    checked={employee.skills.includes("React")}
                                    onChange={(e) =>
                                        handleSkillChange(e, setEmployee)
                                    }
                                />
                                React
                            </label>

                        </div>

                        <span>{errors.skills}</span>

                    </div>

                    {/* Profile Image */}
                    <div className="form-group">
                        <label>Profile Image</label>

                        <input
                            type="file"
                            name="profileImage"
                            onChange={(e) => handleChange(e, setEmployee)}
                        />

                        <span>{errors.profileImage}</span>
                    </div>

                    {/* About */}
                    <div className="form-group">
                        <label>About Yourself</label>

                        <textarea
                            rows="5"
                            name="about"
                            placeholder="Tell us about yourself..."
                            value={employee.about}
                            onChange={(e) => handleChange(e, setEmployee)}
                        />

                        <span>{errors.about}</span>
                    </div>

                    {/* Terms */}
                    <div className="terms">

                        <label>

                            <input
                                type="checkbox"
                                name="terms"
                                checked={employee.terms}
                                onChange={(e) => handleChange(e, setEmployee)}
                            />

                            I accept the Terms & Conditions

                        </label>

                        <span>{errors.terms}</span>

                    </div>

                    {/* Button */}
                    <button className="submit-btn" type="submit">
                        Register Employee
                    </button>

                </form>

            </div>
        </div>
    );
}

export default EmployeeForm;