import { useQuery } from "@tanstack/react-query";
// * utils
import axiosConfig from "../utils/axiosConfig";
// *
import { serviceUrl } from "../utils/urls";

const getOrdersList = async (status: number | undefined) => {
  const params = {
    status,
  };

  const { data } = await axiosConfig.get(serviceUrl.ordersList, {
    params,
  });
  return data;
};

const getProductsList = async (
  sku: string | undefined,
  title: string | undefined
) => {
  const params = {
    sku,
    title,
  };

  const { data } = await axiosConfig.get(serviceUrl.productsList, {
    params,
  });
  return data;
};

const useOrdersList = (status: number | undefined) => {
  return useQuery(
    [
      "orders",
      {
        type: "list",
        status,
      },
    ],
    () => getOrdersList(status)
  );
};

const useProductsList = (
  sku: string | undefined,
  title: string | undefined
) => {
  return useQuery(
    [
      "products",
      {
        type: "list",
        sku,
        title,
      },
    ],
    () => getProductsList(sku, title)
  );
};

export { useOrdersList, useProductsList };
