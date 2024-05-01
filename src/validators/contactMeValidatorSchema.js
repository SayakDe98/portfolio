import * as yup from "yup";
const contactMeValidatorSchema = yup.object({
    name: yup.string().required("Name is required" ),
    email: yup.string().email().required("Email is required"),
    message: yup.string().required("Message is required")
});

export default contactMeValidatorSchema;