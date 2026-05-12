
//stat cards data
export const statsData = [
    {
        id: 1,
        title: "Total Revenue",
        value: "Rs. 4,82,000",
        change: "+12.5%",
        positive: true,
        icon: "revenue",
    },
    {
        id: 2,
        title: "Total Users",
        value: "3,842",
        change: "+8.2%",
        positive: true,
        icon: "users",
    },
    {
        id: 3,
        title: "New Orders",
        value: "1,210",
        change: "-3.1%",
        positive: false,
        icon: "orders",
    },
    {
        id: 4,
        title: "Growth Rate",
        value: "24.6%",
        change: "+4.8%",
        positive: true,
        icon: "growth",
    },
];



//line chart
export const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Revenue (Rs.)",
            data: [30000, 45000, 38000, 52000, 61000, 55000, 70000, 82000, 74000, 91000, 88000, 102000],
            borderColor: "#22c55e",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
        },
    ],
};



//bar chart
export const activityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Active Users",
            data: [120, 190, 150, 220, 180, 90, 60],
            backgroundColor: "rgba(99, 102, 241, 0.8)",
            borderRadius: 6,
        },
    ],
};



//pie chart
export const trafficData = {
    labels: ["Organic Search", "Direct", "Social Media", "Referral"],
    datasets: [
        {
            data: [42, 28, 19, 11],
            backgroundColor: [
                "#22c55e",
                "#6366f1",
                "#f59e0b",
                "#ef4444",
            ],
            borderWidth: 0,
        },
    ],
};



//sidebar navigation links
export const navLinks = [
    { id: 1, label: "Dashboard", icon: "dashboard", path: "/" },
    { id: 2, label: "Analytics", icon: "analytics", path: "/analytics" },
    { id: 3, label: "Users", icon: "users", path: "/users" },
    { id: 4, label: "Orders", icon: "orders", path: "/orders" },
    { id: 5, label: "Settings", icon: "settings", path: "/settings" },
];