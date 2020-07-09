import React from "react";
import styles from "./index.module.css";
import { MainLayout } from "shared/components/Layout";

const TestingAggregateContainer = () => {
  return (
    <MainLayout>
      <div className={styles["main"]}>Tesing Aggregate Report</div>
    </MainLayout>
  );
};

export default TestingAggregateContainer;
