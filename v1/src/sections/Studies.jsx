import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Study = ({ title, institution, year, description }) => (
  <div className="flex items-start mb-8 relative">
    <div className="w-12 h-12 bg-blue-500 dark:bg-blue-700 rounded-full flex items-center justify-center mr-4 shrink-0">
      <FaGraduationCap className="text-white text-xl" />
    </div>
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{institution}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{year}</p>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description}
        </p>
      )}
    </div>
    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
  </div>
);

const Studies = () => {
  const mis_estudios = [
    {
      title: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Tecnológica",
      year: "2018 - 2022",
      description: "Especialización en Desarrollo de Software y Bases de Datos.",
    },
    {
      title: "Bootcamp de Desarrollo Web Full Stack",
      institution: "Coding Academy",
      year: "2023",
      description: "Intensivo de 12 semanas en tecnologías web modernas.",
    },
    {
      title: "Certificación en Cloud Computing",
      institution: "Tech Institute",
      year: "2024",
    },
    // Puedes agregar más estudios aquí
  ];

  return (
    <section id="formacion" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Mi Recorrido Académico
        </h2>
        <div className="max-w-3xl mx-auto">
          {mis_estudios.map((study, index) => (
            <Study key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
