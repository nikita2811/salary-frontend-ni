import { useState } from "react";
import {
    useNavigate,
    useParams,
} from "react-router-dom";

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
    status: string;
};

const UpdateEmployee = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [showAlert, setShowAlert] =
        useState(false);

    // Dummy Existing Employee Data
    const [formData, setFormData] =
        useState<EmployeeFormData>({
            fullName: "John Doe",
            email: "john@example.com",
            phone: "+91 9876543210",
            jobTitle: "Backend Developer",
            department: "Engineering",
            country: "India",
            city: "Delhi",
            salary: "95000",
            employmentType: "Full-Time",
            joiningDate: "2024-05-12",
            experience: "4",
            skills:
                "React, Django, Docker, PostgreSQL",
            manager: "Michael Scott",
            status: "Active",
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

        console.log(
            "Updated Employee:",
            formData
        );

        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);

            navigate("/");
        }, 2000);
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

                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <h1 className="fw-bold mb-1">
                                    Update Employee
                                </h1>

                                <p className="text-muted mb-0">
                                    Edit employee details
                                    and save changes
                                </p>
                            </div>

                            <button
                                className="btn btn-dark rounded-3 px-4"
                                onClick={() =>
                                    navigate("/")
                                }
                            >
                                Back
                            </button>
                        </div>

                        {/* Alert */}
                        {showAlert && (
                            <div
                                className="alert alert-success alert-dismissible fade show shadow-sm rounded-4"
                                role="alert"
                            >
                                <strong>
                                    Employee updated
                                    successfully!
                                </strong>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() =>
                                        setShowAlert(
                                            false
                                        )
                                    }
                                ></button>
                            </div>
                        )}

                        {/* Form Card */}
                        <div
                            className="card border-0 shadow-lg overflow-hidden"
                            style={{
                                borderRadius: "24px",
                            }}
                        >

                            {/* Top Banner */}
                            <div
                                className="p-5 text-white"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #111827, #2563eb)",
                                }}
                            >
                                <div className="d-flex align-items-center gap-4">
                                    <div
                                        className="d-flex justify-content-center align-items-center bg-white text-dark fw-bold"
                                        style={{
                                            width: "90px",
                                            height: "90px",
                                            borderRadius:
                                                "50%",
                                            fontSize:
                                                "32px",
                                        }}
                                    >
                                        {formData.fullName.charAt(
                                            0
                                        )}
                                    </div>

                                    <div>
                                        <h2 className="fw-bold mb-1">
                                            {
                                                formData.fullName
                                            }
                                        </h2>

                                        <p className="mb-0 opacity-75">
                                            {
                                                formData.jobTitle
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="card-body p-5">
                                <form
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row g-4">

                                        {/* Full Name */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                name="fullName"
                                                value={
                                                    formData.fullName
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Email
                                            </label>

                                            <input
                                                type="email"
                                                className="form-control form-control-lg rounded-3"
                                                name="email"
                                                value={
                                                    formData.email
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Phone Number
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
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
                                            <label className="form-label fw-semibold">
                                                Job Title
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                name="jobTitle"
                                                value={
                                                    formData.jobTitle
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Department */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Department
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
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
                                            <label className="form-label fw-semibold">
                                                Country
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                name="country"
                                                value={
                                                    formData.country
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* City */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                City
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
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
                                            <label className="form-label fw-semibold">
                                                Salary
                                            </label>

                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text">
                                                    ₹
                                                </span>

                                                <input
                                                    type="number"
                                                    className="form-control rounded-end-3"
                                                    name="salary"
                                                    value={
                                                        formData.salary
                                                    }
                                                    onChange={
                                                        handleChange
                                                    }
                                                />
                                            </div>
                                        </div>

                                        {/* Employment Type */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
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
                                            <label className="form-label fw-semibold">
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
                                            <label className="form-label fw-semibold">
                                                Experience
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control form-control-lg rounded-3"
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
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Reporting Manager
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                name="manager"
                                                value={
                                                    formData.manager
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            />
                                        </div>

                                        {/* Status */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Status
                                            </label>

                                            <select
                                                className="form-select form-select-lg rounded-3"
                                                name="status"
                                                value={
                                                    formData.status
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            >
                                                <option value="Active">
                                                    Active
                                                </option>

                                                <option value="On Leave">
                                                    On Leave
                                                </option>

                                                <option value="Inactive">
                                                    Inactive
                                                </option>
                                            </select>
                                        </div>

                                        {/* Skills */}
                                        <div className="col-12">
                                            <label className="form-label fw-semibold">
                                                Skills
                                            </label>

                                            <textarea
                                                className="form-control rounded-3"
                                                rows={4}
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
                                                Update Employee
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-center mt-4 text-muted">
                            Employee Management System ©
                            2026
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployee;