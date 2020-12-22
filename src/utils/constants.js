export const RequestStatus = {
  NOT_STARTED: "NOT_STARTED",
  STARTED: "STARTED",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};
export const TypeNoParkingOptions = [
  {
    id: 1,
    name: "Cấm đỗ  giờ cao điểm",
    typeName: "Giờ cao điểm",
    color: "#ff1744",
  },
  {
    id: 2,
    name: "Cấm đỗ  6h đến 22h",
    typeName: "6h đến 22h",
    color: "#283593",
  },
  { id: 3, name: "Cấm đỗ  24h/24h", typeName: "24h/24h", color: "#64dd17" },
  {
    id: 4,
    name: "Cấm đỗ  ngày chẵn lẽ",
    typeName: "Ngày chẵn lẽ",
    color: "#fb8c00",
  },
];
export const NavType = [
  { id: 1, name: "Giới Thiệu", href: "/home-page" },
  { id: 2, name: "Bản đồ", href: "/" },
  { id: 3, name: "Vi Phạm", href: "/violation" },
  { id: 4, name: "Tin tức", href: "/news" },
];
