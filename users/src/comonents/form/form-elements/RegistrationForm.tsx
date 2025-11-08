import React, { useState, useEffect } from "react";

// Type for form data
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  passportNumber: string;
  nationality: string;
  gender: string;
  country: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    passportNumber: "",
    nationality: "",
    gender: "",
    country: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Load saved form data if any
  useEffect(() => {
    const savedData = localStorage.getItem("registrationData");
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Valid phone number is required";

    if (!formData.passportNumber)
      newErrors.passportNumber = "Passport number is required";

    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.country) newErrors.country = "Country is required";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/bookings`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Booking failed");
      } else {
        setSuccess("Booking successful!");
        localStorage.removeItem("registrationData");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          passportNumber: "",
          nationality: "",
          gender: "",
          country: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to the server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      {success && <p className="text-green-600 mb-3">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <InputField
          label="Passport Number"
          name="passportNumber"
          value={formData.passportNumber}
          onChange={handleChange}
          error={errors.passportNumber}
        />
        <InputField
          label="Nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          error={errors.nationality}
        />

        <div>
          <label className="block font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>

        <InputField
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          error={errors.country}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book"}
        </button>
      </form>
    </div>
  );
};

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
}: {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) => (
  <div>
    <label className="block font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete={type === "password" ? "current-password" : "off"}
      className={`w-full border p-2 rounded ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      placeholder={`Enter ${label.toLowerCase()}`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default RegistrationForm;
