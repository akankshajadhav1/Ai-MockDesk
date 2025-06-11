import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CustomBreadCrumb from "@/components/Custom-bread-crumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send data to server here (e.g., Firebase, Formspree, etc.)
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full gap-8 py-5">
      <div className=" ml-10 flex items-center justify-between w-full gap-2">
        <CustomBreadCrumb
          breadCrumbPage="Contact"
          breadCrumpItems={[{ label: "Home", link: "/" }]}
        />
      </div>

      <Alert className=" ml-3 bg-yellow-100/50 border-yellow-200 p-4 rounded-lg flex items-start gap-3 -mt-3">
        <Lightbulb className="h-5 w-5 text-yellow-600" />
        <div>
          <AlertTitle className="text-yellow-800 font-semibold">
            Contact Us
          </AlertTitle>
          <AlertDescription className="text-sm text-yellow-700 mt-1">
            We'd love to hear from you! Fill out the form below and we’ll get
            back to you as soon as possible.
          </AlertDescription>
        </div>
      </Alert>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl mx-auto flex flex-col gap-4 bg-gray-50 border p-6 rounded-md"
      >
        <Input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />

        <Button type="submit" className="mt-2">
          Send Message
        </Button>

        {submitted && (
          <p className="text-green-600 text-sm mt-2">
            Message sent successfully! ✅
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
