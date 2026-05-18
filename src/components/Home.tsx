import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] =
        useState(false);

    const [selectedEmployeeId, setSelectedEmployeeId] =
        useState<number | null>(null);



    const openDeleteModal = (id: number) => {
        setSelectedEmployeeId(id);

        setShowDeleteModal(true);
    };
    const handleDelete = () => {
        console.log(
            "Deleted Employee:",
            selectedEmployeeId
        );

        // Delete Logic Here
        // setEmployees(...)

        setShowDeleteModal(false);

        toast.success("Employee Deleted Successfully")

    };



    const employees = [
        {
            id: 1,
            name: "John Doe",
            role: "Backend Developer",
            department: "Engineering",
            salary: "₹80,000",
            status: "Active",
        },
        {
            id: 2,
            name: "Sarah Smith",
            role: "UI/UX Designer",
            department: "Design",
            salary: "₹65,000",
            status: "Active",
        },
        {
            id: 3,
            name: "Michael Johnson",
            role: "HR Manager",
            department: "Human Resources",
            salary: "₹90,000",
            status: "On Leave",
        },
    ];

    return (
        <div
            className="min-vh-100 py-4"
            style={{
                background:
                    "linear-gradient(to right, #eef2ff, #f8fafc)",
            }}
        >
            <div className="container">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h1 className="fw-bold mb-1">
                            HR Dashboard
                        </h1>

                        <p className="text-muted mb-0">
                            Manage employees efficiently
                        </p>
                    </div>

                    <button
                        className="btn btn-dark btn-lg rounded-3 px-4"
                        onClick={() =>
                            navigate("/create-employee")
                        }
                    >
                        + Add Employee
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h6 className="text-muted">
                                    Total Employees
                                </h6>

                                <h2 className="fw-bold">
                                    120
                                </h2>
                            </div>
                        </div>
                    </div>





                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h6 className="text-muted">
                                    Departments
                                </h6>

                                <h2 className="fw-bold text-primary">
                                    8
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Salary Insights Section */}
                <div className="row g-4 mb-5">

                    {/* Country Salary Insights */}
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div>
                                        <h4 className="fw-bold mb-1">
                                            Salary Insights
                                        </h4>

                                        <p className="text-muted mb-0">
                                            Country wise salary analytics
                                        </p>
                                    </div>

                                    <select
                                        className="form-select"
                                        style={{
                                            width: "180px",
                                            borderRadius: "12px",
                                        }}
                                    >
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>Canada</option>
                                        <option>Germany</option>
                                    </select>
                                </div>

                                <div className="row g-3">

                                    <div className="col-md-4">
                                        <div className="bg-light rounded-4 p-4 text-center">
                                            <h6 className="text-muted">
                                                Minimum Salary
                                            </h6>

                                            <h4 className="fw-bold text-danger">
                                                ₹25K
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="bg-light rounded-4 p-4 text-center">
                                            <h6 className="text-muted">
                                                Average Salary
                                            </h6>

                                            <h4 className="fw-bold text-primary">
                                                ₹72K
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="bg-light rounded-4 p-4 text-center">
                                            <h6 className="text-muted">
                                                Maximum Salary
                                            </h6>

                                            <h4 className="fw-bold text-success">
                                                ₹1.8L
                                            </h4>
                                        </div>
                                    </div>

                                </div>

                                {/* Extra Metrics */}
                                <div className="mt-4">

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="text-muted">
                                            Median Salary
                                        </span>

                                        <span className="fw-semibold">
                                            ₹68K
                                        </span>
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="text-muted">
                                            Highest Paying Department
                                        </span>

                                        <span className="fw-semibold">
                                            Engineering
                                        </span>
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="text-muted">
                                            Salary Growth Rate
                                        </span>

                                        <span className="fw-semibold text-success">
                                            +12%
                                        </span>
                                    </div>

                                    <div className="d-flex justify-content-between py-2">
                                        <span className="text-muted">
                                            Total Payroll
                                        </span>

                                        <span className="fw-semibold">
                                            ₹82L
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Job Title Salary Insights */}
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">

                                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                                    <div>
                                        <h4 className="fw-bold mb-1">
                                            Job Role Analytics
                                        </h4>

                                        <p className="text-muted mb-0">
                                            Compare salary by role
                                        </p>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <select
                                            className="form-select"
                                            style={{
                                                width: "180px",
                                                borderRadius: "12px",
                                            }}
                                        >
                                            <option>
                                                Backend Developer
                                            </option>

                                            <option>
                                                Frontend Developer
                                            </option>

                                            <option>
                                                UI/UX Designer
                                            </option>

                                            <option>
                                                HR Manager
                                            </option>
                                        </select>

                                        <select
                                            className="form-select"
                                            style={{
                                                width: "140px",
                                                borderRadius: "12px",
                                            }}
                                        >
                                            <option>India</option>
                                            <option>USA</option>
                                            <option>Canada</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Main Metric */}
                                <div
                                    className="rounded-4 p-4 mb-4 text-white"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #111827, #2563eb)",
                                    }}
                                >
                                    <h6 className="opacity-75">
                                        Average Salary
                                    </h6>

                                    <h1 className="fw-bold mb-0">
                                        ₹95,000
                                    </h1>

                                    <small className="opacity-75">
                                        Backend Developer in India
                                    </small>
                                </div>

                                {/* Insights */}
                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <div className="border rounded-4 p-3">
                                            <h6 className="text-muted">
                                                Experience Premium
                                            </h6>

                                            <h5 className="fw-bold">
                                                +22%
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="border rounded-4 p-3">
                                            <h6 className="text-muted">
                                                Market Demand
                                            </h6>

                                            <h5 className="fw-bold text-success">
                                                High
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="border rounded-4 p-3">
                                            <h6 className="text-muted">
                                                Remote Jobs Ratio
                                            </h6>

                                            <h5 className="fw-bold">
                                                68%
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="border rounded-4 p-3">
                                            <h6 className="text-muted">
                                                Open Positions
                                            </h6>

                                            <h5 className="fw-bold text-primary">
                                                240+
                                            </h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                {/* Employee Table */}
                <div className="card border-0 shadow-lg rounded-4">
                    <div className="card-body p-4">

                        {/* Top Section */}
                        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                            <div>
                                <h4 className="fw-bold mb-1">
                                    Employee List
                                </h4>

                                <p className="text-muted mb-0">
                                    View, update, and manage
                                    employees
                                </p>
                            </div>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search employee..."
                                style={{
                                    width: "280px",
                                    borderRadius: "12px",
                                }}
                            />
                        </div>

                        {/* Table */}
                        <div className="table-responsive">
                            <table className="table align-middle">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Department</th>
                                        <th>Salary</th>
                                        <th className="text-end">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {employees.map(
                                        (employee) => (
                                            <tr
                                                key={
                                                    employee.id
                                                }
                                            >
                                                <td>
                                                    <div className="fw-semibold">
                                                        {
                                                            employee.name
                                                        }
                                                    </div>
                                                </td>

                                                <td>
                                                    {
                                                        employee.role
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        employee.department
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        employee.salary
                                                    }
                                                </td>



                                                <td className="text-end">
                                                    <div className="d-flex justify-content-end gap-2">
                                                        <button
                                                            className="btn btn-outline-primary btn-sm rounded-3"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/employee/view/${employee.id}`
                                                                )
                                                            }
                                                        >
                                                            View
                                                        </button>

                                                        <button
                                                            className="btn btn-outline-dark btn-sm rounded-3"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/employee/update/${employee.id}`
                                                                )
                                                            }
                                                        >
                                                            Update
                                                        </button>

                                                        <button className="btn btn-outline-danger btn-sm rounded-3" onClick={() => openDeleteModal(employee.id)}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {
                    showDeleteModal && (
                        <>
                            {/* Backdrop */}
                            <div
                                className="modal-backdrop fade show"
                            ></div>

                            {/* Modal */}
                            <div
                                className="modal fade show d-block"
                                tabIndex={-1}
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content border-0 rounded-4 shadow-lg">

                                        <div className="modal-header border-0 pb-0">
                                            <h5 className="modal-title fw-bold">
                                                Confirm Delete
                                            </h5>

                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={() =>
                                                    setShowDeleteModal(
                                                        false
                                                    )
                                                }
                                            ></button>
                                        </div>

                                        <div className="modal-body py-4">
                                            <p className="mb-0 text-muted fs-5">
                                                Are you sure you
                                                want to delete this
                                                employee?
                                            </p>
                                        </div>

                                        <div className="modal-footer border-0 pt-0">
                                            <button
                                                className="btn btn-light rounded-3 px-4"
                                                onClick={() =>
                                                    setShowDeleteModal(
                                                        false
                                                    )
                                                }
                                            >
                                                Cancel
                                            </button>

                                            <button
                                                className="btn btn-danger rounded-3 px-4"
                                                onClick={
                                                    handleDelete
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Home;