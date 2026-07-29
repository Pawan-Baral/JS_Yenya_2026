import * as Yup from "yup";

const employeeSchema = Yup.object({

    // Full Name
    fullName: Yup.string()
        .trim()
        .required("Full Name is required")
        .min(3, "Full Name must be at least 3 characters"),

    // Email
    email: Yup.string()
        .trim()
        .email("Invalid Email Address")
        .required("Email is required"),

    // Phone Number (Nepal)
    phone: Yup.string()
        .matches(
            /^(\+?977)?9[678]\d{8}$/,
            "Invalid Phone Number"
        )
        .required("Phone Number is required"),

    // Password
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /[A-Z]/,
            "Password must contain at least one uppercase letter"
        )
        .matches(
            /[a-z]/,
            "Password must contain at least one lowercase letter"
        )
        .matches(
            /[0-9]/,
            "Password must contain at least one number"
        )
        .matches(
            /[@$!%*?&]/,
            "Password must contain one special character"
        ),

    // Confirm Password
    confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf(
            [Yup.ref("password")],
            "Passwords do not match"
        ),

    // Gender
    gender: Yup.string()
        .required("Please select a gender"),

    // Skills
    skills: Yup.array()
        .min(1, "Select at least one skill"),

    // Country
    country: Yup.string()
        .required("Please select a country"),

    // Date of Birth
    dob: Yup.date()
        .max(new Date(), "Date cannot be in the future")
        .required("Date of Birth is required"),

    // Profile Image
    profileImage: Yup.mixed()
        .required("Please upload a profile image")
        .test(
            "fileSize",
            "Image size should be less than 2 MB",
            (value) => {
                if (!value) return false;
                return value.size <= 2 * 1024 * 1024;
            }
        )
        .test(
            "fileType",
            "Only JPG, JPEG and PNG images are allowed",
            (value) => {
                if (!value) return false;

                return [
                    "image/jpeg",
                    "image/jpg",
                    "image/png",
                ].includes(value.type);
            }
        ),

    // About Yourself
    about: Yup.string()
        .trim()
        .required("About Yourself is required")
        .min(20, "Please write at least 20 characters"),

    // Terms & Conditions
    terms: Yup.boolean()
        .oneOf(
            [true],
            "You must accept the Terms & Conditions"
        )

});

export default employeeSchema;