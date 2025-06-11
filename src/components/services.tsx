import CustomBreadCrumb from "@/components/Custom-bread-crumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Wrench } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="flex flex-col w-full gap-8 py-5">
      <div className="ml-10 flex items-center justify-between w-full gap-2">
        <CustomBreadCrumb
          breadCrumbPage="Services"
          breadCrumpItems={[{ label: "Home", link: "/" }]}
        />
      </div>

      <Alert className="ml-3  bg-blue-100/50 border-blue-200 p-4 rounded-lg flex items-start gap-3 -mt-3">
        <Wrench className="h-5 w-5 text-blue-600" />
        <div>
          <AlertTitle className="text-blue-800 font-semibold">
            What We Offer
          </AlertTitle>
          <AlertDescription className="text-sm text-blue-700 mt-1">
            Explore our AI-powered services designed to help you prepare,
            practice, and perfect your interview skills.
          </AlertDescription>
        </div>
      </Alert>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto px-4">
        <div className="bg-white border rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            AI Mock Interviews
          </h3>
          <p className="text-sm text-gray-600">
            Practice interviews with real-time feedback powered by AI. Improve
            your performance with every session.
          </p>
        </div>

        <div className="bg-white border rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Custom Question Sets
          </h3>
          <p className="text-sm text-gray-600">
            Choose job roles or upload your own questions to tailor the mock
            experience to your needs.
          </p>
        </div>

        <div className="bg-white border rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Webcam + Voice Analysis
          </h3>
          <p className="text-sm text-gray-600">
            Get feedback on your tone, clarity, and confidence — just like in a
            real interview.
          </p>
        </div>

        <div className="bg-white border rounded-lg shadow-md p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Performance Reports
          </h3>
          <p className="text-sm text-gray-600">
            Receive a detailed analysis comparing your answers to expert
            responses and industry standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
