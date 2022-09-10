import { AVAILABLE_WINNER_COMBINATIONS } from './constants';

export const getComputerChoice = ({
   checkboxField,
   computerSymbol,
   playerSymbol,
}) => {
   let highestRankCombination = null;
   let lastHighestRank = 0;

   const countSymbols = (arr, symbolToCount) => {
      return arr.reduce(
         (result, symbol) => (symbol === symbolToCount ? result + 1 : result),
         0,
      );
   };

   const getFirstAvailablePosition = (arr, symbolToFilter) => {
      return arr.find((position) => checkboxField[position] !== symbolToFilter);
   };

   for (const combination of AVAILABLE_WINNER_COMBINATIONS) {
      const symbolsForCombination = combination.map(
         (position) => checkboxField[position],
      );

      const computerSymbols = countSymbols(
         symbolsForCombination,
         computerSymbol,
      );
      const playerSymbols = countSymbols(symbolsForCombination, playerSymbol);

      if (computerSymbols > 1 && playerSymbols === 0) {
         return getFirstAvailablePosition(combination, computerSymbol);
      }

      if (playerSymbols > 1 && computerSymbols === 0) {
         return getFirstAvailablePosition(combination, playerSymbol);
      }

      if (playerSymbols) {
         continue;
      }

      const rank = computerSymbols === 0 ? 1 : computerSymbols + 1;

      // console.log('Rank', rank);
      if (rank > lastHighestRank) {
         lastHighestRank = rank;
         highestRankCombination = combination;
      }
   }

   if (!highestRankCombination) {
      return undefined;
   }

   const withoutComputerSymbol = highestRankCombination.filter(
      (position) => checkboxField[position] !== computerSymbol,
   );

   const rnd = Math.round(Math.random() * withoutComputerSymbol.length - 1);

   return withoutComputerSymbol[rnd];
};

export const getWinnerMark = (checkboxField) => {
   for (let i = 0; i < AVAILABLE_WINNER_COMBINATIONS.length; i++) {
      const [a, b, c] = AVAILABLE_WINNER_COMBINATIONS[i];
      if (
         checkboxField[a] &&
         checkboxField[a] === checkboxField[b] &&
         checkboxField[b] === checkboxField[c]
      ) {
         return checkboxField[a];
      }
   }

   return '';
};

export const setCheckboxIntoField = (
   checkboxField,
   selectedIndex,
   selectedSymbol,
) => {
   return checkboxField.map((mark, index) =>
      selectedIndex === index && mark === null ? selectedSymbol : mark,
   );
};
