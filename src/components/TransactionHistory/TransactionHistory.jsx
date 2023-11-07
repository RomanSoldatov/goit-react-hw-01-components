import React from 'react';

import {
  Table,
  Thead,
  Tr,
  Th,
  Tb,
  Td,
  Type,
  ExtendedTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tb>
        {items.map((item, idx) => {
          return (
            <TableRow
              key={item.id}
              id={item.id}
              type={item.type}
              currency={item.currency}
              amount={item.amount}
              index={idx}
            />
          );
        })}
      </Tb>
    </Table>
  );
};

const TableRow = ({ type, amount, currency, index }) => {
  return (
    <ExtendedTr idx={index}>
      <Type>{type}</Type>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </ExtendedTr>
  );
};
