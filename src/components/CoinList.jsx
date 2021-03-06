import React from 'react'
import Coin from './Coin';
import styled from 'styled-components';

const Table = styled.table`
  font-size: 1rem;
`;

export default function CoinList(props) {
      return(
        <Table className="table table-primary table-bordered">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
            <tbody>
              {
              props.coinData.map( ({key, rank, name, ticker, price, balance}) =>
                <Coin key={key}
                handleRefresh={props.handleRefresh}
                handleTransaction={props.handleTransaction}
                rank={rank}
                name={name}
                ticker={ticker}
                showBalance={props.showBalance}
                balance={balance}
                price={price}
                tickerId={key}
              />
              )
              }
            </tbody>
        </Table>
    )
}