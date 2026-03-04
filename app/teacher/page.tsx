"use client";

import { withAuth } from "../hoc/withAuth";
import TeacherPanel from "./TeacherPanel";

export default withAuth(TeacherPanel, {
  requiredRole: "teacher",
});
