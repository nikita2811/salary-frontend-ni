import { useState } from "react";

type EmployeeFormData = {
    fullName: string;
    email: string;
    phone: string;
    jobTitle: string;
    department: string;
    country: string;
    city: string;
    salary: string;
    employmentType: string;
    joiningDate: string;
    experience: string;
    skills: string;
    manager: string;
};

const CreateEmployee: React.FC = () => {
    const [formData, setFormData] =
        useState<EmployeeFormData>({
            fullName: "",
            email: "",
            phone: "",
            jobTitle: "",
            department: "",
            country: "",
            city: "",
            salary: "",
            employmentType: "",
            joiningDate: "",
            experience: "",
            skills: "",
            manager: "",
        });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement |
            HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        console.log(formData);

        alert("Employee Added Successfully");
    };

    return (
        <div
            className="min-vh-100 py-5"
            style={{
                background:
                    "linear-gradient(to right, #eef2ff, #f8fafc)",
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div
                            className="card border-0 shadow-lg overflow-hidden"
                            style={{
                                borderRadius: "24px",
                            }}
                        >
                            {/* Header */}
                            <div
                                className="p-5 text-white"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #111827, #1e40af)",
                                }}
                            >
                                <h1 className="fw-bold mb-2">
                                    Employee Registration
                                </h1>

                                <p className="mb-0 opacity-75">
                                    Add and manage employee
                                    information with ease
                                </p>
                            </div>

                            {/* Form */}
                            <div className="card-body p-5 bg-white">
                                <form
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row g-4">

                                        {/* Full Name */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="John Doe"
                                                name="fullName"
                                                value={
                                                    formData.fullName
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                required
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="john@example.com"
                                                name="email"
                                                value={
                                                    formData.email
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                required
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                Phone Number
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="+91 9876543210"
                                                name="phone"
                                                value={
                                                    formData.phone
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Job Title */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                Job Title
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="Backend Developer"
                                                name="jobTitle"
                                                value={
                                                    formData.jobTitle
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                required
                                            />
                                        </div>

                                        {/* Department */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                Department
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="Engineering"
                                                name="department"
                                                value={
                                                    formData.department
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Country */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                Country
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="India"
                                                name="country"
                                                value={
                                                    formData.country
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                required
                                            />
                                        </div>

                                        {/* City */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                City
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="Delhi"
                                                name="city"
                                                value={
                                                    formData.city
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Salary */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                Salary
                                            </label>

                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text rounded-start-3">
                                                    ₹
                                                </span>

                                                <input
                                                    type="number"
                                                    className="form-control rounded-end-3"
                                                    placeholder="50000"
                                                    name="salary"
                                                    value={
                                                        formData.salary
                                                    }
                                                    onChange={
                                                        handleChange
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Employment Type */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                Employment Type
                                            </label>

                                            <select
                                                className="form-select form-select-lg rounded-3"
                                                name="employmentType"
                                                value={
                                                    formData.employmentType
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            >
                                                <option value="">
                                                    Select Type
                                                </option>

                                                <option value="Full-Time">
                                                    Full-Time
                                                </option>

                                                <option value="Part-Time">
                                                    Part-Time
                                                </option>

                                                <option value="Contract">
                                                    Contract
                                                </option>

                                                <option value="Intern">
                                                    Intern
                                                </option>
                                            </select>
                                        </div>

                                        {/* Joining Date */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                Joining Date
                                            </label>

                                            <input
                                                type="date"
                                                className="form-control form-control-lg rounded-3"
                                                name="joiningDate"
                                                value={
                                                    formData.joiningDate
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Experience */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-dark">
                                                Experience
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="3"
                                                name="experience"
                                                value={
                                                    formData.experience
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Manager */}
                                        <div className="col-12">
                                            <label className="form-label fw-semibold text-dark">
                                                Reporting Manager
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                placeholder="Manager Name"
                                                name="manager"
                                                value={
                                                    formData.manager
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Skills */}
                                        <div className="col-12">
                                            <label className="form-label fw-semibold text-dark">
                                                Skills
                                            </label>

                                            <textarea
                                                className="form-control rounded-3"
                                                rows={4}
                                                placeholder="React, Django, AWS, Docker..."
                                                name="skills"
                                                value={
                                                    formData.skills
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Button */}
                                        <div className="col-12 mt-3">
                                            <button
                                                type="submit"
                                                className="btn btn-dark btn-lg w-100 py-3 rounded-3 fw-semibold"
                                            >
                                                Save Employee
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployee;