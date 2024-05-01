import { toast } from "react-toastify";
import emailjs from "emailjs-com";

export const sendEmail = async () => {
      const form = document.getElementById("form");
      const emailSentSuccessfully = await emailjs
        .sendForm(
          "service_6o3v0ka",
          "template_f0f1r5k",
          form,
          "plEpDQjGqgHzZVbIW"
        )
        .then(
          (_) =>  true,
          (error) => {
            toast.error(error.text || 'Failed to send email!');
          }
        );
        if(emailSentSuccessfully) {
            toast.success(
              "We've sent your message to Sayak De!! Thanks for your precious time!!"
            );
            return {
              success: true
            };
        }
}
