import { useState, ChangeEvent, FormEvent } from "react";

// ---------- Types ----------
interface Destination {
  id: string | null;
  name: string;
  description: string;
  price: number | string;
  availability: string;
  image: string;
}

interface DestinationListProps {
  destinations: Destination[];
  onEdit: (dest: Destination) => void;
  onAdd: () => void;
}

interface DestinationFormProps {
  initialData: Destination;
  onSave: (data: Destination) => void;
  onCancel: () => void;
}

// ---------- Destination List ----------
const DestinationList: React.FC<DestinationListProps> = ({
  destinations,
  onEdit,
  onAdd,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onAdd}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Destination
        </button>
      </div>

      <div className="flex gap-6 flex-wrap">
        {destinations.map((dest) => (
          <div
            key={dest.id ?? Math.random()}
            className="w-80 p-4 border rounded-lg shadow"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="font-bold mt-2">{dest.name}</h3>
            <p>{dest.description}</p>
            <p>
              <strong>Price:</strong> ${dest.price}
            </p>
            <p>
              <strong>Availability:</strong> {dest.availability}
            </p>
            <div className="flex gap-2 mt-3">
              <button className="bg-green-600 text-white px-3 py-1 rounded">
                Read More →
              </button>
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() => onEdit(dest)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- Destination Form (Edit & Add) ----------
const DestinationForm: React.FC<DestinationFormProps> = ({
  initialData,
  onSave,
  onCancel,
}) => {
  const [form, setForm] = useState<Destination>({ ...initialData });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "image" && files && files[0]) {
      const imageUrl = URL.createObjectURL(files[0]);
      setForm({ ...form, image: imageUrl });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
    >
      <h2 className="text-xl font-bold mb-4">
        {form.id ? "Edit Destination" : "Add New Destination"}
      </h2>

      <label className="block mb-2">Name:</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded mb-3"
        required
      />

      <label className="block mb-2">Description:</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded mb-3"
        required
      />

      <label className="block mb-2">Price:</label>
      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded mb-3"
        required
      />

      <label className="block mb-2">Availability:</label>
      <select
        name="availability"
        value={form.availability}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded mb-3"
        required
      >
        <option value="Available">Available</option>
        <option value="Unavailable">Unavailable</option>
      </select>

      <label className="block mb-2">Image:</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="mb-3"
      />
      {form.image && (
        <img
          src={form.image}
          alt="Preview"
          className="w-full h-32 object-cover rounded mb-3"
        />
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

// ---------- Main Manager ----------
const DestinationManager: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([
    {
      id: "dest-001",
      name: "Bale Mountains",
      description: "Trek through the beautiful and biodiverse Bale Mountains.",
      price: 180,
      availability: "Available",
      image: "/images/bale.jpg",
    },
    {
      id: "dest-002",
      name: "Awash National Park",
      description: "Discover the diverse wildlife and stunning landscapes.",
      price: 150,
      availability: "Available",
      image: "/images/awash.jpg",
    },
  ]);

  const [editing, setEditing] = useState<Destination | null>(null);

  const handleEdit = (dest: Destination) => {
    setEditing(dest);
  };

  const handleAdd = () => {
    setEditing({
      id: null,
      name: "",
      description: "",
      price: "",
      availability: "Available",
      image: "",
    });
  };

  const handleSave = (data: Destination) => {
    if (data.id) {
      // update existing
      setDestinations((prev) => prev.map((d) => (d.id === data.id ? data : d)));
    } else {
      // add new
      const newDest = { ...data, id: `dest-${Date.now()}` };
      setDestinations((prev) => [...prev, newDest]);
    }
    setEditing(null);
  };

  const handleCancel = () => {
    setEditing(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Destinations Manager</h2>

      {editing ? (
        <DestinationForm
          initialData={editing}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <DestinationList
          destinations={destinations}
          onEdit={handleEdit}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
};

export default DestinationManager;
