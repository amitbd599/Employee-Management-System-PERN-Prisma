import prisma from "../../config/db.js";

//! create salary
export const createSalary = async (req, res) => {
  try {
    const { employeeId, amount, month, year, remarks } = req.body;

    // Prevent duplicate payment for the same month
    const existing = await prisma.salary.findFirst({
      where: {
        employeeId,
        month,
        year,
      },
    });

    if (existing) {
      return res.status(200).json({
        success: false,
        message: "Salary already paid for this month.",
      });
    }

    const salary = await prisma.salary.create({
      data: {
        employeeId,
        amount,
        month,
        year,
        remarks,
        status: "paid",
      },
    });

    res.status(201).json({
      success: true,
      message: "Salary paid successfully",
      salary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating salary",
      error: error.toString(),
    });
  }
};

// get Salary Report -- Generate Monthly Report

export const getSalaryReport = async (req, res) => {
  try {
    const month = parseInt(req.query.month);
    const year = parseInt(req.query.year);
    const filterStatus = req.query.status; // 'paid' or 'unpaid'

    const endOfMonth = new Date(year, month, 0); // Last day of the month

    // Get all employees who joined before or during the given month
    const employees = await prisma.employee.findMany({
      where: {
        createdAt: {
          lte: endOfMonth,
        },
      },
      include: {
        department: true,
        role: true,
      },
    });

    // Get salary records of the month
    const salaryRecords = await prisma.salary.findMany({
      where: { month, year },
    });

    // Create full report
    const report = employees.map((emp) => {
      const paid = salaryRecords.find((s) => s.employeeId === emp.id);
      const status = paid ? paid.status : "unpaid";

      return {
        employeeId: emp.id,
        name: `${emp.firstName} ${emp.lastName}`,
        email: emp.email,
        phone: emp.phone,
        department: emp.department.name,
        role: emp.role.name,
        salary: emp.salary,
        status: status,
        paidAmount: paid?.amount || 0,
        paidAt: paid?.paidAt || null,
        remarks: paid?.remarks || "",
        joinedAt: emp.createdAt,
      };
    });

    // Filter by status if requested
    const filteredReport = filterStatus
      ? report.filter((emp) => emp.status === filterStatus)
      : report;

    res.status(200).json({ success: true, data: filteredReport });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error generating salary report",
      error: error.toString(),
    });
  }
};

// Get Salary History for an Employee
export const getEmployeeSalaryHistory = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const fromDate = new Date(req.query.from);
    const toDate = new Date(req.query.to);

    // Validate employee
    const employee = await prisma.employee.findUnique({
      where: { id: employeeId },
      include: { department: true, role: true },
    });

    if (!employee) {
      return res
        .status(200)
        .json({ success: false, message: "Employee not found." });
    }

    // Get salary records between date range
    const salaryHistory = await prisma.salary.findMany({
      where: {
        employeeId,
        paidAt: {
          gte: fromDate,
          lte: toDate,
        },
      },
      orderBy: {
        paidAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      employee: {
        name: `${employee.firstName} ${employee.lastName}`,
        department: employee.department.name,
        role: employee.role.name,
        email: employee.email,
        phone: employee.phone,
      },
      data: salaryHistory,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.toString() });
  }
};
