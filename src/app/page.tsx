"use client";
/** Global import block
 * required packages
 * NextJs | Antd
 */
import { Alert, Button, Skeleton, Table } from "antd";
import { useState } from "react";

/** Custom import block
 * custom file based imports
 * custom component imports
 */
import useFetch from "@/hooks/useFetch";
import { tableColumns } from "./config/constant";

/* -------------------------------------------------------------------------- */
/*                                 home module                                */
/* -------------------------------------------------------------------------- */
export default function Home() {
  /* State declarations **/
  const [url, setUrl] = useState<string | null>(null);
  const [isTableVisible, setIsTableVisible] = useState<boolean>(false);

  /* custom hooks usage */
  const { data: users, loading, error } = useFetch(url);

  /** Fetch user handler **/
  const fetchUsers = () => {
    setIsTableVisible(true);
    setUrl("https://jsonplaceholder.typicode.com/users");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Welcome to Next.js Developer Evaluation Task
        </h1>
        {!isTableVisible ? (
          <Button type="primary" onClick={fetchUsers} disabled={loading}>
            Fetch Users
          </Button>
        ) : (
          <Button
            type="default"
            onClick={() => setIsTableVisible(false)}
            className="ml-2"
          >
            Close Table
          </Button>
        )}
        <div className="w-full max-w-4xl mt-8">
          {loading && <Skeleton active />}
          {error && (
            <Alert message="Error" description={error} type="error" showIcon />
          )}
          {!loading && !error && users?.length > 0 && isTableVisible && (
            <Table
              columns={tableColumns}
              dataSource={users}
              rowKey={(record) => record.id}
              pagination={false}
              className="mt-4"
            />
          )}
        </div>
      </div>
    </>
  );
}
