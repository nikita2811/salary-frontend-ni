import { useNavigate, useParams } from "react-router-dom";

const ViewEmployee = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    // Dummy Employee Data
    const employee = {
        id,
        fullName: "John Doe",
        email: "john@example.com",
        phone: "+91 9876543210",
        jobTitle: "Backend Developer",
        department: "Engineering",
        country: "India",
        city: "Delhi",
        salary: "₹95,000",
        employmentType: "Full-Time",
        joiningDate: "2024-05-12",
        experience: "4 Years",
        skills:
            "React, Django, Docker, PostgreSQL, AWS",
        manager: "Michael Scott",
        status: "Active",
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
                                    Employee Details
                                </h1>

                                <p className="text-muted mb-0">
                                    Complete employee
                                    information
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

                        {/* Main Card */}
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
                                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between">

                                    <div className="d-flex align-items-center gap-4">
                                        <div
                                            className="d-flex justify-content-center align-items-center bg-white text-dark fw-bold"
                                            style={{
                                                width: "90px",
                                                height: "90px",
                                                borderRadius: "50%",
                                                fontSize:
                                                    "32px",
                                            }}
                                        >
                                            {employee.fullName.charAt(
                                                0
                                            )}
                                        </div>

                                        <div>
                                            <h2 className="fw-bold mb-1">
                                                {
                                                    employee.fullName
                                                }
                                            </h2>

                                            <p className="mb-1 opacity-75">
                                                {
                                                    employee.jobTitle
                                                }
                                            </p>

                                            <span className="badge bg-success rounded-pill px-3 py-2">
                                                {
                                                    employee.status
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4 mt-md-0">
                                        <button
                                            className="btn btn-light rounded-3 px-4"
                                            onClick={() =>
                                                navigate(
                                                    `/employee/edit/${employee.id}`
                                                )
                                            }
                                        >
                                            Edit Employee
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="card-body p-5">

                                {/* Personal Information */}
                                <div className="mb-5">
                                    <h4 className="fw-bold mb-4">
                                        Personal Information
                                    </h4>

                                    <div className="row g-4">

                                        <div className="col-md-6">
                                            <div className="border rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Full Name
                                                </small>

                                                <h5 className="fw-semibold mt-2 mb-0">
                                                    {
                                                        employee.fullName
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="border rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Email Address
                                                </small>

                                                <h5 className="fw-semibold mt-2 mb-0">
                                                    {
                                                        employee.email
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="border rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Phone Number
                                                </small>

                                                <h5 className="fw-semibold mt-2 mb-0">
                                                    {
                                                        employee.phone
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="border rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Country
                                                </small>

                                                <h5 className="fw-semibold mt-2 mb-0">
                                                    {
                                                        employee.country
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Employment Details */}
                                <div className="mb-5">
                                    <h4 className="fw-bold mb-4">
                                        Employment Details
                                    </h4>

                                    <div className="row g-4">

                                        <div className="col-md-4">
                                            <div className="bg-light rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Job Title
                                                </small>

                                                <h5 className="fw-semibold mt-2">
                                                    {
                                                        employee.jobTitle
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="bg-light rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Department
                                                </small>

                                                <h5 className="fw-semibold mt-2">
                                                    {
                                                        employee.department
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="bg-light rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Employment Type
                                                </small>

                                                <h5 className="fw-semibold mt-2">
                                                    {
                                                        employee.employmentType
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="bg-light rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Salary
                                                </small>

                                                <h4 className="fw-bold text-success mt-2">
                                                    {
                                                        employee.salary
                                                    }
                                                </h4>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="bg-light rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Experience
                                                </small>

                                                <h5 className="fw-semibold mt-2">
                                                    {
                                                        employee.experience
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="bg-light rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Joining Date
                                                </small>

                                                <h5 className="fw-semibold mt-2">
                                                    {
                                                        employee.joiningDate
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Other Information */}
                                <div>
                                    <h4 className="fw-bold mb-4">
                                        Additional Information
                                    </h4>

                                    <div className="row g-4">

                                        <div className="col-md-6">
                                            <div className="border rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    Reporting Manager
                                                </small>

                                                <h5 className="fw-semibold mt-2">
                                                    {
                                                        employee.manager
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="border rounded-4 p-4 h-100">
                                                <small className="text-muted">
                                                    City
                                                </small>

                                                <h5 className="fw-semibold mt-2">
                                                    {
                                                        employee.city
                                                    }
                                                </h5>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="border rounded-4 p-4">
                                                <small className="text-muted">
                                                    Skills
                                                </small>

                                                <div className="mt-3 d-flex flex-wrap gap-2">
                                                    {employee.skills
                                                        .split(
                                                            ","
                                                        )
                                                        .map(
                                                            (
                                                                skill,
                                                                index
                                                            ) => (
                                                                <span
                                                                    key={
                                                                        index
                                                                    }
                                                                    className="badge bg-dark-subtle text-dark rounded-pill px-3 py-2"
                                                                >
                                                                    {skill.trim()}
                                                                </span>
                                                            )
                                                        )}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

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

export default ViewEmployee;