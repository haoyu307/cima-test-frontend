import { useEffect, useState } from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
// * hooks
import { useProductsList } from "../services/queries";
// * components
import FilterInput from "./FilterInput";

const ProductsList = () => {
  const [sku, setSku] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();

  const productsListResult = useProductsList(sku, title);

  return (
    <div className="px-20 py-10">
      <span className="text-xl">Products list</span>
      <div className="flex flex-row">
        <FilterInput
          label={"SKU"}
          value={sku}
          onChange={setSku}
          additionalClassName="my-4 mx-4"
        />
        <FilterInput
          label={"Title"}
          value={title}
          onChange={setTitle}
          additionalClassName="my-4 mx-4"
        />
      </div>
      <Table
        autoHeight={true}
        width={1200}
        data={productsListResult.isSuccess ? productsListResult.data : []}
        loading={productsListResult.isLoading}
        renderLoading={() => <span>Loading</span>}
      >
        <Column width={100} fixed>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={300}>
          <HeaderCell>Title</HeaderCell>
          <Cell dataKey="title" />
        </Column>
        <Column width={300}>
          <HeaderCell>SKU</HeaderCell>
          <Cell dataKey="sku" />
        </Column>
        <Column width={300}>
          <HeaderCell>Sell Price</HeaderCell>
          <Cell dataKey="sell_price" />
        </Column>
        <Column width={200}>
          <HeaderCell>Quantity</HeaderCell>
          <Cell dataKey="quantity" />
        </Column>
      </Table>
    </div>
  );
};

export default ProductsList;
