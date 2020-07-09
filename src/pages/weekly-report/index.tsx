import React from "react";
import styles from "./index.module.css";
import { MainLayout } from "shared/components/Layout";

const WeeklyReportContainer = () => {
  return (
    <MainLayout>
      <div className={styles["main"]}>Weekly Report</div>
    </MainLayout>
  );
};

export default WeeklyReportContainer;
