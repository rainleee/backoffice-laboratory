"use client";

import {
  AutoRemarkAction,
  AutoRemarkDescription,
  AutoRemarkRoot,
  AutoRemarkDataTable,
} from "./components";
import { useAutoRemarkHandler } from "./hooks";

const AutoRemarkPage = () => {
  const [handleRemarkUpdate, { data, loading, called }] =
    useAutoRemarkHandler();
  const { count, date, user } = data;

  return (
    <AutoRemarkRoot>
      <AutoRemarkDescription count={count} date={date} />
      <AutoRemarkAction handleClick={handleRemarkUpdate} loading={loading} />
      <AutoRemarkDataTable data={user} loading={loading} isDirty={called} />
    </AutoRemarkRoot>
  );
};

export default AutoRemarkPage;
