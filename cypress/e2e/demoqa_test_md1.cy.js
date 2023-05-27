import SelectablePage from "../pages/SelectablePage"

describe('demoqa test', function() {
    const selectablePage = new SelectablePage();

    it('checks selectable grid', function() {
        // Open URL
        selectablePage.visit();

        // Open Grid
        selectablePage.clickGridTab();

        // Click on numbers
        const numbersToSelect = ['Two', 'Four', 'Six', 'Eight'];
        selectablePage.selectNumbers(numbersToSelect);

        // Validate selected numbers are highlighted
        selectablePage.validateNumbersSelected(numbersToSelect);

        // Validate unselected numbers are not highlighted
        const numbersNotToSelect = ['One', 'Three', 'Five', 'Seven', 'Nine'];
        selectablePage.validateNumbersNotSelected(numbersNotToSelect);
    })
})
