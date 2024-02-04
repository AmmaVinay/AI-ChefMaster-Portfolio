import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsShare } from "react-icons/bs";

const jobData = [
  {
    title: "Server Engineer",
    location: "Remote",
    endDate: "01/02/2024",
    description:
      "We ares seeking a Server Engineer to manage and optimize the backend infrastructure of our platform. The Server Engineer will play a key role in ensuring the scalability and reliability of our system.",
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or a related field.",
    ],

    qualifications: [
      "Proficiency in server-side technologies and cloud services",
      "Experience with deployment and maintenance of server infrastructure",
      "Strong problem-solving and troubleshooting skills",
      "Knowledge of security best practices",
    ],
    skills: [
      "Server-side technologies",
      "Security best practices",
      "Database management skills",
      "Troubleshooting and problem-solving skills",
    ],
    experience:
      "1-2 years of experience in server-side or infrastructure roles.",
    applyPath: "/server-engineer-application",
  },
];

const ServerEngineer = () => {
  return (
    <div className="bg-slate-100 shadow-lg break-words border-l-amber-50">
      {jobData.map((job, index) => (
        <div
          key={index}
          className="px-8 py-3 sticky top-0 z-50 shadow-sm flex bg-slate-100 border-l-amber-50 justify-between flex-wrap"
        >
          <div className="mb-3">
            <h1 className="text-xl font-bold md:text-2xl lg:text-4xl mb-3">
              Job Title
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-2">{job.title}</p>
            <p>Location: {job.location}</p>
            <p>End Date: {job.endDate}</p>
          </div>
          <div className="flex flex-col justify-around items-center">
            <div>
              <Button className="px-10  bg-blue-500 hover:bg-blue-700 transition ease-in-out transition-shadow">
                <Link to={`/application?job=${encodeURIComponent(job.title)}`}>
                  Apply
                </Link>
              </Button>
            </div>
            <div className="flex items-center">
              <BsShare size={30} className="mr-8" />
              <FaWhatsapp
                size={30}
                className="rounded-md text-green-500 mr-2 hover:text-green-700 transition ease-in-out"
              />
              <BsInstagram
                size={30}
                className="rounded-md text-purple-500 mr-2 hover:text-purple-700 transition ease-in-out"
              />
              <AiOutlineLinkedin
                size={30}
                className="rounded-md text-blue-500 hover:text-blue-700 transition ease-in-out"
              />
            </div>
          </div>
        </div>
      ))}
      {jobData.map((job, index) => (
        <div
          key={index}
          className=" overflow-y-auto p-4 md:p-6 lg:p-8 mx-auto p-10 "
        >
          <div className="container-lg py-8">
            <div>
              <h1 className="text-3xl font-semibold mb-4">Job Description</h1>

              <h2 className="text-2xl font-semibold mb-2">Position Overview</h2>
              <p className="mb-3">{job.description}</p>
            </div>

            <div className="mt-3">
              <h3 className="text-2xl font-semibold mb-2 break-words">
                Requirements:
              </h3>
              <h3 className="text-2xl font-semibold mb-2">
                Educational Qualifications:
              </h3>
              <ul className="list-disc pl-6 mb-6">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-2">Qualifications:</h3>
              <ul className="list-disc pl-6 mb-6">
                {job.qualifications.map((qualifications, index) => (
                  <li key={index}>{qualifications}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-2">Skills Required: </h3>
              <ul className="list-disc pl-6 mb-6">
                {job.skills.map((skills, index) => (
                  <li key={index}>{skills}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-2">Experience:</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>{job.experience}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServerEngineer;
