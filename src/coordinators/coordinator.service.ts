import { Coordinator } from "./coordinator.model";
import { CoordinatorInput } from "./coordinator.schema";

export const getAllCoordinators = () => {
  return [
    { id: 1, name: "Jane Doe", location: "Lagos" },
    { id: 2, name: "John Smith", location: "Abuja" },
  ];
};

export const createCoordinator = async (data: CoordinatorInput) => {
  const newCoordinator = new Coordinator(data);

  const saved = await newCoordinator.save();

  return saved;
};

export const createBulkCoordinator = async (data: CoordinatorInput[]) => {
  const saved = await Coordinator.insertMany(data);

  return saved;
};

export const fetchCoordinators = async (page = 1, limit = 10, search = "") => {
  const skip = (page - 1) * limit;

  const searchRegex = new RegExp(search, "i");

  const query = {
    $or: [
      { name: { $regex: searchRegex } },
      { location: { $regex: searchRegex } },
    ],
  };

  const coordinators = await Coordinator.find(query)
    .skip(skip)
    .limit(limit)
    .exec();

  const total = await Coordinator.countDocuments(query);

  return {
    coordinators,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalItems: total,
  };
};
