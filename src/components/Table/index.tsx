import { useTable } from "./hooks/tableHook";
import * as S from "./styles"

interface TableProps {
  lastTransaction?: boolean;
}

const Table = ({ lastTransaction }: TableProps) => {
  const { transactions } = useTable();

  // Filtrar as transações se `lastTransaction` for `true`
  const displayedTransactions = lastTransaction
    ? transactions.slice(0, 5)
    : transactions;

  return (
    <>
      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHeader>Titulo</S.TableHeader>
            <S.TableHeader>Código</S.TableHeader>
            <S.TableHeader>Valor</S.TableHeader>
          </S.TableRow>
        </thead>
        <tbody>
          {displayedTransactions.map((item, index) => (
            <S.TableRow key={index}>
              <S.TableCell>
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.date}</p>
                </div>
              </S.TableCell>
              <S.TableCell>{item.code}</S.TableCell>
              <S.TableCell>{item.value}</S.TableCell>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
      {lastTransaction && <S.SeeMore href="/transaction">See More →</S.SeeMore>}
    </>
  );
};

export default Table;