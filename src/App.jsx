import ColorValue from "./components/ColorValue";
import Header from "./components/Header";
import Main from "./components/Main";
import { apiGetInvestments } from "./data/investments";
import {
  helperFormatMonthYear,
  helperFormatMoney,
  helperFormatPercent,
} from "./helpers";

export default function App() {
  const investments = apiGetInvestments();

  return (
    <>
      <Header>Trabalho prático</Header>

      <Main>
        <ul>
          {investments.map((investment) => {
            const { id, description, totalValue, totalPercent, reports } =
              investment;
            return (
              <li className="border p-2 my-2" key={id}>
                <h2 className="font-semibold text-center text-xl">
                  {description}
                </h2>
                <h3 className="font-semibold text-center text-lg mt-2">
                  <ColorValue value={totalValue}>
                    Rendimento total {helperFormatMoney(totalValue)} (
                    {helperFormatPercent(totalPercent)})
                  </ColorValue>
                </h3>
                <ul>
                  {reports.map((report) => {
                    const { id, month, year, value, percent } = report;
                    return (
                      <li
                        key={id}
                        className="flex flex-row items-center justify-between"
                      >
                        <span className="font-mono">
                          {helperFormatMonthYear(month, year)}
                        </span>
                        <span className="flex-1 ml-4">
                          <ColorValue value={percent}>
                            {helperFormatMoney(value)}
                          </ColorValue>
                        </span>
                        <ColorValue value={percent}>
                          <span>{helperFormatPercent(percent)}</span>
                        </ColorValue>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </Main>
    </>
  );
}
