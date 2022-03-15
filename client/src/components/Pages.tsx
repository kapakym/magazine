import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { PageItem, Pagination } from "react-bootstrap";
import { Context } from "../index";
import { AppProviderType } from "../types/types";

const Pages = observer(() => {
  const { device } = useContext<AppProviderType>(Context);
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages: number[] = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-5">
      {pages.map((page) => (
        <Pagination.Item
          active={device.page == page}
          onClick={() => device.setPage(page)}
          key={page}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
