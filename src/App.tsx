import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "@/routes/Layout";
import NoMatchPage from "@/routes/NoMatch";
import HomePage from "@/routes/Page";
import BindersPage from "@/routes/binders/Page";
import BinderPage from "@/routes/binders/[uuid]/Page";
import BinderEditPage from "@/routes/binders/[uuid]/edit/Page";
import SetupPage from "@/routes/setup/Page";
import UsersPage from "@/routes/users/Page";
import UserPage from "@/routes/users/[uuid]/Page";
import UserEditPage from "@/routes/users/[uuid]/edit/Page";

import toggleDarkClass from "@/utils/toggleDarkClass";

export default function App() {
  useEffect(() => {
    toggleDarkClass();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="binders">
            <Route index element={<BindersPage />} />
            <Route path=":uuid">
              <Route index element={<BinderPage />} />
              <Route path="edit" element={<BinderEditPage />} />
            </Route>
          </Route>

          <Route path="setup" element={<SetupPage />} />

          <Route path="users">
            <Route index element={<UsersPage />} />
            <Route path=":uuid">
              <Route index element={<UserPage />} />
              <Route path="edit" element={<UserEditPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
