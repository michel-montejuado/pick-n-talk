import { db } from "@/db";
import { useNavigate } from "react-router";

export default function Page() {
  const navigate = useNavigate();

  if (db.isEmpty()) {
    navigate("/setup");
  } else {
    return (
      <>
      </>
    )
  }
}
