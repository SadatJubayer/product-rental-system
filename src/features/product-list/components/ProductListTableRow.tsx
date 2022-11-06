/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { IProduct } from 'types/IProduct';

interface ITableRowItemProps {
    product: IProduct;
    serial: number;
}

const ProductListTableRow = ({ product, serial }: ITableRowItemProps) => {
    const { availability, needing_repair, name, code, durability, max_durability, mileage } =
        product;

    return (
        <tr>
            <td>{serial}</td>
            <td>{name}</td>
            <td>{code}</td>
            <td>
                {availability ? (
                    <span aria-label={String(availability)}>✅</span>
                ) : (
                    <span aria-label={String(availability)}>❌</span>
                )}
            </td>
            <td>{needing_repair ? 'Yes' : 'No'}</td>
            <td>
                {durability}/{max_durability}
            </td>
            <td>{mileage || 'n/a'}</td>
        </tr>
    );
};

export default ProductListTableRow;
