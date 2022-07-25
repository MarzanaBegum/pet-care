import { GiLoveInjection, GiBrokenBone } from "react-icons/gi";
import { FiScissors } from "react-icons/fi";
import { FaHandHoldingMedical } from "react-icons/fa";

const ourServices = [
  {
    name: "Medical Treatment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    icon: FaHandHoldingMedical,
  },
  {
    name: "Broken Bone Treatment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    icon: GiBrokenBone,
  },
  {
    name: "Grooming",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    icon: FiScissors,
  },
  {
    name: "Vaccination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    icon: GiLoveInjection,
  },
];

export default function Services() {
  return (
    <div className="py-12 bg-white">
      <div className="px-4 mx-6 max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-orange-500">
            Our Services
          </h2>
          <p className="mt-2 text-2xl font-bold text-gray-800 md:text-5xl">
            A better way to treat our pets
          </p>
          <p className="max-w-2xl mt-4 mb-10 text-gray-500 md:text-base lg:mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {ourServices.map((service) => (
              <div key={service.name} className="relative cursor-pointer">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-orange-500 rounded-md">
                    <service.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 text-gray-900 text-medium">
                    {service.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-sm text-gray-500 md:text-base">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
