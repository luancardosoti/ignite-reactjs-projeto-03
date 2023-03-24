import styled from 'styled-components'

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  padding-bottom: 6rem;

  .contrainerTable {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  margin-top: 1.5rem;

  tr {
    :not(:first-child) {
      margin-top: 0.5rem;
    }

    background: ${(props) => props.theme['gray-700']};
    padding: 1.25rem 2rem;
    border-radius: 6px;

    display: grid;
    align-items: center;
    grid-template-columns: 2.5fr 1fr 1fr 1fr 2rem;
    column-gap: 0.5rem;

    td {
      width: 100%;

      &.btnDelete {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          width: 20px;
          height: 20px;

          cursor: pointer;
          background: none;
          border: 0;
          padding: 0;
        }
      }

      :nth-child(2),
      :nth-child(4) {
        white-space: nowrap;
      }
    }
  }

  @media screen and (max-width: 800px) {
    /* width: 800px; */

    tr {
      grid-template-columns:
        minmax(160px, 1.5fr) minmax(120px, 1fr) minmax(120px, 1fr)
        1fr 2rem;
      column-gap: 1rem;

      td::fisrt-child {
        color: red;
      }
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
