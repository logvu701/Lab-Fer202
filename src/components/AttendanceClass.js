import React, { useState, useEffect, useReducer, useRef, useMemo, useCallback } from "react";
import { initialAttendances } from "../data.js";
import { CiDark, CiLight } from "react-icons/ci";
import useLocalStorage from "../hooks/useLocalStorage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const classReducer = (state, action) => {
    switch (action.type) {
        case "DELETE_STUDENT":
            return state.filter((c) => c.id !== action.payload);
        case "TOGGLE_STATUS":
            return state.map((c) => (c.id === action.payload ? { ...c, status: c.status === "PRESENT" ? "ABSENT" : "PRESENT" } : c));
        default:
            return state;
    }
};

function AttendanceClass() {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    const [localstudents, setLocalstudents] = useLocalStorage("localstudents", initialAttendances);
    const [students, dispatch] = useReducer(classReducer, localstudents);

    useEffect(() => {
        setLocalstudents(students);
    }, [students, setLocalstudents]);

    const [editingClass, setEditingClass] = useState(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedClass, setSelectedClass] = useState("ALL");
    const [selectedStatus, setSelectedStatus] = useState("ALL");
    const [sortBy, setSortBy] = useState("NONE");

    const nameRef = useRef();
    const subjectRef = useRef();
    const lecturerRef = useRef();

    const filteredAndSortedClasses = useMemo(() => {
        let result = [...students];

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter((c) => c.name.toLowerCase().includes(query));
        }

        if (selectedStatus !== "ALL") {
            result = result.filter((c) => c.status === selectedStatus);
        }

        if (sortBy === "NAME_ASC") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "NAME_DESC") {
            result.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy === "ENROLLED_ASC") {
            result.sort((a, b) => a.enrolled - b.enrolled);
        } else if (sortBy === "ENROLLED_DESC") {
            result.sort((a, b) => b.enrolled - a.enrolled);
        }

        return result;
    }, [students, searchQuery, selectedStatus, sortBy]);

    // 5. Sử dụng useCallback để ghi nhớ các hàm xử lý sự kiện
    const handleEdit = useCallback((cls) => {
        setEditingClass(cls);
    }, []);

    const handleDelete = useCallback((id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
            dispatch({ type: "DELETE_CLASS", payload: id });
            setEditingClass((prev) => (prev && prev.id === id ? null : prev));
        }
    }, []);

    const handleToggleStatus = useCallback((id) => {
        dispatch({ type: "TOGGLE_STATUS", payload: id });
        setEditingClass((prev) => (prev && prev.id === id ? { ...prev, status: prev.status === "PRESENT" ? "ABSENT" : "PRESENT" } : prev));
    }, []);

    const handleClearFilters = useCallback(() => {
        setSearchQuery("");
        setSelectedStatus("ALL");
        setSortBy("NONE");
    }, []);

    // Các class css động theo chế độ màu sáng/tối
    const containerTheme = darkMode ? "bg-dark text-white min-vh-100 p-4" : "bg-light text-dark min-vh-100 p-4";

    // Khối thẻ Form Card (Thay đổi dựa trên Dark/Light mode)
    const cardTheme = darkMode
        ? "bg-secondary text-white p-3 rounded-4 shadow-sm border border-secondary mb-4"
        : "bg-white p-3 rounded-4 shadow-sm border border-light-subtle mb-4";

    // Khối Table (Thay đổi dựa trên Dark/Light mode, bỏ table-striped)
    const tableTheme = darkMode ? "table table-dark table-hover mb-0 align-middle" : "table table-hover mb-0 align-middle";

    return (
        <div className={containerTheme}>
            <header className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fw-bold m-0" style={{ fontSize: "2rem" }}>
                    HỆ THỐNG QUẢN LSY ĐIỂM DANH LỚP HỌC
                </h1>
                <button
                    className={`btn d-flex align-items-center justify-content-center p-2 rounded-3 border-dark`}
                    onClick={() => setDarkMode(!darkMode)}
                    title={darkMode ? "Chuyển sang chế độ Sáng" : "Chuyển sang chế độ Tối"}
                    style={{
                        borderWidth: "1.5px",
                        backgroundColor: darkMode ? "#343a40" : "#ffffff",
                        borderColor: darkMode ? "#f8f9fa" : "#000000",
                        color: darkMode ? "#ffffff" : "#000000",
                    }}
                >
                    {darkMode ? <CiLight size={22} /> : <CiDark size={22} />}
                </button>
            </header>

            <div className={cardTheme}>
                <Row className="g-3">
                    <Col xs={12} md={4}>
                        <Form.Control
                            type="text"
                            placeholder="Tìm kiếm theo tên sinh viên..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="py-2 px-3 rounded-3"
                            style={{ fontSize: "15px", borderColor: "#dee2e6" }}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={2}>
                        <Form.Select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="py-2 px-3 rounded-3 text-secondary"
                            style={{ fontSize: "15px", borderColor: "#dee2e6" }}
                        >
                            <option value="ALL">Tất cả Trạng thái</option>
                            <option value="OPEN">Có mặt (PRESENT)</option>
                            <option value="CLOSED">Vắng mặt (ABSENT)</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12} sm={6} md={1} className="d-flex align-items-stretch">
                        <button
                            type="button"
                            onClick={handleClearFilters}
                            className="btn btn-outline-secondary fw-semibold py-2 px-2 rounded-3 w-100"
                            style={{ fontSize: "14px" }}
                        >
                            Reset Bộ Lọc
                        </button>
                    </Col>
                </Row>
            </div>

            <div className="mb-3 text-start d-flex justify-content-between align-items-center">
                <span className="fs-6 fw-normal">
                    Tổng số bản ghi: <strong>{filteredAndSortedClasses.length}</strong> Có mặt <strong>{filteredAndSortedClasses.status}</strong> Vắng
                    mặt <strong></strong> Tỷ lệ đi học: <strong></strong>
                </span>
            </div>

            <div
                className={`table-responsive rounded-3 shadow-xs border ${darkMode ? "border-secondary" : "border-light-subtle"} overflow-hidden bg-white`}
            >
                <table className={tableTheme}>
                    <thead>
                        <tr>
                            <th className="py-3 px-3 fw-bold" style={{ backgroundColor: "#80330d", width: "80px", color: "white" }}>
                                STT
                            </th>
                            <th className="py-3 px-3 fw-bold" style={{ backgroundColor: "#80330d", color: "white" }}>
                                Mã Lớp
                            </th>
                            <th className="py-3 px-3 fw-bold" style={{ backgroundColor: "#80330d", color: "white" }}>
                                Tên Sinh Viên
                            </th>
                            <th className="py-3 px-3 fw-bold" style={{ backgroundColor: "#80330d", color: "white" }}>
                                Ngày
                            </th>
                            <th className="py-3 px-3 fw-bold" style={{ backgroundColor: "#80330d", color: "white" }}>
                                Trạng Thái
                            </th>
                            <th className="py-3 px-3 text-center fw-bold" style={{ backgroundColor: "#80330d", width: "180px", color: "white" }}>
                                Thao Tác
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAndSortedClasses.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center py-4 text-muted">
                                    Sinh viên không tồn tại.
                                </td>
                            </tr>
                        ) : (
                            filteredAndSortedClasses.map((cls, index) => (
                                <tr key={cls.id} className={darkMode ? "text-white" : "text-dark"}>
                                    <td className="px-3 py-3 fw-normal">{index + 1}</td>
                                    <td className="px-3 py-3 fw-bold text-uppercase">{cls.ClassId}</td>
                                    <td className="px-3 py-3">{cls.name}</td>
                                    <td className="px-3 py-3">{cls.date}</td>
                                    <td className="px-3 py-3">{cls.status}</td>
                                    <td className="px-3 py-3 text-center">
                                        <div className="d-flex justify-content-center gap-2">
                                            <button
                                                onClick={() => handleDelete(cls.id)}
                                                className="btn btn-sm btn-danger px-3 rounded-2 fw-medium"
                                                style={{ backgroundColor: "#dc3545", border: "none" }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AttendanceClass;
