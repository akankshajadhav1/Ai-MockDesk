import CustomBreadCrumb from "@/components/Custom-bread-crumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full gap-8 py-5">
      <div className=" ml-10 flex items-center justify-between w-full gap-2">
        <CustomBreadCrumb
          breadCrumbPage="About Us"
          breadCrumpItems={[{ label: "Home", link: "/" }]}
        />
      </div>

      <Alert className="ml-3 bg-yellow-100/50 border-yellow-200 p-4 rounded-lg flex items-start gap-3 -mt-3">
        <Lightbulb className="h-5 w-5 text-yellow-600" />
        <div>
          <AlertTitle className="text-yellow-800 font-semibold">
            Who We Are
          </AlertTitle>
          <AlertDescription className="text-sm text-yellow-700 mt-1">
            We’re a team of developers, designers, and AI enthusiasts on a
            mission to make mock interviews more accessible, personalized, and
            intelligent.
          </AlertDescription>
        </div>
      </Alert>

      <div className="w-full max-w-4xl mx-auto px-4 text-gray-700 text-base leading-7">
        <p className="mb-4">
          Our AI Interview platform helps job seekers practice and improve their
          communication skills by simulating real-time interviews using AI. We
          believe in empowering candidates with feedback and insights that help
          them grow.
        </p>

        <p className="mb-4">
          We use modern technologies including{" "}
          <strong>React, Firebase, Tailwind CSS</strong> and integrate AI models
          to deliver realistic and intelligent interview experiences.
        </p>

        <p className="mb-4">
          Whether you're a student, job seeker, or career switcher, our platform
          is designed to help you build confidence and succeed in your
          professional journey.
        </p>

        <p>
          Have questions or suggestions? <strong>Contact us</strong> through the
          contact form or reach out on social media.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
