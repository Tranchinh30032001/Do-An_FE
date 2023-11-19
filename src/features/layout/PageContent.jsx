import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../../routes";
import NotFound404 from "../404";
import { cn } from "../../utils/cn";

function PageContent({ className }) {
  return (
    <div className={cn(className)}>
      <Suspense>
        <Routes>
          {routes.map((route, key) => {
            return <Route key={key} path={route.path} element={<route.component />} />;
          })}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default PageContent;
