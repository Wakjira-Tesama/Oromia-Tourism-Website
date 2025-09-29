import React, { useEffect } from "react";
// @ts-ignore – yoo typings hin jirre
import { mountUsersApp } from "../../Admins/admins/src/main.tsx";

export default function UsersPage() {
  useEffect(() => {
    mountUsersApp("users-root");
  }, []);

  return <div id="users-root" style={{ height: "100vh" }} />;
}
