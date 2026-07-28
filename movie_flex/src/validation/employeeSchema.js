

export const initialEmployee = {
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
};


export function handleChange(e, setEmployee) {

    const { name, value, type, checked, files } = e.target;

    setEmployee(prev => ({
        ...prev,

        [name]:
            type === "checkbox"
                ? checked
                : type === "file"
                    ? files[0]
                    : value,

    }));

}


export function handleSkillChange(e, setEmployee) {

    const { value, checked } = e.target;

    if (checked) {

        setEmployee(prev => ({
            ...prev,
            skills: [...prev.skills, value],
        }));

    } else {

        setEmployee(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill !== value),
        }));

    }

}


export function resetForm(setEmployee, setErrors) {

    setEmployee(initialEmployee);

    setErrors({});

}

// ----------------------------
//Validation
// ----------------------------
export function validateEmployee(employee) {

    const errors = {};

    // Full Name
    if (!employee.fullName.trim()) {
        errors.fullName = "Full Name is required.";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!employee.email.trim()) {

        errors.email = "Email is required.";

    } else if (!emailRegex.test(employee.email)) {

        errors.email = "Invalid Email.";

    }

    // Phone
    const phoneRegex = /^(\+?977)?9[678]\d{8}$/;

    if (!employee.phone.trim()) {

        errors.phone = "Phone Number is required.";

    } else if (!phoneRegex.test(employee.phone)) {

        errors.phone = "Invalid Phone Number.";

    }

    // Password
    if (!employee.password) {

        errors.password = "Password is required.";

    } else if (employee.password.length < 8) {

        errors.password = "Minimum 8 characters required.";

    }

    // Confirm Password
    if (!employee.confirmPassword) {

        errors.confirmPassword = "Confirm Password required.";

    } else if (employee.password !== employee.confirmPassword) {

        errors.confirmPassword = "Passwords do not match.";

    }

    // Gender
    if (!employee.gender) {

        errors.gender = "Select Gender.";

    }

    // Skills
    if (employee.skills.length === 0) {

        errors.skills = "Select at least one skill.";

    }

    // Country
    if (!employee.country) {

        errors.country = "Select Country.";

    }

    // Date of Birth
    if (!employee.dob) {

        errors.dob = "Select Date of Birth.";

    }

    // Profile Image
    if (!employee.profileImage) {

        errors.profileImage = "Upload Profile Image.";

    }

    // About
    if (!employee.about.trim()) {

        errors.about = "About Yourself is required.";

    }

    // Terms
    if (!employee.terms) {

        errors.terms = "Accept Terms & Conditions.";

    }

    return errors;

}